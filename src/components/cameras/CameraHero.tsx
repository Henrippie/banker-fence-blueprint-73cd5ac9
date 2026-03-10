import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import bankerLogo from "@/assets/banker-logo.png";
import cameraCCTVHero from "@/assets/camera-cctv-hero.jpg";

const CameraHero = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[160px]" />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      <div className="container-section section-spacing relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground animate-fade-in text-center lg:text-left">
            <OptimizedImage 
              src={bankerLogo} 
              alt="Banker Sistemas - Segurança Eletrônica - Instalação de Câmeras CFTV" 
              className="h-10 md:h-20 mb-6 mx-auto lg:mx-0" 
              objectFit="contain"
              priority={true}
              width={180}
              height={80}
            />
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Especialistas em Segurança</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Proteja seu Patrimônio com 
              <span className="block mt-2 gradient-text bg-gradient-to-r from-secondary via-secondary to-accent bg-clip-text text-transparent">
                Tecnologia de Ponta
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Sistema completo de <strong>Câmeras CFTV</strong> com acesso remoto, visão noturna HD e gravações em tempo real. Monitore tudo na palma da sua mão.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Instalação em 24h</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Garantia de qualidade</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Suporte especializado</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Acesso remoto via app</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              onClick={scrollToForm} 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_12px_32px_rgba(244,197,66,0.4)] text-base md:text-lg px-10 md:px-12 py-7 md:py-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_rgba(244,197,66,0.5)] active:scale-95 touch-manipulation w-full sm:w-auto group"
            >
              Solicitar Orçamento Gratuito
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Right Visual */}
          <div className="relative animate-slide-in">
            {/* Glow Effects */}
            <div className="absolute inset-0 bg-secondary/30 rounded-3xl blur-[100px]" aria-hidden="true" />
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-3xl blur-2xl" aria-hidden="true" />
            
            {/* Main Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 md:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              
              {/* Camera Feed Mockup */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <OptimizedImage 
                  src={cameraCCTVHero}
                  alt="Sistema de Câmera de Segurança CFTV - Monitoramento Profissional"
                  className="w-full h-full object-cover"
                  priority={true}
                  width={800}
                  height={450}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/90 backdrop-blur-sm text-white text-sm font-medium z-10">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span>Monitoramento ao vivo</span>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-xs text-primary-foreground/70">Monitoramento</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-secondary">HD</div>
                  <div className="text-xs text-primary-foreground/70">Alta Definição</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-secondary">∞</div>
                  <div className="text-xs text-primary-foreground/70">Visão Noturna</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CameraHero;