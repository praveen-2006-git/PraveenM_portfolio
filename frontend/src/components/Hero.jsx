import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, FileText, ArrowUpRight, MapPin, CheckCircle2, Check, Copy } from './Icons';

const PROJECT_SPOTLIGHTS = [
  {
    id: 'syllabus',
    tabLabel: 'Syllabus Portal',
    category: 'MERN Stack Web Application',
    title: 'Academic Syllabus Management Platform',
    description: 'A centralized portal designed for college departments to eliminate unversioned curriculum files, protect modifications with role-based access, and provide faculty an authenticated upload workflow.',
    features: [
      'Multi-tier RBAC protecting routes for Admin, Faculty, and Students',
      'Direct PDF streaming via Multer for efficient file uploads',
      'Atomic syllabus version tags (v1.0 → v1.1) upon verified approval',
      'Indexed course catalog queries for instant search and filtering'
    ],
    tags: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Multer', 'Tailwind CSS'],
    githubUrl: 'https://github.com/praveen-2006-git',
    demoUrl: 'https://sylubus-management-system.vercel.app/login'
  },
  {
    id: 'warranty',
    tabLabel: 'Warranty Tracker',
    category: 'Full-Stack Web Application',
    title: 'Asset & Warranty Lifecycle Engine',
    description: 'An automated hardware governance dashboard that monitors device warranty expirations, notifying users in advance to prevent costly out-of-pocket repairs.',
    features: [
      'Scheduled background evaluation of 30-day and 7-day expiration windows',
      'Compound date indexed queries for fast database lookups',
      'Color-coded health status meters (Active, Warning, Expired)',
      'Document archival vault for digital purchase invoices and claims'
    ],
    tags: ['React 19', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    githubUrl: 'https://github.com/praveen-2006-git',
    demoUrl: ''
  },
  {
    id: 'food-routing',
    tabLabel: 'Food Routing Portal',
    category: 'MERN Stack Web Application',
    title: 'Community Surplus Food Inventory & Routing Portal',
    description: 'A full-stack logistics application for local soup kitchens to manage surplus raw ingredient donations, coordinate pickup routes, and prevent duplicate inventory claims.',
    features: [
      'Role-based dashboards for soup kitchen managers & food donors',
      'Concurrency-safe database logic preventing simultaneous double-claims',
      'Single-use verification code system for secure custody transfers',
      'Protections against brute-force code verification attempts'
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Concurrency Control'],
    githubUrl: 'https://github.com/praveen-2006-git',
    demoUrl: 'https://community-food-portal-4ht8v9lzq-praveens-projects-559cf653.vercel.app/login'
  }
];

export default function Hero() {
  const [activeProject, setActiveProject] = useState(PROJECT_SPOTLIGHTS[0]);
  const [copiedBio, setCopiedBio] = useState(false);

  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const metricsRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const ctx = gsap.context(() => {
      if (headlineRef.current?.children) {
        gsap.from(headlineRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 1.0,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.15
        });
      }
      if (metricsRef.current) {
        gsap.from(metricsRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.7
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleCopyBio = () => {
    const text = "Praveen M — Final Year CS Student (Batch 2023–2027) at Bannari Amman Institute of Technology | Full-Stack Software Engineer (MERN) | Email: praveen.cs23@bitsathy.ac.in | Phone: +91 8610236420 | GitHub: https://github.com/praveen-2006-git";
    const copyWithFallback = () => {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopiedBio(true);
        setTimeout(() => setCopiedBio(false), 2000);
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopiedBio(true);
          setTimeout(() => setCopiedBio(false), 2000);
        })
        .catch(() => copyWithFallback());
    } else {
      copyWithFallback();
    }
  };


  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 70;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={heroRef} className="relative px-6 pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E4E4E0] bg-[#FBFBF9] graph-paper-grid hero-gradient-mesh overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Sub-Header Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#686E77] mb-8 pb-4 border-b border-[#E4E4E0]">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#1B4332] animate-pulse"></span>
            <span className="text-[#1B4332] font-bold tracking-wider uppercase">
              STATUS: FINAL YEAR CSE (BATCH 2023–2027) // OPEN FOR FULL-TIME SDE & INTERNSHIPS
            </span>
          </div>

          <div className="flex items-center space-x-3 text-[11px]">
            <button
              onClick={handleCopyBio}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-white border border-[#E4E4E0] hover:border-[#1B4332] text-[#141619] font-semibold transition-all hover:shadow-subtle"
              title="Copy 1-line profile summary for recruiter notes"
            >
              {copiedBio ? (
                <>
                  <Check className="w-3 h-3 text-[#1B4332]" />
                  <span>Summary Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-[#686E77]" />
                  <span>Recruiter Summary</span>
                </>
              )}
            </button>
            <span className="text-[#E4E4E0]">•</span>
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-[#C97A3E]" />
              <span>Tamil Nadu, India</span>
            </span>
            <span className="text-[#E4E4E0] hidden sm:inline">•</span>
            <span className="hidden sm:inline font-semibold text-[#141619]">BIT Sathy ('23–'27)</span>
          </div>
        </div>

        {/* 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 cols): Editorial Typography & Narrative */}
          <div ref={headlineRef} className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative shrink-0 group cursor-pointer" onClick={() => handleScroll('about')}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white shadow-elevated bg-[#F4F4F0] ring-1 ring-[#1B4332]/20 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/profile.png"
                    alt="Praveen M — Full-Stack Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B4332] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#1B4332] border-2 border-white shadow-xs" title="Open for SDE Roles & Internships"></span>
                </span>
              </div>

              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#EBF0EC] border border-[#BFD1C6] text-[#1B4332] text-xs font-mono font-semibold">
                  <span className="text-[#C97A3E]">№ 00</span>
                  <span className="text-[#BFD1C6]">/</span>
                  <span>Final Year CSE (Batch 2023–2027)</span>
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#141619] tracking-tight mt-1">
                  Praveen M.
                </div>
                <div className="text-xs font-mono text-[#686E77]">
                  Bannari Amman Institute of Technology
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-extrabold tracking-tight text-[#141619] leading-[1.15]">
              Building reliable <span className="font-serif italic font-normal text-[#1B4332]">full-stack</span> web applications with modern engineering rigor.
            </h1>

            <p className="text-base sm:text-lg text-[#33383F] leading-relaxed max-w-2xl font-normal">
              Final-year Computer Science & Engineering student at <span className="font-semibold text-[#141619]">Bannari Amman Institute of Technology</span> (Expected 2027 | CGPA: 6.42). Hands-on experience across the MERN stack (MongoDB, Express.js, React, Node.js) with a strong foundation in Java, Python, and RESTful API development.
            </p>

            {/* Action Suite */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => handleScroll('projects')}
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded bg-[#1B4332] hover:bg-[#132F23] text-[#FBFBF9] font-bold text-xs font-mono transition-all hover:shadow-subtle hover:-translate-y-0.5 group"
              >
                <span>EXPLORE PROJECTS (3)</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleScroll('contact')}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded border border-[#E4E4E0] hover:border-[#141619] bg-white text-[#141619] text-xs font-mono font-semibold transition-all hover:shadow-subtle hover:-translate-y-0.5"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C97A3E]" />
              </button>

              <button
                onClick={() => handleScroll('resume')}
                className="inline-flex items-center space-x-1.5 px-4 py-3.5 rounded text-xs font-mono font-semibold text-[#686E77] hover:text-[#141619] transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#1B4332]" />
                <span>RESUME</span>
              </button>
            </div>

            {/* Simple Engineering Attributes Strip */}
            <div ref={metricsRef} className="pt-6 border-t border-[#E4E4E0] grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
              <div className="p-3.5 rounded-lg bg-white border border-[#E4E4E0] shadow-subtle hover:-translate-y-1 hover:shadow-elevated hover:border-[#BFD1C6] transition-all duration-300">
                <div className="text-2xl font-extrabold text-[#141619]">3</div>
                <div className="text-[10px] text-[#C97A3E] font-bold uppercase tracking-wider mt-0.5">Full-Stack Projects</div>
                <div className="text-[11px] text-[#686E77]">MERN Stack</div>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#E4E4E0] shadow-subtle hover:-translate-y-1 hover:shadow-elevated hover:border-[#BFD1C6] transition-all duration-300">
                <div className="text-2xl font-extrabold text-[#141619]">MERN</div>
                <div className="text-[10px] text-[#C97A3E] font-bold uppercase tracking-wider mt-0.5">Core Web Stack</div>
                <div className="text-[11px] text-[#686E77]">React • Node • Mongo</div>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#E4E4E0] shadow-subtle hover:-translate-y-1 hover:shadow-elevated hover:border-[#BFD1C6] transition-all duration-300">
                <div className="text-2xl font-extrabold text-[#141619]">Java & Python</div>
                <div className="text-[10px] text-[#C97A3E] font-bold uppercase tracking-wider mt-0.5">Languages</div>
                <div className="text-[11px] text-[#686E77]">OOP & Algorithms</div>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#E4E4E0] shadow-subtle hover:-translate-y-1 hover:shadow-elevated hover:border-[#BFD1C6] transition-all duration-300">
                <div className="text-2xl font-extrabold text-[#141619]">2027</div>
                <div className="text-[10px] text-[#C97A3E] font-bold uppercase tracking-wider mt-0.5">Expected Year</div>
                <div className="text-[11px] text-[#686E77]">CGPA: 6.42 / 10.0</div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Clean Featured Project Spotlight */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#E4E4E0] bg-white p-6 sm:p-7 shadow-elevated relative">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E4E4E0] text-xs font-mono">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1B4332] rounded-full animate-pulse"></span>
                  <span className="font-bold text-[#141619]">FEATURED PROJECT SPOTLIGHT</span>
                </div>
                <span className="text-[10px] font-bold text-[#1B4332] px-2 py-0.5 rounded bg-[#EBF0EC] border border-[#BFD1C6]">
                  Working Project
                </span>
              </div>

              {/* Project Switcher Tabs */}
              <div className="flex gap-1 mt-4 p-1 rounded bg-[#F4F4F0] border border-[#E4E4E0]">
                {PROJECT_SPOTLIGHTS.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProject(proj)}
                    className={`flex-1 py-1.5 px-2 rounded text-[11px] font-mono font-bold transition-all text-center truncate ${
                      activeProject.id === proj.id
                        ? 'bg-white text-[#141619] shadow-subtle border border-[#E4E4E0]'
                        : 'text-[#686E77] hover:text-[#141619]'
                    }`}
                  >
                    {proj.tabLabel}
                  </button>
                ))}
              </div>

              {/* Active Project Details with Smooth Animation */}
              <div key={activeProject.id} className="mt-5 space-y-4 animate-fadeIn">
                <div>
                  <span className="text-[11px] font-mono text-[#C97A3E] font-bold">
                    {activeProject.category}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#141619] mt-0.5 font-sans">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs text-[#33383F] leading-relaxed mt-1.5">
                    {activeProject.description}
                  </p>
                </div>

                {/* Key Working Features List */}
                <div className="border border-[#E4E4E0] rounded-lg p-3.5 bg-[#FBFBF9] space-y-2">
                  <span className="text-[10px] font-mono text-[#686E77] font-bold uppercase tracking-wider block mb-1">
                    Key Working Features:
                  </span>
                  {activeProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-[#33383F] p-1 rounded hover:bg-[#F0F5F2] transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4332] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeProject.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F4F4F0] border border-[#E4E4E0] text-[#33383F] hover:border-[#1B4332] hover:text-[#1B4332] hover:bg-white transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>


                {/* Action Links */}
                <div className="pt-3 border-t border-[#E4E4E0] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2.5">
                    {activeProject.demoUrl && (
                      <a
                        href={activeProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-[#1B4332] hover:bg-[#132F23] text-white text-xs font-mono font-bold transition-all shadow-subtle hover:-translate-y-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse"></span>
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3 h-3 text-[#A7F3D0]" />
                      </a>
                    )}

                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-mono font-semibold text-[#141619] hover:text-[#1B4332] px-2.5 py-1.5 rounded hover:bg-[#F4F4F0] border border-transparent hover:border-[#E4E4E0] transition-colors"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 text-[#686E77]" />
                    </a>
                  </div>

                  <button
                    onClick={() => handleScroll('projects')}
                    className="inline-flex items-center space-x-1 text-xs font-mono text-[#686E77] hover:text-[#141619]"
                  >
                    <span>Full Details Below</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
