import SolutionPage from "@/components/SolutionPage";

const Advisory = () => (
  <SolutionPage
    title="Advisory e Gestão Residente"
    subtitle='Tenha um "Consultor Residente" ou "Fractional Executive" sênior dedicado a destravar e otimizar os processos do seu negócio.'
    sections={[
      {
        title: "Um Especialista Sênior na sua Empresa, na Medida Certa",
        content: (
          <p>
            Oferecemos um pacote mensal (retainer) que inclui visitas semanais de imersão, acompanhamento remoto e relatórios de avanço. Nosso foco é diagnosticar, planejar e, principalmente, capacitar sua equipe interna para executar as melhorias.
          </p>
        ),
      },
      {
        title: "Para Quem é o Serviço de Advisory?",
        content: (
          <p>
            Pequenas e Médias Empresas (PMEs) que sentem a dor da ineficiência, mas não possuem orçamento ou volume de trabalho para justificar um Gerente de Processos sênior em tempo integral.
          </p>
        ),
      },
    ]}
    ctaTitle="Quer ter a expertise que seu negócio precisa para crescer?"
    ctaButton="Saiba Mais Sobre o Modelo"
  />
);

export default Advisory;
