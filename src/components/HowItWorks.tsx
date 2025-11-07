import { Shield, Zap, Radar } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const steps = [
  {
    icon: Shield,
    number: "01",
    title: "Barreira física e psicológica",
    description: "Os fios eletrificados e as placas de aviso já afastam invasores antes mesmo da tentativa.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800"
  },
  {
    icon: Zap,
    title: "Choque repelente e seguro",
    number: "02",
    description: "Voltagem controlada que inibe a invasão sem oferecer risco grave às pessoas ou animais.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800"
  },
  {
    icon: Radar,
    title: "Monitoramento automático",
    number: "03",
    description: "Qualquer tentativa de corte ou desligamento aciona o alarme e notifica o responsável.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800"
  }
];

const HowItWorks = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-3">Como funciona a cerca elétrica</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative glass-morphism rounded-3xl overflow-hidden transition-all duration-500 animate-fade-in group hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(244,197,66,0.4)]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={step.image}
                    alt={`${step.title} - Como funciona cerca elétrica`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    width={800}
                    height={192}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" aria-hidden="true" />
                  <div className="absolute -bottom-4 left-8 text-7xl font-bold text-secondary/30" aria-hidden="true">
                    {step.number}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-xl card-icon-glow icon-float -mt-12">
                    <Icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-primary-foreground/80 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
