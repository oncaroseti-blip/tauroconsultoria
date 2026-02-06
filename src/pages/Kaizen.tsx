import SolutionPage from "@/components/SolutionPage";

const Kaizen = () => (
  <SolutionPage
    title="Semana Kaizen de Resolução"
    subtitle='O modelo "choque de gestão": uma semana de imersão total para diagnosticar e criar um plano de ação prático para o seu problema mais crítico.'
    sections={[
      {
        title: "Da Anomalia à Solução em 5 Dias",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span><strong>Diagnóstico Prévio:</strong> Garantimos que o problema é "sprintável" e definimos o time.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span><strong>Imersão Total:</strong> Uma semana com decisores e executores focados em resolver o problema.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span><strong>Entrega do Plano de Ação:</strong> Um mapa claro e acionável para a solução.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span><strong>Acompanhamento Pós-Sprint:</strong> 4 encontros semanais para garantir que a implementação aconteça.</span></li>
          </ul>
        ),
      },
      {
        title: "Para Quem é a Semana Kaizen?",
        content: (
          <p>
            Empresas com problemas específicos, de alto custo e que precisam de uma solução rápida e densa, envolvendo múltiplas áreas.
          </p>
        ),
      },
    ]}
    ctaTitle="Tem um desafio complexo que precisa de uma solução rápida?"
    ctaButton="Resolva seu Problema em uma Semana"
  />
);

export default Kaizen;
