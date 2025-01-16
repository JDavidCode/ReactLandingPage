import React from "react";
import { motion } from "framer-motion";

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] overflow-hidden rounded-2xl p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default BounceCard;