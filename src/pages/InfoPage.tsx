import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import Section from "../components/Section";
import FaqList from "../components/FaqList";
import CtaBand from "../components/CtaBand";
import type { InfoContent } from "../content/info";

interface InfoPageProps {
  content: InfoContent;
}

export default function InfoPage({ content }: InfoPageProps) {
  let sectionIndex = 0;

  return (
    <div>
      {/* a) Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-ink-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Início", to: "/" },
              { label: content.navLabel },
            ]}
          />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {content.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {content.intro}
          </p>
        </div>
      </section>

      {/* b) Content Sections */}
      {content.sections.map((sec) => {
        const bg = sectionIndex++ % 2 === 0 ? "white" : "gray";

        return (
          <Section key={sec.title} title={sec.title} background={bg}>
            <div className="max-w-3xl space-y-4">
              {sec.paragraphs &&
                sec.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base text-slate-300 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}

              {sec.bullets && sec.bullets.length > 0 && (
                <ul className="space-y-3 pt-2">
                  {sec.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-3 text-base text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-5 h-5 text-glow shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.links && sec.links.length > 0 && (
                <div className="flex flex-wrap gap-4 pt-3">
                  {sec.links.map((link) =>
                    link.external ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-glow transition-colors"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-4 h-4 text-glow" />
                      </a>
                    ) : (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-glow transition-colors"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-4 h-4 text-glow" />
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          </Section>
        );
      })}

      {/* c) FAQ Groups (quando houver) */}
      {content.faqGroups &&
        content.faqGroups.map((group) => {
          const bg = sectionIndex++ % 2 === 0 ? "white" : "gray";

          return (
            <Section key={group.title} title={group.title} background={bg}>
              <FaqList items={group.items} />
            </Section>
          );
        })}

      {/* d) CTA Band (quando houver) */}
      {content.cta && (
        <CtaBand
          title={content.cta.title}
          text={content.cta.text}
          whatsappMessage={content.cta.whatsappMessage}
        />
      )}
    </div>
  );
}
