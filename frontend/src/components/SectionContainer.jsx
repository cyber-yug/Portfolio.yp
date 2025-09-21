import React from 'react';
import { motion } from 'framer-motion';

const SectionContainer = ({ children, className = '' }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={`min-h-screen flex flex-col justify-center relative overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </motion.div>
  );
};

export default SectionContainer;