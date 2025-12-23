import { Camera, Bell, Shield, Smartphone, Radio, Lock, Eye, Car, FileText, Wrench, Zap, Wifi } from "lucide-react";

const MonitoringProducts = () => {
  const products = [
    {
      icon: Shield,
      title: "Central de Monitoramento 24hs",
      description: "Nossa estrutura trabalha 24/7 para dar apoio a ocorrências",
      detail: "Atendimento a intrusões, disparos e solicitações de auxílio enviadas por nossos clientes"
    },
    {
      icon: Car,
      title: "Apoio Móvel",
      description: "Suporte motorizado enviado ao endereço do cliente",
      detail: "Apoio em casos de disparos, intrusões, coações e sinais de pânico - Serviço adicional"
    },
    {
      icon: Eye,
      title: "Monitoramento de Imagens",
      description: "Sistema de câmeras acessado em caso de disparos",
      detail: "Visualização rápida da gravidade da situação e aumento do tempo de resposta"
    },
    {
      icon: Wifi,
      title: "Backup GPRS",
      description: "Comunicação complementar como backup",
      detail: "Mantém a residência segura em caso de cortes propositais e ausência de energia"
    },
    {
      icon: FileText,
      title: "Relatórios",
      description: "Relatórios mensais de eventos do sistema",
      detail: "Informações de disparos, armes, desarmes e outros eventos ocorridos"
    },
    {
      icon: Wrench,
      title: "Pedidos de Manutenção",
      description: "Manutenção 24hs por dia",
      detail: "Solicitação pelo próprio equipamento instalado, sem ligações"
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
      description: "Ação rápida frente a qualquer ocorrência",
      detail: "Contato imediato com as autoridades de segurança para sua proteção"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="heading-xl mb-4">
            Serviços inclusos no
            <span className="block text-secondary">Monitoramento 24hs</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Por meio de equipes altamente treinadas, prestamos assessoria dia e noite para manter a segurança 
            de sua residência ou empresa, mantendo contato imediato com as autoridades de segurança.
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
