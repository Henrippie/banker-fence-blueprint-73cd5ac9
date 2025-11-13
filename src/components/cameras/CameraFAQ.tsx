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
    <section className="section-spacing bg-background">
      <div className="container-section">
        <h3 className="heading-lg text-center text-primary mb-4">
          ❓ Perguntas Frequentes
        </h3>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Tire suas dúvidas sobre o sistema de câmeras de segurança
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card px-6 rounded-2xl border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-accent hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CameraFAQ;
