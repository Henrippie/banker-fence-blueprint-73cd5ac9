import { ClipboardCheck, FileText, Hammer, Headphones } from "lucide-react";

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico Gratuito",
    description: "Análise técnica completa do seu imóvel sem compromisso",
    benefit: "Identificamos os pontos críticos e necessidades específicas"
  },
  {
    icon: FileText,
    title: "Proposta Personalizada",
    description: "Orçamento detalhado e transparente adaptado à sua realidade",
    benefit: "Melhor custo-benefício sem surpresas"
  },
  {
    icon: Hammer,
    title: "Instalação Profissional",
    description: "Equipe certificada realiza todo o processo com excelência",
    benefit: "Rápido, limpo e sem transtornos"
  },
  {
    icon: Headphones,
    title: "Suporte Contínuo",
    description: "Acompanhamento e assistência técnica sempre que precisar",
    benefit: "Garantia de funcionamento e tranquilidade"
  }
];

const Process = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">Nossa Forma de Trabalho</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Processo transparente e eficiente do primeiro contato até o suporte contínuo.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 mx-auto relative z-10 shadow-lg">
                      <Icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="pt-4 border-t border-border">
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
