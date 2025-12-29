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
    <section className="section-spacing bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="heading-xl mb-4">
            Por que escolher o
            <span className="block text-secondary">Monitoramento 24hs Banker?</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            O serviço de Monitoramento 24hs é um complemento vital ao sistema de segurança. 
            Com equipes altamente treinadas, prestamos assessoria dia e noite para manter a segurança de sua residência ou empresa.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl shadow-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
            {/* Header */}
            <div className="grid grid-cols-3">
              <div className="p-4 md:p-6 flex items-center justify-center border-r border-white/20 bg-white/5">
                <span className="font-bold text-sm md:text-base text-center">Somente Câmeras</span>
              </div>
              <div className="p-4 md:p-6 flex items-center justify-center border-r border-white/20 bg-white/5">
                <span className="font-semibold text-xs md:text-sm text-center text-primary-foreground/80">Características</span>
              </div>
              <div className="p-4 md:p-6 flex items-center justify-center bg-secondary text-secondary-foreground">
                <span className="font-bold text-sm md:text-base text-center">Sistema Banker</span>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'} border-t border-white/10`}
              >
                <div className="p-3 md:p-4 flex items-center justify-center border-r border-white/10">
                  {item.camera === true ? (
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-400" />
                    </div>
                  ) : item.camera === "opcional" ? (
                    <span className="text-xs text-primary-foreground/60 bg-white/10 px-2 py-1 rounded">Opcional</span>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                  )}
                </div>
                <div className="p-3 md:p-4 flex items-center justify-center text-center border-r border-white/10">
                  <span className="text-xs md:text-sm text-primary-foreground/90">{item.feature}</span>
                </div>
                <div className="p-3 md:p-4 flex items-center justify-center bg-secondary/10">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-400" />
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
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-button text-base md:text-lg px-8 md:px-10 py-6 md:py-7 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation w-full sm:w-auto"
          >
            Solicitar Orçamento Gratuito
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MonitoringComparison;
