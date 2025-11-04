import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "A conta de luz aumenta muito?",
    answer: "Não. O consumo é mínimo, equivalente a uma lâmpada acesa 24h."
  },
  {
    question: "E se faltar energia?",
    answer: "O sistema possui bateria que mantém a proteção por várias horas."
  },
  {
    question: "A cerca elétrica é perigosa para crianças ou animais?",
    answer: "Não. O choque é apenas repelente, não letal. Seguindo todas as normas."
  },
  {
    question: "E se alguém cortar os fios?",
    answer: "Um alarme sonoro é disparado imediatamente e você é alertado."
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
