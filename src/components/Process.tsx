import { ClipboardCheck, FileText, Hammer, Headphones } from "lucide-react";

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico",
    description: "Análise técnica gratuita",
    benefit: "Sem compromisso"
  },
  {
    icon: FileText,
    title: "Proposta",
    description: "Orçamento em 24h",
    benefit: "Transparente"
  },
  {
    icon: Hammer,
    title: "Instalação",
    description: "Rápida e certificada",
    benefit: "Até 2 dias"
  },
  {
    icon: Headphones,
    title: "Suporte",
    description: "Assistência contínua",
    benefit: "Sempre disponível"
  }
];

const Process = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-3">Nosso processo</h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="card-premium p-6 rounded-3xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mb-6 mx-auto relative z-10 shadow-xl card-icon-glow icon-float">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-xs text-accent font-medium">{step.benefit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
