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
      question: "O que é o monitoramento 24h?",
      answer: "É um serviço onde nossa central de vigilância acompanha seu sistema de alarme 24 horas por dia. Quando ocorre uma ocorrência, nossa equipe responde em até 60 segundos e toma as ações necessárias."
    },
    {
      question: "Quanto tempo leva para a central responder?",
      answer: "Nossa equipe responde em até 60 segundos após o disparo do alarme. Analisamos a situação em tempo real e acionamos os procedimentos de segurança necessários."
    },
    {
      question: "E se eu acionar o alarme por engano?",
      answer: "Não há problema! Você pode cancelar o alerta pela central ou pelo aplicativo. Nossa equipe entrará em contato para confirmar a situação antes de acionar qualquer procedimento."
    },
    {
      question: "O que acontece quando o alarme dispara?",
      answer: "Nossa central recebe o alerta imediatamente. Os operadores acessam as câmeras em tempo real, avaliam a situação e tomam ação: acionam a sirene, entram em contato com você e, se necessário, acionam a polícia."
    },
    {
      question: "O sistema funciona sem internet?",
      answer: "Sim! Utilizamos conexão 4G/5G como backup automático. Além disso, o sistema possui bateria que mantém tudo funcionando por horas, mesmo sem energia elétrica."
    },
    {
      question: "Quem são os profissionais que monitoram?",
      answer: "Nossa central é composta por profissionais altamente treinados em segurança e vigilância. Passam por treinamento constante e seguem protocolos rigorosos para cada tipo de ocorrência."
    },
    {
      question: "Consigo acompanhar as câmeras ao vivo?",
      answer: "Sim! Temos um aplicativo exclusivo para Android e iOS onde você acompanha tudo em tempo real. Além de visualizar as câmeras ao vivo, você recebe notificações instantâneas, pode armar e desarmar o sistema remotamente, e tem acesso ao histórico de eventos. Tudo na palma da sua mão, de onde estiver."
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
            Respostas para as principais dúvidas sobre o serviço de monitoramento 24h
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
