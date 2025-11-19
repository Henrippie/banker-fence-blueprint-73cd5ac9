import { Home, Building2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const CameraSegments = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const segments = [
    {
      icon: <Home className="w-10 h-10" />,
      title: "Residências e Condomínios",
      color: "from-accent/20 to-accent/5",
      benefits: [
        "Proteja sua família e monitore pets remotamente",
        "Veja quem está na portaria antes de abrir",
        "Visão noturna completa do perímetro",
        "Gravações de alta qualidade 24/7"
      ]
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Empresas e Comércios",
      color: "from-primary/20 to-primary/5",
      benefits: [
        "Proteja estoque e equipamentos valiosos",
        "Monitore produtividade e operações",
        "Integração com sistemas de alarme",
        "Múltiplas câmeras e pontos de acesso"
      ]
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-background to-muted/30">
      <div className="container-section">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Home className="w-4 h-4" />
            <span>Soluções Personalizadas</span>
          </div>
          <h3 className="heading-lg text-primary mb-4">
            Para Quem é o Sistema de CFTV
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções sob medida para residências e empresas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className="group card-premium p-10 rounded-3xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${segment.color} flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300`}>
                  {segment.icon}
                </div>
                <h4 className="text-2xl font-bold text-foreground pt-3">
                  {segment.title}
                </h4>
              </div>
              
              <ul className="space-y-4">
                {segment.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/20 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={scrollToForm} 
            className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:from-accent/90 hover:to-accent shadow-[0_12px_32px_rgba(217,88,53,0.4)] text-lg px-12 py-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_rgba(217,88,53,0.5)] group"
          >
            <span>Solicitar Orçamento Gratuito</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CameraSegments;