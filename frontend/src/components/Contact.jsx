import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

// Resolve API base URL safely for both dev and production
const getApiBase = () => {
  const env = import.meta.env;
  // Prefer explicit backend URL if provided
  const direct = env.VITE_BACKEND_URL || env.VITE_API_URL;
  if (direct) return direct.replace(/\/$/, '');

  // In production on Vercel, prefer same-origin '/api'
  if (env.PROD) return '/api';

  // Fallback for local development
  return 'http://localhost:5001/api';
};

const API_BASE = getApiBase();

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/cyber-yug',
      icon: '🐙',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yug-patel-287186307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      icon: '💼',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=ypsworkstation@gmail.com',
      icon: '📧',
      color: 'hover:text-cyber-blue'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/the.yugpatel?igsh=MWhmMnhvbDN4YnF5Yg==',
      icon: '📸',
      color: 'hover:text-pink-400'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(
        "https://portfolio-8i5nl4sk3-yug-patels-projects-4c4dde5b.vercel.app/api/contact",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.success) {
        console.log("Message sent");
        alert("Message sent successfully!");
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Error submitting form. Please try again.");
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-tech font-bold mb-6">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <div className="w-24 h-1 bg-cyber-blue mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate? Let's discuss your next project or 
              cybersecurity challenge. I'm always excited to work on innovative solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-12">
            {/* Contact Form - Temporarily Commented Out */}
            {/* 
            <motion.div variants={itemVariants}>
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-tech font-bold text-cyber-blue mb-6">
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full cyber-input"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-mono text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full cyber-input"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-mono text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full cyber-input resize-none"
                      placeholder="Tell me about your project, security concerns, or collaboration ideas..."
                    />
                  </div>

                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded border ${
                        submitStatus === 'success'
                          ? 'border-cyber-green text-cyber-green bg-cyber-green bg-opacity-10'
                          : 'border-red-500 text-red-400 bg-red-500 bg-opacity-10'
                      }`}
                    >
                      {submitStatus === 'success'
                        ? '✅ Message sent successfully! I\'ll get back to you soon.'
                        : '❌ Failed to send message. Please try again or contact me directly.'}
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full cyber-button py-4 relative overflow-hidden ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <motion.div
                          className="w-5 h-5 border-2 border-cyber-blue border-t-transparent rounded-full mr-3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
            */}

            {/* Contact Info & Social Links */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Quick Contact Info */}
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-tech font-bold text-cyber-purple mb-6">
                  Quick Contact
                </h3>
                <div 
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.5)',
                    border: '1px solid rgba(147, 51, 234, 0.3)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Email */}
                  <div 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      minWidth: '200px',
                      padding: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div 
                      style={{
                        fontSize: '2rem',
                        marginBottom: '0.5rem'
                      }}
                    >
                      📧
                    </div>
                    <div 
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '0.875rem',
                        color: '#9ca3af',
                        marginBottom: '0.25rem',
                        fontWeight: '500'
                      }}
                    >
                      Email
                    </div>
                    <a 
                      href="mailto:ypsworkstation@gmail.com"
                      style={{
                        color: '#3b82f6',
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        textAlign: 'center'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#93c5fd'}
                      onMouseLeave={(e) => e.target.style.color = '#3b82f6'}
                      title="Send me an email"
                    >
                      ypsworkstation@gmail.com
                    </a>
                  </div>
                  
                  {/* Phone */}
                  <div 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      minWidth: '200px',
                      padding: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div 
                      style={{
                        fontSize: '2rem',
                        marginBottom: '0.5rem'
                      }}
                    >
                      📱
                    </div>
                    <div 
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '0.875rem',
                        color: '#9ca3af',
                        marginBottom: '0.25rem',
                        fontWeight: '500'
                      }}
                    >
                      Phone
                    </div>
                    <a 
                      href="tel:+919558551573"
                      style={{
                        color: '#22c55e',
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        textAlign: 'center'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#86efac'}
                      onMouseLeave={(e) => e.target.style.color = '#22c55e'}
                      title="Call me"
                    >
                      +91 9558551573
                    </a>
                  </div>
                  
                  {/* Location */}
                  <div 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      minWidth: '200px',
                      padding: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div 
                      style={{
                        fontSize: '2rem',
                        marginBottom: '0.5rem'
                      }}
                    >
                      📍
                    </div>
                    <div 
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '0.875rem',
                        color: '#9ca3af',
                        marginBottom: '0.25rem',
                        fontWeight: '500'
                      }}
                    >
                      Location
                    </div>
                    <a 
                      href="https://www.google.com/maps/place/Vadodara,+Gujarat,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#9333ea',
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        textAlign: 'center'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#c4b5fd'}
                      onMouseLeave={(e) => e.target.style.color = '#9333ea'}
                      title="View location on Google Maps"
                    >
                      Vadodara, Gujarat, India
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-tech font-bold text-cyber-pink mb-6">
                  Connect With Me
                </h3>
                <div 
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.5)',
                    border: '1px solid rgba(236, 72, 153, 0.3)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        minWidth: '140px',
                        padding: '1rem',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        border: '2px solid rgba(75, 85, 99, 0.3)',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        backgroundColor: 'rgba(15, 23, 42, 0.3)'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = 'rgba(75, 85, 99, 0.3)';
                        e.target.style.backgroundColor = 'rgba(15, 23, 42, 0.3)';
                      }}
                    >
                      <div 
                        style={{
                          fontSize: '2rem',
                          marginBottom: '0.5rem'
                        }}
                      >
                        {social.icon}
                      </div>
                      <div 
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.875rem',
                          color: '#9ca3af',
                          fontWeight: '500',
                          textAlign: 'center'
                        }}
                      >
                        {social.name}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-tech font-bold text-cyber-yellow mb-6">
                  Availability
                </h3>
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    className="w-4 h-4 bg-cyber-green rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-cyber-green font-mono">Available for Projects</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Currently accepting new freelance projects and collaboration opportunities. 
                  Typical response time: 24-48 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-blue opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-purple opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </section>
  );
};

export default Contact;