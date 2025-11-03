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
    name: "Carlos Mendes",
    location: "Residencial Alphaville - SP",
    text: "Depois de uma tentativa de invasão, decidi investir em segurança de verdade. A Banker instalou a cerca elétrica em 1 dia e o resultado foi incrível. Nunca mais tive problemas!",
    rating: 5
  },
  {
    name: "Marina Santos",
    location: "Condomínio Vida Nova - RJ",
    text: "Excelente atendimento desde o diagnóstico até a instalação. Equipe profissional, pontual e o sistema funciona perfeitamente. Recomendo muito!",
    rating: 5
  },
  {
    name: "Roberto Lima",
    location: "Empresa Industrial - MG",
    text: "Protegemos nosso galpão com a cerca da Banker. Além da segurança, o suporte técnico é excepcional. Qualquer dúvida eles estão prontos para atender.",
    rating: 5
  },
  {
    name: "Ana Paula Costa",
    location: "Residência - PR",
    text: "Fiquei impressionada com a qualidade do material e a precisão da instalação. Minha família agora dorme tranquila sabendo que estamos protegidos.",
    rating: 5
  },
  {
    name: "Marcos Ferreira",
    location: "Comércio Centro - SP",
    text: "Investimento que vale cada centavo. Reduzimos drasticamente as tentativas de furto na loja. A cerca elétrica é um diferencial visível que intimida.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section-spacing bg-card">
      <div className="container-section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">O que nossos clientes dizem</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Confiança conquistada através de resultados reais e segurança comprovada.
          </p>
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
                <div className="p-6 bg-background rounded-xl shadow-card h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
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
