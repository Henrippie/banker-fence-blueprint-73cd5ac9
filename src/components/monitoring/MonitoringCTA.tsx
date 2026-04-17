import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import tecnicoBanker from "@/assets/tecnico-banker.webp";

const MonitoringCTA = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent section-spacing">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1" style={{ aspectRatio: '4 / 3' }}>
            <img 
              src={tecnicoBanker} 
              alt="Técnico Banker Sistemas instalando sistema de monitoramento" 
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left text-primary-foreground order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Proteja seu patrimônio com
              <span className="block text-secondary">Monitoramento 24 Horas Banker</span>
            </h2>

            <p className="text-base md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Mantenha contato imediato com as autoridades de segurança. Nossa equipe altamente treinada age de forma rápida frente a qualquer ocorrência.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="flex items-center gap-2 text-primary-foreground/90 text-sm sm:text-base">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Central 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90 text-sm sm:text-base">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Apoio Móvel</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90 text-sm sm:text-base">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Backup de internet e energia</span>
              </div>
            </div>

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
      </div>
    </section>
  );
};

export default MonitoringCTA;
