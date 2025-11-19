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
      answer: "Não. O consumo de um sistema de DVR e câmeras é baixíssimo, similar ao de um roteador de internet. O impacto na conta de luz é mínimo."
    },
    {
      question: "E se faltar energia?",
      answer: "O sistema desliga. Por isso, recomendamos a instalação de um Nobreak (bateria) que mantém a proteção por várias horas, garantindo gravação contínua mesmo durante quedas de energia."
    },
    {
      question: "E se alguém cortar os fios?",
      answer: "Um alarme pode ser disparado quando há perda de sinal. Além disso, em projetos corporativos, usamos sistemas que alertam imediatamente sobre a perda de sinal de uma câmera específica, permitindo ação rápida."
    },
    {
      question: "Onde as imagens ficam gravadas?",
      answer: "Ficam em um gravador digital (DVR) instalado em local seguro no seu imóvel. Você pode acessá-las localmente ou pela internet através do celular, tablet ou computador, sem pagar mensalidade."
    },
    {
      question: "Consigo ver as câmeras de qualquer lugar?",
      answer: "Sim! Com acesso remoto via aplicativo, você monitora seu imóvel de qualquer lugar do mundo através do smartphone, tablet ou notebook. Basta ter conexão com a internet."
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
