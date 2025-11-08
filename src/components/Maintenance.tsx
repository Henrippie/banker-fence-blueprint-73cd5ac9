import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";
import { CheckCircle, Wrench, Clock, Shield } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
const MaintenanceBenefit = ({
  benefit,
  index
}: {
  benefit: {
    icon: any;
    title: string;
    description: string;
  };
  index: number;
}) => {
  const {
    ref,
    isInView
  } = useIntersectionObserver({
    threshold: 0.2
  });
  const Icon = benefit.icon;
  return <div ref={ref} className={`glass-card p-6 md:p-8 hover:scale-[1.02] transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
    transitionDelay: `${index * 100}ms`
  }}>
      <div className="flex items-start gap-4">
        <div className="card-icon-glow bg-primary/10 rounded-xl p-3 flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
          <p className="text-muted-foreground">{benefit.description}</p>
        </div>
      </div>
    </div>;
};
const Maintenance = () => {
  const {
    ref,
    isInView
  } = useIntersectionObserver({
    threshold: 0.1
  });
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    formSection?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  const benefits = [{
    icon: Wrench,
    title: "Manutenção Preventiva",
    description: "Verificamos e testamos todo o sistema para garantir funcionamento perfeito"
  }, {
    icon: Shield,
    title: "Atualização de Equipamentos",
    description: "Substituímos componentes antigos por tecnologia moderna e mais eficiente"
  }, {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Resolvemos problemas com agilidade para sua segurança não parar"
  }, {
    icon: CheckCircle,
    title: "Garantia do Serviço",
    description: "Todo serviço de manutenção conta com garantia e suporte contínuo"
  }];
  return <section className="section-spacing bg-gradient-to-b from-background via-background/95 to-background">
      <div className="container-section">
        <div ref={ref} className={`text-center mb-16 md:mb-20 py-8 md:py-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="heading-xl mb-6 md:mb-8 text-primary">&quot;Mas eu já tenho uma cerca elétrica&quot;</h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Não tem problema! Aqui também fazemos manutenção, reparo e modernização do seu sistema existente.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Se sua cerca elétrica está com problemas, desatualizada ou você simplesmente quer ter certeza de que está funcionando perfeitamente — nossa equipe especializada pode ajudar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {benefits.map((benefit, index) => <MaintenanceBenefit key={index} benefit={benefit} index={index} />)}
        </div>

        <div className={`relative overflow-hidden rounded-2xl transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <OptimizedImage src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200" alt="Sistema de cerca elétrica residencial instalado em muro com isoladores brancos" className="w-full h-[300px] md:h-[400px] object-cover" sizes="(max-width: 768px) 100vw, 1200px" width={1200} height={400} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white drop-shadow-lg">
              Serviços de Manutenção Incluem:
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
              {["Inspeção completa do sistema", "Teste de voltagem e funcionamento", "Substituição de hastes e isoladores", "Atualização de centrais", "Reparo de fios rompidos", "Limpeza e ajustes gerais"].map((item, index) => <li key={index} className="flex items-center gap-2 text-white drop-shadow-md">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>)}
            </ul>
            <Button onClick={scrollToForm} size="lg" className="w-full sm:w-auto shadow-button hover:scale-105 transition-transform touch-manipulation active:scale-95">
              Solicitar Manutenção Agora
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Maintenance;