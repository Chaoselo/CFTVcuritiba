import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { PageImage } from "../content/images";

interface CardLinkProps {
  to: string;
  title: string;
  text: string;
  icon?: React.ReactNode;
  image?: PageImage;
}

export default function CardLink({ to, title, text, icon, image }: CardLinkProps) {
  return (
    <Link
      to={to}
      className={`group relative flex flex-col justify-between ${
        image ? "overflow-hidden" : "p-6"
      } bg-ink-800 rounded-xl border border-slate-800/90 shadow-lg hover:border-electric hover:shadow-electric/10 transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-electric focus:ring-offset-2`}
    >
      {image && (
        <div className="relative aspect-[16/9] overflow-hidden bg-ink-900">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/10 to-transparent"
          />
        </div>
      )}
      <div className={image ? "p-6" : ""}>
        <div className="flex items-start justify-between gap-4 mb-3">
          {!image && icon && (
            <div className="w-10 h-10 rounded-lg bg-ink-900 border border-slate-700/80 text-glow flex items-center justify-center shrink-0 group-hover:bg-electric/20 transition-colors">
              {icon}
            </div>
          )}
          <span className="ml-auto text-slate-500 group-hover:text-glow transition-colors">
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-glow transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
          {text}
        </p>
      </div>
    </Link>
  );
}
