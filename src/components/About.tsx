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
    <section className="section-spacing bg-gradient-to-br from-muted/50 to-background">
      <div className="container-section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="heading-lg mb-4">Quem somos</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Somos uma empresa especializada em Segurança Eletrônica e tecnologia que tem como maior prioridade, a sua segurança. Por meio de equipes qualificadas e treinadas constantemente, podemos proporcionar aos nossos clientes tranquilidade e a certeza de que um trabalho exemplar será entregue ao final do projeto.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-4">
              Dos sistemas mais simples aos mais complexos, buscamos sempre agir com transparência e honestidade, fornecendo aquilo que é necessário, com a qualidade de produtos líderes de mercado e a preços justos.
            </p>
          </div>
          
          <div className="relative mb-12 rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200"
              alt="Equipe Banker Sistemas trabalhando"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
