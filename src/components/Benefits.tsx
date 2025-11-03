import { Zap, Shield, Clock, Users, Award, Bell } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Instalação rápida e segura",
    description: "Equipe especializada realiza todo o processo com agilidade, sem comprometer sua rotina."
  },
  {
    icon: Shield,
    title: "Tecnologia confiável",
    description: "Equipamentos de alta qualidade com certificação técnica e durabilidade comprovada."
  },
  {
    icon: Bell,
    title: "Monitoramento e aviso imediato",
    description: "Sistema integrado que detecta tentativas de invasão e emite alertas instantâneos."
  },
  {
    icon: Users,
    title: "Atendimento personalizado",
    description: "Consultoria completa desde o diagnóstico até o pós-venda, sempre disponível."
  },
  {
    icon: Zap,
    title: "Baixo consumo de energia",
    description: "Tecnologia eficiente que consome menos que uma lâmpada comum."
  },
  {
    icon: Award,
    title: "+1.500 imóveis protegidos",
    description: "Experiência comprovada em residências, condomínios e empresas."
  }
];

const Benefits = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-background to-muted">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">Por que escolher a Banker Sistemas?</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Somos referência em segurança eletrônica com soluções completas e suporte de excelência.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
