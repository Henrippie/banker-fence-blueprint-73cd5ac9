import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { 
  HeroSkeleton, 
  BenefitsSkeleton, 
  TestimonialsSkeleton, 
  FormSkeleton 
} from "@/components/LoadingSkeletons";

// Lazy load components
const MonitoringHero = lazy(() => import("@/components/monitoring/MonitoringHero"));
const MonitoringFeatures = lazy(() => import("@/components/monitoring/MonitoringFeatures"));
const MonitoringProducts = lazy(() => import("@/components/monitoring/MonitoringProducts"));
const MonitoringComparison = lazy(() => import("@/components/monitoring/MonitoringComparison"));
const MonitoringSegments = lazy(() => import("@/components/monitoring/MonitoringSegments"));
const CameraLeadForm = lazy(() => import("@/components/cameras/CameraLeadForm"));
const CameraFAQ = lazy(() => import("@/components/cameras/CameraFAQ"));
const MonitoringCTA = lazy(() => import("@/components/monitoring/MonitoringCTA"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Monitoramento = () => {
  return (
    <>
      <Helmet>
        <title>Sistema de Alarme com Monitoramento 24h | Central de Vigilância | Banker Sistemas</title>
        <meta name="description" content="Sistema de alarme com videomonitoramento 24h profissional. Central de monitoramento com resposta em 60 segundos, detecção antecipada e intervenção imediata. Até 40% de desconto." />
        <meta name="keywords" content="monitoramento 24h, alarme monitorado, central de monitoramento, sistema de alarme, videomonitoramento, segurança eletrônica, alarme residencial, alarme empresarial" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Banker Sistemas" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://bankerssistemas.com.br/monitoramento" />
        
        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/src/assets/banker-logo.png" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sistema de Alarme com Monitoramento 24h | Banker Sistemas" />
        <meta property="og:description" content="Sistema de alarme com videomonitoramento 24h. Central profissional com resposta em 60 segundos. Até 40% de desconto!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bankerssistemas.com.br/monitoramento" />
        <meta property="og:image" content="https://bankerssistemas.com.br/src/assets/banker-logo.png" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Banker Sistemas" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sistema de Alarme com Monitoramento 24h | Banker Sistemas" />
        <meta name="twitter:description" content="Monitoramento profissional 24h com resposta em 60 segundos." />
        
        {/* Structured Data - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sistema de Alarme com Monitoramento 24h",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Banker Sistemas",
              "image": "https://bankerssistemas.com.br/src/assets/banker-logo.png",
              "telephone": "+55-11-99999-9999",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "priceRange": "$$"
            },
            "areaServed": {
              "@type": "State",
              "name": "São Paulo"
            },
            "description": "Sistema de alarme com videomonitoramento 24h profissional, central de monitoramento com resposta em 60 segundos, detecção antecipada e intervenção imediata",
            "serviceType": "Monitoramento de Alarmes",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "BRL"
              }
            }
          })}
        </script>
        
        {/* Structured Data - BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://bankerssistemas.com.br"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Monitoramento 24h",
                "item": "https://bankerssistemas.com.br/monitoramento"
              }
            ]
          })}
        </script>
      </Helmet>
      
      <main className="min-h-screen">
        <Navbar />
        
        <Suspense fallback={<HeroSkeleton />}>
          <MonitoringHero />
        </Suspense>
        
        <Suspense fallback={<BenefitsSkeleton />}>
          <MonitoringFeatures />
        </Suspense>
        
        <Suspense fallback={<BenefitsSkeleton />}>
          <MonitoringProducts />
        </Suspense>
        
        <Suspense fallback={<BenefitsSkeleton />}>
          <MonitoringComparison />
        </Suspense>
        
        <Suspense fallback={<BenefitsSkeleton />}>
          <MonitoringSegments />
        </Suspense>
        
        <Suspense fallback={<FormSkeleton />}>
          <section id="form-section">
            <CameraLeadForm />
          </section>
        </Suspense>
        
        <Suspense fallback={<BenefitsSkeleton />}>
          <CameraFAQ />
        </Suspense>
        
        <Suspense fallback={<BenefitsSkeleton />}>
          <MonitoringCTA />
        </Suspense>
        
        <Suspense fallback={<div className="h-20" />}>
          <Footer />
        </Suspense>
        
        <Suspense fallback={null}>
          <WhatsAppButton />
        </Suspense>
      </main>
    </>
  );
};

export default Monitoramento;
