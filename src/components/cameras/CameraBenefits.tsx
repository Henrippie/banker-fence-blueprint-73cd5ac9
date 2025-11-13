import { Shield, Zap, CheckCircle, Headphones } from "lucide-react";

const CameraBenefits = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-12 h-12 text-accent" />,
      title: "Instalação Rápida e Segura",
      description: "Técnicos especializados garantem uma instalação profissional sem improvisações."
    },
    {
      icon: <Shield className="w-12 h-12 text-accent" />,
      title: "Tecnologia Confiável",
      description: "Produtos líderes de mercado e equipamentos certificados para máxima durabilidade."
    },
    {
      icon: <Zap className="w-12 h-12 text-accent" />,
      title: "Monitoramento Contínuo",
      description: "Opções com baterias (Nobreaks) que mantêm o sistema funcionando mesmo se faltar energia."
    },
    {
      icon: <Headphones className="w-12 h-12 text-accent" />,
      title: "Atendimento Personalizado",
      description: "Suporte antes, durante e depois da instalação para garantir seu acesso remoto."
    }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container-section">
        <h3 className="heading-lg text-center text-primary mb-12">
          Por que escolher a Banker Sistemas?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group glass-card p-6 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-4 inline-block card-icon-glow">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h4>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CameraBenefits;
