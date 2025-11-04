import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Consome muita energia?",
    answer: "Não. Consumo equivalente a uma lâmpada LED."
  },
  {
    question: "E se faltar energia?",
    answer: "Opção de bateria de backup para funcionamento contínuo."
  },
  {
    question: "É seguro para crianças e pets?",
    answer: "Sim. Alta tensão, baixa corrente. Repele sem causar lesões."
  },
  {
    question: "Prazo de instalação?",
    answer: "1 a 2 dias em média."
  },
  {
    question: "Tem garantia?",
    answer: "Sim. Garantia completa de equipamentos e instalação."
  }
];

const FAQ = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="heading-lg mb-3">Perguntas frequentes</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl shadow-sm px-6 border-none animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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

export default FAQ;
