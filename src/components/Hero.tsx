import { Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

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
            <div className="inline-flex items-center gap-2 glass-morphism px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">+1.500 imóveis protegidos</span>
            </div>
            
            <h1 className="heading-xl mb-6 leading-tight">
              <span className="text-secondary">Cerca Elétrica Profissional</span> que protege de verdade
            </h1>
            
            <p className="text-xl mb-8 text-primary-foreground/80 max-w-xl leading-relaxed">
              Segurança que intimida invasores antes de entrarem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-button text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
              >
                Quero meu orçamento gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm px-8 py-6"
                onClick={scrollToForm}
              >
                Diagnóstico Gratuito
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="text-sm text-primary-foreground/80">Instalação rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="text-sm text-primary-foreground/80">Suporte especializado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="text-sm text-primary-foreground/80">+1.500 imóveis protegidos</span>
              </div>
            </div>
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
