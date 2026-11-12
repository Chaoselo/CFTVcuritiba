import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import { routeMeta, defaultOgImage } from "./routeMeta";
import { buildSchemaForPage } from "./schema";

function setMetaTag(attr: "name" | "property", key: string, content: string | null) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el && content !== null) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  if (el) {
    if (content !== null) {
      el.setAttribute("content", content);
    } else {
      el.remove();
    }
  }
}

export function useRouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Normalize path to always end with a slash
    const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
    const meta = routeMeta[normalizedPath];

    if (meta) {
      // 1. Title & description
      document.title = meta.title;
      setMetaTag("name", "description", meta.description);

      // 2. Canonical link
      const canonicalUrl = `${siteConfig.url}${normalizedPath}`;
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", canonicalUrl);

      // 3. Robots
      setMetaTag(
        "name",
        "robots",
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      );

      // 4. OpenGraph
      const ogImageUrl = `${siteConfig.url}${meta.ogImage || defaultOgImage}`;
      setMetaTag("property", "og:title", meta.title);
      setMetaTag("property", "og:description", meta.description);
      setMetaTag("property", "og:url", canonicalUrl);
      setMetaTag("property", "og:type", "website");
      setMetaTag("property", "og:locale", "pt_BR");
      setMetaTag("property", "og:site_name", siteConfig.name);
      setMetaTag("property", "og:image", ogImageUrl);

      // Remove og:region if present
      const ogRegion = document.querySelector('meta[property="og:region"]');
      if (ogRegion) ogRegion.remove();

      // 5. Twitter
      setMetaTag("name", "twitter:card", "summary_large_image");
      setMetaTag("name", "twitter:title", meta.title);
      setMetaTag("name", "twitter:description", meta.description);
      setMetaTag("name", "twitter:image", ogImageUrl);

      // 6. Geotagging
      setMetaTag("name", "geo.region", "BR-PR");
      setMetaTag("name", "geo.placename", "Curitiba");

      // 7. JSON-LD schema script
      const schemaData = buildSchemaForPage(meta, normalizedPath);
      let script = document.getElementById("jsonld-page") as HTMLScriptElement | null;
      if (schemaData) {
        if (!script) {
          script = document.createElement("script");
          script.type = "application/ld+json";
          script.id = "jsonld-page";
          document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(schemaData);
      } else if (script) {
        script.remove();
      }
    } else {
      // 404 / Non-indexed route
      document.title = "Página não encontrada | CFTV Curitiba";
      setMetaTag("name", "description", "Página não encontrada no site CFTV Curitiba.");
      setMetaTag("name", "robots", "noindex, follow");

      // Remove href from canonical if exists
      const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (canonical) {
        canonical.removeAttribute("href");
      }

      // Remove JSON-LD script if exists
      const script = document.getElementById("jsonld-page");
      if (script) {
        script.remove();
      }

      // OpenGraph & Twitter basic fallback
      setMetaTag("property", "og:title", "Página não encontrada | CFTV Curitiba");
      setMetaTag("property", "og:description", "Página não encontrada no site CFTV Curitiba.");
      setMetaTag("property", "og:type", "website");
      setMetaTag("property", "og:locale", "pt_BR");
      setMetaTag("property", "og:site_name", siteConfig.name);
      setMetaTag("property", "og:url", null);
      setMetaTag("property", "og:image", null);
      setMetaTag("name", "twitter:card", "summary_large_image");
      setMetaTag("name", "twitter:title", "Página não encontrada | CFTV Curitiba");
      setMetaTag("name", "twitter:image", null);
      setMetaTag("name", "geo.region", "BR-PR");
      setMetaTag("name", "geo.placename", "Curitiba");
    }
  }, [pathname]);
}
