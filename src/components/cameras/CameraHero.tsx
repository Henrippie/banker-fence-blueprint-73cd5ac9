import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bankerLogo from "@/assets/banker-logo.png";
const CameraHero = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>
      
      <div className="container-section section-spacing relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-primary-foreground animate-fade-in text-center lg:text-left">
            <img src={bankerLogo} alt="Banker Sistemas - Segurança Eletrônica" className="h-12 md:h-16 mb-6 mx-auto lg:mx-0" width="200" height="64" loading="eager" />
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Proteja seu Patrimônio e Monitore Tudo na Palma da Sua Mão <span className="text-secondary">Monitore Tudo na Palma da Sua Mão</span>
            </h1>
            
            <h2 className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-xl mx-auto lg:mx-0">
              Instalação profissional de Câmeras de Segurança (CFTV) com acesso remoto via celular e suporte de <strong>técnicos especializados</strong>. Tenha visão noturna, gravações em tempo real e imagens em alta definição.
            </h2>
            
            <Button size="lg" onClick={scrollToForm} className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-button text-base md:text-lg px-8 md:px-10 py-6 md:py-7 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation w-full sm:w-auto">Solicitar Orçamento Gratuito<ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="relative animate-slide-in">
            <div className="absolute inset-0 bg-secondary/20 rounded-3xl blur-3xl" aria-hidden="true" />
            <div className="relative rounded-3xl shadow-2xl bg-muted p-8 md:p-12">
              <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-24 h-24 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default CameraHero;