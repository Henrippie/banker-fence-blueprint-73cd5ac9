import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

// Schema de validação
const formSchema = z.object({
  name: z.string().trim().min(3, "Nome deve ter pelo menos 3 caracteres").max(100, "Nome muito longo"),
  phone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone inválido. Use o formato (XX) XXXXX-XXXX"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  cep: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido. Use o formato XXXXX-XXX"),
  message: z.string().max(1000, "Mensagem muito longa").optional()
});

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cep: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Máscara para telefone: (XX) XXXXX-XXXX
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  // Máscara para CEP: XXXXX-XXX
  const formatCEP = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 5) return numbers;
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, phone: formatted });
    
    // Validação em tempo real
    try {
      formSchema.shape.phone.parse(formatted);
      setErrors(prev => ({ ...prev, phone: "" }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, phone: error.errors[0].message }));
      }
    }
  };

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCEP(e.target.value);
    setFormData({ ...formData, cep: formatted });
    
    // Validação em tempo real
    try {
      formSchema.shape.cep.parse(formatted);
      setErrors(prev => ({ ...prev, cep: "" }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, cep: error.errors[0].message }));
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, email: value });
    
    // Validação em tempo real
    try {
      formSchema.shape.email.parse(value);
      setErrors(prev => ({ ...prev, email: "" }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, email: error.errors[0].message }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação completa com zod
    try {
      formSchema.parse(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast.error("Por favor, corrija os erros no formulário");
        return;
      }
    }

    // Formatar mensagem para WhatsApp
    const phoneNumber = "551126455553";
    let whatsappMessage = `*Solicitação de Diagnóstico Gratuito*\n\n`;
    whatsappMessage += `*Nome:* ${formData.name}\n`;
    whatsappMessage += `*WhatsApp:* ${formData.phone}\n`;
    whatsappMessage += `*E-mail:* ${formData.email}\n`;
    whatsappMessage += `*CEP:* ${formData.cep}`;
    
    if (formData.message) {
      whatsappMessage += `\n\n*Mensagem:*\n${formData.message}`;
    }
    
    // Redirecionar para WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
    
    // Limpar formulário
    setFormData({ name: "", phone: "", email: "", cep: "", message: "" });
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
                    onChange={handlePhoneChange}
                    maxLength={15}
                    required
                    className={`w-full ${errors.phone ? 'border-destructive' : ''}`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive mt-1">{errors.phone}</p>
                  )}
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
                    onChange={handleEmailChange}
                    required
                    className={`w-full ${errors.email ? 'border-destructive' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="cep" className="block text-sm font-medium mb-2">
                    CEP *
                  </label>
                  <Input
                    id="cep"
                    type="text"
                    placeholder="00000-000"
                    value={formData.cep}
                    onChange={handleCEPChange}
                    maxLength={9}
                    required
                    className={`w-full ${errors.cep ? 'border-destructive' : ''}`}
                  />
                  {errors.cep && (
                    <p className="text-xs text-destructive mt-1">{errors.cep}</p>
                  )}
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
