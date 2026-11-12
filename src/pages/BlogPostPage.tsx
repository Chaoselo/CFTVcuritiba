import { Link } from "react-router-dom";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import Section from "../components/Section";
import CtaBand from "../components/CtaBand";
import type { BlogPost } from "../content/blog";
import { formatDatePt } from "../lib/formatDate";

interface BlogPostPageProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  let sectionIndex = 0;

  return (
    <div>
      {/* a) Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-ink-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Início", to: "/" },
              { label: "Blog", to: "/blog/" },
              { label: post.navLabel },
            ]}
          />

          <div className="flex items-center gap-2 text-sm font-semibold text-glow mb-4">
            <Calendar className="w-4 h-4 text-glow" />
            <time dateTime={post.datePublished}>
              {formatDatePt(post.datePublished)}
            </time>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {post.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {post.intro}
          </p>
        </div>
      </section>

      {/* b) Content Sections */}
      {post.sections.map((sec) => {
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
            </div>
          </Section>
        );
      })}

      {/* c) Veja também */}
      {post.related && post.related.length > 0 && (
        <Section
          title="Veja também"
          background={sectionIndex++ % 2 === 0 ? "white" : "gray"}
        >
          <div className="max-w-3xl">
            <ul className="space-y-3">
              {post.related.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-2 text-base font-semibold text-slate-200 hover:text-glow transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-glow" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {/* d) CTA Band */}
      <CtaBand
        title="Deseja instalar ou modernizar seu sistema de CFTV?"
        text="Solicite um orçamento sem custo pelo WhatsApp e fale diretamente com quem entende de segurança eletrônica em Curitiba."
        whatsappMessage="Olá! Li o artigo no blog e gostaria de um orçamento para o meu projeto de câmeras de segurança."
      />
    </div>
  );
}
