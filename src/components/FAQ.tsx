import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "A cerca elétrica consome muita energia?",
    answer: "Não. O consumo é muito baixo, equivalente a uma lâmpada LED comum. A tecnologia moderna permite proteção eficiente com economia de energia."
  },
  {
    question: "E se faltar energia elétrica?",
    answer: "Nossos sistemas podem ser integrados com baterias de backup (opcional), garantindo funcionamento contínuo mesmo durante quedas de energia."
  },
  {
    question: "É seguro para crianças e animais de estimação?",
    answer: "Sim. O sistema gera pulsos de alta tensão e baixa corrente, projetados para repelir sem causar lesões graves. É totalmente seguro dentro das normas técnicas."
  },
  {
    question: "E se alguém tentar cortar os fios?",
    answer: "O sistema detecta imediatamente tentativas de rompimento e envia alertas. Além disso, os fios são instalados de forma estratégica para dificultar o acesso."
  },
  {
    question: "Qual é o prazo de instalação?",
    answer: "Em média, a instalação completa é realizada em 1 a 2 dias, dependendo do tamanho do perímetro e complexidade do projeto."
  },
  {
    question: "Existe garantia?",
    answer: "Sim. Oferecemos garantia de equipamentos e instalação, além de suporte técnico contínuo para manutenção preventiva e corretiva."
  },
  {
    question: "Posso integrar com meu sistema de alarme atual?",
    answer: "Sim. Nossos sistemas são compatíveis com a maioria dos alarmes e câmeras de segurança, criando uma proteção integrada e ainda mais eficiente."
  }
];

const FAQ = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="heading-lg mb-4">Perguntas Frequentes</h2>
            <p className="body-lg text-muted-foreground">
              Respostas para as dúvidas mais comuns sobre cerca elétrica.
            </p>
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
