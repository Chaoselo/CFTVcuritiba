import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import Section from "../components/Section";
import CtaBand from "../components/CtaBand";
import { blogIndex, blogPosts } from "../content/blog";
import { formatDatePt } from "../lib/formatDate";

export default function BlogIndexPage() {
  return (
    <div>
      {/* a) Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-ink-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Início", to: "/" },
              { label: "Blog" },
            ]}
          />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {blogIndex.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {blogIndex.intro}
          </p>
        </div>
      </section>

      {/* b) Blog Posts List */}
      <Section title="Artigos recentes" background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between p-6 bg-ink-800 rounded-xl border border-slate-800/90 shadow-lg hover:border-electric hover:shadow-electric/10 transition-all"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-glow mb-3">
                  <Calendar className="w-4 h-4 text-glow" />
                  <time dateTime={post.datePublished}>
                    {formatDatePt(post.datePublished)}
                  </time>
                </div>

                <h2 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-glow transition-colors leading-snug">
                  <Link to={post.path}>{post.h1}</Link>
                </h2>

                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <Link
                  to={post.path}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-200 group-hover:text-glow transition-colors"
                >
                  <span>Ler artigo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* c) CTA Band */}
      <CtaBand
        title="Precisa de orientação para seu projeto de CFTV?"
        text="Converse com a nossa equipe técnica pelo WhatsApp e tire suas dúvidas sobre equipamentos, instalação ou aluguel de câmeras em Curitiba e Região."
        whatsappMessage="Olá! Acessei o blog e gostaria de informações sobre câmeras de segurança."
      />
    </div>
  );
}
