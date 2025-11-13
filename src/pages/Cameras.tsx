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
        <title>Câmeras de Segurança CFTV | Bankers Sistemas</title>
        <meta name="description" content="Instalação profissional de câmeras de segurança CFTV com acesso remoto via celular. Monitoramento 24h, imagens HD e gravação em tempo real." />
        <meta name="keywords" content="câmeras de segurança, CFTV, vigilância, monitoramento, instalação de câmeras, segurança eletrônica" />
        <link rel="canonical" href="https://bankerssistemas.com.br/cameras" />
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
