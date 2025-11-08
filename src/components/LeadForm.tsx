import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    // Formatar mensagem para WhatsApp
    const phoneNumber = "5511264555553";
    let whatsappMessage = `*Solicitação de Diagnóstico Gratuito*\n\n`;
    whatsappMessage += `*Nome:* ${formData.name}\n`;
    whatsappMessage += `*WhatsApp:* ${formData.phone}\n`;
    whatsappMessage += `*E-mail:* ${formData.email}`;
    
    if (formData.message) {
      whatsappMessage += `\n\n*Mensagem:*\n${formData.message}`;
    }
    
    // Redirecionar para WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
    
    // Limpar formulário
    setFormData({ name: "", phone: "", email: "", message: "" });
    toast.success("Redirecionando para o WhatsApp...");
  };

  const benefits = [
    "Avaliação completa do seu imóvel",
    "Orçamento sem compromisso",
    "Recomendações personalizadas de proteção",
    "Resposta em até 24 horas"
  ];

  return (
    <section id="form-section" className="section-spacing bg-gradient-to-br from-background to-muted/30">
      <div className="container-section px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="heading-lg mb-3">Solicite um Diagnóstico Gratuito do Seu Perímetro</h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6">
              Preencha o formulário abaixo e receba:
            </p>
            <ul className="text-left mt-4 space-y-2 inline-block">
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-success" />
                Avaliação completa do seu imóvel
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-success" />
                Orçamento sem compromisso
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-success" />
                Recomendações personalizadas de proteção
              </li>
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Benefits */}
            <div className="glass-card p-6 md:p-8 rounded-3xl animate-slide-in">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Você receberá</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-success shrink-0 mt-0.5" />
                    <span className="text-foreground leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 glass-morphism rounded-2xl">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-accent block mb-1">Atendimento rápido</strong>
                  Resposta em até 2 horas
                </p>
              </div>
            </div>
            
            {/* Form */}
            <div className="glass-card p-6 md:p-8 rounded-3xl animate-fade-in" style={{ animationDelay: '200ms' }}>
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome completo *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem (opcional)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos mais sobre sua necessidade..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-button transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation py-6"
                >
                  Quero meu diagnóstico gratuito
                  <Send className="ml-2 w-5 h-5" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Seus dados estão seguros conosco.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
