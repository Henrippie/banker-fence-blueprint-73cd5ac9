import { Shield, Zap, CheckCircle, Headphones, Award, Clock } from "lucide-react";

const CameraBenefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Instalação Rápida",
      description: "Concluída em até 1 dia útil, sem obra e sem transtorno."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Tecnologia Confiável",
      description: "Câmeras HD com visão noturna e acesso remoto via aplicativo."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Backup de Energia",
      description: "Sistema continua funcionando mesmo em caso de queda de energia."
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: "Suporte Dedicado",
      description: "Equipe técnica disponível para atender sempre que precisar."
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Garantia Total",
      description: "1 ano de garantia em equipamentos e mão de obra."
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Acesso Remoto",
      description: "Monitore sua propriedade em tempo real pelo celular, de qualquer lugar."
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-background to-muted/30">
      <div className="container-section">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            <Shield className="w-4 h-4" />
            <span>Vantagens Exclusivas</span>
          </div>
          <h3 className="heading-lg text-primary mb-4">
            Por que escolher a Banker Sistemas?
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experiência comprovada em segurança eletrônica com atendimento diferenciado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group card-premium p-8 rounded-3xl text-center transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 text-accent card-icon-glow">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-accent mb-2">+15</div>
            <div className="text-sm text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-accent mb-2">+1.500</div>
            <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-accent mb-2">1 ano</div>
            <div className="text-sm text-muted-foreground">Garantia</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-accent mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Suporte</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraBenefits;
