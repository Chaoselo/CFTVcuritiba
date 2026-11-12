import React from "react";
import { ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "../lib/whatsapp";

interface CtaBandProps {
  title: string;
  text: string;
  whatsappMessage?: string;
  children?: React.ReactNode;
}

export default function CtaBand({
  title,
  text,
  whatsappMessage,
  children,
}: CtaBandProps) {
  return (
    <section className="bg-ink-900 text-white py-16 sm:py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          {title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {text}
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={buildWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-wa hover:bg-wa-600 active:bg-wa-700 text-white font-bold px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 text-base"
          >
            <span>Solicitar orçamento pelo WhatsApp</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {children && (
          <div className="mt-8 pt-8 border-t border-slate-800 text-sm text-slate-400">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
