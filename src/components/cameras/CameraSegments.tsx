import { Home, Building2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
const CameraSegments = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="section-spacing bg-background">
      <div className="container-section">
        <h3 className="heading-lg text-center text-primary mb-12">
          Para Quem é o Sistema de CFTV
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Residências */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Home className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-2xl font-bold text-foreground">
                Residências e Condomínios
              </h4>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Proprietários que querem proteger a família e monitorar pets ou prestadores de serviço
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Quem deseja ver quem toca o interfone ou chega na portaria antes de abrir
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Monitoramento completo do perímetro com visão noturna
                </span>
              </li>
            </ul>
          </div>
          
          {/* Empresas */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-2xl font-bold text-foreground">
                 Empresas e Comércios
              </h4>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Lojas e escritórios que precisam proteger estoque e equipamentos
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Empresas que desejam reduzir riscos e monitorar a produtividade
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Integração com sistema de alarme existente para segurança total
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" onClick={scrollToForm} className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-button text-base md:text-lg px-10 py-7 transition-all duration-300 hover:scale-105">
            Solicitar Orçamento Gratuito Agora
          </Button>
        </div>
      </div>
    </section>;
};
export default CameraSegments;