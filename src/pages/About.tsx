import { Target, Eye, Heart, User } from "lucide-react";

const values = [
  {
    icon: <Target size={28} />,
    title: "Missão",
    text: "Impulsionar o crescimento sustentável de nossos clientes, aplicando as melhores práticas em gestão de resultados e conduzindo projetos de alto impacto para o sucesso dos negócios.",
  },
  {
    icon: <Eye size={28} />,
    title: "Visão",
    text: "Ser referência na transformação da gestão empresarial, elevando o patamar administrativo de nossos clientes com técnicas avançadas de gestão de resultados e projetos, por meio de soluções inovadoras e eficazes.",
  },
  {
    icon: <Heart size={28} />,
    title: "Valores",
    text: "Foco em Resultados, Excelência e Inovação, Transparência e Ética, Melhoria Contínua, Parceria e Colaboração, Sustentabilidade Empresarial.",
  },
];

const partners = [
  {
    name: "Rodrigo Roseti",
    title: "Sócio-Fundador | Especialista em Gestão Estratégica e Otimização de Processos",
    text: "Com 20 anos de experiência forjada em grandes multinacionais, Rodrigo é o arquiteto por trás da transformação de processos complexos em resultados financeiros expressivos. Sua expertise está em conectar a estratégia do negócio (OKR, BSC) à execução operacional (Lean Six Sigma), garantindo não apenas eficiência, mas um crescimento sustentável e lucrativo.",
    highlights: [
      "+20 anos de experiência em Gestão e Melhoria de Processos.",
      "Liderança em programas Lean Six Sigma com ROI superior a 3x.",
      "Ganhos de produtividade de até 40% em processos críticos.",
      "Redução de custos superior a R$ 500 mil anuais para clientes.",
    ],
  },
  {
    name: "Nelson Barbosa",
    title: "Sócio-Fundador | Especialista em Prevenção de Perdas e Gestão de Riscos Operacionais",
    text: "Nelson é especialista em proteger os ativos e a lucratividade da empresa, atuando diretamente na linha de frente do controle de estoque, processos e segurança. Com vasta experiência na implantação de sistemas de monitoramento em larga escala, ele possui uma visão 360º dos riscos físicos, administrativos e sistêmicos que afetam a operação.",
    highlights: [
      "Implantação de sistema com +2.100 câmeras em 200 lojas.",
      "Redução direta de 0,6 p.p. no Custo da Mercadoria Vendida (CMV).",
      "Estruturação de times de Prevenção de Perdas do zero em grandes CDs.",
      "Expertise em auditorias e acuracidade de inventário.",
    ],
  },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-gradient py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="font-heading text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Nosso DNA: Acreditamos na Gestão que <span className="text-gradient-gold">Transforma</span>
          </h1>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-lg p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold/10 text-gold rounded-full mb-5">
                  {v.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-4">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 lg:py-28 bg-surface-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl lg:text-4xl font-bold text-primary text-center mb-16">
            Liderança com Experiência Real
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {partners.map((p) => (
              <div key={p.name} className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-navy-gradient flex items-center justify-center">
                    <User size={28} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">{p.title}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.text}</p>
                <ul className="space-y-2">
                  {p.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-gold mt-1 shrink-0">✦</span>
                      <span className="text-foreground">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
