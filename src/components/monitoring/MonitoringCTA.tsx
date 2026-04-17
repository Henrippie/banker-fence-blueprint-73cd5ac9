import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import tecnicoBanker from "@/assets/tecnico-banker.png";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <img 
              src={tecnicoBanker} 
              alt="Técnico Banker Sistemas instalando sistema de monitoramento" 
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left text-primary-foreground order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Proteja seu patrimônio com
              <span className="block text-secondary">Monitoramento 24 Horas Banker</span>
            </h2>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Mantenha contato imediato com as autoridades de segurança. Nossa equipe altamente treinada age de forma rápida frente a qualquer ocorrência.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Central 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Apoio Móvel</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Backup de internet e energia</span>
              </div>
            </div>

            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-button text-base md:text-lg px-8 md:px-10 py-6 md:py-7 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation w-full sm:w-auto"
            >
              Fale com um atendente agora mesmo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringCTA;
