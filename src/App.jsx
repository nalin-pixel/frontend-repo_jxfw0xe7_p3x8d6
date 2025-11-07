import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black font-[Inter]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <footer className="border-t border-white/10 bg-black py-8 text-center text-white/60">
          <div className="mx-auto max-w-6xl px-6">
            <p>
              © {new Date().getFullYear()} Your Name — Crafted with code and a touch of neon.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
