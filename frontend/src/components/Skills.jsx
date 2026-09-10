import React, { useState } from 'react';
import { Server, Database, Code2, Terminal, Search } from './Icons';

const SKILL_DOMAINS = [
  {
    id: 'backend',
    layer: 'BACK-END',
    title: 'Back-End & API Development',
    icon: Server,
    summary: 'Building server-side logic, secure RESTful APIs, and access-controlled middleware.',
    deep: [
      { 
        name: 'Node.js', 
        note: 'Server-side runtime & async logic',
        project: 'syllabus',
        usage: 'Powers backend services across projects with non-blocking asynchronous event execution.'
      },
      { 
        name: 'Express.js', 
        note: 'REST API routing & middleware',
        project: 'warranty',
        usage: 'Structured modular routers, central error-handling, and JSON request/response pipelines.'
      },
      { 
        name: 'REST API Development', 
        note: 'Idempotent, structured endpoints',
        project: 'syllabus',
        usage: 'Built clean HTTP contracts (200, 201, 400, 401, 403, 500) with proper error envelopes.'
      },
      { 
        name: 'Role-Based Access Control', 
        note: 'Admin, Faculty & Student tiers',
        project: 'syllabus',
        usage: 'Implemented gateway authorization middleware validating roles before permitting resource mutations.'
      },
      { 
        name: 'Concurrency Control', 
        note: 'Safe simultaneous claim handling',
        project: 'food-routing',
        usage: 'Designed database transaction logic preventing concurrent double-claims in the food surplus portal.'
      }
    ],
    familiar: ['Single-Use Token Verification', 'File Upload Streaming', 'Rate Limiting']
  },
  {
    id: 'database',
    layer: 'DATABASE',
    title: 'Database & Data Modeling',
    icon: Database,
    summary: 'Designing document schemas, indexing for query speed, and relational SQL queries.',
    deep: [
      { 
        name: 'MongoDB', 
        note: 'NoSQL document persistence',
        project: 'warranty',
        usage: 'Primary database for storing structured catalogs, users, revisions, and warranty assets.'
      },
      { 
        name: 'Basic SQL Query', 
        note: 'Relational data query fundamentals',
        project: 'syllabus',
        usage: 'Proficient in SELECT, JOIN, GROUP BY, and structured database schema normalization.'
      },
      { 
        name: 'Mongoose ODM', 
        note: 'Schema validation & lifecycle hooks',
        project: 'syllabus',
        usage: 'Defined typed schemas, pre-save hooks, and custom virtual fields for computed asset statuses.'
      },
      { 
        name: 'Index Optimization', 
        note: 'Compound indexes for fast lookups',
        project: 'syllabus',
        usage: 'Structured compound indexes on { courseCode: 1, version: -1 } for sub-85ms catalog scans.'
      }
    ],
    familiar: ['Relational Normalization', 'Data Integrity Constraints', 'Aggregation Stages']
  },
  {
    id: 'frontend',
    layer: 'FRONT-END',
    title: 'Front-End & UI/UX Design',
    icon: Code2,
    summary: 'Crafting responsive user interfaces, clean navigation, and accessible component layouts.',
    deep: [
      { 
        name: 'React', 
        note: 'Functional components & hooks',
        project: 'food-routing',
        usage: 'Built interactive single-page front-ends with custom hooks, state reducers, and fast re-renders.'
      },
      { 
        name: 'JavaScript (ES6+)', 
        note: 'Promises, closures & modern syntax',
        project: 'syllabus',
        usage: 'Core language for async/await, Array manipulation, object destructuring, and API consumption.'
      },
      { 
        name: 'HTML & CSS', 
        note: 'Semantic structure & styling',
        project: 'syllabus',
        usage: 'Implemented responsive mobile-friendly layouts, clean flex/grid structures, and accessible typography.'
      },
      { 
        name: 'UI/UX Design', 
        note: 'User-centric layout & workflows',
        project: 'warranty',
        usage: 'Designed intuitive card and list-based interfaces with clear visual hierarchy and color indicators.'
      },
      { 
        name: 'Tailwind CSS', 
        note: 'Utility design tokens & themes',
        project: 'food-routing',
        usage: 'Applied cohesive design systems with curated color palettes, dark/light contrast, and subtle micro-animations.'
      }
    ],
    familiar: ['Responsive Breakpoints', 'Form Validation', 'State Management']
  },
  {
    id: 'languages-tools',
    layer: 'TOOLS & LANGUAGES',
    title: 'Programming Languages & Tools',
    icon: Terminal,
    summary: 'Multi-language foundation in Java & Python, Git version control, and AI-assisted workflows.',
    deep: [
      { 
        name: 'Java', 
        note: 'Object-Oriented Programming',
        project: 'syllabus',
        usage: 'Solid academic foundation in OOP principles, data structures, algorithms, and class hierarchies.'
      },
      { 
        name: 'Python', 
        note: 'Scripting & Cisco Certification',
        project: 'warranty',
        usage: 'Certified in Cisco Python Essentials 1; used for scripting, algorithmic problem solving, and data logic.'
      },
      { 
        name: 'Git & GitHub', 
        note: 'Branching, PRs & commit hygiene',
        project: 'syllabus',
        usage: 'Maintained atomic git commits, branch management, and clean open-source repository documentation.'
      },
      { 
        name: 'VS Code & Postman', 
        note: 'Development & API testing',
        project: 'warranty',
        usage: 'Verified API request payloads, edge case responses, status headers, and environment variables.'
      },
      { 
        name: 'AI Tools (Antigravity, Claude)', 
        note: 'AI-assisted modern coding',
        project: 'food-routing',
        usage: 'Leveraged AI-assisted development workflows to accelerate architecture design, refactoring, and testing.'
      }
    ],
    familiar: ['Linux / Bash Commands', 'NPM Ecosystem', 'Network Fundamentals (CCNA)']
  }
];

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDomains = (selectedFilter === 'all' 
    ? SKILL_DOMAINS 
    : SKILL_DOMAINS.filter(d => d.id === selectedFilter)
  ).map(domain => {
    if (!searchQuery.trim()) return domain;
    const query = searchQuery.toLowerCase();
    const matchingDeep = domain.deep.filter(s => 
      s.name.toLowerCase().includes(query) ||
      s.note.toLowerCase().includes(query) ||
      s.usage.toLowerCase().includes(query)
    );
    const matchingFamiliar = domain.familiar.filter(f => 
      f.toLowerCase().includes(query)
    );
    return {
      ...domain,
      deep: matchingDeep,
      familiar: matchingFamiliar
    };
  }).filter(domain => domain.deep.length > 0 || domain.familiar.length > 0 || !searchQuery.trim());

  return (
    <section id="skills" className="py-24 px-6 border-b border-[#E4E4E0] bg-[#FBFBF9] relative">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E4E4E0] relative">
          <span className="ghost-section-num">02</span>

          <div className="section-accent-rule relative z-10">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#1B4332] font-semibold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332]"></span>
              <span>№ 02 // TECHNICAL SKILLS & STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141619] tracking-tight">
              Technical Skills & Proficiencies
            </h2>
            <p className="mt-1 text-sm text-[#686E77]">
              Front-End, Back-End, Databases, Programming Languages, and Tools from my official resume.
            </p>
          </div>

          {/* Layer Filter Buttons */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#F4F4F0] rounded-lg border border-[#E4E4E0] text-xs font-mono relative z-10">
            {[
              { id: 'all', label: 'All Skills' },
              { id: 'backend', label: 'Back-End' },
              { id: 'database', label: 'Database' },
              { id: 'frontend', label: 'Front-End' },
              { id: 'languages-tools', label: 'Languages & Tools' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-[#1B4332] text-white shadow-subtle'
                    : 'text-[#686E77] hover:text-[#141619]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Usage Filter Strip & Interactive Search */}
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2 text-[#686E77]">
            <span className="text-[11px] font-bold uppercase tracking-wider">Highlight by Project:</span>
            {[
              { id: 'all', label: 'Show All' },
              { id: 'syllabus', label: 'Syllabus System' },
              { id: 'warranty', label: 'Warranty Tracker' },
              { id: 'food-routing', label: 'Surplus Food Portal' }
            ].map((pf) => (
              <button
                key={pf.id}
                onClick={() => setActiveProjectFilter(pf.id)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all border ${
                  activeProjectFilter === pf.id
                    ? 'bg-[#EBF0EC] text-[#1B4332] border-[#BFD1C6] font-bold'
                    : 'bg-white border-[#E4E4E0] text-[#686E77] hover:text-[#141619]'
                }`}
              >
                {pf.label}
              </button>
            ))}
          </div>

          {/* Real-time Skill Search Box */}
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#686E77]">
              <Search className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. java, react, mongo)..."
              className="w-full pl-8 pr-7 py-1.5 rounded bg-white border border-[#E4E4E0] text-xs font-mono text-[#141619] placeholder:text-[#9C998F] focus:outline-none focus:border-[#1B4332]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-2 flex items-center text-xs text-[#686E77] hover:text-[#141619]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 2x2 Clean Skill Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {filteredDomains.map((domain) => {
            const IconComponent = domain.icon;
            return (
              <div 
                key={domain.id}
                className="rounded-xl border border-[#E4E4E0] bg-white p-6 shadow-elevated transition-all duration-300 hover:shadow-elevated hover:border-[#BFD1C6] flex flex-col justify-between"
              >
                <div>
                  {/* Domain Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E4E4E0]">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-2 rounded bg-[#EBF0EC] text-[#1B4332] border border-[#BFD1C6] transition-transform duration-200 hover:scale-105">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-[#C97A3E] font-bold">
                          {domain.layer}
                        </div>
                        <h3 className="font-bold text-base text-[#141619] font-sans">
                          {domain.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#686E77] my-3 leading-relaxed">
                    {domain.summary}
                  </p>

                  {/* Skills Grid */}
                  <div className="space-y-2.5 mt-4">
                    {domain.deep.map((skill) => {
                      const isHighlighted = activeProjectFilter !== 'all' && skill.project === activeProjectFilter;
                      return (
                        <div
                          key={skill.name}
                          className={`p-3 rounded-lg border transition-all duration-200 text-xs font-mono hover:-translate-y-0.5 hover:shadow-subtle ${
                            isHighlighted 
                              ? 'bg-[#EBF0EC] border-[#1B4332] shadow-subtle' 
                              : 'bg-[#FBFBF9] border-[#E4E4E0] hover:border-[#1B4332]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-[#141619] text-sm font-sans">
                              {skill.name}
                            </span>
                            <span className="text-[10px] text-[#C97A3E] font-semibold">
                              {skill.note}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#33383F] font-sans leading-relaxed">
                            {skill.usage}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Familiar Topics */}
                {domain.familiar && domain.familiar.length > 0 && (
                  <div className="pt-4 mt-4 border-t border-[#E4E4E0]">
                    <span className="text-[10px] font-mono font-bold text-[#686E77] uppercase tracking-wider block mb-1.5">
                      Related Concepts:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.familiar.map(fam => (
                        <span 
                          key={fam}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F4F4F0] border border-[#E4E4E0] text-[#33383F] hover:border-[#1B4332] hover:text-[#1B4332] hover:bg-white transition-all cursor-default"
                        >
                          {fam}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
