import { Shield, MapPin, Phone, Mail } from "lucide-react";
import bankerLogo from "@/assets/banker-logo.png";

const Footer = () => {
  return <footer className="relative bg-primary text-primary-foreground py-12 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>
      <div className="container-section relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e descrição */}
          <div>
            <div className="glass-morphism-dark p-3 rounded-2xl inline-block mb-4">
              <img 
                src={bankerLogo} 
                alt="Banker Sistemas" 
                className="h-10"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Segurança eletrônica profissional desde 2014
            </p>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 shrink-0" />
                <span>(11) 2645-5553</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 shrink-0" />
                <span>vendas@bankersistemas.com.br
              </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>São Paulo - SP</span>
              </li>
            </ul>
          </div>
          
          {/* Informações */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informações</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>CNPJ: 22.082.779/0001-74
            </li>
              <li>Atendimento: Seg-Sex 8h-18h</li>
              <li className="pt-2">
                <a href="#" className="hover:text-secondary transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Banker Sistemas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;