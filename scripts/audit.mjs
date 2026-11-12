import fs from "node:fs";
import path from "node:path";

const DIST = "dist";
const SITE = "https://cftvcuritiba.com.br";
const errors = [];
const warns = [];

const walk = (d) =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith(".html") ? [path.join(d, e.name)] : []
  );
const decode = (s) => s.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const attr = (tag, name) => {
  const m = tag.match(new RegExp(name + '="([^"]*)"', "i"));
  return m ? decode(m[1]) : null;
};
const metaContent = (html, nameAttr, value) => {
  for (const m of html.matchAll(/<meta\b[^>]*>/gi)) {
    if (attr(m[0], nameAttr) === value) return attr(m[0], "content");
  }
  return null;
};
const canonicalOf = (html) => {
  for (const m of html.matchAll(/<link\b[^>]*>/gi)) {
    if (attr(m[0], "rel") === "canonical") return attr(m[0], "href");
  }
  return null;
};
const routeOf = (file) => {
  let r = "/" + path.relative(DIST, file).replace(/\\/g, "/").replace(/index\.html$/, "");
  return r.endsWith("/") ? r : r + "/";
};

const files = walk(DIST);
const pages = [];
for (const f of files) {
  if (path.basename(f) === "404.html") continue;
  const html = fs.readFileSync(f, "utf8");
  const t = html.match(/<title>([\s\S]*?)<\/title>/i);
  pages.push({
    route: routeOf(f),
    title: t ? decode(t[1].trim()) : null,
    desc: metaContent(html, "name", "description"),
    robots: metaContent(html, "name", "robots"),
    canonical: canonicalOf(html),
    h1: (html.match(/<h1[\s>]/gi) || []).length,
  });
}

// 1) Checagens por página
for (const p of pages) {
  if (p.canonical !== SITE + p.route) errors.push(`canonical incorreto em ${p.route}: ${p.canonical}`);
  if (p.robots && /noindex/i.test(p.robots)) errors.push(`noindex indevido em ${p.route}`);
  if (p.h1 !== 1) errors.push(`${p.route} tem ${p.h1} <h1>`);
  if (!p.title || p.title.length > 60) errors.push(`título ausente ou acima de 60 em ${p.route}`);
  if (!p.desc || p.desc.length < 120 || p.desc.length > 160) errors.push(`descrição fora de 120-160 em ${p.route}`);
}

// 2) Títulos e descrições duplicados
for (const key of ["title", "desc"]) {
  const seen = new Map();
  for (const p of pages) {
    const v = p[key];
    if (!v) continue;
    if (!seen.has(v)) seen.set(v, []);
    seen.get(v).push(p.route);
  }
  for (const [v, routes] of seen) if (routes.length > 1) errors.push(`${key} duplicado em ${routes.join(", ")}: "${v.slice(0, 60)}"`);
}

// 3) Sitemap x páginas
const smPath = path.join(DIST, "sitemap.xml");
if (!fs.existsSync(smPath)) errors.push("sitemap.xml ausente");
else {
  const urls = [...fs.readFileSync(smPath, "utf8").matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  const routes = new Set(pages.map((p) => p.route));
  for (const u of urls) {
    if (!u.startsWith(SITE)) errors.push(`sitemap com domínio errado: ${u}`);
    else if (!routes.has(u.slice(SITE.length))) errors.push(`sitemap aponta para página inexistente: ${u}`);
  }
  for (const r of routes) if (!urls.includes(SITE + r)) errors.push(`página fora do sitemap: ${r}`);
}

// 4) robots.txt
const rb = path.join(DIST, "robots.txt");
if (!fs.existsSync(rb)) errors.push("robots.txt ausente");
else if (!fs.readFileSync(rb, "utf8").includes(`Sitemap: ${SITE}/sitemap.xml`)) errors.push("robots.txt sem a linha Sitemap");

// 5) 404.html
const f404 = path.join(DIST, "404.html");
if (!fs.existsSync(f404)) errors.push("404.html ausente");
else {
  const h = fs.readFileSync(f404, "utf8");
  if (!/noindex/i.test(metaContent(h, "name", "robots") || "")) errors.push("404.html sem noindex");
  if (canonicalOf(h)) errors.push("404.html não deve ter canonical");
}

// 6) Imagens de compartilhamento referenciadas
const ogs = new Set();
for (const f of files) {
  const v = metaContent(fs.readFileSync(f, "utf8"), "property", "og:image");
  if (v) ogs.add(v);
}
for (const v of ogs) {
  const rel = v.replace(SITE, "");
  if (!fs.existsSync(path.join(DIST, rel))) warns.push(`og:image não encontrada em dist: ${rel}`);
}

console.log(`Páginas auditadas: ${pages.length}`);
warns.forEach((w) => console.log("AVISO:", w));
if (errors.length) {
  errors.forEach((e) => console.log("ERRO:", e));
  console.log(`\n${errors.length} erro(s).`);
  process.exit(1);
}
console.log("Auditoria final: nenhum erro.");
