import { Shield, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CameraFinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-accent" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-8 pulse-glow">
            <Shield className="w-12 h-12 text-secondary" />
          </div>
          
          {/* Heading */}
          <h3 className="heading-xl text-primary-foreground mb-6">
            Garantia de Segurança e Qualidade
          </h3>
          
          {/* Description */}
          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Trabalhamos com equipamentos certificados e produtos líderes de mercado, garantindo um sistema de câmeras <strong>confiável</strong> e com <strong>alta durabilidade</strong>.
          </p>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Suporte rápido e sem burocracia",
              "Sem compromisso após o orçamento",
              "Técnicos constantemente treinados",
              "Instalação com garantia de qualidade"
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Check className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-primary-foreground text-left font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            onClick={scrollToForm} 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_12px_32px_rgba(244,197,66,0.5)] text-xl px-12 py-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_rgba(244,197,66,0.6)] group"
          >
            <span>Solicitar Orçamento Gratuito Agora</span>
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-primary-foreground/70 text-sm mt-6">
            ⚡ Resposta em até 1 hora • 🔒 Seus dados estão protegidos
          </p>
        </div>
      </div>
    </section>
  );
};

export default CameraFinalCTA;