import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'EagleEye – SOC Monitoring & Analytics Platform',
      description: 'Developed a full-stack SOC dashboard using MongoDB, Express.js, React, and Node.js for real-time security event monitoring. Integrated ECharts and custom visualizations to display threat intelligence, firewall logs, and risk analytics. Built API endpoints for data retrieval from security tools and optimized backend performance for large-scale log processing.',
      category: 'cybersecurity',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'ECharts', 'Socket.io'],
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/cyber-yug/eagle-main',
      featured: true
    },
    {
      id: 2,
      title: 'MediSync (Hospital Appointment System)',
      description: 'Developed a full-stack hospital appointment platform with role-based dashboards for patients, doctors, and admins. Integrated JWT-based authentication and real-time appointment booking with dynamic React interfaces. Built secure RESTful APIs using Express and MongoDB for managing users, schedules, and medical data.',
      category: 'fullstack',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'REST APIs'],
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/cyber-yug/medisync',
      featured: false
    },
    {
      id: 3,
      title: 'Excel Analytics Platform (WEB)',
      description: 'Developed a data analytics platform to upload, process, and visualize Excel files in an interactive web interface. The system supports data cleaning, filtering, aggregation, and generating dynamic charts/dashboards. Integrated role-based access, secure file handling, and real-time insights to help users make data-driven decisions efficiently.',
      category: 'data-analytics',
      tech: ['JavaScript', 'Node.js', 'Express', 'React', 'Excel.js', 'Chart.js'],
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/cyber-yug/Excel-Analytics-Platform_YP',
      featured: true
    },
    {
      id: 4,
      title: 'E-Commerce Full-Stack App',
      description: 'Full-stack e-commerce application with advanced features like real-time chat, payment integration, and admin dashboard.',
      category: 'fullstack',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe'],
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/cyber-yug/ecommerce-fullstack',
      featured: false
    },
    {
      id: 5,
      title: 'Network Security Scanner',
      description: 'Automated network vulnerability scanner with reporting features. Built with Python and integrated with popular security frameworks.',
      category: 'cybersecurity',
      tech: ['Python', 'Nmap', 'Flask', 'SQLite', 'Bootstrap'],
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/cyber-yug/network-scanner',
      featured: false
    },
    {
      id: 6,
      title: 'Work Tracking System',
      description: 'Developed a web-based system to track employee work hours using HTML, CSS, PHP, and JavaScript. Generated user-friendly monthly reports to visualize productivity.',
      category: 'fullstack',
      tech: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/cyber-yug/work-tracking',
      featured: false
    },
    {
      id: 7,
      title: 'Smart Parking System ( IOT )',
      description: 'Designed an Arduino-based system to optimize vehicle parking space usage and reduce congestion. Implemented IoT sensors and real-time monitoring to enhance parking efficiency.',
      category: 'iot',
      tech: ['Arduino', 'C++', 'IoT Sensors', 'ESP32', 'LCD Display'],
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/cyber-yug/smart-parking',
      featured: false
    },
    {
      id: 8,
      title: 'Smart Parking System (WEB)',
      description: 'Developed a web-based smart parking system using HTML, CSS, PHP, JavaScript, and SQL to manage real-time slot availability. Implemented user-friendly interfaces for booking, tracking, and optimizing parking space utilization.',
      category: 'fullstack',
      tech: ['HTML', 'CSS', 'PHP', 'JavaScript', 'SQL'],
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/cyber-yug/smart-parking-web',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'data-analytics', label: 'Data Analytics' },
    { id: 'iot', label: 'IoT' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-tech font-bold mb-6">
              <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-cyber-blue mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore my latest work in cybersecurity, data analytics, and full-stack development
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 font-mono text-sm uppercase tracking-wider border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-cyber-blue text-cyber-blue bg-cyber-blue bg-opacity-10'
                    : 'border-dark-border text-gray-400 hover:border-cyber-blue hover:text-cyber-blue'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`cyber-card overflow-hidden group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                layout
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-cyber-blue to-cyber-purple overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-4xl font-tech font-bold text-white opacity-50">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-cyber-yellow text-black px-3 py-1 text-xs font-bold rounded">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-tech font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.title === 'EagleEye – SOC Monitoring & Analytics Platform' ? (
                      <span className="text-xs px-3 py-1 bg-dark-bg border border-cyber-blue text-cyber-blue rounded-full">
                        MongoDB | AWS Cloud | Express.js | React | Node.js | ECharts | Socket.io | TailwindCSS | REST APIs
                      </span>
                    ) : project.title === 'Excel Analytics Platform (WEB)' ? (
                      <span className="text-xs px-3 py-1 bg-dark-bg border border-cyber-blue text-cyber-blue rounded-full">
                        JavaScript | Node.js | Express | React | Excel.js | Chart.js
                      </span>
                    ) : project.title === 'Work Tracking System' ? (
                      <span className="text-xs px-3 py-1 bg-dark-bg border border-cyber-blue text-cyber-blue rounded-full">
                        HTML | CSS | PHP | JavaScript | MySQL
                      </span>
                    ) : project.title === 'E-Commerce Full-Stack App' ? (
                      <span className="text-xs px-3 py-1 bg-dark-bg border border-cyber-blue text-cyber-blue rounded-full">
                        MongoDB | Express | React | Node.js | Stripe
                      </span>
                    ) : project.title === 'Smart Parking System ( IOT )' ? (
                      <span className="text-xs px-3 py-1 bg-dark-bg border border-cyber-blue text-cyber-blue rounded-full">
                        Arduino | C++ | IoT | SensorsESP32 | LCD Display
                      </span>
                    ) : project.title === 'MediSync (Hospital Appointment System)' ? (
                      <span className="text-xs px-3 py-1 bg-dark-bg border border-cyber-blue text-cyber-blue rounded-full">
                        MongoDB | Express | React | Node.js | JWT | REST APIs
                      </span>
                    ) : project.title === 'Smart Parking System (WEB)' ? (
                      <span className="text-xs px-3 py-1 bg-dark-bg border border-cyber-blue text-cyber-blue rounded-full">
                        HTML | CSS | PHP | JavaScript | SQL
                      </span>
                    ) : (
                      project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-3 py-1 bg-dark-bg border border-cyber-blue text-cyber-blue rounded-full"
                        >
                          {tech}
                        </span>
                      ))
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full border-2 border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-dark-bg transition-all duration-300 text-center text-sm py-2 font-bold uppercase tracking-wider"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View on GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/cyber-yug"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-10 w-2 h-2 bg-cyber-blue rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-10 w-2 h-2 bg-cyber-purple rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </section>
  );
};

export default Projects;