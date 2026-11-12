import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { siteConfig, hasValue } from "../src/config/siteConfig";
import { indexableRoutes, notFoundPath } from "../src/routes/manifest";
import { routeMeta, defaultOgImage } from "../src/seo/routeMeta";
import { buildSchemaForPage } from "../src/seo/schema";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function prerender() {
  const rootDir = process.cwd();
  const distDir = path.resolve(rootDir, "dist");
  const templatePath = path.resolve(distDir, "index.html");

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template não encontrado em ${templatePath}. Execute 'vite build' primeiro.`);
  }

  const template = fs.readFileSync(templatePath, "utf-8");

  // Import SSR bundle dynamically
  const serverEntryPath = path.resolve(rootDir, "dist-server/entry-server.js");
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`Bundle SSR não encontrado em ${serverEntryPath}. Execute o build SSR primeiro.`);
  }

  const serverModule = await import(pathToFileURL(serverEntryPath).href);
  const render: (url: string) => string = serverModule.render;

  console.log("Iniciando pré-renderização das rotas indexáveis...");

  // Helper to replace/inject tags in <head>
  function formatHead({
    title,
    description,
    canonicalHref,
    robotsContent,
    ogTitle,
    ogDescription,
    ogUrl,
    ogImageUrl,
    schemaData,
  }: {
    title: string;
    description: string;
    canonicalHref?: string;
    robotsContent: string;
    ogTitle: string;
    ogDescription: string;
    ogUrl?: string;
    ogImageUrl: string;
    schemaData?: Record<string, unknown> | null;
  }) {
    const safeTitle = escapeHtml(title);
    const safeDescription = escapeHtml(description);
    const safeOgTitle = escapeHtml(ogTitle);
    const safeOgDescription = escapeHtml(ogDescription);
    const safeCanonicalHref = canonicalHref ? escapeHtml(canonicalHref) : undefined;
    const safeOgUrl = ogUrl ? escapeHtml(ogUrl) : undefined;
    const safeOgImageUrl = escapeHtml(ogImageUrl);

    let head = "";

    head += `\n    <title>${safeTitle}</title>`;
    head += `\n    <meta name="description" content="${safeDescription}" />`;
    head += `\n    <meta name="robots" content="${robotsContent}" />`;

    if (safeCanonicalHref) {
      head += `\n    <link rel="canonical" href="${safeCanonicalHref}" />`;
    }

    // OpenGraph
    head += `\n    <meta property="og:title" content="${safeOgTitle}" />`;
    head += `\n    <meta property="og:description" content="${safeOgDescription}" />`;
    if (safeOgUrl) {
      head += `\n    <meta property="og:url" content="${safeOgUrl}" />`;
    }
    head += `\n    <meta property="og:type" content="website" />`;
    head += `\n    <meta property="og:locale" content="pt_BR" />`;
    head += `\n    <meta property="og:site_name" content="${siteConfig.name}" />`;
    if (safeCanonicalHref) {
      head += `\n    <meta property="og:image" content="${safeOgImageUrl}" />`;
      head += `\n    <meta property="og:image:width" content="1200" />`;
      head += `\n    <meta property="og:image:height" content="630" />`;
      head += `\n    <meta property="og:image:type" content="image/jpeg" />`;
      head += `\n    <meta property="og:image:alt" content="${escapeHtml("CFTV Curitiba: instalação, manutenção e aluguel de câmeras de segurança")}" />`;
    }

    // Twitter
    head += `\n    <meta name="twitter:card" content="summary_large_image" />`;
    head += `\n    <meta name="twitter:title" content="${safeOgTitle}" />`;
    head += `\n    <meta name="twitter:description" content="${safeOgDescription}" />`;
    head += `\n    <meta name="twitter:image" content="${safeOgImageUrl}" />`;

    // Geotagging
    head += `\n    <meta name="geo.region" content="BR-PR" />`;
    head += `\n    <meta name="geo.placename" content="Curitiba" />`;

    // Google Site Verification (only if hasValue is true)
    if (hasValue(siteConfig.googleSiteVerification)) {
      head += `\n    <meta name="google-site-verification" content="${siteConfig.googleSiteVerification}" />`;
    }

    // Google Analytics 4 with Consent Mode v2 (only if hasValue is true)
    if (hasValue(siteConfig.gaId)) {
      head += `
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    </script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${siteConfig.gaId}');
    </script>`;
    }

    // JSON-LD
    if (schemaData) {
      head += `\n    <script type="application/ld+json" id="jsonld-page">${JSON.stringify(schemaData)}</script>`;
    }

    return head;
  }

  // Pre-clean boilerplate meta tags that will be replaced in <head>
  function cleanBoilerplateHead(html: string): string {
    return html
      .replace(/<title>[\s\S]*?<\/title>/i, "")
      .replace(/<meta\s+name=["']description["'][\s\S]*?>/i, "")
      .replace(/<meta\s+name=["']robots["'][\s\S]*?>/i, "")
      .replace(/<link\s+rel=["']canonical["'][\s\S]*?>/i, "")
      .replace(/<meta\s+property=["']og:title["'][\s\S]*?>/i, "")
      .replace(/<meta\s+property=["']og:description["'][\s\S]*?>/i, "")
      .replace(/<meta\s+property=["']og:type["'][\s\S]*?>/i, "")
      .replace(/<meta\s+property=["']og:url["'][\s\S]*?>/i, "")
      .replace(/<meta\s+property=["']og:image["'][\s\S]*?>/i, "")
      .replace(/<meta\s+name=["']twitter:card["'][\s\S]*?>/i, "")
      .replace(/<meta\s+name=["']twitter:title["'][\s\S]*?>/i, "")
      .replace(/<meta\s+name=["']twitter:description["'][\s\S]*?>/i, "")
      .replace(/<meta\s+name=["']twitter:image["'][\s\S]*?>/i, "")
      .replace(/<meta\s+name=["']geo\.region["'][\s\S]*?>/i, "")
      .replace(/<meta\s+name=["']geo\.placename["'][\s\S]*?>/i, "")
      .replace(/<script\s+type=["']application\/ld\+json["']\s+id=["']jsonld-page["'][\s\S]*?<\/script>/i, "");
  }

  // Render each indexable route
  for (const route of indexableRoutes) {
    const meta = routeMeta[route] || {
      title: "CFTV Curitiba | Câmeras de Segurança",
      description: siteConfig.tagline,
      schema: ["localBusiness", "webSite"],
    };

    const renderedApp = render(route);
    const cleanedHtml = cleanBoilerplateHead(template);

    const canonicalHref = `${siteConfig.url}${route}`;
    const ogImageUrl = `${siteConfig.url}${meta.ogImage || defaultOgImage}`;
    const robotsContent = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
    const schemaData = buildSchemaForPage(meta, route);

    const newHeadTags = formatHead({
      title: meta.title,
      description: meta.description,
      canonicalHref,
      robotsContent,
      ogTitle: meta.title,
      ogDescription: meta.description,
      ogUrl: canonicalHref,
      ogImageUrl,
      schemaData,
    });

    let finalHtml = cleanedHtml.replace("</head>", () => `${newHeadTags}\n  </head>`);
    finalHtml = finalHtml.replace(
      /<div id="root">[\s\S]*?<\/div>/,
      () => `<div id="root">${renderedApp}</div>`
    );

    // Save output file
    if (route === "/") {
      fs.writeFileSync(path.resolve(distDir, "index.html"), finalHtml, "utf-8");
      console.log(`Renderizado: / -> dist/index.html`);
    } else {
      const cleanPath = route.replace(/^\/|\/$/g, "");
      const targetDir = path.resolve(distDir, cleanPath);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.resolve(targetDir, "index.html"), finalHtml, "utf-8");
      console.log(`Renderizado: ${route} -> dist/${cleanPath}/index.html`);
    }
  }

  // Render 404.html
  {
    const rendered404 = render(notFoundPath);
    const cleanedHtml = cleanBoilerplateHead(template);

    const newHeadTags = formatHead({
      title: "Página não encontrada | CFTV Curitiba",
      description: "Página não encontrada no site CFTV Curitiba.",
      robotsContent: "noindex, follow",
      ogTitle: "Página não encontrada | CFTV Curitiba",
      ogDescription: "Página não encontrada no site CFTV Curitiba.",
      ogImageUrl: `${siteConfig.url}${defaultOgImage}`,
      schemaData: null,
    });

    let final404Html = cleanedHtml.replace("</head>", () => `${newHeadTags}\n  </head>`);
    final404Html = final404Html.replace(
      /<div id="root">[\s\S]*?<\/div>/,
      () => `<div id="root">${rendered404}</div>`
    );

    fs.writeFileSync(path.resolve(distDir, "404.html"), final404Html, "utf-8");
    console.log(`Renderizado: 404 -> dist/404.html`);
  }

  // Generate dist/sitemap.xml
  const today = new Date().toISOString().split("T")[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexableRoutes
  .map(
    (r) => `  <url>
    <loc>${siteConfig.url}${r}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>
`;
  fs.writeFileSync(path.resolve(distDir, "sitemap.xml"), sitemapXml.trim(), "utf-8");
  console.log(`Gerado: dist/sitemap.xml (${indexableRoutes.length} URL)`);

  // Generate dist/robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteConfig.url}/sitemap.xml
`;
  fs.writeFileSync(path.resolve(distDir, "robots.txt"), robotsTxt, "utf-8");
  console.log(`Gerado: dist/robots.txt`);

  console.log("Pré-renderização concluída com sucesso!");
}

prerender().catch((err) => {
  console.error("Erro na pré-renderização:", err);
  process.exit(1);
});
