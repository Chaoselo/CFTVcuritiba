import React from "react";

interface SectionProps {
  id?: string;
  title: string;
  intro?: string;
  background: "white" | "gray";
  children: React.ReactNode;
}

export default function Section({
  id,
  title,
  intro,
  background,
  children,
}: SectionProps) {
  const bgClass = background === "white" ? "bg-ink-900" : "bg-ink-950";

  return (
    <section id={id} className={`py-16 sm:py-20 ${bgClass} border-b border-slate-800 last:border-b-0`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          {intro && (
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              {intro}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
