import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Video,
  KeyRound,
  FileText,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import Section from "../components/Section";
import CardLink from "../components/CardLink";
import FaqList from "../components/FaqList";
import CtaBand from "../components/CtaBand";
import {
  homeFaq,
  homeServices,
  homeCameraTypes,
  homeSegments,
  homeSteps,
} from "../content/home";
import { pageImages } from "../content/images";

export default function Home() {
  const serviceIcons = [
    <Video key="install" className="w-5 h-5" />,
    <Wrench key="maintenance" className="w-5 h-5" />,
    <KeyRound key="rental" className="w-5 h-5" />,
    <FileText key="contract" className="w-5 h-5" />,
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-ink-hero text-white overflow-hidden border-b border-slate-800">
        <div aria-hidden="true" className="absolute inset-0 opacity-15 bg-[radial-gradient(#00C5FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div aria-hidden="true" className="absolute -top-24 -right-24 w-96 h-96 bg-electric/20 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden="true" className="absolute -bottom-24 -left-24 w-96 h-96 bg-glow/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 text-glow text-xs font-semibold mb-6 border border-electric/30">
            <ShieldCheck className="w-4 h-4 text-glow" />
            <span>Unidade especializada Intelsecsul Segurança Eletrônica</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Câmeras de segurança e CFTV em Curitiba
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            {siteConfig.tagline}. Atendimento técnico ágil, equipamentos de alta resolução e projetos sob medida para proteger seu patrimônio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-wa hover:bg-wa-600 active:bg-wa-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-wa/20 transition-all transform active:scale-95 text-base"
            >
              <span>Solicitar orçamento pelo WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink-800 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-bold px-6 py-4 rounded-xl transition-all text-base"
            >
              <span>Ver serviços</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {siteConfig.differentials.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3.5 rounded-xl bg-ink-800 border border-slate-800 text-slate-200 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-glow shrink-0 mt-0.5" />
                <span>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Serviços Section */}
      <Section
        id="servicos"
        title="Serviços de CFTV"
        intro="Soluções completas em segurança eletrônica para proteger seu patrimônio com qualidade e suporte contínuo."
        background="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeServices.map((service, index) => (
            <CardLink
              key={service.path}
              to={service.path}
              title={service.title}
              text={service.text}
              icon={serviceIcons[index]}
              image={pageImages[service.path]}
            />
          ))}
        </div>
      </Section>

      {/* 3. Tipos de Câmeras */}
      <Section
        title="Tipos de câmeras de segurança"
        intro="Equipamentos adequados para cada necessidade de monitoramento, desde pequenos ambientes até grandes áreas abertas."
        background="gray"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {homeCameraTypes.map((camera) => (
            <CardLink
              key={camera.path}
              to={camera.path}
              title={camera.title}
              text={camera.text}
              image={pageImages[camera.path]}
            />
          ))}
        </div>
      </Section>

      {/* 4. Segmentos */}
      <Section
        title="CFTV para cada tipo de local"
        intro="Projetos dimensionados de acordo com a rotina e as particularidades de cada tipo de imóvel e atividade."
        background="white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {homeSegments.map((segment) => (
            <CardLink
              key={segment.path}
              to={segment.path}
              title={segment.title}
              text={segment.text}
              image={pageImages[segment.path]}
            />
          ))}
        </div>
      </Section>

      {/* 5. Como Funciona */}
      <Section
        title="Como funciona"
        intro="Processo simples e direto para você ter seu sistema de câmeras instalado sem complicações."
        background="gray"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeSteps.map((step, index) => (
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

      {/* 6. Cidades */}
      <Section
        title="Atendemos Curitiba e Região Metropolitana"
        intro="Presença técnica e atendimento especializado na capital e nas principais cidades da Região Metropolitana."
        background="white"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
          {siteConfig.cities.map((city) => (
            <Link
              key={city.slug}
              to={`/cidades/${city.slug}/`}
              className="flex items-center gap-2 p-3 rounded-lg border border-slate-800 bg-ink-800 hover:border-electric hover:bg-slate-800/80 text-sm font-medium text-slate-200 hover:text-glow transition-colors group shadow-lg"
            >
              <MapPin className="w-4 h-4 text-glow shrink-0" />
              <span className="truncate">{city.name}</span>
            </Link>
          ))}
        </div>
        <div>
          <Link
            to="/cidades/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-200 hover:text-glow transition-colors"
          >
            <span>Ver todas as cidades</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* 7. Perguntas Frequentes */}
      <Section
        title="Perguntas frequentes"
        intro="Tire suas dúvidas sobre instalação, valores de aluguel e manutenção de sistemas de segurança."
        background="gray"
      >
        <FaqList items={homeFaq} />
      </Section>

      {/* 8. CtaBand Final */}
      <CtaBand
        title="Peça seu orçamento de CFTV"
        text="Atendimento pelo WhatsApp, orçamento sem custo."
      >
        <p>
          Precisa também de alarme, cerca elétrica ou controle de acesso?{" "}
          <a
            href={siteConfig.parentSite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-glow underline font-medium"
          >
            Conheça a Intelsecsul
          </a>
          .
        </p>
      </CtaBand>
    </div>
  );
}
