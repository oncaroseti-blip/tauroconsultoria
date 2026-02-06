import { Link } from "react-router-dom";
import { Warehouse, UserCog, CalendarClock, Puzzle, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ebookCover from "@/assets/ebook-cover.jpg";

const services = [
  {
    icon: <Warehouse size={32} />,
    title: "Gestão de Estoque e Operações",
    desc: "Otimize sua operação, reduza perdas e escale seu negócio com nossa gestão de estoque inteligente e integrada.",
    path: "/solucoes/gestao-estoque",
  },
  {
    icon: <UserCog size={32} />,
    title: "Advisory e Gestão Residente",
    desc: "Tenha um executivo sênior de processos dedicado ao seu negócio, sem os custos de uma contratação integral.",
    path: "/solucoes/advisory",
  },
  {
    icon: <CalendarClock size={32} />,
    title: "Semana Kaizen de Resolução",
    desc: "Resolva problemas complexos e de alto custo em uma semana de imersão focada em resultados práticos e imediatos.",
    path: "/solucoes/kaizen",
  },
  {
    icon: <Puzzle size={32} />,
    title: "Projetos de Transformação",
    desc: "Do plano à ação. Lideramos e executamos projetos de melhoria do início ao fim, garantindo que a transformação aconteça.",
    path: "/solucoes/transformacao",
  },
];

const cases = [
  { number: "+ R$ 24 milhões", desc: "Em resultados anuais alcançados para cliente que não atingia metas há 3 anos." },
  { number: "-70%", desc: "No lead time logístico (de 14 para 4 dias), gerando R$ 250 mil/mês em economia." },
  { number: "R$ 2,5 milhões", desc: "De retorno financeiro com projetos de automação e otimização de processos." },
];

const blogPosts = [
  { title: "Os 5 Sinais de que seu Estoque está Sabotando seu Lucro", date: "10 Jan 2026" },
  { title: "Fractional Executive: Como Ter um Gestor Sênior por uma Fração do Custo", date: "03 Jan 2026" },
  { title: "Kaizen vs. Six Sigma: Qual o Melhor para o seu Problema?", date: "27 Dez 2025" },
];

const Index = () => {
  const scrollToServices = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-navy-dark/80" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Transformamos a gestão da sua empresa em{" "}
            <span className="text-gradient-gold">resultados visíveis</span>.
          </h1>
          <p className="text-lg lg:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Aplicamos as melhores práticas em gestão de resultados e conduzimos projetos de alto impacto para impulsionar o seu crescimento sustentável.
          </p>
          <button
            onClick={scrollToServices}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-accent-foreground font-semibold rounded hover:bg-gold-light transition-colors text-lg"
          >
            Conheça Nossas Soluções <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl lg:text-4xl font-bold text-primary mb-4">
              Soluções Estratégicas para o Sucesso do seu Negócio
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-card border border-border rounded-lg p-8 hover:shadow-xl hover:border-gold/30 transition-all duration-300"
              >
                <div className="text-gold mb-5">{s.icon}</div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <Link
                  to={s.path}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-light transition-colors"
                >
                  Saiba Mais <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases / Social Proof */}
      <section className="bg-navy-gradient py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Resultados Reais, Impacto Mensurável
            </h2>
            <p className="text-primary-foreground/60 text-lg">
              Não apenas planejamos. Entregamos resultados que falam por si.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {cases.map((c, i) => (
              <div
                key={i}
                className="text-center p-8 border border-primary-foreground/10 rounded-lg bg-primary-foreground/5"
              >
                <p className="font-heading text-3xl lg:text-4xl font-bold text-gold mb-4">{c.number}</p>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gold text-gold font-semibold rounded hover:bg-gold hover:text-accent-foreground transition-colors"
            >
              Veja Todos os Cases <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* E-book / Lead Magnet */}
      <section className="py-20 lg:py-28 bg-surface-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <img
                src={ebookCover}
                alt="Checklist de Saúde Operacional"
                className="w-64 lg:w-80 rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-4">
                Diagnóstico de Processos: Por Onde Começar?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Baixe nosso guia gratuito "Checklist de Saúde Operacional" e identifique os principais pontos de melhoria na sua empresa hoje mesmo.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none"
                />
                <input
                  type="email"
                  placeholder="Seu Email"
                  className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none"
                />
                <button className="w-full px-6 py-3 bg-gold text-accent-foreground font-semibold rounded hover:bg-gold-light transition-colors">
                  Baixar Guia Gratuito
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl lg:text-4xl font-bold text-primary mb-4">
              Insights para sua Gestão
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-navy-gradient flex items-center justify-center">
                  <span className="text-gold font-heading text-sm">Artigo</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="font-heading text-base font-bold text-primary leading-snug">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Acessar o Blog <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
