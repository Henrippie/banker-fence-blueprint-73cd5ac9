import { Search, FileText, Wrench, HeadphonesIcon } from "lucide-react";

const CameraProcess = () => {
  const steps = [
    {
      number: "1",
      icon: <Search className="w-10 h-10" />,
      title: "Diagnóstico de Segurança",
      description: "Analisamos os pontos vulneráveis e ângulos cegos do seu imóvel."
    },
    {
      number: "2",
      icon: <FileText className="w-10 h-10" />,
      title: "Proposta Sob Medida",
      description: "Detalhamos exatamente quais câmeras e qual gravador são ideais para você, com orçamento claro e transparência."
    },
    {
      number: "3",
      icon: <Wrench className="w-10 h-10" />,
      title: "Instalação Profissional",
      description: "Nossas equipes qualificadas e treinadas constantemente instalam tudo com precisão."
    },
    {
      number: "4",
      icon: <HeadphonesIcon className="w-10 h-10" />,
      title: "Suporte Contínuo",
      description: "Damos suporte antes, durante e depois da instalação, garantindo que seu acesso remoto funcione perfeitamente."
    }
  ];

  return (
    <section className="section-spacing bg-muted">
      <div className="container-section">
        <h3 className="heading-lg text-center text-primary mb-4">
          Nossa Forma de Trabalho
        </h3>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Processo profissional do início ao fim
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card p-6 rounded-2xl text-center h-full hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {step.number}
                </div>
                
                <div className="mt-6 mb-4 text-accent inline-block">
                  {step.icon}
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h4>
                
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CameraProcess;
