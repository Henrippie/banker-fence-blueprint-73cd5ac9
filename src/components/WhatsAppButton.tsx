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
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1BA54E] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-in touch-manipulation cursor-pointer"
      aria-label="Falar no WhatsApp"
    >
      <div className="pointer-events-none flex items-center justify-center w-full h-full relative">
        {/* WhatsApp Icon */}
        <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-1.472-.149-1.472-.149s-.921-.025-1.472.025c-.55.05-2.03.967-2.03.967s-.297.149-.248.446c.05.297.55 1.678.55 1.678s.149.397.446.347c.297-.05 1.431-.624 1.431-.624s.347-.174.645-.074c.297.1 1.233.372 1.233.372s.446.149.496-.099c.05-.248-.372-1.431-.372-1.431s-.149-.446-.446-.347zM12 2C6.477 2 2 6.477 2 12c0 2.295.773 4.406 2.078 6.096L2.5 21.5l3.404-1.578A9.95 9.95 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.857 0-3.576-.594-4.984-1.6l-.36-.25-2.53 1.17.684-2.47-.25-.36A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
        </svg>
        <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-destructive rounded-full animate-pulse" />
      </div>
    </button>
  );
};

export default WhatsAppButton;
