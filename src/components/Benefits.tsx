import { Zap, Shield, Clock, Users, Award, Bell } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Instalação rápida",
    description: "Até 2 dias. Equipe certificada."
  },
  {
    icon: Shield,
    title: "Tecnologia confiável",
    description: "Equipamentos homologados. Proteção 24h."
  },
  {
    icon: Bell,
    title: "Alerta imediato",
    description: "Alarme integrado contra invasões."
  },
  {
    icon: Users,
    title: "Suporte dedicado",
    description: "Atendimento e manutenção especializados."
  },
  {
    icon: Zap,
    title: "Baixo consumo",
    description: "Menos que uma lâmpada comum."
  },
  {
    icon: Award,
    title: "+1.500 imóveis",
    description: "Experiência comprovada."
  }
];

const Benefits = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-3">Por que a Banker?</h2>
          <p className="text-muted-foreground text-lg">
            Mais de 1.500 clientes protegidos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl hover:shadow-xl transition-all duration-500 animate-fade-in group hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
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
