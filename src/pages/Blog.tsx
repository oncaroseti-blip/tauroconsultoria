const posts = [
  { title: "Os 5 Sinais de que seu Estoque está Sabotando seu Lucro", snippet: "Descubra os indicadores silenciosos que drenam a rentabilidade do seu negócio e como corrigi-los com ações práticas.", date: "13 Fev 2026" },
  { title: "Fractional Executive: Como Ter um Gestor Sênior por uma Fração do Custo", snippet: "Entenda o modelo de advisory residente e por que ele é a solução ideal para PMEs que precisam de liderança experiente.", date: "03 Jan 2026" },
  { title: "Kaizen vs. Six Sigma: Qual o Melhor para o seu Problema?", snippet: "Comparamos as duas metodologias mais populares de melhoria contínua e ajudamos você a escolher a ideal.", date: "27 Dez 2025" },
  { title: "O ROI Escondido na Otimização de Processos", snippet: "Muito além da redução de custos: descubra os retornos intangíveis que a otimização de processos traz ao seu negócio.", date: "20 Dez 2025" },
  { title: "Gestão de Riscos Operacionais: Além da Planilha", snippet: "Como estruturar um programa de prevenção de perdas robusto, integrado à tecnologia e à cultura organizacional.", date: "13 Dez 2025" },
  { title: "Sua Empresa Precisa de um ERP? A Resposta Pode Surpreender", snippet: "Nem sempre um sistema complexo é a resposta. Avalie as alternativas antes de investir centenas de milhares de reais.", date: "06 Dez 2025" },
];

const Blog = () => {
  return (
    <div>
      <section className="bg-navy-gradient py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="font-heading text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Nossos Insights e Artigos
          </h1>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, i) => (
              <article
                key={i}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="h-44 bg-navy-gradient flex items-center justify-center px-6">
                  <span className="text-gold/50 font-heading text-xs uppercase tracking-widest">Blog</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-3">{post.date}</p>
                  <h3 className="font-heading text-base font-bold text-primary leading-snug mb-3 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.snippet}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
