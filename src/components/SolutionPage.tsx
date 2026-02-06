import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface SolutionPageProps {
  title: string;
  subtitle: string;
  sections: {
    title: string;
    content: ReactNode;
  }[];
  ctaTitle: string;
  ctaButton: string;
}

const SolutionPage = ({ title, subtitle, sections, ctaTitle, ctaButton }: SolutionPageProps) => (
  <div>
    {/* Hero */}
    <section className="bg-navy-gradient py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <h1 className="font-heading text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">{title}</h1>
        <p className="text-lg text-primary-foreground/70 leading-relaxed">{subtitle}</p>
      </div>
    </section>

    {/* Sections */}
    {sections.map((section, i) => (
      <section key={i} className={`py-16 lg:py-20 ${i % 2 === 1 ? "bg-surface-alt" : ""}`}>
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-6">{section.title}</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">{section.content}</div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="bg-navy-gradient py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary-foreground mb-8">{ctaTitle}</h2>
        <Link
          to="/contato"
          className="inline-block px-8 py-4 bg-gold text-accent-foreground font-semibold rounded hover:bg-gold-light transition-colors text-lg"
        >
          {ctaButton}
        </Link>
      </div>
    </section>
  </div>
);

export default SolutionPage;
