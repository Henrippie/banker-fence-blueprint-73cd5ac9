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
    location: "Alphaville - SP",
    text: "Instalação rápida e equipe profissional. Nunca mais tive problemas!",
    rating: 5
  },
  {
    name: "Marina Santos",
    location: "Rio de Janeiro - RJ",
    text: "Atendimento excelente e sistema funcionando perfeitamente. Recomendo!",
    rating: 5
  },
  {
    name: "Roberto Lima",
    location: "Belo Horizonte - MG",
    text: "Suporte técnico excepcional. Sempre prontos para atender.",
    rating: 5
  },
  {
    name: "Ana Paula Costa",
    location: "Curitiba - PR",
    text: "Qualidade impecável. Minha família dorme tranquila agora.",
    rating: 5
  },
  {
    name: "Marcos Ferreira",
    location: "São Paulo - SP",
    text: "Melhor investimento. Reduzimos tentativas de furto drasticamente.",
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
