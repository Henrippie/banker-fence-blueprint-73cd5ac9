import { Camera, Bell, Shield, Smartphone, Radio, Lock, Eye, Zap } from "lucide-react";

const MonitoringProducts = () => {
  const products = [
    {
      icon: Shield,
      title: "Placas Dissuasórias",
      description: "Visíveis no exterior do imóvel, é a primeira barreira de proteção contra intrusão",
      detail: "A placa mostra ao invasor que o imóvel está protegido por alarme monitorado profissional"
    },
    {
      icon: Radio,
      title: "Painel de Controle - SOS",
      description: "Recebe e analisa todos os sinais para enviá-los à Central",
      detail: "Conectado à Central 24h, com botão SOS e comunicação em caso de emergências"
    },
    {
      icon: Eye,
      title: "Fotodetectores",
      description: "Capturam imagens para verificação em segundos",
      detail: "Acesso da central somente em caso de disparo, controle próprio com acesso às imagens"
    },
    {
      icon: Lock,
      title: "Detector de Acesso",
      description: "Com tecnologia Shock Sensor",
      detail: "Protege portas e janelas detectando vibrações, golpes e abertura antes do invasor entrar"
    },
    {
      icon: Camera,
      title: "Câmeras HD",
      description: "Videomonitoramento interno e externo",
      detail: "Imagens Full HD armazenadas com acesso direto às imagens pelo App"
    },
    {
      icon: Smartphone,
      title: "Controle de Acesso",
      description: "Reforça a proteção na entrada",
      detail: "Controle e registro de entrada e saída com chaves inteligentes"
    },
    {
      icon: Bell,
      title: "Sirene de Alta Potência",
      description: "Elemento dissuasório em caso de intrusão",
      detail: "Chama a atenção interna e externamente para uma potencial intrusão"
    },
    {
      icon: Zap,
      title: "Resposta Imediata",
      description: "Proteção mesmo quando você está fora",
      detail: "Com o sistema ativado, você e sua família estão protegidos pela Central 24h"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="heading-xl mb-4">
            Sistema de Alarme com Videomonitoramento para
            <span className="block text-secondary">detecção e atuação antecipada</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Só a tecnologia do melhor sistema de monitoramento é capaz de detectar uma potencial invasão e atuar em segundos. 
            Cada elemento trabalha de forma independente, sem fios, priorizando a sua segurança.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:border-secondary/50"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                <product.icon className="w-7 h-7 text-secondary" />
              </div>
              
              <h3 className="text-lg font-bold mb-2">{product.title}</h3>
              <p className="text-sm text-primary-foreground/80 mb-3">{product.description}</p>
              <p className="text-xs text-primary-foreground/60">{product.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonitoringProducts;
