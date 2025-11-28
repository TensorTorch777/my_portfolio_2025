import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scene3D from './components/Scene3D';
import Encryption from './components/Encryption';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ParticleBackground from './components/ParticleBackground';
import Nancy from './components/Nancy';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="app">
      {/* <ParticleBackground /> */}
      <Scene3D />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Encryption onOpenChat={() => setIsChatOpen(true)} />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <Nancy isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;
