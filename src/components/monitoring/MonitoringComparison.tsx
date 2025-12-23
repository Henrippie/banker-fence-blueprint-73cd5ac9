import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MonitoringComparison = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const comparisons = [
    { feature: "Monitoramento 24h por profissionais especializados", camera: false, alarm: true },
    { feature: "Atuação imediata (resposta em menos de 60s)", camera: false, alarm: true },
    { feature: "Detecção antecipada antes da invasão", camera: false, alarm: true },
    { feature: "Acesso a imagens em tempo real", camera: true, alarm: true },
    { feature: "Placa de inibição/dissuasão", camera: true, alarm: true },
    { feature: "Fala/Escuta diretamente do local", camera: "opcional", alarm: true },
    { feature: "Botão SOS para emergências", camera: false, alarm: true },
    { feature: "Histórico de acesso", camera: false, alarm: true },
    { feature: "Proteção contra corte de energia", camera: false, alarm: true },
    { feature: "Equipamentos sem fio (sem obras)", camera: false, alarm: true },
    { feature: "Sirene independente sem fio", camera: false, alarm: true },
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="heading-xl text-foreground mb-4">
            Por que escolher o
            <span className="block gradient-text">Monitoramento 24hs Banker</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            O serviço de Monitoramento 24hs é um complemento vital ao sistema de segurança. 
            Com equipes altamente treinadas, prestamos assessoria dia e noite para manter a segurança de sua residência ou empresa.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
            {/* Header */}
            <div className="grid grid-cols-3 bg-primary text-primary-foreground">
              <div className="p-6 flex items-center justify-center border-r border-white/20">
                <span className="font-bold text-center">Somente Câmeras</span>
              </div>
              <div className="p-6 flex items-center justify-center border-r border-white/20">
                <span className="font-semibold text-sm text-center">Características</span>
              </div>
              <div className="p-6 flex items-center justify-center bg-secondary text-secondary-foreground">
                <span className="font-bold text-center">Sistema Banker</span>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'} border-b border-border last:border-b-0`}
              >
                <div className="p-4 flex items-center justify-center border-r border-border">
                  {item.camera === true ? (
                    <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-success" />
                    </div>
                  ) : item.camera === "opcional" ? (
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Opcional</span>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                  )}
                </div>
                <div className="p-4 flex items-center justify-center text-center border-r border-border">
                  <span className="text-sm text-foreground">{item.feature}</span>
                </div>
                <div className="p-4 flex items-center justify-center bg-secondary/5">
                  <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-success" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_12px_32px_rgba(244,197,66,0.4)] text-lg px-12 py-8 group"
          >
            Solicitar Orçamento Gratuito
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MonitoringComparison;
