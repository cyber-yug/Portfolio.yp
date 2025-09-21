import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ setActiveSection }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full-Stack Developer',
    'SOC Analyst',
    'Data Enthusiast',
    'Cybersecurity Specialist'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden particle-bg">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full"
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      <motion.div
        className="text-center z-10 max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Name */}
        <motion.h1 
          className="text-6xl md:text-8xl font-tech font-bold mb-6"
          variants={itemVariants}
        >
          <span className="gradient-text">YUG PATEL</span>
        </motion.h1>

        {/* Rotating Role */}
        <motion.div 
          className="h-20 mb-8 flex items-center justify-center"
          variants={itemVariants}
        >
          <motion.h2 
            key={currentRole}
            className="text-2xl md:text-4xl font-mono neon-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {roles[currentRole]}
          </motion.h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Crafting digital experiences with cutting-edge technology. 
          Passionate about cybersecurity, data analytics, and building 
          innovative full-stack solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => setActiveSection && setActiveSection('projects')}
            className="cyber-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
          
          <motion.button
            onClick={() => setActiveSection && setActiveSection('contact')}
            className="cyber-button border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-dark-bg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border-2 border-cyber-blue"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 border-2 border-cyber-purple"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Ambient Lighting Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyber-blue opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-purple opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;