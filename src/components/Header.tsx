import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown, Menu, X, Shield, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { navigation } from "../config/navigation";
import { buildWhatsAppUrl } from "../lib/whatsapp";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDesktopDropdown(null);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDesktopDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection((prev) => (prev === section ? null : section));
  };

  return (
    <header className="sticky top-0 z-40 bg-ink-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg text-white">
      {/* Top bar with phone number */}
      <div className="bg-ink-950 border-b border-slate-800 text-slate-300 text-xs sm:text-sm py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-glow" />
            <span className="font-medium text-slate-300">
              Especialistas em CFTV em Curitiba e Região
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-glow transition-colors font-medium"
              title="Ligue para nós"
            >
              <Phone className="w-3.5 h-3.5 text-glow" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group py-1">
            <div className="flex flex-col">
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-white">
                CFTV <span className="text-glow">Curitiba</span>
              </span>
              <span className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
                Unidade Intelsecsul
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav
            ref={dropdownRef}
            className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-200"
            aria-label="Navegação principal"
          >
            {/* Serviços Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDesktopDropdown("services")}
              onMouseLeave={() => setActiveDesktopDropdown(null)}
            >
              <button
                type="button"
                onClick={() =>
                  setActiveDesktopDropdown(
                    activeDesktopDropdown === "services" ? null : "services"
                  )
                }
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                  activeDesktopDropdown === "services"
                    ? "text-glow-soft font-semibold bg-ink-800"
                    : "hover:text-glow hover:bg-ink-800/60"
                }`}
                aria-expanded={activeDesktopDropdown === "services"}
              >
                <span>Serviços</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDesktopDropdown === "services" ? "rotate-180 text-glow-soft" : "text-slate-400"
                  }`}
                />
              </button>

              {activeDesktopDropdown === "services" && (
                <div className="absolute left-0 mt-1 w-64 bg-ink-800 border border-slate-700/80 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  {navigation.services.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-electric/15 hover:text-glow rounded-lg transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Câmeras Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDesktopDropdown("cameraTypes")}
              onMouseLeave={() => setActiveDesktopDropdown(null)}
            >
              <button
                type="button"
                onClick={() =>
                  setActiveDesktopDropdown(
                    activeDesktopDropdown === "cameraTypes" ? null : "cameraTypes"
                  )
                }
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                  activeDesktopDropdown === "cameraTypes"
                    ? "text-glow-soft font-semibold bg-ink-800"
                    : "hover:text-glow hover:bg-ink-800/60"
                }`}
                aria-expanded={activeDesktopDropdown === "cameraTypes"}
              >
                <span>Câmeras</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDesktopDropdown === "cameraTypes" ? "rotate-180 text-glow-soft" : "text-slate-400"
                  }`}
                />
              </button>

              {activeDesktopDropdown === "cameraTypes" && (
                <div className="absolute left-0 mt-1 w-72 bg-ink-800 border border-slate-700/80 rounded-xl shadow-2xl p-2 z-50">
                  {navigation.cameraTypes.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-electric/15 hover:text-glow rounded-lg transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Soluções para... Dropdown (Segmentos) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDesktopDropdown("segments")}
              onMouseLeave={() => setActiveDesktopDropdown(null)}
            >
              <button
                type="button"
                onClick={() =>
                  setActiveDesktopDropdown(
                    activeDesktopDropdown === "segments" ? null : "segments"
                  )
                }
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                  activeDesktopDropdown === "segments"
                    ? "text-glow-soft font-semibold bg-ink-800"
                    : "hover:text-glow hover:bg-ink-800/60"
                }`}
                aria-expanded={activeDesktopDropdown === "segments"}
              >
                <span>Soluções para…</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDesktopDropdown === "segments" ? "rotate-180 text-glow-soft" : "text-slate-400"
                  }`}
                />
              </button>

              {activeDesktopDropdown === "segments" && (
                <div className="absolute left-0 mt-1 w-64 bg-ink-800 border border-slate-700/80 rounded-xl shadow-2xl p-2 z-50">
                  {navigation.segments.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-electric/15 hover:text-glow rounded-lg transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              to="/cidades/"
              className="px-3 py-2 rounded-md hover:text-glow hover:bg-ink-800/60 transition-colors"
            >
              Cidades
            </Link>

            <Link
              to="/blog/"
              className="px-3 py-2 rounded-md hover:text-glow hover:bg-ink-800/60 transition-colors"
            >
              Blog
            </Link>

            <Link
              to="/contato/"
              className="px-3 py-2 rounded-md hover:text-glow hover:bg-ink-800/60 transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* WhatsApp CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-electric hover:bg-electric-600 active:bg-electric-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg shadow-sm transition-all hover:shadow-md transform active:scale-95"
            >
              <span>Solicitar orçamento pelo WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-wa hover:bg-wa-600 text-white font-bold text-xs px-3 py-2 rounded-md"
              aria-label="Solicitar orçamento pelo WhatsApp"
            >
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-ink-800 text-slate-200 hover:bg-ink-800/80 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-ink-900 px-4 pt-3 pb-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="space-y-1">
            {/* Mobile Serviços Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileSection("services")}
                className="w-full flex items-center justify-between py-2.5 px-3 text-base font-semibold text-slate-200 rounded-md hover:bg-ink-800"
              >
                <span>Serviços</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    mobileExpandedSection === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileExpandedSection === "services" && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-ink-950 border-l border-slate-800 rounded-md mt-1">
                  {navigation.services.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-2 px-3 text-sm text-slate-300 hover:text-glow hover:bg-ink-800/60 rounded-md font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Câmeras Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileSection("cameraTypes")}
                className="w-full flex items-center justify-between py-2.5 px-3 text-base font-semibold text-slate-200 rounded-md hover:bg-ink-800"
              >
                <span>Câmeras</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    mobileExpandedSection === "cameraTypes" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileExpandedSection === "cameraTypes" && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-ink-950 border-l border-slate-800 rounded-md mt-1">
                  {navigation.cameraTypes.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-2 px-3 text-sm text-slate-300 hover:text-glow hover:bg-ink-800/60 rounded-md font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Soluções para... Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileSection("segments")}
                className="w-full flex items-center justify-between py-2.5 px-3 text-base font-semibold text-slate-200 rounded-md hover:bg-ink-800"
              >
                <span>Soluções para…</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    mobileExpandedSection === "segments" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileExpandedSection === "segments" && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-ink-950 border-l border-slate-800 rounded-md mt-1">
                  {navigation.segments.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-2 px-3 text-sm text-slate-300 hover:text-glow hover:bg-ink-800/60 rounded-md font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Direct Links */}
            <Link
              to="/cidades/"
              className="block py-2.5 px-3 text-base font-semibold text-slate-200 rounded-md hover:bg-ink-800"
            >
              Cidades
            </Link>

            <Link
              to="/blog/"
              className="block py-2.5 px-3 text-base font-semibold text-slate-200 rounded-md hover:bg-ink-800"
            >
              Blog
            </Link>

            <Link
              to="/contato/"
              className="block py-2.5 px-3 text-base font-semibold text-slate-200 rounded-md hover:bg-ink-800"
            >
              Contato
            </Link>
          </div>

          {/* Full CTA in Mobile Menu */}
          <div className="mt-6 pt-4 border-t border-slate-800">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-wa hover:bg-wa-600 active:bg-wa-700 text-white font-bold py-3 px-4 rounded-lg shadow-sm"
            >
              <span>Solicitar orçamento pelo WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
