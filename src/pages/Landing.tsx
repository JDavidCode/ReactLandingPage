import { AnimatePresence } from "framer-motion";
import Header from "../partials/Header";
import Hero from "./scenes/Hero";
import Services from "./scenes/Services";
import Projects from "./scenes/Projects";
import Blog from "./scenes/Blog";
import Pricing from "./scenes/Pricing";
import Contact from "./scenes/Contact";
import FAQ from "../partials/FAQ";
import Footer from "../partials/Footer";
import ClientSlider from "../components/ClientSlider";
import Testimonials from "./scenes/Testimonials";
import FreeTierBanner from "@components/banners/FreeTierBanner";
import Section from "@components/Section";
import Features from "./scenes/Features";

export default function Landing() {
  return (
    <main className="w-full h-full bg-gradient-to-tl from-slate-950 to-slate-900">
      <Header />
      <AnimatePresence>
        <Section id="home">
          <Hero />
        </Section>
        <Section id="clients">
          <div className="justify-center mx-auto">
            <ClientSlider />
          </div>
        </Section>
        <Section id="services">
          <Services />
        </Section>
        <Section id="features">
          <Features />
        </Section>
        <Section id="free-tier-banner">
          <FreeTierBanner />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="blog">
          <Blog />
        </Section>
        <Section id="testimonials">
          <Testimonials />
        </Section>
        <Section id="pricing">
          <Pricing />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </AnimatePresence>
      <FAQ />
      <Footer />
    </main>
  );
}
