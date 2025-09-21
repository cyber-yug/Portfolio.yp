import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const education = [
    {
      year: "2021-2025",
      title: "Bachelors of Engineering in Information Technology",
      institution: "SVMIT College ( GUJRAT TECHNOLOGICAL UNIVERSITY )",
      description: "Focus on Software Development and Network Security",
    },
  ];

  const experience = [
    {
      year: "April 2025 – July 2025",
      title: "Full Stack Developer | SOC Analyst ",
      company: "Forensic Cybertech | Ahmedabad, India",
      role1: "SOC Analyst",
      description:
        "I worked on building Grafana dashboards and backend integrations to monitor security events, while also leveraging Kali Linux and Ubuntu commands for threat analysis and system investigations.",
      role2: "Full Stack Developer",
      description2:
        "Developed dynamic dashboards for a Security Operations Center (SOC) using React and modern JavaScript frameworks. Built modular, responsive components for real-time visualization of alerts, logs, and threat intelligence. Integrated backend APIs for data aggregation, filtering, and user interaction. Ensured seamless user experience and role-based access using secure authentication mechanisms.",
    },
    {
      year: "Jan 2025 – April 2025",
      title: "Intern (MERN STACK)",
      company: "Grownited Private Limited | Ahmedabad, India",
      description:
        "Developed a full-stack hospital appointment system using MongoDB, Express.js, React.js, and Node.js. Implemented role-based dashboards for admins, doctors, and patients with secure login via JWT authentication. Enabled real-time appointment booking, cancellation, and history tracking with responsive UI using React. Designed RESTful APIs for patient records, doctor listings, and appointment management with Express and MongoDB. Integrated form validations, calendar scheduling, and dynamic routing to enhance user experience and system reliability.",
    },
    {
      year: "SEPT 2024 – NOV 2024",
      title: "Data Science Intern",
      company: "(n)Code Solutions | GNFC, Gift city, Gandhinagar, India",
      description:
        "Developed predictive models and automated data processing for efficiency. Explored real-world datasets to uncover trends. Built a sales forecasting model to predict future revenue trends.",
    },
    {
      year: "June 2024 – July 2024",
      title: "FULL STACK Developer Intern (PHP & MySQL)",
      company: "Durvasa Infotech | Surat, India",
      description:
        "Focused on web development using HTML, CSS, PHP, and JavaScript. Developed user-friendly interfaces and managed server-side logic. Worked under mentorship to brainstorm, design, and develop web application structures.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 px-6 relative">
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
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-cyber-blue mx-auto mb-8"></div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            className="mb-16 text-center max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              I'm a passionate technologist with a unique blend of full-stack
              development expertise and cybersecurity knowledge. My journey
              spans from crafting elegant user interfaces to analyzing security
              threats and extracting insights from complex datasets.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              When I'm not coding or monitoring security events, you'll find me
              exploring new technologies, contributing to open-source projects,
              or diving deep into data analytics to uncover meaningful patterns.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-tech font-bold mb-8 neon-text">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    className="cyber-card p-6 relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-cyber-blue bg-opacity-20 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-cyber-blue rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="text-cyber-blue font-mono text-sm mb-1">
                          {item.year}
                        </div>
                        <h4 className="text-xl font-tech font-bold text-white mb-2">
                          {item.title}
                        </h4>
                        <div className="text-cyber-purple font-semibold mb-2">
                          {item.institution}
                        </div>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-tech font-bold mb-8 neon-text">
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    className="cyber-card p-6 relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-cyber-purple bg-opacity-20 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-cyber-purple rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="text-cyber-purple font-mono text-sm mb-1">
                          {item.year}
                        </div>
                        <h4 className="text-xl font-tech font-bold text-white mb-2">
                          {item.title}
                        </h4>
                        <div className="text-cyber-blue font-semibold mb-2">
                          {item.company}
                        </div>
                        <p className="text-gray-400 mb-4">{item.description}</p>

                        {/* Second Role */}
                        {item.role2 && (
                          <div className="mt-4 pt-4 border-t border-gray-600">
                            <h5 className="text-lg font-tech font-bold text-white mb-2">
                              {item.role2}
                            </h5>
                            <p className="text-gray-400">{item.description2}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Personal Stats */}
          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-8"
            variants={itemVariants}
          >
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "1+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center cyber-card p-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-tech font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Volunteering & Activities */}
          <motion.div className="mt-16" variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-tech font-bold mb-8 neon-text">
              Volunteering & Activities
            </h3>
            <motion.div
              className="cyber-card p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Assisted in flood relief operations in rural areas of
                    Bharuch District through an NGO.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Organized & Managed college Sports Event (Rhythm, 2023 &
                    2024).
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Organized & Managed college Freshers Party, including
                    planning and budgeting (2023 & 2024).
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Organized & Managed a Seminar (Kanan.Co, 2024).
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Information */}
          <motion.div className="mt-12" variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-tech font-bold mb-8 neon-text">
              Additional Information
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="cyber-card p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-xl font-tech font-bold text-cyber-blue mb-4">
                  Languages
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Fluent in English, Hindi, Gujarati, and German.
                </p>
              </motion.div>
              <motion.div
                className="cyber-card p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-xl font-tech font-bold text-cyber-purple mb-4">
                  Interests
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Exploring emerging technologies and staying current with
                  industry trends.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <motion.div
        className="absolute top-1/4 right-0 w-32 h-32 border border-cyber-blue opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-24 h-24 border border-cyber-purple opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default About;
