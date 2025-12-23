import { ShieldCheck, Video, Bell, Clock, Smartphone, Lock } from "lucide-react";

const MonitoringFeatures = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Detecção antecipada",
      subtitle: "sem risco de sabotagem",
      items: [
        "Placa de aviso faz o invasor pensar duas vezes",
        "Câmeras e sensores avançados sem fios",
        "Em caso de violação, o alarme dispara imediatamente"
      ]
    },
    {
      icon: Video,
      title: "Intervenção humana imediata",
      subtitle: "pela nossa Central de Monitoramento 24h",
      items: [
        "Recebemos o sinal e acessamos as câmeras",
        "Profissionais treinados 24/7",
        "Verificação em tempo real da situação"
      ]
    },
    {
      icon: Bell,
      title: "Aviso à polícia em até 60 segundos",
      subtitle: "ação rápida para garantir sua proteção",
      items: [
        "Resposta rápida e eficaz",
        "Notificação imediata às autoridades",
        "Suporte até chegada de ajuda"
      ]
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-background to-muted/30">
      <div className="container-section">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Proteção Completa</span>
          </div>
          <h2 className="heading-xl text-foreground mb-4">
            Proteja sua residência ou empresa com o
            <span className="block gradient-text">Sistema de Alarme com Videomonitoramento</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group card-premium rounded-3xl p-8 bg-card hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-accent font-medium mb-4">
                {feature.subtitle}
              </p>
              
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Control Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Videomonitoramento e controle na
              <span className="block gradient-text">palma da sua mão</span>
            </h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Gerencie tudo o que acontece no seu imóvel direto pelo celular. Controle tudo pelo app, arme e desarme, veja quem tem acesso ao seu imóvel e tenha o controle das câmeras em tempo real.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                <Video className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Câmeras ao vivo</p>
                  <p className="text-xs text-muted-foreground">Acesso em tempo real</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                <Smartphone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-sm">App intuitivo</p>
                  <p className="text-xs text-muted-foreground">Fácil de usar</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                <Lock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Privacidade total</p>
                  <p className="text-xs text-muted-foreground">Imagens seguras</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Gravação HD</p>
                  <p className="text-xs text-muted-foreground">Alta resolução</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-primary to-accent rounded-3xl p-8 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 right-10 w-32 h-32 bg-secondary rounded-full blur-2xl" />
              </div>
              
              {/* Phone mockup */}
              <div className="relative mx-auto w-48 h-96 bg-foreground rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-primary to-accent rounded-2xl overflow-hidden flex flex-col">
                  <div className="h-8 bg-foreground/20 flex items-center justify-center">
                    <div className="w-16 h-1 bg-foreground/30 rounded-full" />
                  </div>
                  <div className="flex-1 p-3 flex flex-col gap-2">
                    <div className="bg-white/20 rounded-lg p-2 text-xs text-primary-foreground/80">
                      <p className="font-semibold mb-1">Câmera 01</p>
                      <div className="w-full h-16 bg-white/10 rounded flex items-center justify-center">
                        <Video className="w-6 h-6 text-primary-foreground/50" />
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-2 text-xs text-primary-foreground/80">
                      <p className="font-semibold mb-1">Câmera 02</p>
                      <div className="w-full h-16 bg-white/10 rounded flex items-center justify-center">
                        <Video className="w-6 h-6 text-primary-foreground/50" />
                      </div>
                    </div>
                    <div className="mt-auto flex gap-2">
                      <div className="flex-1 bg-secondary rounded-lg py-2 text-center text-xs font-semibold text-secondary-foreground">
                        Armar
                      </div>
                      <div className="flex-1 bg-white/20 rounded-lg py-2 text-center text-xs font-semibold text-primary-foreground">
                        Desarmar
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringFeatures;
