import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, HelpCircle } from "lucide-react";
import { navigation } from "../config/navigation";
import { buildWhatsAppUrl } from "../lib/whatsapp";

export default function NotFound() {
  return (
    <div className="py-16 sm:py-24 bg-ink-900 min-h-[60vh] flex items-center text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-electric/10 text-glow rounded-2xl flex items-center justify-center mx-auto mb-6 border border-electric/30 shadow-xs">
          <HelpCircle className="w-9 h-9 text-glow" />
        </div>

        <span className="text-sm font-bold text-glow uppercase tracking-wider">
          Erro 404
        </span>

        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Página não encontrada
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
          O conteúdo que você procurou não existe, foi movido ou ainda está em preparação. Você pode retornar à página inicial ou navegar pelos nossos serviços de CFTV.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink-800 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a Página Inicial</span>
          </Link>

          <a
            href={buildWhatsAppUrl("Olá! Estava no site CFTV Curitiba e gostaria de mais informações.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa-600 active:bg-wa-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-wa/20 transition-all text-sm"
          >
            <span>Solicitar orçamento pelo WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Services Links list */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
            Serviços de Segurança Eletrônica
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {navigation.services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="px-4 py-2 bg-ink-800 border border-slate-800 hover:border-electric hover:text-glow text-sm text-slate-200 font-medium rounded-lg shadow-lg transition-colors"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
