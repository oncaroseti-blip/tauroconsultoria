import SolutionPage from "@/components/SolutionPage";

const StockManagement = () => (
  <SolutionPage
    title="Gestão de Estoque e Operações"
    subtitle="Reduza perdas, aumente a eficiência e estruture uma operação moderna com nossa solução consultiva que une processos, controle inteligente e tecnologia."
    sections={[
      {
        title: "Uma Solução Completa para Organização e Crescimento",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span><strong>Análise e Redesenho de Processos:</strong> Adaptamos o sistema à realidade da sua operação.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span><strong>Diagnóstico de Estoque:</strong> Identificamos gargalos, desperdícios e oportunidades de melhoria.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span><strong>Controle Inteligente:</strong> Aplicamos metodologias como FEFO, inventários cíclicos e auditorias.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span><strong>Implantação da Ferramenta Gaia:</strong> Nossa plataforma robusta para coleta de dados, sugestão de compras, projeções e até mesmo como um ERP completo.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span><strong>Consultoria em Segurança Tecnológica:</strong> Integramos monitoramento e IA para análise de riscos e otimização.</span></li>
          </ul>
        ),
      },
      {
        title: "Nossos Diferenciais",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span>Visão integrada de controle + segurança + performance.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span>Consultoria personalizada com aplicação prática.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1 shrink-0">✦</span><span>Time técnico com vivência real em chão de fábrica.</span></li>
          </ul>
        ),
      },
    ]}
    ctaTitle="Pronto para transformar seu estoque em um ativo estratégico?"
    ctaButton="Agende uma Conversa"
  />
);

export default StockManagement;
