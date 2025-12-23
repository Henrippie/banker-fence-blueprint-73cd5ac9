import { Home, Building2, Trees, PawPrint, Baby, Key } from "lucide-react";

const MonitoringSegments = () => {
  const segments = [
    {
      icon: Trees,
      title: "Com áreas externas",
      subtitle: "Proteja seu terraço, pátio ou jardim",
      description: "Nosso sistema cria um escudo de proteção em todos os pontos de acesso vulneráveis."
    },
    {
      icon: Building2,
      title: "Apartamentos",
      subtitle: "Proteção reforçada na porta da frente",
      description: "Detectores de acesso protegem a porta e janelas vulneráveis com tecnologia avançada."
    },
    {
      icon: Home,
      title: "Segunda casa",
      subtitle: "Proteção 24/7",
      description: "Se alguém tentar invadir, detectamos e respondemos imediatamente."
    },
    {
      icon: Key,
      title: "Aluguel",
      subtitle: "Mudamos seu alarme quando você se muda",
      description: "O sistema se adapta às suas necessidades e te acompanha onde quer que você vá."
    },
    {
      icon: PawPrint,
      title: "Animais de estimação",
      subtitle: "100% compatível com pets",
      description: "Escudo protetor nas portas e janelas para que pessoas e animais se movimentem livremente."
    },
    {
      icon: Baby,
      title: "Crianças pequenas",
      subtitle: "Segurança para toda família",
      description: "Sistema inteligente que se adapta à rotina da sua família com total segurança."
    }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="heading-xl text-foreground mb-4">
            Descubra o sistema que combina com você,
            <span className="block gradient-text">seja quem for</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Temos um sistema personalizado, projetado para atender às características do seu imóvel e às necessidades da sua família.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className="group card-premium rounded-2xl p-8 bg-card border border-border hover:border-secondary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                <segment.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">{segment.title}</h3>
              <p className="text-accent font-medium text-sm mb-3">{segment.subtitle}</p>
              <p className="text-muted-foreground text-sm">{segment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonitoringSegments;
