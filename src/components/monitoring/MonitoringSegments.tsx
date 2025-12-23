import { Home, Building2, Store, Factory, Warehouse, Hotel } from "lucide-react";

const MonitoringSegments = () => {
  const segments = [
    {
      icon: Home,
      title: "Residências",
      subtitle: "Proteção para sua família",
      description: "Sistema completo de monitoramento que mantém sua casa protegida 24 horas por dia, 7 dias por semana."
    },
    {
      icon: Building2,
      title: "Empresas",
      subtitle: "Segurança corporativa",
      description: "Proteção profissional para seu negócio com monitoramento contínuo e resposta imediata a ocorrências."
    },
    {
      icon: Store,
      title: "Comércios",
      subtitle: "Proteção para seu estabelecimento",
      description: "Sistema de alarme integrado que protege seu comércio contra intrusões e furtos."
    },
    {
      icon: Factory,
      title: "Indústrias",
      subtitle: "Segurança industrial",
      description: "Monitoramento completo de áreas industriais com tecnologia avançada e apoio móvel."
    },
    {
      icon: Warehouse,
      title: "Galpões",
      subtitle: "Proteção de grandes áreas",
      description: "Sistema especializado para proteção de depósitos e centros de distribuição."
    },
    {
      icon: Hotel,
      title: "Condomínios",
      subtitle: "Segurança coletiva",
      description: "Solução integrada para condomínios residenciais e comerciais com central 24h."
    }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="heading-xl text-foreground mb-4">
            Monitoramento para
            <span className="block gradient-text">todos os segmentos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nossa empresa presta assessoria dia e noite para manter a segurança de sua residência ou empresa, 
            com equipes altamente treinadas.
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
