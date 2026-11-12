import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import InfoPage from "./pages/InfoPage";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogPostPage from "./pages/BlogPostPage";
import { pagesContent } from "./content/pages";
import { infoContent } from "./content/info";
import { blogPosts } from "./content/blog";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {Object.entries(pagesContent).map(([path, content]) => (
          <Route
            key={path}
            path={path.replace(/^\/|\/$/g, "")}
            element={<ServicePage content={content} />}
          />
        ))}
        {Object.entries(infoContent).map(([path, content]) => (
          <Route
            key={path}
            path={path.replace(/^\/|\/$/g, "")}
            element={<InfoPage content={content} />}
          />
        ))}
        <Route path="blog" element={<BlogIndexPage />} />
        {blogPosts.map((post) => (
          <Route
            key={post.path}
            path={post.path.replace(/^\/|\/$/g, "")}
            element={<BlogPostPage post={post} />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
