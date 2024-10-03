import React from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";


import TopNavbar from "../partials/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import FAQ from "../components/Sections/FAQ";
import Footer from "../components/Sections/Footer";

const Section = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.12,
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
      ref={ref}
      initial="hidden"
      animate={controls}
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <AnimatePresence>
        <Section>
          <Header />
        </Section>
        <Section>
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
