import { Clock, Shield, Bell, Users } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const benefits = [
  {
    icon: Clock,
    title: "Instalação rápida e segura",
    description: "Técnicos especializados cuidam de tudo sem dor de cabeça.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=600"
  },
  {
    icon: Shield,
    title: "Tecnologia confiável",
    description: "Os melhores sistemas modernos do mercado com alta durabilidade.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600"
  },
  {
    icon: Bell,
    title: "Monitoramento e aviso imediato",
    description: "Em caso de corte ou violação.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600"
  },
  {
    icon: Users,
    title: "Atendimento personalizado",
    description: "Suporte antes, durante e depois da instalação.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600"
  }
];

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0], index: number }) => {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.2 });
  const Icon = benefit.icon;
  
  return (
    <div 
      ref={ref}
      className={`card-premium rounded-2xl overflow-hidden group transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
                <div className="relative h-40 overflow-hidden">
                  <OptimizedImage
                    src={benefit.image}
                    alt={`${benefit.title} - Banker Sistemas cerca elétrica`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    width={600}
                    height={160}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent" aria-hidden="true" />
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg card-icon-glow icon-float -mt-16 relative">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-section">
        <div className="text-center mb-12 md:mb-16 animate-fade-in px-4">
          <h2 className="heading-lg mb-3">Por que escolher a Banker Sistemas?</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Mais de 1.500 imóveis protegidos em São Paulo e região confiam na Banker para garantir segurança real, 24h por dia.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
