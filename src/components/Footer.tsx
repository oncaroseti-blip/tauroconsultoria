import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-gradient text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-xl font-bold mb-4">
              Tauro<span className="text-gold"> Consultoria</span>
            </h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Impulsionando o crescimento sustentável de nossos clientes por meio de soluções inovadoras e eficazes em gestão.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-bold mb-4 text-gold">Navegação</h4>
            <ul className="space-y-2">
              {[
              { name: "Home", path: "/" },
              { name: "Sobre Nós", path: "/sobre" },
              { name: "Cases de Sucesso", path: "/cases" },
              { name: "Blog", path: "/blog" },
              { name: "Contato", path: "/contato" }].
              map((link) =>
              <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading text-sm font-bold mb-4 text-gold">Soluções</h4>
            <ul className="space-y-2">
              {[
              { name: "Gestão de Estoque", path: "/solucoes/gestao-estoque" },
              { name: "Advisory Residente", path: "/solucoes/advisory" },
              { name: "Semana Kaizen", path: "/solucoes/kaizen" },
              { name: "Projetos de Transformação", path: "/solucoes/transformacao" }].
              map((link) =>
              <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold mb-4 text-gold">Contato</h4>
            <div className="space-y-3">
              <a href="mailto:contato@tauroconsultoria.com.br" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                <Mail size={16} /> contato@tauroconsultoria.com.br
              </a>
              <a href="tel:+5511981559196" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone size={16} /> (11) 98155-9196
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://wa.me/5511981559196" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  <MessageCircle size={20} />
                </a>
                <a href="https://www.linkedin.com/company/tauroconsultoria/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/tauroconsultoria/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Tauro Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;