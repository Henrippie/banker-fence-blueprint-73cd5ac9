import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MonitoringComparison = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const comparisons = [
    { feature: "Monitoramento 24h banker", camera: false, alarm: true },
    { feature: "Atuação imediata (resposta em menos de 60s)", camera: false, alarm: true },
    { feature: "Detecção antecipada da invasão", camera: false, alarm: true },
    { feature: "Acesso a imagens em tempo real", camera: true, alarm: true },
    { feature: "Placa de inibição/dissuasão", camera: false, alarm: true },
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
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Por que escolher o
            <span className="block text-secondary">Monitoramento 24hs Banker?</span>
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            O serviço de Monitoramento 24hs é um complemento vital ao sistema de segurança. 
            Com equipes altamente treinadas, prestamos assessoria dia e noite para manter a segurança de sua residência ou empresa.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
            {/* Header */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr]">
              <div className="p-2 sm:p-4 md:p-6 flex items-center justify-center border-r border-white/20 bg-white/5">
                <span className="font-semibold text-[10px] sm:text-xs md:text-sm text-center text-primary-foreground/80">Características</span>
              </div>
              <div className="p-2 sm:p-4 md:p-6 flex items-center justify-center border-r border-white/20 bg-white/5">
                <span className="font-bold text-[11px] sm:text-sm md:text-base text-center leading-tight">Somente<br className="sm:hidden"/> Câmeras</span>
              </div>
              <div className="p-2 sm:p-4 md:p-6 flex items-center justify-center bg-secondary text-secondary-foreground">
                <span className="font-bold text-[11px] sm:text-sm md:text-base text-center leading-tight">Sistema 24h<br className="sm:hidden"/> Banker</span>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-[1.4fr_1fr_1fr] ${index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'} border-t border-white/10`}
              >
                <div className="p-2 sm:p-3 md:p-4 flex items-center justify-center text-center border-r border-white/10">
                  <span className="text-[11px] sm:text-xs md:text-sm text-primary-foreground/90 leading-snug">{item.feature}</span>
                </div>
                <div className="p-2 sm:p-3 md:p-4 flex items-center justify-center border-r border-white/10">
                  {item.camera === true ? (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    </div>
                  ) : item.camera === "opcional" ? (
                    <span className="text-[10px] sm:text-xs text-primary-foreground/60 bg-white/10 px-1.5 sm:px-2 py-1 rounded">Opcional</span>
                  ) : (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                    </div>
                  )}
                </div>
                <div className="p-2 sm:p-3 md:p-4 flex items-center justify-center bg-secondary/10">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-button text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation w-full sm:w-auto whitespace-normal h-auto"
          >
            <span className="text-center">Fale com um atendente agora mesmo</span>
            <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MonitoringComparison;
