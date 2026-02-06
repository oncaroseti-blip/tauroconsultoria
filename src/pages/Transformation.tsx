import SolutionPage from "@/components/SolutionPage";

const Transformation = () => (
  <SolutionPage
    title="Projetos de Transformação"
    subtitle="Nós não apenas planejamos. Nós garantimos a execução. Assumimos a liderança da implementação de melhorias do início ao fim."
    sections={[
      {
        title: "O Upsell Perfeito para o Sucesso",
        content: (
          <p>
            Este serviço é a materialização do seu plano de melhoria. Atuamos como um "Project Manager" terceirizado, com escopo fechado, cronograma definido e resultados mensuráveis. É a nossa garantia de que a transformação planejada de fato aconteça.
          </p>
        ),
      },
      {
        title: "Transformação na Prática",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span>Estruturação do processo de Order-to-Cash.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span>Redução do tempo do ciclo de fechamento contábil.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span>Implementação da metodologia 5S e gestão visual na produção.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span>Garantia da implementação do plano gerado na Semana Kaizen.</span></li>
          </ul>
        ),
      },
    ]}
    ctaTitle="Pronto para tirar seu projeto do papel e transformá-lo em resultado?"
    ctaButton="Execute sua Transformação"
  />
);

export default Transformation;
