import { Home, Building2, CheckCircle2 } from "lucide-react";

const segments = [
  {
    icon: Home,
    title: "Residências e Condomínios",
    description: "Proteção completa para sua família e patrimônio",
    benefits: [
      "Proteção 24h para toda a família",
      "Dissuasão visual eficiente",
      "Baixo consumo de energia",
      "Integração com alarmes residenciais",
      "Manutenção simples e rápida"
    ]
  },
  {
    icon: Building2,
    title: "Empresas e Comércios",
    description: "Segurança profissional para seu negócio",
    benefits: [
      "Proteção de estoque e equipamentos",
      "Redução de riscos e prejuízos",
      "Sistema integrado com CFTV",
      "Certificação para seguros",
      "Suporte técnico especializado"
    ]
  }
];

const Segments = () => {
  return (
    <section className="section-spacing bg-muted">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">Para quem é nossa solução</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Atendemos diferentes necessidades com a mesma excelência e comprometimento.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
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
