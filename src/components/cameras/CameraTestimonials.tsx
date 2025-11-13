import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CameraTestimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      text: "A instalação foi limpa e os técnicos muito profissionais. A qualidade da imagem no celular é perfeita, vejo minha casa o tempo todo.",
      rating: 5
    },
    {
      name: "Marina Costa",
      location: "Guarulhos, SP",
      text: "Conseguimos identificar um problema no estoque da empresa usando as gravações. O sistema se pagou em uma semana. Suporte excelente.",
      rating: 5
    },
    {
      name: "Roberto Mendes",
      location: "Osasco, SP",
      text: "Agora consigo ver meus pets enquanto estou no trabalho. A visão noturna é impressionante, imagens nítidas mesmo no escuro.",
      rating: 5
    },
    {
      name: "Juliana Santos",
      location: "Santo André, SP",
      text: "O acesso remoto funciona perfeitamente. Recebo notificações no celular e posso revisar as gravações a qualquer momento. Recomendo!",
      rating: 5
    }
  ];

  return (
    <section className="section-spacing bg-muted">
      <div className="container-section">
        <h3 className="heading-lg text-center text-primary mb-4">
          🌟 O que os clientes estão falando sobre a Banker
        </h3>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Depoimentos reais de clientes satisfeitos
        </p>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="glass-card p-8 rounded-3xl h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-border pt-4">
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

export default CameraTestimonials;
