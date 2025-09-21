import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '⌂' },
    { id: 'about', label: 'About', icon: '◊' },
    { id: 'skills', label: 'Skills', icon: '◈' },
    { id: 'projects', label: 'Projects', icon: '◇' },
    { id: 'contact', label: 'Contact', icon: '◉' },
    { id: 'terminal', label: 'Terminal', icon: '▣' }
  ];

  return (
    <motion.nav 
      className="cyber-nav"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        {/* Logo */}
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05, textShadow: "0 0 20px #00D4FF" }}
        >
          <span className="logo-text">YUG PATEL</span>
          <div className="logo-subtitle">Full-Stack Developer</div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="nav-menu desktop-menu">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  className="active-indicator"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.button>

        {/* Mobile Menu */}
        <motion.div
          className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsMenuOpen(false);
              }}
              className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Cyber Grid Background */}
      <div className="nav-cyber-grid"></div>
    </motion.nav>
  );
};

export default Navigation;