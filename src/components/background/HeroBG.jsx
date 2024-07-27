import React from 'react'
import { motion } from 'framer-motion';
import RocketSVG from '../../assets/svg/rocket-pencil.svg?react';
import GeometricShape1 from '../../assets/forms/dots.svg?react';
import GeometricShape2 from '../../assets/forms/fonwave.svg?react';

const HeroBackground = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      {/* Rocket Animation */}
      <motion.div
        initial={{ x: -100, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ position: 'absolute', top: '20%', left: '10%' }}
      >
        <RocketSVG width={100} height={100} />
      </motion.div>

      {/* Geometric Shape 1 Animation */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        style={{ position: 'absolute', top: '40%', right: '20%' }}
      >
        <GeometricShape1 width={150} height={150} />
      </motion.div>

      {/* Geometric Shape 2 Animation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: -50, opacity: 1 }}
        transition={{ duration: 3, delay: 1.5 }}
        style={{ position: 'absolute', bottom: '10%', left: '30%' }}
      >
        <GeometricShape2 width={100} height={100} />
      </motion.div>
    </div>
  );
};

export default HeroBackground;

