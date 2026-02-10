const casesData = [
  {
    title: "A Virada Estratégica: + R$ 24 Milhões em Resultados Anuais",
    challenge: "Cliente do setor varejista enfrentava 3 anos consecutivos sem atingir as metas financeiras estratégicas, com processos desalinhados e baixa produtividade.",
    solution: "Aplicamos o serviço de Advisory e redesenhamos os processos críticos de vendas e operações, implementando um framework de gestão por OKRs para conectar a operação à estratégia.",
    result: "Alcance de 130% das metas no primeiro ano, representando um ganho anual de R$ 24 milhões que não era obtido anteriormente.",
    highlight: "+ R$ 24M",
  },
  {
    title: "Eficiência Logística: Redução de Lead Time em 70%",
    challenge: "Empresa de bens de consumo com um lead time logístico de 14 dias, gerando altos custos de frete e baixa satisfação do cliente.",
    solution: "Conduzimos um Projeto de Transformação para implementar a metodologia Milk Run e otimizar as rotas e fluxos de trabalho do armazém.",
    result: "Redução do lead time para 4 dias, com uma economia direta de R$ 250 mil mensais em custos de frete.",
    highlight: "-70%",
  },
  {
    title: "Projeto Ecobags: Economia de R$ 1,1 Milhão com Sustentabilidade",
    challenge: "Alto custo com embalagens descartáveis e crescente demanda por práticas mais sustentáveis.",
    solution: "Lideramos um projeto de melhoria contínua focado na substituição de embalagens por uma solução reutilizável (Ecobags), otimizando todo o processo logístico reverso.",
    result: "Economia anual de R$ 1,1 milhão e significativa redução de impacto ambiental.",
    highlight: "R$ 1,1M",
  },
  {
    title: "Tecnologia e Automação Gerando R$ 2,5 Milhões",
    challenge: "Processos manuais, repetitivos e com alta incidência de erros, consumindo horas de trabalho da equipe.",
    solution: "Mapeamos os processos-chave e aplicamos metodologias Lean e Six Sigma para liderar a implementação de um novo sistema e a automação de fluxos de trabalho.",
    result: "Retorno financeiro de R$ 2,5 milhões já no primeiro ano após a implementação dos projetos.",
    highlight: "R$ 2,5M",
  },
  {
    title: "Estruturação de Segurança e Redução de Perdas para Gigante do Varejo (Case AmPm)",
    challenge: "Uma das maiores redes de conveniência do país, com mais de 200 lojas, enfrentava perdas operacionais significativas devido a processos descentralizados, uso ineficiente do sistema de CFTV e ausência de indicadores claros para a gestão de riscos, o que fragilizava as auditorias e o compliance.",
    solution: "Lideramos um projeto completo de reestruturação da área de Prevenção de Perdas. Padronizamos e otimizamos o sistema de CFTV com mais de 2.100 câmeras, criamos KPIs operacionais e jurídicos para monitoramento de performance, estruturamos rotinas de auditoria e inventário, e integramos as áreas de operação, jurídico e compliance.",
    result: "Alcançamos uma redução de 0,6 ponto percentual no Custo da Mercadoria Vendida (CMV), um número de altíssimo impacto no varejo. Além da economia direta, o projeto reduziu fraudes, aumentou a eficiência no monitoramento e fortaleceu a governança corporativa em toda a rede.",
    highlight: "-0,6 p.p. CMV",
  },
  {
    title: "Base Sólida para Expansão: Estruturação de Processos do Zero (Case Krispy Kreme Brasil)",
    challenge: "A renomada marca internacional estava iniciando sua operação no Brasil e precisava construir toda a sua estrutura de logística, estoque e controle do zero. O principal risco era a elevada perda de produtos perecíveis, a falta de processos padronizados e a necessidade de implementar sistemas de gestão de forma correta desde o primeiro dia.",
    solution: "Atuamos como o parceiro estratégico para criar a fundação operacional da empresa. Implementamos o controle de estoque FEFO (Primeiro que Vence, Primeiro que Sai), essencial para produtos alimentícios, criamos rotinas de inventário, parametrizamos o sistema TOTVS Protheus, padronizamos os fluxos de trabalho e treinamos as equipes, documentando tudo em manuais e procedimentos.",
    result: "A estruturação inicial garantiu uma redução expressiva de descartes e perdas operacionais, aumentou drasticamente a acuracidade do estoque e permitiu um planejamento de compras muito mais eficiente. Criamos a estabilidade operacional necessária para que a marca pudesse focar em sua expansão de forma segura e sustentável.",
    highlight: "Do Zero",
  },
];

const Cases = () => {
  return (
    <div>
      <section className="bg-navy-gradient py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="font-heading text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Nossos Clientes, Nossos Resultados
          </h1>
          <p className="text-lg text-primary-foreground/70">
            Cada desafio é uma oportunidade para gerar valor. Veja como fizemos isso na prática.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-12">
          {casesData.map((c, i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="bg-navy-gradient px-8 py-6 flex items-center justify-between">
                <h2 className="font-heading text-lg lg:text-xl font-bold text-primary-foreground">{c.title}</h2>
                <span className="text-gold font-heading text-2xl font-bold hidden sm:block">{c.highlight}</span>
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="font-heading text-sm font-bold text-gold uppercase tracking-wide mb-2">O Desafio</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-gold uppercase tracking-wide mb-2">A Solução Tauro</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.solution}</p>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-gold uppercase tracking-wide mb-2">O Resultado</h3>
                  <p className="text-foreground text-sm font-semibold leading-relaxed">{c.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cases;
