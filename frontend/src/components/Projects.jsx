import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Server, 
  CheckCircle2, 
  ArrowUpRight,
  FileText,
  Shield,
  Database,
  Layers,
  Clock
} from './Icons';

const PROJECTS_DATA = [
  {
    id: 'syllabus-system',
    index: '01',
    title: 'Academic Syllabus Management Platform',
    category: 'MERN Stack • Full-Stack Web Application',
    role: 'Full-Stack Developer (College Project)',
    timeline: '2024',
    githubUrl: 'https://github.com/praveen-2006-git',
    demoUrl: 'https://sylubus-management-system.vercel.app/login',
    summary: 'A centralized institutional syllabus curation and approval platform developed for college departments to eliminate unversioned curriculum files, protect course outlines with role-based access, and provide faculty an authenticated upload workflow.',
    features: [
      {
        title: 'Role-Based Access Control (RBAC)',
        desc: 'Enforces strict permission guards for Admin, Faculty, and Student tiers at the Express API gateway level to prevent unauthorized curriculum changes.',
        icon: Shield
      },
      {
        title: 'Multer Disk Stream Ingestion',
        desc: 'Streams large syllabus PDF uploads directly to disk storage with MIME-type verification, maintaining a constant low Node.js RAM footprint.',
        icon: Server
      },
      {
        title: 'Atomic Version Stamping',
        desc: 'Implements an immutable revision audit log where each approved faculty upload automatically increments the syllabus version tag (v1.0 → v1.1).',
        icon: FileText
      },
      {
        title: 'Compound Indexed Catalog Search',
        desc: 'MongoDB collection indexed on { courseCode: 1, version: -1 } ensuring sub-85ms search and query response times across all departmental courses.',
        icon: Database
      }
    ],
    architecture: [
      { step: '01', name: 'React 19 Client', detail: 'Authenticated UI form with client-side file validation and optimistic status feedback.' },
      { step: '02', name: 'Express & JWT Gateway', detail: 'Route-level RBAC middleware checking token claims before allowing syllabus modifications.' },
      { step: '03', name: 'Multer Stream Engine', detail: 'MIME-verified disk streaming pipeline saving documents without buffering in server memory.' },
      { step: '04', name: 'MongoDB Database', detail: 'Compound indexed course schema maintaining atomic revision history and fast lookups.' }
    ],
    technicalNote: 'Trade-off: Chose streamed disk storage over storing base64 blobs directly in MongoDB documents to prevent BSON document size limit exhaustion and memory bloat.',
    tags: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Multer', 'RBAC Security', 'Tailwind CSS']
  },
  {
    id: 'warranty-tracker',
    index: '02',
    title: 'Asset & Warranty Lifecycle Engine',
    category: 'Full-Stack Web Application',
    role: 'Full-Stack Developer',
    timeline: '2024',
    githubUrl: 'https://github.com/praveen-2006-git',
    demoUrl: '',
    summary: 'An automated hardware governance dashboard that monitors device warranty expirations, giving users proactive reminders before coverage lapses to prevent surprise out-of-pocket repair bills.',
    features: [
      {
        title: 'Scheduled Expiration Evaluation',
        desc: 'Automated background daemon that regularly checks device warranties and flags units approaching expiration.',
        icon: Clock
      },
      {
        title: 'Proactive Alert Thresholds',
        desc: 'Configured proactive warning horizons (30-day and 7-day alerts) giving users ample time to purchase extended coverage or file claims.',
        icon: Shield
      },
      {
        title: 'Compound Date Indexed Scans',
        desc: 'MongoDB queries indexed on { expiryDate: 1, userId: 1 } that execute fast date range scans instead of full collection memory sweeps.',
        icon: Database
      },
      {
        title: 'Dynamic Asset Health Badges',
        desc: 'Color-coded visual statuses (Active, Warning, Expired) calculated dynamically on retrieval so status flags never become stale.',
        icon: Layers
      }
    ],
    architecture: [
      { step: '01', name: 'React Dashboard', detail: 'Visual device registry with instant status filtering, search, and category sorting.' },
      { step: '02', name: 'Express REST Service', detail: 'CRUD endpoints handling asset registration and invoice document uploads.' },
      { step: '03', name: 'Threshold Daemon', detail: 'Evaluates upcoming expiration windows and generates proactive alert queues.' },
      { step: '04', name: 'Indexed Mongo Store', detail: 'Fast O(log N) indexed queries for prompt retrieval of expiring hardware.' }
    ],
    technicalNote: 'Trade-off: Calculated warranty status dynamically on query from normalized UTC dates rather than persisting static status strings that become outdated.',
    tags: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Lifecycle Alerts', 'REST API', 'Tailwind CSS']
  },
  {
    id: 'food-routing',
    index: '03',
    title: 'Community Surplus Food Ingredient Inventory Routing Portal',
    category: 'MERN Stack • Non-Profit Logistics Platform',
    role: 'Full-Stack Developer (MERN Stack)',
    timeline: '2024',
    githubUrl: 'https://github.com/praveen-2006-git',
    demoUrl: 'https://community-food-portal-4ht8v9lzq-praveens-projects-559cf653.vercel.app/login',
    summary: 'A full-stack web application developed using React on the front end and Node.js/Express on the back end to manage raw ingredient listings, route mapping, and logistics for local soup kitchens.',
    features: [
      {
        title: 'Concurrent Claim Prevention',
        desc: 'Designed database transaction logic and state locks to safely handle concurrent ingredient claims from multiple soup kitchens without race condition conflicts.',
        icon: Shield
      },
      {
        title: 'Single-Use Verification Handoffs',
        desc: 'Secured physical inventory custody transfers with a single-use verification code system, including rate-limiting against brute-force attempts.',
        icon: CheckCircle2
      },
      {
        title: 'Role-Based Logistics Dashboards',
        desc: 'Configured tailored interfaces for ingredient donors, courier coordinators, and soup kitchen inventory managers.',
        icon: Layers
      },
      {
        title: 'Route Mapping & Inventory Planning',
        desc: 'Organized dynamic pickup routes and raw ingredient batch scheduling to ensure perishables are delivered before spoiling.',
        icon: Server
      }
    ],
    architecture: [
      { step: '01', name: 'React Dashboard', detail: 'Donor listings & kitchen claim canvas with real-time status updates.' },
      { step: '02', name: 'Express API Gateway', detail: 'Role-segregated endpoints handling ingredient CRUD and verification claims.' },
      { step: '03', name: 'Concurrency Guard', detail: 'Atomic database locking preventing simultaneous double-claims on fresh batches.' },
      { step: '04', name: 'Mongo Document Store', detail: 'Perishable inventory registry, custody audit logs, and verification tokens.' }
    ],
    technicalNote: 'Trade-off: Implemented atomic status checks in MongoDB transactions to eliminate race conditions when multiple kitchens attempt to claim the same perishable batch simultaneously.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Concurrency Control', 'Tailwind CSS']
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('syllabus-system');

  const currentProject = PROJECTS_DATA.find(p => p.id === activeTab) || PROJECTS_DATA[0];

  return (
    <section id="projects" className="py-24 px-6 border-b border-[#E4E4E0] bg-[#FBFBF9] relative">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E4E4E0] relative">
          <span className="ghost-section-num">01</span>
          
          <div className="section-accent-rule relative z-10">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#1B4332] font-semibold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332]"></span>
              <span>№ 01 // FEATURED PROJECTS & CODE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141619] tracking-tight">
              Featured Software Projects
            </h2>
            <p className="mt-1 text-sm text-[#686E77]">
              Full-stack web applications built with the MERN stack, complete with working feature lists and open-source repositories.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono px-3 py-1.5 rounded border border-[#E4E4E0] bg-white shadow-subtle relative z-10">
            <span className="w-2 h-2 rounded-full bg-[#1B4332]"></span>
            <span className="text-[#33383F]">3 Working Projects Available</span>
          </div>
        </div>

        {/* Project Selector Horizontal Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {PROJECTS_DATA.map((project) => {
            const isSelected = project.id === activeTab;
            return (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`p-5 rounded-lg text-left transition-all border ${
                  isSelected 
                    ? 'bg-white border-[#1B4332] shadow-elevated border-l-4 border-l-[#1B4332]' 
                    : 'bg-[#F4F4F0] border-[#E4E4E0] hover:border-[#D0D0CA] hover:bg-white/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 text-[11px] font-mono">
                  <span className="text-[#C97A3E] font-bold">PROJECT {project.index}</span>
                  <span className="text-[#686E77]">{project.timeline}</span>
                </div>
                <div className="font-bold text-sm text-[#141619] truncate">{project.title}</div>
                <div className="text-xs text-[#686E77] truncate mt-1">{project.category}</div>
              </button>
            );
          })}
        </div>

        {/* Main Project Card */}
        <div className="mt-8 rounded-xl border border-[#E4E4E0] bg-white shadow-elevated overflow-hidden">
          
          {/* Card Masthead & Direct Action Buttons */}
          <div className="p-6 sm:p-8 border-b border-[#E4E4E0] bg-[#FAF9F6]">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="text-[#C97A3E] font-bold">PROJECT {currentProject.index}</span>
                  <span className="text-[#E4E4E0]">•</span>
                  <span className="text-[#686E77]">{currentProject.role}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141619] tracking-tight">
                  {currentProject.title}
                </h3>
                <p className="text-sm sm:text-base text-[#33383F] leading-relaxed max-w-3xl pt-1">
                  {currentProject.summary}
                </p>
              </div>

              {/* Direct Links: GitHub & Live Demo */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-[#141619] hover:bg-[#25282D] text-white text-xs font-mono font-bold transition-all shadow-subtle"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A0A5AC]" />
                </a>

                {currentProject.demoUrl && (
                  <a
                    href={currentProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 rounded bg-[#1B4332] hover:bg-[#132F23] text-white text-xs font-mono font-bold transition-all shadow-subtle hover:-translate-y-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse"></span>
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#A7F3D0]" />
                  </a>
                )}
              </div>

            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-[#E4E4E0]">
              {currentProject.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded text-xs font-mono bg-white border border-[#E4E4E0] text-[#33383F]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Core Working Features Section */}
          <div className="p-6 sm:p-8 border-b border-[#E4E4E0]">
            <div className="mb-5">
              <h4 className="text-xs font-mono font-bold text-[#1B4332] uppercase tracking-wider flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#1B4332]" />
                <span>Core Working Features</span>
              </h4>
              <p className="text-xs text-[#686E77] mt-1 font-mono">
                Key functional capabilities built into the application.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentProject.features.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-4 rounded-lg bg-[#FBFBF9] border border-[#E4E4E0] hover:border-[#1B4332] transition-colors"
                  >
                    <div className="flex items-center space-x-2.5 mb-1.5">
                      <div className="p-1.5 rounded bg-[#EBF0EC] text-[#1B4332] border border-[#BFD1C6]">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <h5 className="font-bold text-sm text-[#141619] font-sans">
                        {feature.title}
                      </h5>
                    </div>
                    <p className="text-xs text-[#33383F] leading-relaxed pl-8">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Simple Architecture & Data Flow */}
          <div className="p-6 sm:p-8 bg-[#FAF9F6]">
            <div className="mb-4">
              <h4 className="text-xs font-mono font-bold text-[#1B4332] uppercase tracking-wider flex items-center space-x-2">
                <Server className="w-4 h-4 text-[#1B4332]" />
                <span>Architecture & Data Flow</span>
              </h4>
              <p className="text-xs text-[#686E77] mt-1 font-mono">
                How data moves cleanly through the application stack.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {currentProject.architecture.map((node) => (
                <div key={node.step} className="p-3.5 rounded-lg bg-white border border-[#E4E4E0] shadow-subtle">
                  <div className="flex items-center justify-between mb-1 text-[11px] font-mono">
                    <span className="text-[#C97A3E] font-bold">{node.step}</span>
                    <span className="text-[10px] text-[#686E77] font-semibold">Tier</span>
                  </div>
                  <div className="font-bold text-xs text-[#141619] font-sans mb-1">
                    {node.name}
                  </div>
                  <p className="text-[11px] text-[#686E77] leading-relaxed">
                    {node.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Trade-Off Note */}
            <div className="mt-4 p-3.5 rounded-lg bg-[#F0F5F2] border border-[#BFD5C8] text-xs font-mono text-[#1B4332] flex items-start space-x-2">
              <span className="font-bold shrink-0">Engineering Note:</span>
              <span className="text-[#33383F]">{currentProject.technicalNote}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
