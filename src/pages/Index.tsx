import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Process from "@/components/Process";
import Segments from "@/components/Segments";
import LeadForm from "@/components/LeadForm";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="benefits"><Benefits /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="how-it-works"><HowItWorks /></section>
      <Process />
      <Segments />
      <section id="contact"><LeadForm /></section>
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
