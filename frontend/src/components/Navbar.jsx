import React, { useState, useEffect } from 'react';
import { ArrowUpRight, FileText } from './Icons';

const navItems = [
  { id: 'projects', num: '01', label: 'Projects' },
  { id: 'skills', num: '02', label: 'Skills' },
  { id: 'about', num: '03', label: 'About' },
  { id: 'resume', num: '04', label: 'Resume' },
  { id: 'contact', num: '05', label: 'Contact' }
];

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#E4E4E0] shadow-subtle' 
          : 'bg-[#FBFBF9] border-b border-[#EFEFEA]'
      }`}
    >
      {/* Editorial Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#1B4332] via-[#2D5A43] to-[#C97A3E] transition-all duration-75 z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Brand Identity / Architectural Masthead */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-3 text-left group focus:outline-none"
          aria-label="Scroll to top"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#BFD1C6] bg-[#1B4332] text-[#FBFBF9] flex items-center justify-center font-mono font-bold text-xs transition-transform group-hover:scale-105 shrink-0 shadow-xs">
            {!avatarError ? (
              <img 
                src="/profile.png" 
                alt="Praveen M" 
                className="w-full h-full object-cover object-top"
                onError={() => setAvatarError(true)}
              />
            ) : (
              <span>PM</span>
            )}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-sm tracking-tight text-[#141619]">Praveen M.</span>
              <span className="text-[#A0A5AC] font-mono text-xs">/</span>
              <span className="text-xs text-[#33383F] font-mono hidden sm:inline">Software Engineer</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#EBF0EC] text-[#1B4332] border border-[#BFD1C6]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mr-1.5 animate-pulse"></span>
                Final Year CSE '27 • Open for SDE Roles
              </span>
            </div>
            <p className="text-[11px] text-[#686E77] font-mono tracking-wide sm:hidden">Final Year CS Student (BIT Sathy '27)</p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-colors flex items-center space-x-1.5 ${
                  isActive 
                    ? 'text-[#1B4332] bg-[#EBF0EC] font-bold border border-[#BFD1C6]' 
                    : 'text-[#686E77] hover:text-[#141619] hover:bg-[#F4F4F0]'
                }`}
              >
                <span className="text-[10px] text-[#C97A3E] font-semibold">{item.num}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action: Direct Resume Link */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={() => handleScrollTo('resume')}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded border border-[#E4E4E0] hover:border-[#1B4332] bg-white text-xs font-mono font-semibold text-[#141619] transition-all hover:shadow-subtle"
          >
            <FileText className="w-3.5 h-3.5 text-[#1B4332]" />
            <span>CV Document</span>
          </button>

          <button
            onClick={() => handleScrollTo('contact')}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded bg-[#1B4332] hover:bg-[#132F23] text-[#FBFBF9] text-xs font-bold transition-all hover:shadow-subtle"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded text-[#141412] hover:bg-[#ECEAE3] focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#DDD9CF] bg-[#F5F3EF] px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="block w-full text-left py-2 text-xs font-mono text-[#383632] hover:text-[#1E3A2B]"
            >
              <span className="text-[#C8553D] mr-2">{item.num}</span>
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[#DDD9CF] flex flex-col gap-2">
            <button
              onClick={() => handleScrollTo('resume')}
              className="w-full text-center py-2 text-xs font-mono font-semibold border border-[#DDD9CF] rounded bg-white text-[#141412]"
            >
              Curriculum Vitae
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="w-full text-center py-2 text-xs font-mono font-bold bg-[#1E3A2B] text-[#FAF9F6] rounded"
            >
              Direct Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
