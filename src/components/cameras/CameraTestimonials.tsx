import { Star, Quote } from "lucide-react";
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
      role: "Proprietário",
      text: "A instalação foi impecável e os técnicos extremamente profissionais. A qualidade da imagem no aplicativo é perfeita, consigo ver minha casa de qualquer lugar.",
      rating: 5
    },
    {
      name: "Marina Costa",
      location: "Guarulhos, SP",
      role: "Gerente de Loja",
      text: "Identificamos um problema no estoque usando as gravações. O sistema se pagou em uma semana e o suporte é excepcional.",
      rating: 5
    },
    {
      name: "Roberto Mendes",
      location: "Osasco, SP",
      role: "Empresário",
      text: "Agora monitoro meus pets enquanto trabalho. A visão noturna é impressionante, imagens nítidas mesmo no escuro total.",
      rating: 5
    },
    {
      name: "Juliana Santos",
      location: "Santo André, SP",
      role: "Síndica",
      text: "O acesso remoto funciona perfeitamente. Recebo notificações instantâneas e posso revisar gravações a qualquer momento. Recomendo!",
      rating: 5
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent rounded-full blur-[150px]" />
      </div>

      <div className="container-section relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>Avaliações 5 Estrelas</span>
          </div>
          <h3 className="heading-lg text-primary mb-4">
            O que Nossos Clientes Dizem
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Depoimentos reais de clientes satisfeitos com nossos serviços
          </p>
        </div>
        
        <Carousel 
          className="w-full max-w-6xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="card-premium p-8 rounded-3xl h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                      <Quote className="w-6 h-6 text-accent" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-auto text-lg leading-relaxed flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="border-t border-border pt-6 mt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role} • {testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CameraTestimonials;
