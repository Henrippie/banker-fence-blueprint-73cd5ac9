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
      element.scrollIntoView({ behavior: "smooth" });
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
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/src/assets/banker-logo.png" 
                alt="Banker Logo" 
                className="h-10 w-auto cursor-pointer hover:scale-105 transition-transform"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-primary-foreground hover:text-secondary transition-colors duration-300 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(244,197,66,0.5)] transition-all duration-300 hover:scale-105"
              >
                Fale Conosco
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-primary-foreground p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-morphism-dark border-t border-white/10 animate-fade-in">
            <div className="container-section py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-primary-foreground hover:text-secondary transition-colors duration-300 font-medium text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(244,197,66,0.5)] transition-all duration-300 mt-2"
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
