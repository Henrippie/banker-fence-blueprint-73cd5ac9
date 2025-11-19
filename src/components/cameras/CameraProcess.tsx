import { Search, FileText, Wrench, HeadphonesIcon } from "lucide-react";

const CameraProcess = () => {
  const steps = [
    {
      number: "1",
      icon: <Search className="w-10 h-10" />,
      title: "Diagnóstico",
      description: "Análise completa dos pontos vulneráveis e mapeamento de ângulos estratégicos."
    },
    {
      number: "2",
      icon: <FileText className="w-10 h-10" />,
      title: "Proposta",
      description: "Orçamento detalhado e transparente com as melhores soluções para seu caso."
    },
    {
      number: "3",
      icon: <Wrench className="w-10 h-10" />,
      title: "Instalação",
      description: "Equipe técnica qualificada realiza instalação profissional e certificada."
    },
    {
      number: "4",
      icon: <HeadphonesIcon className="w-10 h-10" />,
      title: "Suporte",
      description: "Acompanhamento contínuo e garantia de funcionamento do acesso remoto."
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-[100px]" />
      </div>

      <div className="container-section relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Wrench className="w-4 h-4" />
            <span>Processo Simples e Eficiente</span>
          </div>
          <h3 className="heading-lg text-primary mb-4">
            Como Funciona
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Do primeiro contato até o suporte contínuo, cuidamos de cada detalhe
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent opacity-20 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-accent-foreground flex items-center justify-center font-bold text-2xl shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                
                {/* Card */}
                <div className="card-premium p-8 rounded-3xl text-center h-full pt-12">
                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-accent card-icon-glow">
                    {step.icon}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-accent/40">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraProcess;
