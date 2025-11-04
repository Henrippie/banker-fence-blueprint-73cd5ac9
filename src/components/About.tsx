import { Award, Users, Clock, Shield } from "lucide-react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const stats = [
  { icon: Users, value: 1500, suffix: "+", label: "Imóveis Protegidos" },
  { icon: Clock, value: 10, suffix: "+", label: "Anos de Experiência" },
  { icon: Award, value: 100, suffix: "%", label: "Clientes Satisfeitos" },
  { icon: Shield, value: 24, suffix: "/7", label: "Suporte Disponível" }
];

const StatCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.3 });
  const count = useCounterAnimation({ 
    end: stat.value, 
    duration: 2000, 
    isInView 
  });
  const Icon = stat.icon;

  return (
    <div 
      ref={ref}
      className="text-center p-6 glass-card rounded-2xl animate-fade-in hover:scale-105 transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <div className="text-3xl font-bold text-primary mb-1">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </div>
  );
};

const About = () => {
  return (
    <section className="section-spacing bg-card">
      <div className="container-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="heading-lg mb-4">Banker Sistemas</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Especialistas em segurança eletrônica desde 2014
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
