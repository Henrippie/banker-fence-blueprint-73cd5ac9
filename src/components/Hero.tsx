import { Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import bankerLogo from "@/assets/banker-logo.png";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>
      
      <div className="container-section section-spacing relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground animate-fade-in">
            <img 
              src={bankerLogo} 
              alt="Banker Sistemas" 
              className="h-16 mb-6"
            />
            
            <h1 className="heading-xl mb-6 leading-tight">
              Sua segurança merece <span className="text-secondary">tecnologia de verdade</span>
            </h1>
            
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-xl">
              Cerca elétrica certificada. Instalação em 24h.
            </p>
            
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-button text-lg px-10 py-7 transition-all duration-300 hover:scale-105"
            >
              Orçamento Gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="relative animate-slide-in">
            <div className="absolute inset-0 bg-secondary/20 rounded-3xl blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200" 
              alt="Cerca elétrica instalada em muro residencial"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
