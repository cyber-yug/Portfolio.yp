import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Terminal from './components/Terminal';
import SectionContainer from './components/SectionContainer';
import './App.css';
import './styles/Navigation.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <SectionContainer>
            <Hero setActiveSection={setActiveSection} />
          </SectionContainer>
        );
      case 'about':
        return (
          <SectionContainer>
            <About />
          </SectionContainer>
        );
      case 'skills':
        return (
          <SectionContainer>
            <Skills />
          </SectionContainer>
        );
      case 'projects':
        return (
          <SectionContainer>
            <Projects />
          </SectionContainer>
        );
      case 'contact':
        return (
          <SectionContainer>
            <Contact />
          </SectionContainer>
        );
      case 'terminal':
        return (
          <SectionContainer>
            <Terminal />
          </SectionContainer>
        );
      default:
        return (
          <SectionContainer>
            <Hero setActiveSection={setActiveSection} />
          </SectionContainer>
        );
    }
  };

  return (
    <div className="cyberpunk-app">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
