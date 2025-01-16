import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionProps {
  children: React.ReactNode;
  id: string;
}

const Section = ({ children, id }: SectionProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.01,
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
      className="py-12"
    >
      {children}
    </motion.div>
  );
};

export default Section;
