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
        {/* WhatsApp Official Icon */}
        <svg viewBox="0 0 32 32" className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" aria-hidden="true">
          <path d="M16.003 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.6-1.73a12.77 12.77 0 0 0 6.2 1.58h.01c7.06 0 12.79-5.73 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05A12.7 12.7 0 0 0 16 3.2zm0 23.27h-.01a10.6 10.6 0 0 1-5.41-1.48l-.39-.23-3.92 1.03 1.05-3.82-.25-.4a10.6 10.6 0 0 1-1.63-5.66c0-5.87 4.78-10.65 10.66-10.65 2.85 0 5.52 1.11 7.53 3.13a10.57 10.57 0 0 1 3.12 7.53c0 5.88-4.78 10.65-10.65 10.65zm5.84-7.98c-.32-.16-1.9-.94-2.19-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.26-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.91-1.79-2.23-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55l-.62-.01a1.2 1.2 0 0 0-.86.4c-.29.32-1.13 1.1-1.13 2.69 0 1.59 1.16 3.12 1.32 3.34.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z"/>
        </svg>
        <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-destructive rounded-full animate-pulse" />
      </div>
    </button>
  );
};

export default WhatsAppButton;
