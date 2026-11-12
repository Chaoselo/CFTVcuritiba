import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import CookieConsentBanner from "./CookieConsentBanner";
import { useRouteMeta } from "../seo/useRouteMeta";
import { trackPageview } from "../utils/analytics";

export default function Layout() {
  const { pathname } = useLocation();

  // Manage SEO, canonical, meta tags and JSON-LD
  useRouteMeta();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const id = window.setTimeout(() => trackPageview(pathname, document.title), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-ink-900 text-slate-200 selection:bg-electric selection:text-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsentBanner />
    </div>
  );
}
