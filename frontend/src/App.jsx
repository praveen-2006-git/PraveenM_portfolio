import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { useActiveSection } from './hooks/useActiveSection';
import { ArrowUpRight } from './components/Icons';

export default function App() {
  const activeSection = useActiveSection(['projects', 'skills', 'about', 'resume', 'contact']);

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#141619] flex flex-col font-sans">
      
      {/* Architectural Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Suite */}
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Resume />
        <Contact />
      </main>

      {/* Editorial Engineering Monograph Footer */}
      <footer className="border-t border-[#E4E4E0] bg-white py-12 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#686E77] font-mono">
          
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="font-bold text-[#141619]">Praveen M</span>
            <span className="hidden sm:inline text-[#E4E4E0]">•</span>
            <span>© {new Date().getFullYear()} All rights reserved</span>
            <span className="hidden sm:inline text-[#E4E4E0]">•</span>
            <span className="text-[#1B4332] font-bold">BIT Sathy CSE '27</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-[#686E77]">
              React 19 • Tailwind CSS • MERN Stack Core
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center space-x-1 text-[#1B4332] hover:text-[#123023] hover:underline font-bold"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
}
