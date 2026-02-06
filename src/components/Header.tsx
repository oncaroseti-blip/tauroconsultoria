import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const solutions = [
  { name: "Gestão de Estoque", path: "/solucoes/gestao-estoque" },
  { name: "Advisory Residente", path: "/solucoes/advisory" },
  { name: "Semana Kaizen", path: "/solucoes/kaizen" },
  { name: "Projetos de Transformação", path: "/solucoes/transformacao" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Sobre Nós", path: "/sobre" },
  { name: "Soluções", path: "#", dropdown: solutions },
  { name: "Cases de Sucesso", path: "/cases" },
  { name: "Blog", path: "/blog" },
  { name: "Contato", path: "/contato" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-md border-b border-navy-light/20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold text-primary-foreground tracking-tight">
            Tauro<span className="text-gold"> Consultoria</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-body text-primary-foreground/80 hover:text-gold transition-colors">
                  {link.name} <ChevronDown size={14} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-navy-dark border border-navy-light/20 rounded-md shadow-xl py-2 animate-fade-in-up">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-4 py-2.5 text-sm text-primary-foreground/80 hover:bg-navy-light/20 hover:text-gold transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-body transition-colors ${
                  location.pathname === link.path
                    ? "text-gold font-semibold"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            to="/contato"
            className="ml-4 px-5 py-2 bg-gold text-accent-foreground text-sm font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Fale Conosco
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-navy-light/20 py-4 px-4">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name}>
                <p className="px-4 py-2 text-sm font-semibold text-gold">{link.name}</p>
                {link.dropdown.map((sub) => (
                  <Link
                    key={sub.path}
                    to={sub.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-8 py-2 text-sm text-primary-foreground/80 hover:text-gold"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 text-sm text-primary-foreground/80 hover:text-gold"
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            to="/contato"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 mx-4 px-5 py-2 bg-gold text-accent-foreground text-sm font-semibold rounded text-center"
          >
            Fale Conosco
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
