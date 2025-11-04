import { Home, Building2, CheckCircle2 } from "lucide-react";

const segments = [
  {
    icon: Home,
    title: "Residências",
    description: "Proteção para sua família",
    benefits: [
      "Segurança 24h",
      "Dissuasão visual",
      "Baixo consumo"
    ]
  },
  {
    icon: Building2,
    title: "Empresas",
    description: "Proteção profissional",
    benefits: [
      "Proteção patrimonial",
      "Integração CFTV",
      "Suporte especializado"
    ]
  }
];

const Segments = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-3">Soluções personalizadas</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 rounded-3xl hover:shadow-xl transition-all duration-500 animate-fade-in hover:scale-[1.02]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{segment.title}</h3>
                <p className="text-muted-foreground mb-6">{segment.description}</p>
                
                <ul className="space-y-3">
                  {segment.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Segments;
