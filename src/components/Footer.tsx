import { Link } from "react-router-dom";
import { Phone, Clock, ExternalLink } from "lucide-react";
import { siteConfig, hasValue } from "../config/siteConfig";
import { navigation } from "../config/navigation";
import { OPEN_PREFS_EVENT } from "../utils/analytics";

export default function Footer() {
  const firstEightCities = siteConfig.cities.slice(0, 8);

  return (
    <footer className="bg-ink-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand & Mission Banner */}
        <div className="pb-12 mb-12 border-b border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-3">
              <span className="text-2xl font-bold text-white tracking-tight">
                CFTV <span className="text-glow">Curitiba</span>
              </span>
              <p className="text-xs text-slate-400 font-medium">
                {siteConfig.tagline}
              </p>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Unidade especializada em CFTV da{" "}
              <a
                href={siteConfig.parentSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-glow hover:underline inline-flex items-center gap-1 font-semibold"
              >
                Intelsecsul
                <ExternalLink className="w-3.5 h-3.5 text-glow" />
              </a>
              . Projetos e soluções completas para proteção patrimonial em Curitiba e Região Metropolitana.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:justify-end">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-electric mt-0.5" />
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Atendimento
                </div>
                <a
                  href={`tel:${siteConfig.phoneE164}`}
                  className="text-white hover:text-glow font-semibold text-base transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-electric mt-0.5" />
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Horário de funcionamento
                </div>
                <span className="text-white font-medium text-sm">
                  {siteConfig.openingHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* 1. Serviços */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Serviços
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigation.services.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-glow transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Câmeras */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Câmeras
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigation.cameraTypes.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-glow transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Segmentos */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Segmentos
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigation.segments.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-glow transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Cidades */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Cidades
            </h3>
            <ul className="space-y-2.5 text-sm">
              {firstEightCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    to={`/cidades/${city.slug}/`}
                    className="hover:text-glow transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/cidades/"
                  className="text-glow hover:underline font-medium inline-flex items-center gap-1"
                >
                  Ver todas
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 5. Institucional */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Institucional
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigation.institutional.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-glow transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event(OPEN_PREFS_EVENT))}
                  className="text-left text-slate-300 transition-colors hover:text-glow"
                >
                  Preferências de cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Optional Corporate Details (only rendered if hasValue returns true) */}
        {(hasValue(siteConfig.cnpj) ||
          hasValue(siteConfig.address) ||
          hasValue(siteConfig.email)) && (
          <div className="pt-6 pb-6 border-t border-slate-800 text-xs text-slate-400 space-y-1">
            {hasValue(siteConfig.cnpj) && <div>CNPJ: {siteConfig.cnpj}</div>}
            {hasValue(siteConfig.address) && (
              <div>Endereço: {siteConfig.address}</div>
            )}
            {hasValue(siteConfig.email) && (
              <div>
                E-mail:{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:underline text-slate-300 hover:text-glow"
                >
                  {siteConfig.email}
                </a>
              </div>
            )}
          </div>
        )}

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 {siteConfig.name}. Todos os direitos reservados.</p>
          <p>
            Unidade especializada em CFTV da{" "}
            <a
              href={siteConfig.parentSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white underline font-medium"
            >
              Intelsecsul
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
