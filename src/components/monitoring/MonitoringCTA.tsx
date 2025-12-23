import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const MonitoringCTA = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent section-spacing">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-secondary rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-accent rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Oferta por Tempo Limitado</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Garanta <span className="text-secondary">HOJE</span> seu sistema de
            <span className="block">monitoramento profissional</span>
          </h2>

          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Não espere acontecer. Proteja sua família e seu patrimônio com a tecnologia mais avançada do mercado.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span>Instalação em 24h</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span>Orçamento gratuito</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span>Central 24h</span>
            </div>
          </div>

          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_16px_48px_rgba(244,197,66,0.5)] text-xl px-16 py-10 group pulse-glow"
          >
            SOLICITAR ORÇAMENTO AGORA
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Button>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
            <Clock className="w-4 h-4" />
            <span>Responderemos em até 30 minutos em horário comercial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringCTA;
