import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import bankerLogo from "@/assets/banker-logo.png";
import carroBanker from "@/assets/carro-banker.webp";

const MonitoringHero = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent min-h-screen flex items-center pt-24 lg:pt-0">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>
      
      <div className="container-section section-spacing relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-primary-foreground animate-fade-in text-center lg:text-left">
            <img 
              src={bankerLogo} 
              alt="Banker Sistemas - Monitoramento 24 Horas" 
              width={200}
              height={80}
              className="h-12 md:h-20 w-auto mb-6 mx-auto lg:mx-0 object-contain"
              loading="eager"
              fetchPriority="high"
            />
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Proteção 24 Horas</span>
            </div>
            
            <h1 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight break-words">
              Monitoramento de Alarme <span className="text-[#87CEEB]">Banker</span> 24 horas por dia
            </h1>
            
            <p className="text-base md:text-xl mb-8 text-primary-foreground/90 max-w-xl mx-auto lg:mx-0">
              Equipes altamente treinadas prestam assessoria dia e noite para manter a segurança de sua residência ou empresa, com contato imediato com a policia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Central 24/7</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Apoio Móvel</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Backup de internet e energia</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Resposta Imediata</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-button text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation w-full sm:w-auto whitespace-normal h-auto"
            >
              <span className="text-center">Quero defender minha casa hoje mesmo</span>
              <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
            </Button>
          </div>
          
          <div className="relative animate-slide-in mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-secondary/20 rounded-3xl blur-3xl" aria-hidden="true" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4 / 3' }}>
              <img 
                src={carroBanker} 
                alt="Viatura Banker Sistemas - Monitoramento 24h" 
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="w-full h-full rounded-3xl object-cover"
              />
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 to-transparent p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">24/7</div>
                    <div className="text-[10px] sm:text-xs text-primary-foreground/70">Monitoramento</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">&lt;60s</div>
                    <div className="text-[10px] sm:text-xs text-primary-foreground/70">Tempo de Resposta</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Status */}
            <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30 mt-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-400">Central Operando 24h</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MonitoringHero;
