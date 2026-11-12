import { homeFaq } from "../content/home";
import { pagesContent } from "../content/pages";
import { infoContent } from "../content/info";
import { blogIndex, blogPosts } from "../content/blog";

export interface RouteMetadata {
  title: string;
  description: string;
  ogImage?: string;
  schema?: string[];
  faq?: { q: string; a: string }[];
  breadcrumb?: { name: string; path: string }[];
  service?: { name: string; description: string };
  article?: {
    title: string;
    description: string;
    datePublished: string;
  };
}

export const defaultOgImage = "/og-default.jpg";

export const routeMeta: Record<string, RouteMetadata> = {
  "/": {
    title: "CFTV Curitiba | Instalação, Manutenção e Aluguel de Câmeras",
    description:
      "Instalação, manutenção, aluguel e contrato de manutenção de câmeras de segurança em Curitiba e Região. Equipe própria e orçamento sem custo.",
    schema: ["localBusiness", "webSite", "faqPage"],
    faq: homeFaq,
  },
};

for (const [path, page] of Object.entries(pagesContent)) {
  routeMeta[path] = {
    title: page.meta.title,
    description: page.meta.description,
    schema: ["breadcrumb", "service", "faqPage"],
    breadcrumb: page.breadcrumbTrail
      ? [
          { name: "Início", path: "/" },
          ...page.breadcrumbTrail.map((t) => ({
            name: t.label,
            path: t.path ?? path,
          })),
        ]
      : [
          { name: "Início", path: "/" },
          { name: page.navLabel, path },
        ],
    service: page.schemaService,
    faq: page.faq,
  };
}

for (const [path, info] of Object.entries(infoContent)) {
  const schema: string[] = ["breadcrumb"];
  let faq: { q: string; a: string }[] | undefined = undefined;

  if (info.faqGroups && info.faqGroups.length > 0) {
    schema.push("faqPage");
    faq = info.faqGroups.flatMap((group) => group.items);
  }

  routeMeta[path] = {
    title: info.meta.title,
    description: info.meta.description,
    schema,
    breadcrumb: [
      { name: "Início", path: "/" },
      { name: info.navLabel, path },
    ],
    faq,
  };
}

routeMeta[blogIndex.path] = {
  title: blogIndex.meta.title,
  description: blogIndex.meta.description,
  schema: ["breadcrumb"],
  breadcrumb: [
    { name: "Início", path: "/" },
    { name: blogIndex.navLabel, path: blogIndex.path },
  ],
};

for (const post of blogPosts) {
  routeMeta[post.path] = {
    title: post.meta.title,
    description: post.meta.description,
    schema: ["breadcrumb", "article"],
    breadcrumb: [
      { name: "Início", path: "/" },
      { name: "Blog", path: blogIndex.path },
      { name: post.navLabel, path: post.path },
    ],
    article: {
      title: post.h1,
      description: post.meta.description,
      datePublished: post.datePublished,
    },
  };
}
