import { pagesContent } from "../content/pages";
import { infoContent } from "../content/info";
import { blogIndex, blogPosts } from "../content/blog";

export const indexableRoutes: string[] = [
  "/",
  ...Object.keys(pagesContent),
  ...Object.keys(infoContent),
  blogIndex.path,
  ...blogPosts.map((post) => post.path),
];

export const notFoundPath = "/404/";
