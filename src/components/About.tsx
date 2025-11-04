import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Users, value: "+1.500", label: "Imóveis Protegidos" },
  { icon: Clock, value: "10+", label: "Anos de Experiência" },
  { icon: Award, value: "100%", label: "Clientes Satisfeitos" },
  { icon: Shield, value: "24/7", label: "Suporte Disponível" }
];

const About = () => {
  return (
    <section className="section-spacing bg-card">
      <div className="container-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="heading-lg mb-6">Banker Sistemas</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Especialistas em <strong>segurança eletrônica profissional</strong> para residências, condomínios e empresas. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong>Proteção de verdade</strong> com tecnologia confiável e suporte que funciona.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
              <div 
                key={index}
                className="text-center p-6 glass-card rounded-2xl animate-fade-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
