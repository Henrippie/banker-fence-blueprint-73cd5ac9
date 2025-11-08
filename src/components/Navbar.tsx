import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Altura da navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Benefícios", id: "benefits" },
    { label: "Como Funciona", id: "how-it-works" },
    { label: "Depoimentos", id: "testimonials" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="glass-morphism-dark backdrop-blur-xl border-b border-white/10 shadow-xl">
        <div className="container-section">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center touch-manipulation">
              <img 
                src="/src/assets/banker-logo.png" 
                alt="Banker Logo" 
                className="h-8 md:h-10 w-auto cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-primary-foreground hover:text-secondary transition-colors duration-300 font-medium relative group text-sm lg:text-base"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-secondary text-secondary-foreground px-5 lg:px-6 py-2.5 rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(244,197,66,0.5)] transition-all duration-300 hover:scale-105 text-sm lg:text-base"
              >
                Fale Conosco
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-primary-foreground p-3 touch-manipulation active:scale-95 transition-transform"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-morphism-dark border-t border-white/10 animate-fade-in">
            <div className="container-section py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-primary-foreground hover:text-secondary active:text-secondary transition-colors duration-300 font-medium text-left py-3 px-4 rounded-lg hover:bg-white/5 active:bg-white/10 touch-manipulation text-base"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-secondary text-secondary-foreground px-6 py-3.5 rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(244,197,66,0.5)] active:scale-95 transition-all duration-300 mt-2 touch-manipulation text-base"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
