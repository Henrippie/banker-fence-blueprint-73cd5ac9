import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CameraFAQ = () => {
  const faqs = [
    {
      question: "A conta de luz aumenta muito?",
      answer: "Não. O consumo de câmeras modernas é muito baixo, equivalente a algumas lâmpadas LED. O impacto na conta é praticamente imperceptível."
    },
    {
      question: "E se faltar energia?",
      answer: "O sistema pode ser configurado com nobreak ou bateria de backup, mantendo as câmeras funcionando por horas mesmo sem luz."
    },
    {
      question: "Qual a diferença entre câmera IP e câmera analógica?",
      answer: "As câmeras IP transmitem imagem digital com maior resolução e permitem acesso remoto mais fácil. As analógicas são mais simples e funcionam bem em instalações básicas. Indicamos o melhor tipo após avaliar sua necessidade."
    },
    {
      question: "Onde as imagens ficam gravadas?",
      answer: "As gravações ficam armazenadas em um DVR/NVR local na sua propriedade. Também é possível configurar backup em nuvem para maior segurança."
    },
    {
      question: "Consigo ver as câmeras de qualquer lugar?",
      answer: "Sim! Com acesso remoto via aplicativo para Android e iOS, você monitora em tempo real de onde estiver, seja pelo celular ou computador."
    },
    {
      question: "As câmeras gravam à noite?",
      answer: "Sim! Todas nossas câmeras possuem visão noturna infravermelha, garantindo imagens nítidas mesmo em completa escuridão. A qualidade HD permite identificar rostos e placas tanto de dia quanto à noite."
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-background to-muted/30">
      <div className="container-section">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Tire suas Dúvidas</span>
          </div>
          <h3 className="heading-lg text-primary mb-4">
            Perguntas Frequentes
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Respostas para as principais dúvidas sobre sistemas de câmeras CFTV
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-none"
              >
                <div className="card-premium rounded-3xl overflow-hidden">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-accent hover:no-underline px-8 py-6 [&[data-state=open]]:text-accent">
                    <span className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                        {index + 1}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base px-8 pb-8 pt-2 leading-relaxed">
                    <div className="pl-12">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CameraFAQ;
