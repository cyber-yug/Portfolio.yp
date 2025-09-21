import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to Yug Patel\'s portfolio terminal!' },
    { type: 'output', content: 'Type "help" to see available commands.' },
    { type: 'prompt', content: '' }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = {
    help: {
      description: 'Show available commands',
      execute: () => [
        'Available commands:',
        '  help       - Show this help message',
        '  about      - Learn about Yug Patel',
        '  skills     - View technical skills',
        '  projects   - List recent projects',
        '  contact    - Get contact information',
        '  resume     - View resume/CV',
        '  clear      - Clear terminal',
        '  theme      - Change terminal theme',
        '  exit       - Close terminal'
      ]
    },
    about: {
      description: 'Learn about Yug Patel',
      execute: () => [
        '=== About Yug Patel ===',
        '',
        '🎓 Full-Stack Developer & SOC Analyst',
        '🔐 Cybersecurity Enthusiast',
        '📊 Data Analytics Specialist',
        '',
        'I\'m passionate about building secure, scalable applications',
        'and protecting digital assets from cyber threats.',
        '',
        'Education: Masters in Computer Science',
        'Focus: Cybersecurity & Data Analytics'
      ]
    },
    skills: {
      description: 'View technical skills',
      execute: () => [
        '=== Technical Skills ===',
        '',
        '🚀 Frontend: React.js, JavaScript/TypeScript, TailwindCSS',
        '⚙️  Backend: Node.js, Express.js, MongoDB, PostgreSQL',
        '🛡️  Security: Network Security, SIEM, Penetration Testing',
        '📈 Analytics: Python, SQL, Data Visualization, Tableau',
        '🔧 Tools: Git, Docker, AWS, Linux, VS Code',
        '',
        'Always learning and staying updated with latest technologies!'
      ]
    },
    projects: {
      description: 'List recent projects',
      execute: () => [
        '=== Recent Projects ===',
        '',
        '1. 🛡️  CyberShield Dashboard',
        '   Real-time cybersecurity monitoring platform',
        '   Tech: React, Node.js, MongoDB, Socket.io',
        '',
        '2. 📊 DataViz Analytics Platform',
        '   Interactive data visualization tool',
        '   Tech: Python, Flask, React, D3.js',
        '',
        '3. 🛒 E-Commerce Full-Stack App',
        '   Full-stack shopping platform',
        '   Tech: MongoDB, Express, React, Node.js',
        '',
        'Visit the projects section to see more details!'
      ]
    },
    contact: {
      description: 'Get contact information',
      execute: () => [
        '=== Contact Information ===',
        '',
        '📧 Email: ypsworkstation@gmail.com',
        '📱 Phone: +91 9558551573',
        '📍 Location: Vadodara, Gujarat, India',
        '',
        '🔗 Links:',
        '   GitHub: github.com/cyber-yug',
        '   LinkedIn: linkedin.com/in/yug-patel-287186307',
        '   Instagram: instagram.com/the.yugpatel',
        '',
        'Feel free to reach out for collaborations!'
      ]
    },
    resume: {
      description: 'View resume/CV',
      execute: () => [
        '=== Resume/CV ===',
        '',
        '📄 Download my resume:',
        '   [PDF] resume-yug-patel.pdf',
        '   [Web] View online portfolio',
        '',
        '🎯 Quick highlights:',
        '   • 3+ years of development experience',
        '   • SOC Analyst with incident response expertise',
        '   • 50+ successful projects completed',
        '   • CompTIA Security+ certified',
        '',
        'Contact me for the latest version!'
      ]
    },
    clear: {
      description: 'Clear terminal',
      execute: () => null
    },
    theme: {
      description: 'Change terminal theme',
      execute: () => [
        '=== Terminal Themes ===',
        '',
        '🎨 Available themes:',
        '   • cyber (current) - Cyberpunk blue/purple',
        '   • matrix - Green matrix style',
        '   • hacker - Classic green on black',
        '   • retro - Amber on dark',
        '',
        'Theme switching coming soon!'
      ]
    },
    exit: {
      description: 'Close terminal',
      execute: () => null
    }
  };

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setHistory([{ type: 'prompt', content: '' }]);
      return;
    }
    
    if (trimmedCmd === 'exit') {
      setIsOpen(false);
      return;
    }

    const newHistory = [...history];
    newHistory[newHistory.length - 1] = { type: 'input', content: `$ ${cmd}` };

    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd].execute();
      if (output) {
        output.forEach(line => {
          newHistory.push({ type: 'output', content: line });
        });
      }
    } else if (trimmedCmd === '') {
      // Empty command, just show prompt
    } else {
      newHistory.push({ 
        type: 'error', 
        content: `Command not found: ${cmd}. Type "help" for available commands.` 
      });
    }

    newHistory.push({ type: 'prompt', content: '' });
    setHistory(newHistory);
    
    if (trimmedCmd !== '') {
      setCommandHistory(prev => [...prev, cmd]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section className="py-20 px-6 relative min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Section Header */}
          <motion.div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-tech font-bold mb-6">
              <span className="gradient-text">Interactive Terminal</span>
            </h2>
            <div className="w-24 h-1 bg-cyber-green mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Experience my portfolio through a cyberpunk-style terminal interface. 
              Type commands to explore my projects, skills, and contact information.
            </p>
          </motion.div>

          {/* Terminal Toggle Button - Centered and Prominent */}
          <motion.div className="mb-12">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="cyber-button terminal-launch-btn text-lg px-12 py-6 mx-auto block relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
            >
              <span className="flex items-center justify-center space-x-3">
                <span className="text-3xl">{isOpen ? '✕' : '💻'}</span>
                <span className="font-tech text-xl">
                  {isOpen ? 'Close Terminal' : 'Launch Terminal'}
                </span>
              </span>
              
              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-cyber-green rounded"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 255, 65, 0.3)',
                    '0 0 40px rgba(0, 255, 65, 0.6)',
                    '0 0 20px rgba(0, 255, 65, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>

          {/* Quick Command Guide */}
          {!isOpen && (
            <motion.div 
              className="cyber-card p-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <h3 className="text-xl font-tech font-bold text-cyber-green mb-4">
                Available Commands
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="font-mono text-sm">
                    <span className="text-cyber-blue">help</span> - Show all commands
                  </div>
                  <div className="font-mono text-sm">
                    <span className="text-cyber-blue">about</span> - About me
                  </div>
                  <div className="font-mono text-sm">
                    <span className="text-cyber-blue">skills</span> - Technical skills
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-mono text-sm">
                    <span className="text-cyber-blue">projects</span> - View projects
                  </div>
                  <div className="font-mono text-sm">
                    <span className="text-cyber-blue">contact</span> - Contact info
                  </div>
                  <div className="font-mono text-sm">
                    <span className="text-cyber-blue">clear</span> - Clear screen
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Background Decorations */}
      <motion.div
        className="absolute top-1/4 right-0 w-32 h-32 border border-cyber-green opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-24 h-24 border border-cyber-blue opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Terminal Window */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Terminal */}
          <motion.div
            className="relative w-full max-w-4xl h-[70vh] terminal-border bg-dark-bg"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between p-4 border-b border-cyber-green">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
                </div>
                <span className="font-mono text-cyber-green">yug@portfolio:~$</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-cyber-green hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Terminal Content */}
            <div 
              ref={terminalRef}
              className="p-4 h-full overflow-y-auto scrollbar-hide font-mono text-sm"
            >
              {history.map((item, index) => (
                <div key={index} className="mb-1">
                  {item.type === 'input' && (
                    <div className="text-cyber-green">{item.content}</div>
                  )}
                  {item.type === 'output' && (
                    <div className="text-gray-300">{item.content}</div>
                  )}
                  {item.type === 'error' && (
                    <div className="text-red-400">{item.content}</div>
                  )}
                  {item.type === 'prompt' && index === history.length - 1 && (
                    <div className="flex items-center text-cyber-green">
                      <span className="mr-2">$</span>
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-none outline-none text-white"
                        autoComplete="off"
                        spellCheck="false"
                      />
                      <motion.span
                        className="text-cyber-green ml-1"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        █
                      </motion.span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Terminal;