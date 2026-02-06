import { Mail, Phone, Linkedin, Instagram, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Meu time ficará sobrecarregado com o trabalho da consultoria?",
    a: 'Pelo contrário. Nosso método envolve treinar sua equipe para ser "mão na massa" junto conosco. O objetivo é garantir a passagem de conhecimento e capacitar seu time para que produza mais e melhor, com menos estresse, gerando autonomia e não dependência.',
  },
  {
    q: "A \"Semana Kaizen\" gera apenas um plano ou vocês ajudam a implementar?",
    a: 'A Semana Kaizen entrega um plano de ação prático e detalhado. Para garantir que ele não "morra na praia", o serviço já inclui 4 encontros semanais de acompanhamento. Além disso, oferecemos o Projeto de Transformação como um passo seguinte, onde nosso time pode liderar e executar a implementação do início ao fim.',
  },
  {
    q: "Preciso trocar meu sistema de gestão (ERP) para contratar o serviço de Estoque?",
    a: "Não necessariamente. Nossa tecnologia se adapta ao seu processo. Nossa plataforma Gaia pode se integrar ao seu sistema atual ou, para empresas que ainda não possuem um sistema gerencial, pode atuar como um ERP completo. A solução é flexível e personalizada para sua realidade.",
  },
  {
    q: "Como funciona a precificação dos serviços?",
    a: "Trabalhamos com modelos flexíveis e transparentes. Dependendo do serviço, pode ser um pacote mensal (retainer) para o Advisory ou uma taxa fixa por projeto (para a Semana Kaizen e Projetos de Transformação). Nossa precificação é sempre ancorada no valor e no retorno sobre o investimento (ROI) que geramos para o seu negócio.",
  },
];

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-gradient py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="font-heading text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Vamos Conversar?
          </h1>
          <p className="text-lg text-primary-foreground/70">
            Preencha o formulário abaixo ou entre em contato por um de nossos canais. Estamos prontos para entender seu desafio.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-heading text-xl font-bold text-primary mb-6">Nossos Canais</h2>
              <a href="mailto:contato@tauroconsultoria.com.br" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-colors">
                <Mail size={18} className="text-gold" /> contato@tauroconsultoria.com.br
              </a>
              <a href="tel:+5511949684522" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-colors">
                <Phone size={18} className="text-gold" /> (11) 94968-4522
              </a>
              <a href="https://wa.me/5511949684522" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-colors">
                <MessageCircle size={18} className="text-gold" /> WhatsApp
              </a>
              <div className="pt-4">
                <p className="text-sm font-semibold text-primary mb-3">Siga-nos</p>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                    <Linkedin size={22} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                    <Instagram size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Nome Completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Telefone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Nome da Empresa</label>
                  <input type="text" className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Mensagem</label>
                  <textarea rows={5} placeholder="Conte-nos um pouco sobre o seu desafio..." className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none resize-none" />
                </div>
                <button className="w-full px-6 py-3 bg-gold text-accent-foreground font-semibold rounded hover:bg-gold-light transition-colors">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-surface-alt">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary text-center mb-12">
            Perguntas Frequentes (FAQ)
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-sm font-semibold text-primary hover:text-gold text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Contact;
