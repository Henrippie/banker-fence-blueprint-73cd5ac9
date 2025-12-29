import { ShieldCheck, Video, Car, Bell, FileText, Wrench, Wifi, Zap } from "lucide-react";

const MonitoringFeatures = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Central de Monitoramento 24hs",
      description: "Nossa estrutura trabalha 24/7 para dar apoio a ocorrências. Atendimento a intrusões, disparos e solicitações de auxílio enviadas por nossos clientes."
    },
    {
      icon: Car,
      title: "Apoio Móvel",
      description: "Suporte motorizado enviado ao endereço do cliente em casos de disparos, intrusões, coações e sinais de pânico. Serviço adicional."
    },
    {
      icon: Video,
      title: "Monitoramento de Imagens",
      description: "Sistema de câmeras acessado em caso de disparos para visualização rápida da gravidade da situação e aumento do tempo de resposta."
    },
    {
      icon: Wifi,
      title: "Backup GPRS",
      description: "Comunicação complementar utilizada como backup. Mantém a residência segura em caso de cortes propositais e ausência de energia."
    },
    {
      icon: FileText,
      title: "Relatórios Mensais",
      description: "Disponibilizamos relatórios mensais contendo informações de eventos ocorridos no sistema como disparos, armes, desarmes e outros."
    },
    {
      icon: Wrench,
      title: "Pedidos de Manutenção",
      description: "Solicite manutenção 24hs por dia por meio do próprio equipamento instalado, sem a necessidade de ligações e outros procedimentos."
    },
    {
      icon: Bell,
      title: "Sirene de Alta Potência",
      description: "Elemento dissuasório que chama a atenção interna e externamente para uma potencial intrusão em sua propriedade."
    },
    {
      icon: Zap,
      title: "Resposta Imediata",
      description: "Ação rápida frente a qualquer ocorrência com contato imediato com as autoridades de segurança para sua proteção."
    }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="heading-xl text-foreground mb-4">
            Serviços inclusos no
            <span className="block gradient-text">Monitoramento 24hs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Por meio de equipes altamente treinadas, prestamos assessoria dia e noite para manter a segurança 
            de sua residência ou empresa, mantendo contato imediato com as autoridades de segurança.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group card-premium rounded-2xl p-6 bg-card border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonitoringFeatures;
