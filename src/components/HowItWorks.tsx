import { Shield, Zap, Radar } from "lucide-react";

const steps = [
  {
    icon: Shield,
    number: "01",
    title: "Barreira intimidadora",
    description: "Dissuade invasores antes mesmo de tentarem entrar."
  },
  {
    icon: Zap,
    title: "Choque seguro",
    number: "02",
    description: "Pulsos de alta voltagem, baixa corrente. Repele sem risco."
  },
  {
    icon: Radar,
    title: "Alarme integrado",
    number: "03",
    description: "Alerta imediato em caso de violação ou tentativa."
  }
];

const HowItWorks = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-3">Como funciona</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative glass-morphism p-8 rounded-[2rem] hover:scale-[1.02] transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -top-4 left-8 text-6xl font-bold text-secondary/20">
                  {step.number}
                </div>
                <div className="w-16 h-16 glass-morphism-dark rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-xl">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
