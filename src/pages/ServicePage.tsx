import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { navigation } from "../config/navigation";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import Breadcrumb from "../components/Breadcrumb";
import Section from "../components/Section";
import FaqList from "../components/FaqList";
import CtaBand from "../components/CtaBand";
import type { ServiceContent } from "../content/services";
import { pageImages } from "../content/images";

interface ServicePageProps {
  content: ServiceContent;
}

export default function ServicePage({ content }: ServicePageProps) {
  const img = pageImages[content.path];
  const otherServices = navigation.services.filter(
    (item) => item.path !== content.path
  );
  const otherCameraTypes = navigation.cameraTypes.filter(
    (item) => item.path !== content.path
  );
  const otherSegments = navigation.segments.filter(
    (item) => item.path !== content.path
  );
  const otherCities = siteConfig.cities.filter(
    (city) => `/cidades/${city.slug}/` !== content.path
  );

  const breadcrumbItems = content.breadcrumbTrail
    ? [
        { label: "Início", to: "/" },
        ...content.breadcrumbTrail.map((t) => ({ label: t.label, to: t.path })),
      ]
    : [
        { label: "Início", to: "/" },
        { label: content.navLabel },
      ];

  return (
    <div>
      {/* a) Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-ink-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          {img ? (
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  {content.h1}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
                  {content.intro}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                  <a
                    href={buildWhatsAppUrl(content.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-wa hover:bg-wa-600 active:bg-wa-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-wa/20 transition-all transform active:scale-95 text-base"
                  >
                    <span>Solicitar orçamento pelo WhatsApp</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-ink-800 shadow-2xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  fetchPriority="high"
                  decoding="async"
                  className="h-auto w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent pointer-events-none"
                />
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                {content.h1}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
                {content.intro}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                <a
                  href={buildWhatsAppUrl(content.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-wa hover:bg-wa-600 active:bg-wa-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-wa/20 transition-all transform active:scale-95 text-base"
                >
                  <span>Solicitar orçamento pelo WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </>
          )}

          <div className="pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {siteConfig.differentials.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-glow shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* b) Service Sections */}
      {content.sections.map((sec, index) => (
        <Section
          key={sec.title}
          title={sec.title}
          intro={sec.intro}
          background={index % 2 === 0 ? "white" : "gray"}
        >
          {sec.bullets && sec.bullets.length > 0 && (
            <ul className="space-y-3 max-w-3xl">
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
        </Section>
      ))}

      {/* c) Como funciona / Steps */}
      <Section
        title={content.stepsTitle}
        background={content.sections.length % 2 === 0 ? "white" : "gray"}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-ink-800 p-6 rounded-xl border border-slate-800 hover:border-electric/60 transition-colors relative"
            >
              <div className="w-10 h-10 rounded-full bg-ink-900 border border-electric/50 text-glow font-bold text-sm flex items-center justify-center mb-4">
                0{index + 1}
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* d) Callout opcional */}
      {content.callout && (
        <section className="py-12 bg-ink-800 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-ink-900 rounded-2xl p-6 sm:p-8 border border-electric/30 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  {content.callout.title}
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  {content.callout.text}
                </p>
              </div>
              <Link
                to={content.callout.linkPath}
                className="inline-flex items-center justify-center gap-2 text-glow hover:underline font-semibold text-sm shrink-0"
              >
                <span>{content.callout.linkLabel}</span>
                <ArrowRight className="w-4 h-4 text-glow" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* e) Veja também */}
      <Section title="Veja também" background="white">
        <div
          className={`grid grid-cols-1 ${
            content.showCities ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"
          } gap-8`}
        >
          <div>
            <h3 className="text-lg font-bold text-white mb-4 tracking-tight">
              Outros serviços
            </h3>
            <ul className="space-y-2.5 text-sm">
              {otherServices.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-200 hover:text-glow font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-glow" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4 tracking-tight">
              Tipos de câmeras
            </h3>
            <ul className="space-y-2.5 text-sm">
              {otherCameraTypes.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-200 hover:text-glow font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-glow" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4 tracking-tight">
              Soluções por tipo de local
            </h3>
            <ul className="space-y-2.5 text-sm">
              {otherSegments.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-200 hover:text-glow font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-glow" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {content.showCities && (
            <div>
              <h3 className="text-lg font-bold text-white mb-4 tracking-tight">
                Cidades atendidas
              </h3>
              <ul className="space-y-2.5 text-sm">
                {otherCities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      to={`/cidades/${city.slug}/`}
                      className="text-slate-200 hover:text-glow font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-glow" />
                      <span>{city.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>

      {/* f) Perguntas frequentes */}
      <Section title="Perguntas frequentes" background="gray">
        <FaqList items={content.faq} />
      </Section>

      {/* g) CtaBand Final */}
      <CtaBand
        title={content.ctaTitle}
        text={content.ctaText}
        whatsappMessage={content.whatsappMessage}
      />
    </div>
  );
}
