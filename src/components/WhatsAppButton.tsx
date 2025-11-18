import whatsappImage from "@/assets/whatsapp-button.png";

const WhatsAppButton = () => {
  const phoneNumber = "551126455553";
  const message = "Olá! Gostaria de saber mais sobre a instalação de cerca elétrica.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      id="whatsapp-button"
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-in touch-manipulation cursor-pointer"
      aria-label="Falar no WhatsApp"
    >
      <img 
        src={whatsappImage} 
        alt="WhatsApp" 
        className="w-full h-full object-contain pointer-events-none"
      />
    </button>
  );
};

export default WhatsAppButton;
