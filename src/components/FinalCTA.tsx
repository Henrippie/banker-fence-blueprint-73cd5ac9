import { Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-spacing bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
      <div className="container-section">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Shield className="w-10 h-10 text-secondary-foreground" />
          </div>
          
          <h2 className="heading-lg mb-6">
            Proteja o que é seu
          </h2>
          
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Orçamento gratuito em até 24 horas
          </p>
          
          <div className="space-y-4 mb-8 max-w-xl mx-auto text-left">
            <p className="flex items-center gap-3 text-primary-foreground/90">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
              Trabalhamos com equipamentos certificados e instalação profissional.
            </p>
            <p className="flex items-center gap-3 text-primary-foreground/90">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
              Você recebe suporte rápido e sem burocracia.
            </p>
            <p className="flex items-center gap-3 text-primary-foreground/90">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
              Sem compromisso de contratação após o orçamento.
            </p>
          </div>
          
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-button text-lg px-12 py-7 transition-all duration-300 hover:scale-105"
          >
            Solicitar orçamento gratuito agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
