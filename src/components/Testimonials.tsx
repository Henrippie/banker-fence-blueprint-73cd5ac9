import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Condomínio Vila Paulista",
    location: "São Paulo - SP",
    text: "Aqui no condomínio contratamos a empresa para uma manutenção no nosso sistema de cerca elétrica. O contrato orçamento foi super rápido e a execução foi feita com extrema qualidade. O Gustavo é um profissional experiente e tem muito recurso técnico para executar o serviço. A experiência do condomínio foi ótima, tanto que vamos estender nossa parceria para câmeras de segurança e portões eletrônicos. Recomendo fortemente o serviço da empresa para todos, pois eles trabalham com prazo, responsabilidade e eficiência nos serviços propostos. Preço justo e agilidade e qualidade na entrega.",
    rating: 5
  },
  {
    name: "Adriano Synesio Bresser",
    location: "São Paulo - SP",
    text: "Contratei a Banker Sistemas para corrigir os erros de instalação da minha cerca elétrica, feita por outra empresa. Recebi o proprietário, Sr. Gustavo, que corrigiu, fez reparos necessários e complementou com o que faltava, deixando-a perfeita. Tudo foi feito com rapidez, eficiência e honestidade. Não houve substituição dos componentes que estavam bons e o valor pago foi compatível com o que foi feito. Essa empresa será sempre chamada quando for necessário. Recomendo muito. Parabéns pelo serviço realizado.",
    rating: 5
  },
  {
    name: "Marcelo Fanchini",
    location: "São Paulo - SP",
    text: "Mais importante que ser bem atendido na hora da venda é você ter o respaldo quando aciona a garantia de instalação. Foi exatamente o que eu tive com a empresa Banker, fui atendido prontamente e além da cordialidade no atendimento trocaram o aparelho no mesmo dia sem custo algum. Meus parabéns pelo atendimento fica aqui minha indicação como consumidor.",
    rating: 5
  },
  {
    name: "Marcelo Ramiro",
    location: "São Paulo - SP",
    text: "Empresa com excelente atendimento, educados, funcionários altamente profissionais com enorme paciência para explicar a pessoas leigas como eu. Fizeram além dos ajustes combinados para satisfação no atendimento. Cobraram preço justo sem tentar empurrar produtos ou cobrar a mais. Super recomendo.",
    rating: 4
  },
  {
    name: "Felipe D'Angelo de Castro",
    location: "São Paulo - SP",
    text: "A melhor empresa de segurança que você vai encontrar, excelente atendimento. Prestam um serviço de ótima qualidade, com os melhores produtos que tem no mercado. Tenho na minha empresa todas o sistema de monitoramento deles, e não tenho queixas! Quando preciso de assistência estão sempre a disposição para atender o mais rápido possível! Recomendo a todos o serviço desta ótima empresa!!",
    rating: 5
  },
  {
    name: "Marcelo Toledo",
    location: "São Paulo - SP",
    text: "Empresa idônea, profissional altamente qualificado e confiável. Há cerca de uma década que criamos uma parceria com a Banker Sistemas, e desde o início sempre tive o privilégio de ser bem atendido. Quando eu tenho um problema relacionado aos serviços que eles atendem, posso confiar que será feito. Parabéns pela excelência! E que nossa parceria dure muito e muito tempo!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section-spacing bg-card">
      <div className="container-section">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="heading-lg mb-3">O que os clientes estão falando sobre a Banker</h2>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 card-premium rounded-3xl h-full flex flex-col group">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < testimonial.rating 
                            ? "fill-secondary text-secondary" 
                            : "fill-muted text-muted"
                        }`} 
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 flex-grow leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
