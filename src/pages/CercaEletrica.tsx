import { useEffect } from "react";
import { Helmet } from "react-helmet";

const CercaEletrica = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cerca Elétrica | Bankers Sistemas</title>
        <meta name="description" content="Soluções de cerca elétrica para proteção residencial e empresarial." />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Cerca Elétrica</h1>
          <p className="text-lg text-muted-foreground">Landing page da solução de cerca elétrica.</p>
        </div>
      </main>
    </>
  );
};

export default CercaEletrica;
