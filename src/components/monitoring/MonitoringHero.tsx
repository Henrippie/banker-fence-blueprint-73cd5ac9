import { ArrowRight, Shield, Phone, Clock, Eye, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import OptimizedImage from "@/components/OptimizedImage";
import bankerLogo from "@/assets/banker-logo.png";

const MonitoringHero = () => {
  const [phone, setPhone] = useState("");

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return `(${numbers}`;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    if (formatted.replace(/\D/g, "").length <= 11) {
      setPhone(formatted);
    }
  };

  const handleSubmit = () => {
    const phoneNumber = phone.replace(/\D/g, "");
    if (phoneNumber.length >= 10) {
      const message = `Olá! Gostaria de solicitar um orçamento para sistema de monitoramento 24h. Meu telefone: ${phone}`;
      window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent min-h-screen flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>
      
      {/* Animated Elements */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container-section section-spacing relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content - 3 columns */}
          <div className="lg:col-span-3 text-primary-foreground animate-fade-in">
            <OptimizedImage 
              src={bankerLogo} 
              alt="Banker Sistemas - Monitoramento 24h" 
              className="h-14 md:h-20 mb-8 object-contain drop-shadow-2xl" 
              priority={true}
              width={180}
              height={80}
            />

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Sistema de Alarme com
              <span className="block mt-2 gradient-text bg-gradient-to-r from-secondary via-secondary to-accent bg-clip-text text-transparent">
                Videomonitoramento 24h
              </span>
            </h1>

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-destructive/90 backdrop-blur-sm border border-destructive mb-6">
              <span className="text-lg md:text-xl font-bold text-destructive-foreground">
                Até 40% de desconto
              </span>
            </div>

            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed max-w-2xl">
              A tranquilidade para sua <strong>residência</strong> ou <strong>empresa</strong> que só um sistema profissional de monitoramento pode entregar. Central 24h com resposta imediata.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Central 24h</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Resposta em 60s</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Eye className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Videomonitoramento</span>
              </div>
            </div>

            <Button 
              size="lg" 
              onClick={scrollToForm} 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_12px_32px_rgba(244,197,66,0.4)] text-base md:text-lg px-10 md:px-12 py-7 md:py-8 transition-all duration-300 hover:scale-105 lg:hidden w-full sm:w-auto group"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Form Card - 2 columns */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  CALCULE o orçamento
                </h2>
                <p className="text-muted-foreground text-sm">
                  do Sistema de Monitoramento
                </p>
              </div>

              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground text-lg py-7 mb-6 group"
              >
                SOLICITAR AGORA
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-card px-4 text-muted-foreground">ou ligamos para você</span>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <Input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="flex-1 h-12 text-base"
                />
                <Button 
                  onClick={handleSubmit}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-6"
                >
                  Ligaremos já!
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center mb-6">
                Ao clicar você aceita nossa Política de Privacidade
              </p>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground text-center mb-2">OU LIGUE PARA NÓS</p>
                <a 
                  href="tel:08001234567" 
                  className="flex items-center justify-center gap-2 text-2xl font-bold text-primary hover:text-accent transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  0800 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MonitoringHero;
