import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import bankerLogo from "@/assets/banker-logo.png";
import cercaEletrica2 from "@/assets/cerca-eletrica-2.png";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>
      
      <div className="container-section section-spacing relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-primary-foreground animate-fade-in text-center lg:text-left">
            <img 
              src={bankerLogo} 
              alt="Banker Sistemas - Segurança Eletrônica" 
              className="h-12 md:h-16 mb-6 mx-auto lg:mx-0"
              width="200"
              height="64"
              loading="eager"
            />
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Proteja sua casa ou empresa com <span className="text-secondary">tecnologia de Cerca Elétrica Profissional</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-xl mx-auto lg:mx-0">
              Segurança que assusta invasores antes mesmo de entrar no seu terreno — com instalação rápida e suporte especializado completo.
            </p>
            
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-button text-base md:text-lg px-8 md:px-10 py-6 md:py-7 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation w-full sm:w-auto"
            >
              Quero meu orçamento gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="relative animate-slide-in">
            <div className="absolute inset-0 bg-secondary/20 rounded-3xl blur-3xl" aria-hidden="true" />
            <img
              src={cercaEletrica2}
              alt="Cerca elétrica profissional instalada em muro comercial - proteção e segurança"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
