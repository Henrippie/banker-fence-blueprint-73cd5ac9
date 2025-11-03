import { Shield, Zap, Radar } from "lucide-react";

const steps = [
  {
    icon: Shield,
    number: "01",
    title: "Barreira física e psicológica",
    description: "A cerca elétrica cria uma proteção visível que intimida invasores antes mesmo da tentativa de invasão, funcionando como primeira linha de defesa."
  },
  {
    icon: Zap,
    title: "Choque repelente e seguro",
    number: "02",
    description: "Sistema com pulsos de alta tensão e baixa corrente: assusta e repele sem oferecer risco de lesões graves, totalmente dentro das normas de segurança."
  },
  {
    icon: Radar,
    title: "Monitoramento automático",
    number: "03",
    description: "Detecta tentativas de rompimento e envia alertas instantâneos, permitindo resposta rápida e registro de todas as ocorrências."
  }
];

const HowItWorks = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">Como funciona a Cerca Elétrica</h2>
          <p className="body-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Tecnologia inteligente de proteção em três camadas complementares.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -top-4 left-8 text-6xl font-bold text-secondary/20">
                  {step.number}
                </div>
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
