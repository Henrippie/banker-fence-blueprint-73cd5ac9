import { Home, Building2, CheckCircle2 } from "lucide-react";

const segments = [
  {
    icon: Home,
    title: "Residências e Condomínios",
    description: "Proteção completa para sua família",
    benefits: [
      "Proteção 24h",
      "Dissuasão visual eficiente",
      "Baixo consumo",
      "Integração com alarmes",
      "Manutenção simples"
    ]
  },
  {
    icon: Building2,
    title: "Empresas e Comércios",
    description: "Segurança profissional para seu negócio",
    benefits: [
      "Proteção de patrimônio",
      "Redução de prejuízos",
      "Integração com CFTV",
      "Certificação para seguros",
      "Suporte especializado"
    ]
  }
];

const Segments = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">Para quem é</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções para residências e empresas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div 
                key={index}
                className="glass-card-enhanced p-10 rounded-[2rem] hover:shadow-2xl transition-all duration-500 animate-fade-in hover:scale-[1.02] group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 glass-morphism-dark rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-secondary" />
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
