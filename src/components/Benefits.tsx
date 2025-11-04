import { Zap, Shield, Clock, Users, Award, Bell } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Instalação rápida",
    description: "Equipe certificada, instalação em até 2 dias, sem bagunça."
  },
  {
    icon: Shield,
    title: "Tecnologia confiável",
    description: "Equipamentos homologados, proteção 24h, baixo consumo."
  },
  {
    icon: Bell,
    title: "Alerta em tempo real",
    description: "Alarme sonoro e visual integrado para qualquer tentativa de invasão."
  },
  {
    icon: Users,
    title: "Suporte dedicado",
    description: "Atendimento especializado e manutenção preventiva."
  },
  {
    icon: Zap,
    title: "Baixo consumo",
    description: "Consome menos que uma lâmpada comum, economia garantida."
  },
  {
    icon: Award,
    title: "+1.500 imóveis",
    description: "Experiência comprovada em residências e empresas."
  }
];

const Benefits = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">Por que escolher a Banker?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experiência, tecnologia e suporte que fazem a diferença
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="glass-card-enhanced p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 animate-fade-in group hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 glass-morphism-dark rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
