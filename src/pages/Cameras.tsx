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
const CameraHero = lazy(() => import("@/components/cameras/CameraHero"));
const CameraBenefits = lazy(() => import("@/components/cameras/CameraBenefits"));
const CameraAuthority = lazy(() => import("@/components/cameras/CameraAuthority"));
const CameraProcess = lazy(() => import("@/components/cameras/CameraProcess"));
const CameraSegments = lazy(() => import("@/components/cameras/CameraSegments"));
const CameraTestimonials = lazy(() => import("@/components/cameras/CameraTestimonials"));
const CameraLeadForm = lazy(() => import("@/components/cameras/CameraLeadForm"));
const CameraFAQ = lazy(() => import("@/components/cameras/CameraFAQ"));
const CameraFinalCTA = lazy(() => import("@/components/cameras/CameraFinalCTA"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Cameras = () => {
  return (
    <>
      <Helmet>
        <title>Câmeras de Segurança CFTV | Instalação Profissional em SP | Bankers Sistemas</title>
        <meta name="description" content="Instalação profissional de câmeras de segurança CFTV com acesso remoto via celular. Monitoramento 24h, imagens HD, visão noturna e suporte especializado. Mais de 1.500 imóveis protegidos em São Paulo." />
        <meta name="keywords" content="câmeras de segurança, CFTV, instalação de câmeras SP, monitoramento 24h, vigilância eletrônica, câmeras com acesso remoto, visão noturna, segurança residencial, segurança empresarial" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Banker Sistemas" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://bankerssistemas.com.br/cameras" />
        
        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/src/assets/banker-logo.png" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Câmeras de Segurança CFTV | Instalação Profissional | Bankers Sistemas" />
        <meta property="og:description" content="Instalação profissional de câmeras de segurança CFTV com acesso remoto. Monitoramento 24h, visão noturna e suporte especializado em SP." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bankerssistemas.com.br/cameras" />
        <meta property="og:image" content="https://bankerssistemas.com.br/src/assets/banker-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Banker Sistemas" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Câmeras de Segurança CFTV | Bankers Sistemas" />
        <meta name="twitter:description" content="Instalação profissional de câmeras CFTV com monitoramento 24h e acesso remoto." />
        <meta name="twitter:image" content="https://bankerssistemas.com.br/src/assets/banker-logo.png" />
        
        {/* Structured Data - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Instalação de Câmeras de Segurança CFTV",
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
            "description": "Instalação profissional de câmeras de segurança CFTV com acesso remoto via celular, monitoramento 24h, imagens HD e visão noturna",
            "serviceType": "Instalação de Câmeras CFTV",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "BRL"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1500",
              "bestRating": "5",
              "worstRating": "1"
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
                "name": "Câmeras de Segurança",
                "item": "https://bankerssistemas.com.br/cameras"
              }
            ]
          })}
        </script>
        
        {/* Structured Data - FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quanto tempo leva a instalação das câmeras?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A instalação é rápida e profissional, geralmente concluída em um dia útil, dependendo do número de câmeras."
                }
              },
              {
                "@type": "Question",
                "name": "É possível acessar as câmeras pelo celular?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim! Oferecemos acesso remoto via aplicativo para Android e iOS, permitindo monitoramento em tempo real de qualquer lugar."
                }
              },
              {
                "@type": "Question",
                "name": "As câmeras funcionam à noite?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, todas as nossas câmeras possuem visão noturna infravermelha, garantindo imagens nítidas mesmo em total escuridão."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <main className="min-h-screen">
        <Navbar />
        <CameraHero />
        
        <Suspense fallback={<BenefitsSkeleton />}>
          <CameraBenefits />
        </Suspense>
        
        <Suspense fallback={<BenefitsSkeleton />}>
          <CameraAuthority />
        </Suspense>
        
        <Suspense fallback={<BenefitsSkeleton />}>
          <CameraProcess />
        </Suspense>
        
        <Suspense fallback={<BenefitsSkeleton />}>
          <CameraSegments />
        </Suspense>
        
        <Suspense fallback={<TestimonialsSkeleton />}>
          <CameraTestimonials />
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
          <CameraFinalCTA />
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

export default Cameras;
