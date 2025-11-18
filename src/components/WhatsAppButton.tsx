import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "551126455553";
  const message = "Olá! Gostaria de saber mais sobre a instalação de cerca elétrica.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      id="whatsappbutton"
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1BA54E] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-in touch-manipulation cursor-pointer"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 pointer-events-none" />
      <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-destructive rounded-full animate-pulse pointer-events-none" />
    </button>
  );
};

export default WhatsAppButton;
