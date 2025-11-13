import { Shield, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const CameraFinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-spacing bg-gradient-to-br from-accent to-primary">
      <div className="container-section text-center">
        <div className="max-w-3xl mx-auto">
          <Shield className="w-20 h-20 text-secondary mx-auto mb-6" />
          
          <h3 className="heading-lg text-primary-foreground mb-4">
            ✅ Garantia de Segurança e Atendimento
          </h3>
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Trabalhamos com equipamentos certificados e produtos líderes de mercado, garantindo um sistema de câmeras confiável e com alta durabilidade.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10 text-left">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <span className="text-primary-foreground">
                Você recebe suporte rápido e sem burocracia
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <span className="text-primary-foreground">
                Sem compromisso de contratação após o orçamento
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <span className="text-primary-foreground">
                Técnicos especializados e constantemente treinados
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <span className="text-primary-foreground">
                Instalação profissional com garantia de qualidade
              </span>
            </div>
          </div>
          
          <Button 
            size="lg"
            onClick={scrollToForm}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-button text-lg px-12 py-7 transition-all duration-300 hover:scale-105"
          >
            Solicitar Orçamento Gratuito Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CameraFinalCTA;
