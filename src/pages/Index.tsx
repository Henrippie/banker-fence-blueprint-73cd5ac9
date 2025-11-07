import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { 
  HeroSkeleton, 
  BenefitsSkeleton, 
  TestimonialsSkeleton, 
  FormSkeleton 
} from "@/components/LoadingSkeletons";

// Lazy load components below the fold
const Benefits = lazy(() => import("@/components/Benefits"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Process = lazy(() => import("@/components/Process"));
const Segments = lazy(() => import("@/components/Segments"));
const Maintenance = lazy(() => import("@/components/Maintenance"));
const LeadForm = lazy(() => import("@/components/LeadForm"));
const About = lazy(() => import("@/components/About"));
const FAQ = lazy(() => import("@/components/FAQ"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      <Suspense fallback={<BenefitsSkeleton />}>
        <section id="benefits"><Benefits /></section>
      </Suspense>
      
      <Suspense fallback={<TestimonialsSkeleton />}>
        <section id="testimonials"><Testimonials /></section>
      </Suspense>
      
      <Suspense fallback={<BenefitsSkeleton />}>
        <section id="how-it-works"><HowItWorks /></section>
      </Suspense>
      
      <Suspense fallback={<BenefitsSkeleton />}>
        <Process />
      </Suspense>
      
      <Suspense fallback={<BenefitsSkeleton />}>
        <Segments />
      </Suspense>
      
      <Suspense fallback={<BenefitsSkeleton />}>
        <Maintenance />
      </Suspense>
      
      <Suspense fallback={<FormSkeleton />}>
        <section id="contact"><LeadForm /></section>
      </Suspense>
      
      <Suspense fallback={<BenefitsSkeleton />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<BenefitsSkeleton />}>
        <FAQ />
      </Suspense>
      
      <Suspense fallback={<BenefitsSkeleton />}>
        <FinalCTA />
      </Suspense>
      
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
      
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
    </main>
  );
};

export default Index;
