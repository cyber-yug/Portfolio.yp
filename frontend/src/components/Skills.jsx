import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [inView, setInView] = useState(false);

  const skillCategories = [
    {
      title: 'Programming Languages',
      color: 'cyber-yellow',
      skills: [
        { name: 'JavaScript', level: 85, icon: '🟨' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'Java', level: 80, icon: '☕' },
        { name: 'C/C++', level: 75, icon: '⚙️' },
        { name: 'C#', level: 70, icon: '#️⃣' },
        { name: 'Dart', level: 65, icon: '🎯' }
      ]
    },
    {
      title: 'Frontend Development',
      color: 'cyber-blue',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'HTML5/CSS3', level: 95, icon: '📄' },
        { name: 'TailwindCSS', level: 80, icon: '🎨' },
        { name: 'Redux/Zustand', level: 75, icon: '🔄' }
      ]
    },
    {
      title: 'Backend Development',
      color: 'cyber-green',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 80, icon: '🚂' },
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'MySQL', level: 80, icon: '🗃️' },
        { name: 'Firebase', level: 75, icon: '�' },
        { name: 'RESTful APIs', level: 90, icon: '🔌' }
      ]
    },
    {
      title: 'Data Analytics',
      color: 'cyber-pink',
      skills: [
        { name: 'Python (NumPy, Pandas)', level: 85, icon: '🐍' },
        { name: 'TensorFlow', level: 70, icon: '🧠' },
        { name: 'SQL', level: 85, icon: '💾' },
        { name: 'Tableau/Power BI', level: 80, icon: '📉' },
        { name: 'Excel/Google Sheets', level: 90, icon: '📊' },
        { name: 'Data Visualization', level: 80, icon: '📈' }
      ]
    },
    {
      title: 'Cybersecurity',
      color: 'cyber-purple',
      skills: [
        { name: 'Network Security', level: 80, icon: '🛡️' },
        { name: 'Incident Response', level: 85, icon: '🚨' },
        { name: 'Vulnerability Assessment', level: 75, icon: '🔍' },
        { name: 'SIEM Tools', level: 70, icon: '📊' },
        { name: 'Penetration Testing', level: 65, icon: '🎯' }
      ]
    },
    {
      title: 'Soft Skills',
      color: 'cyber-orange',
      skills: [
        { name: 'Communication', level: 90, icon: '�' },
        { name: 'Teamwork', level: 85, icon: '🤝' },
        { name: 'Problem Solving', level: 90, icon: '🧩' },
        { name: 'Time Management', level: 80, icon: '⏰' },
        { name: 'Adaptability', level: 85, icon: '🔄' },
        { name: 'Analytical Thinking', level: 85, icon: '🧠' }
      ]
    }
  ];

  const tools = [
    { name: 'Visual Studio', icon: '💻' },
    { name: 'VS Code', icon: '📝' },
    { name: 'Eclipse', icon: '🌙' },
    { name: 'Jupyter Notebook', icon: '📓' },
    { name: 'Git/GitHub', icon: '🔧' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Vercel', icon: '▲' },
    { name: 'Postman', icon: '�' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Open Search', icon: '�' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2
      }
    })
  };

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          onViewportEnter={() => setInView(true)}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-tech font-bold mb-6">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-cyber-blue mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="mb-12"
                variants={itemVariants}
              >
                <h3 className={`text-2xl font-tech font-bold mb-8 text-${category.color} text-center`}>
                  {category.title}
                </h3>
                
                {category.title === 'Programming Languages' ? (
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '2rem',
                      padding: '2rem',
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 0, 0.3)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          minWidth: '120px',
                          padding: '1rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        whileHover={{ 
                          scale: 1.1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div 
                          style={{
                            fontSize: '3rem',
                            marginBottom: '0.75rem',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {skill.icon}
                        </div>
                        <div 
                          style={{
                            fontFamily: 'monospace',
                            fontSize: '0.875rem',
                            color: '#ffffff',
                            transition: 'color 0.3s ease',
                            textAlign: 'center',
                            fontWeight: '500'
                          }}
                        >
                          {skill.name}
                        </div>
                        <div 
                          style={{
                            width: '100%',
                            height: '4px',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '2px',
                            marginTop: '0.5rem',
                            overflow: 'hidden'
                          }}
                        >
                          <motion.div
                            style={{
                              height: '100%',
                              backgroundColor: '#fbbf24',
                              borderRadius: '2px',
                              width: `${skill.level}%`,
                              boxShadow: '0 0 8px rgba(251, 191, 36, 0.5)'
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : category.title === 'Frontend Development' ? (
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '2rem',
                      padding: '2rem',
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          minWidth: '120px',
                          padding: '1rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        whileHover={{ 
                          scale: 1.1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div 
                          style={{
                            fontSize: '3rem',
                            marginBottom: '0.75rem',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {skill.icon}
                        </div>
                        <div 
                          style={{
                            fontFamily: 'monospace',
                            fontSize: '0.875rem',
                            color: '#ffffff',
                            transition: 'color 0.3s ease',
                            textAlign: 'center',
                            fontWeight: '500'
                          }}
                        >
                          {skill.name}
                        </div>
                        <div 
                          style={{
                            width: '100%',
                            height: '4px',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '2px',
                            marginTop: '0.5rem',
                            overflow: 'hidden'
                          }}
                        >
                          <motion.div
                            style={{
                              height: '100%',
                              backgroundColor: '#3b82f6',
                              borderRadius: '2px',
                              width: `${skill.level}%`,
                              boxShadow: '0 0 8px rgba(59, 130, 246, 0.5)'
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : category.title === 'Backend Development' ? (
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '2rem',
                      padding: '2rem',
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          minWidth: '120px',
                          padding: '1rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        whileHover={{ 
                          scale: 1.1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div 
                          style={{
                            fontSize: '3rem',
                            marginBottom: '0.75rem',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {skill.icon}
                        </div>
                        <div 
                          style={{
                            fontFamily: 'monospace',
                            fontSize: '0.875rem',
                            color: '#ffffff',
                            transition: 'color 0.3s ease',
                            textAlign: 'center',
                            fontWeight: '500'
                          }}
                        >
                          {skill.name}
                        </div>
                        <div 
                          style={{
                            width: '100%',
                            height: '4px',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '2px',
                            marginTop: '0.5rem',
                            overflow: 'hidden'
                          }}
                        >
                          <motion.div
                            style={{
                              height: '100%',
                              backgroundColor: '#22c55e',
                              borderRadius: '2px',
                              width: `${skill.level}%`,
                              boxShadow: '0 0 8px rgba(34, 197, 94, 0.5)'
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : category.title === 'Data Analytics' ? (
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '2rem',
                      padding: '2rem',
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(236, 72, 153, 0.3)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          minWidth: '120px',
                          padding: '1rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        whileHover={{ 
                          scale: 1.1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div 
                          style={{
                            fontSize: '3rem',
                            marginBottom: '0.75rem',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {skill.icon}
                        </div>
                        <div 
                          style={{
                            fontFamily: 'monospace',
                            fontSize: '0.875rem',
                            color: '#ffffff',
                            transition: 'color 0.3s ease',
                            textAlign: 'center',
                            fontWeight: '500'
                          }}
                        >
                          {skill.name}
                        </div>
                        <div 
                          style={{
                            width: '100%',
                            height: '4px',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '2px',
                            marginTop: '0.5rem',
                            overflow: 'hidden'
                          }}
                        >
                          <motion.div
                            style={{
                              height: '100%',
                              backgroundColor: '#ec4899',
                              borderRadius: '2px',
                              width: `${skill.level}%`,
                              boxShadow: '0 0 8px rgba(236, 72, 153, 0.5)'
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : category.title === 'Cybersecurity' ? (
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '2rem',
                      padding: '2rem',
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(147, 51, 234, 0.3)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          minWidth: '120px',
                          padding: '1rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        whileHover={{ 
                          scale: 1.1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div 
                          style={{
                            fontSize: '3rem',
                            marginBottom: '0.75rem',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {skill.icon}
                        </div>
                        <div 
                          style={{
                            fontFamily: 'monospace',
                            fontSize: '0.875rem',
                            color: '#ffffff',
                            transition: 'color 0.3s ease',
                            textAlign: 'center',
                            fontWeight: '500'
                          }}
                        >
                          {skill.name}
                        </div>
                        <div 
                          style={{
                            width: '100%',
                            height: '4px',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '2px',
                            marginTop: '0.5rem',
                            overflow: 'hidden'
                          }}
                        >
                          <motion.div
                            style={{
                              height: '100%',
                              backgroundColor: '#9333ea',
                              borderRadius: '2px',
                              width: `${skill.level}%`,
                              boxShadow: '0 0 8px rgba(147, 51, 234, 0.5)'
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : category.title === 'Soft Skills' ? (
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '2rem',
                      padding: '2rem',
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(249, 115, 22, 0.3)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          minWidth: '120px',
                          padding: '1rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        whileHover={{ 
                          scale: 1.1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div 
                          style={{
                            fontSize: '3rem',
                            marginBottom: '0.75rem',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {skill.icon}
                        </div>
                        <div 
                          style={{
                            fontFamily: 'monospace',
                            fontSize: '0.875rem',
                            color: '#ffffff',
                            transition: 'color 0.3s ease',
                            textAlign: 'center',
                            fontWeight: '500'
                          }}
                        >
                          {skill.name}
                        </div>
                        <div 
                          style={{
                            width: '100%',
                            height: '4px',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '2px',
                            marginTop: '0.5rem',
                            overflow: 'hidden'
                          }}
                        >
                          <motion.div
                            style={{
                              height: '100%',
                              backgroundColor: '#f97316',
                              borderRadius: '2px',
                              width: `${skill.level}%`,
                              boxShadow: '0 0 8px rgba(249, 115, 22, 0.5)'
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-mono text-white">{skill.name}</span>
                          </div>
                        </div>
                        <div className="w-full bg-dark-border h-2 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-${category.color} rounded-full relative`}
                            variants={skillBarVariants}
                            custom={skill.level}
                            style={{
                              boxShadow: `0 0 10px var(--tw-${category.color})`
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-white opacity-20"
                              animate={{
                                x: ['-100%', '100%']
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: skillIndex * 0.2
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-tech font-bold text-center mb-12 neon-text">
              Tools & Technologies
            </h3>
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                padding: '2rem',
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    minWidth: '100px',
                    padding: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 10
                  }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  <div 
                    style={{
                      fontSize: '2.5rem',
                      marginBottom: '0.75rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {tool.icon}
                  </div>
                  <div 
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.875rem',
                      color: '#d1d5db',
                      transition: 'color 0.3s ease',
                      textAlign: 'center'
                    }}
                  >
                    {tool.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;