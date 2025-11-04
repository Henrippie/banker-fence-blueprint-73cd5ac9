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
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-8 mx-auto">
            <Shield className="w-10 h-10 text-secondary-foreground" />
          </div>
          
          <h2 className="heading-lg mb-6">
            Proteja o que é seu com tecnologia de verdade
          </h2>
          
          <p className="body-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Não espere uma tentativa de invasão para tomar providências. Invista em segurança profissional e durma tranquilo.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="text-sm">Garantia de instalação</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="text-sm">Suporte especializado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="text-sm">Certificação técnica</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-button text-lg px-10 py-7 transition-all duration-300 hover:scale-105"
          >
            Solicitar orçamento gratuito agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <p className="text-sm text-primary-foreground/70 mt-6">
            Resposta em até 2 horas úteis • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
