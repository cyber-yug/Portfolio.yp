import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinish, 500); // Wait for exit animation
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  const splashVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  const logoVariants = {
    initial: { 
      scale: 0.3, 
      opacity: 0,
      rotateY: -180 
    },
    animate: { 
      scale: 1, 
      opacity: 1,
      rotateY: 0,
      transition: { 
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const textVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 1.8
      }
    }
  };

  const particleVariants = {
    animate: {
      y: [-20, -100],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="splash-screen"
          variants={splashVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#0A0A0A',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            overflow: 'hidden'
          }}
        >
          {/* Animated Background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `
              radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(180, 0, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(255, 0, 128, 0.1) 0%, transparent 50%)
            `
          }}></div>

          {/* Floating Particles */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: Math.random() * 6 + 2 + 'px',
                  height: Math.random() * 6 + 2 + 'px',
                  backgroundColor: i % 3 === 0 ? '#00D4FF' : 
                                   i % 3 === 1 ? '#B400FF' : '#FF0080',
                  borderRadius: '50%',
                  left: Math.random() * 100 + '%',
                  top: '100%',
                  opacity: 0.7
                }}
                variants={particleVariants}
                animate="animate"
                transition={{
                  delay: Math.random() * 3,
                  duration: 4 + Math.random() * 2
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10
          }}>
            {/* Your Exact Logo */}
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              style={{ marginBottom: '2rem' }}
            >
              <img 
                src="/yp logo.jpeg" 
                alt="YP Logo" 
                style={{
                  width: '300px',
                  height: 'auto',
                  maxWidth: '80vw',
                  filter: `
                    drop-shadow(0 0 30px rgba(0, 212, 255, 0.6))
                    drop-shadow(0 0 60px rgba(180, 0, 255, 0.4))
                    drop-shadow(0 0 80px rgba(255, 0, 128, 0.2))
                  `,
                  borderRadius: '10px'
                }}
              />
            </motion.div>

            {/* Name and Title */}
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontFamily: "'Orbitron', monospace",
                fontWeight: 900,
                marginBottom: '0.5rem',
                background: 'linear-gradient(45deg, #00D4FF, #B400FF, #FF0080)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                YUG PATEL
              </h1>
              <p style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                fontFamily: "'JetBrains Mono', monospace",
                color: '#00D4FF',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textShadow: `
                  0 0 10px #00D4FF,
                  0 0 20px #00D4FF,
                  0 0 30px #00D4FF
                `
              }}>
                Full-Stack Developer & SOC Analyst
              </p>
            </motion.div>

            {/* Loading Animation */}
            <motion.div
              style={{
                marginTop: '3rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    style={{
                      width: '10px',
                      height: '10px',
                      backgroundColor: '#00D4FF',
                      borderRadius: '50%'
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
              <motion.span
                style={{
                  color: '#CCCCCC',
                  fontSize: '1rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  marginLeft: '1rem'
                }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Loading Portfolio...
              </motion.span>
            </motion.div>
          </div>

          {/* Tech Grid Background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            opacity: 0.3
          }}></div>

          {/* Corner Decorations */}
          <motion.div
            style={{
              position: 'absolute',
              top: '2rem',
              left: '2rem',
              width: '80px',
              height: '80px',
              border: '2px solid #00D4FF',
              opacity: 0.4
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div
            style={{
              position: 'absolute',
              bottom: '2rem',
              right: '2rem',
              width: '100px',
              height: '100px',
              border: '2px solid #B400FF',
              opacity: 0.4
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          {/* Glow Effects */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)'
          }}></div>
          
          <div style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(180, 0, 255, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(50px)'
          }}></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;