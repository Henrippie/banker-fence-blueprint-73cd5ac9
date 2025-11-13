import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Nome é obrigatório" }).max(100),
  phone: z.string().trim().min(14, { message: "Telefone inválido" }).max(15),
  email: z.string().trim().email({ message: "Email inválido" }).max(255),
});

const CameraLeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, phone: formatted });
    if (errors.phone) {
      const result = formSchema.shape.phone.safeParse(formatted);
      if (result.success) {
        setErrors({ ...errors, phone: "" });
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, email: value });
    if (errors.email) {
      const result = formSchema.shape.email.safeParse(value);
      if (result.success) {
        setErrors({ ...errors, email: "" });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = formSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    const message = `*Nova solicitação - Câmeras de Segurança*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Email:* ${formData.email}
${formData.message ? `*Mensagem:* ${formData.message}` : ''}

_Solicitação de diagnóstico gratuito de CFTV_`;

    const phoneNumber = "551126455553";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Aguarde enquanto preparamos seu atendimento...",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <section className="section-spacing bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container-section">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <h3 className="heading-lg text-center text-primary mb-4">
              Solicite um Diagnóstico de Segurança Gratuito
            </h3>
            <p className="text-center text-muted-foreground text-lg mb-8">
              Preencha o formulário e receba:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Avaliação completa dos pontos vulneráveis do seu imóvel
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Orçamento sem compromisso de contratação
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Recomendações personalizadas de proteção
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Suporte rápido e sem burocracia
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`h-12 ${errors.name ? 'border-destructive' : ''}`}
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="(11) 98765-4321"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  maxLength={15}
                  className={`h-12 ${errors.phone ? 'border-destructive' : ''}`}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleEmailChange}
                  className={`h-12 ${errors.email ? 'border-destructive' : ''}`}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="Conte-nos mais sobre suas necessidades de segurança (opcional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[100px]"
                  maxLength={500}
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-success text-success-foreground hover:bg-success/90 shadow-button text-lg py-7 transition-all duration-300 hover:scale-105"
              >
                QUERO MEU DIAGNÓSTICO GRATUITO
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraLeadForm;
