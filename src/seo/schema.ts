import { siteConfig, hasValue } from "../config/siteConfig";
import type { RouteMetadata } from "./routeMeta";

export function localBusiness() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.tagline,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    areaServed: siteConfig.cities.map((city) => ({
      "@type": "City",
      name: city.name,
    })),
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.parentSite,
    },
  };

  if (hasValue(siteConfig.address)) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    };
  }

  if (hasValue(siteConfig.email)) {
    data.email = siteConfig.email;
  }

  if (hasValue(siteConfig.cnpj)) {
    data.taxID = siteConfig.cnpj;
  }

  return data;
}

export function webSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${siteConfig.url}${item.path}`,
    })),
  };
}

export function service(name: string, description: string, path: string) {
  const fullUrl = path.startsWith("http") ? path : `${siteConfig.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: fullUrl,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Curitiba e Região Metropolitana",
  };
}

export function faqPage(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function article({
  title,
  description,
  path,
  datePublished,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  const fullUrl = path.startsWith("http") ? path : `${siteConfig.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: fullUrl,
    datePublished,
    publisher: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function buildSchemaForPage(meta: RouteMetadata, path: string) {
  if (!meta || !meta.schema || meta.schema.length === 0) return null;

  const list = meta.schema
    .map((name) => {
      if (name === "localBusiness") return localBusiness();
      if (name === "webSite") return webSite();
      if (name === "breadcrumb" && meta.breadcrumb) return breadcrumb(meta.breadcrumb);
      if (name === "service" && meta.service)
        return service(meta.service.name, meta.service.description, path);
      if (name === "faqPage" && meta.faq) return faqPage(meta.faq);
      if (name === "article" && meta.article)
        return article({
          title: meta.article.title,
          description: meta.article.description,
          path,
          datePublished: meta.article.datePublished,
        });
      return null;
    })
    .filter(Boolean);

  if (list.length === 0) return null;
  if (list.length === 1) return list[0];

  return {
    "@context": "https://schema.org",
    "@graph": list.map((item) => {
      const { "@context": _, ...rest } = item as Record<string, unknown>;
      return rest;
    }),
  };
}
