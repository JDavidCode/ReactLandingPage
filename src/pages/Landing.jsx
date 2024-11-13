import React from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../partials/Header";
import Hero from "./scenes/Hero";
import Services from "./scenes/Services";
import Projects from "./scenes/Projects";
import Blog from "./scenes/Blog";
import Pricing from "./scenes/Pricing";
import Contact from "./scenes/Contact";
import FAQ from "./scenes/FAQ";
import Footer from "./scenes/Footer";
import ClientSlider from "../components/ClientSlider";

const Section = ({ children, id}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.03,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
    exit: { opacity: 0, y: 25, transition: { duration: 0.8, delay: 0.1 } },
  };

  return (
    <motion.div
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      exit="exit"
      variants={variants}
      className="py-4"
    >
      {children}
    </motion.div>
  );
};

export default function Landing() {
  return (
    <>
      <Header />
      <AnimatePresence>
        <Section id="home">
          <Hero />
        </Section>
        <Section>
          <div className="justify-center mx-auto pb-8">
            <ClientSlider />
          </div>
        </Section>
        <Section id="services">
          <Services />
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
          <Blog />
        </Section>
        <Section>
          <Pricing />
        </Section>
        <Section>
          <Contact />
        </Section>
      </AnimatePresence>
      <FAQ />
      <Footer />
    </>
  );
}
