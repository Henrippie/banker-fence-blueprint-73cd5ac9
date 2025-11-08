import { Home, Building2, CheckCircle2 } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const segments = [
  {
    icon: Home,
    title: "Residências e condomínios",
    description: "Nossa solução é ideal para quem não quer correr riscos e precisa de proteção real todos os dias:",
    benefits: [
      "Proprietários que querem proteger família, pets e patrimônio.",
      "Casas e condomínios que buscam um sistema de dissuasão visível para afastar invasores.",
      "Quem deseja segurança sem aumentar muito a conta de energia."
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800"
  },
  {
    icon: Building2,
    title: "Empresas e comércios",
    description: "Proteção profissional para seu negócio:",
    benefits: [
      "Lojas, escritórios e galpões que precisam proteger estoque e equipamentos.",
      "Empresas que desejam reduzir riscos de invasão e vandalismo.",
      "Condomínios comerciais e prédios que querem um sistema integrado ao alarme existente."
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
  }
];

const SegmentCard = ({ segment, index }: { segment: typeof segments[0], index: number }) => {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.2 });
  const Icon = segment.icon;
  
  return (
    <div 
      ref={ref}
      className={`card-premium rounded-3xl overflow-hidden group transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
                <div className="relative h-64 overflow-hidden">
                  <OptimizedImage
                    src={segment.image}
                    alt={`Cerca elétrica profissional para ${segment.title} - Banker Sistemas`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    width={800}
                    height={256}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" aria-hidden="true" />
                </div>
                
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 shadow-xl card-icon-glow icon-float -mt-20 relative">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{segment.title}</h3>
                  <p className="text-muted-foreground mb-6">{segment.description}</p>
                  
                  <ul className="space-y-3">
                    {segment.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
    </div>
  );
};

const Segments = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-3">Para quem é a Cerca Elétrica da Banker Sistemas</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Se você quer dormir tranquilo sabendo que seu imóvel está protegido — seja sua casa ou seu negócio — a cerca elétrica profissional é para você.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {segments.map((segment, index) => (
            <SegmentCard key={index} segment={segment} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;
