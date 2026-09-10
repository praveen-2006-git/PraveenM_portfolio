import React from 'react';
import { GraduationCap, Award, Languages } from './Icons';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-b border-[#E4E4E0] bg-[#FBFBF9] relative">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E4E4E0] relative">
          <span className="ghost-section-num">03</span>
          
          <div className="section-accent-rule relative z-10">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#1B4332] font-semibold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332]"></span>
              <span>№ 03 // ABOUT & ACADEMIC BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141619] tracking-tight">
              Background & Approach
            </h2>
            <p className="mt-1 text-sm text-[#686E77]">
              Final-year Computer Science student, practical builder, and aspiring software development engineer.
            </p>
          </div>
        </div>

        {/* Asymmetric 60/40 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-start">
          
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-[#33383F] text-base leading-relaxed">
            <p>
              I am a final-year Computer Science Engineering student at <span className="font-semibold text-[#141619]">Bannari Amman Institute of Technology</span> (BIT Sathy, Expected 2027) with a strong passion for full-stack web development and backend engineering.
            </p>

            <p>
              I have hands-on experience across the <span className="font-semibold text-[#1B4332]">MERN stack (MongoDB, Express.js, React, Node.js)</span>, combined with a solid academic foundation in <span className="font-semibold text-[#141619]">Java, Python, and algorithmic problem-solving</span>. I care about how software operates end-to-end: building responsive user interfaces, developing structured server-side logic and RESTful APIs, and writing clean, reusable code.
            </p>

            <p>
              My practical engineering experience comes from designing and developing full-stack systems: an <span className="font-semibold text-[#1B4332]">Academic Syllabus Portal</span> featuring multi-tier role-based access control, an automated <span className="font-semibold text-[#1B4332]">Asset & Warranty Tracker</span> with scheduled email reminders, and a <span className="font-semibold text-[#1B4332]">Community Surplus Food Routing Portal</span> with concurrency-safe claim management and single-use verification codes.
            </p>

            <div className="p-4 rounded-lg bg-[#F0F5F2] border border-[#BFD5C8] text-xs font-mono text-[#1B4332]">
              <span className="font-bold text-[#1B4332] block mb-1">Career Objective:</span>
              "Looking for a Software Engineer role to contribute to building scalable software solutions and continue growing as a developer. Actively interviewing for Full-Time SDE roles (2027 Batch) and final-year internships."
            </div>

            {/* Core Tenets */}
            <div className="pt-4">
              <h4 className="text-xs font-mono font-bold text-[#686E77] uppercase tracking-wider mb-3">
                Core Engineering Tenets
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
                <div className="p-3.5 rounded-lg bg-white border border-[#E4E4E0] hover:border-[#1B4332] hover:-translate-y-0.5 hover:shadow-subtle transition-all duration-200 text-xs">
                  <div className="font-bold text-[#141619] mb-0.5">Reliable REST Contracts</div>
                  <div className="text-[#686E77] text-[11px]">Structured JSON envelopes with explicit HTTP error handling.</div>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-[#E4E4E0] hover:border-[#1B4332] hover:-translate-y-0.5 hover:shadow-subtle transition-all duration-200 text-xs">
                  <div className="font-bold text-[#141619] mb-0.5">Defensive Data Modeling</div>
                  <div className="text-[#686E77] text-[11px]">Indexed schemas preventing corrupt states and slow full-table scans.</div>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-[#E4E4E0] hover:border-[#1B4332] hover:-translate-y-0.5 hover:shadow-subtle transition-all duration-200 text-xs">
                  <div className="font-bold text-[#141619] mb-0.5">Secure Role Guards</div>
                  <div className="text-[#686E77] text-[11px]">Verifying permissions at the backend route level rather than client only.</div>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-[#E4E4E0] hover:border-[#1B4332] hover:-translate-y-0.5 hover:shadow-subtle transition-all duration-200 text-xs">
                  <div className="font-bold text-[#141619] mb-0.5">Modern Problem Solving</div>
                  <div className="text-[#686E77] text-[11px]">Blending solid CS foundations with modern AI-assisted engineering.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Foundation & Credentials Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Profile Overview Card */}
            <div className="p-5 rounded-xl border border-[#E4E4E0] bg-white shadow-elevated flex items-center gap-4 hover:-translate-y-0.5 hover:border-[#BFD1C6] transition-all duration-300 group">
              <div className="relative shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-[#E4E4E0] bg-[#F4F4F0] shadow-subtle transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/profile.png"
                    alt="Praveen M"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B4332] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#1B4332] border-2 border-white" title="Active Candidate"></span>
                </span>
              </div>
              <div className="min-w-0">
                <div className="text-lg font-extrabold text-[#141619] tracking-tight">Praveen M.</div>
                <div className="text-xs font-mono text-[#1B4332] font-semibold mt-0.5">B.E. Computer Science & Engineering</div>
                <div className="text-[11px] text-[#686E77] font-mono mt-1">BIT Sathy • Batch 2023–2027</div>
                <div className="mt-2.5 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#EBF0EC] text-[#1B4332] border border-[#BFD1C6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mr-1.5 animate-pulse"></span>
                  Open for SDE Roles
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-xl border border-[#E4E4E0] bg-white shadow-elevated space-y-4">
              <div className="flex items-center space-x-2.5 text-[#1B4332]">
                <GraduationCap className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#141619] font-sans">
                  Education & Academics
                </h3>
              </div>

              {/* College */}
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-bold text-sm text-[#141619]">
                    Bannari Amman Institute of Technology
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EBF0EC] text-[#1B4332] border border-[#BFD1C6] shrink-0 font-bold">
                    CGPA: 6.42 / 10.0
                  </span>
                </div>
                <p className="text-xs text-[#33383F]">
                  B.E. Computer Science and Engineering
                </p>
                <div className="flex items-center space-x-3 text-xs font-mono text-[#686E77] pt-1">
                  <span>Expected 2027 (Final Year)</span>
                  <span>•</span>
                  <span>Sathyamangalam, TN</span>
                </div>
              </div>


              {/* Schooling */}
              <div className="pt-3 border-t border-[#E4E4E0] space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-bold text-sm text-[#141619]">
                    Srinivasa Vidhyalaya Matric Hr. Sec. School
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F4F0] text-[#33383F] border border-[#E4E4E0] shrink-0">
                    71.17%
                  </span>
                </div>
                <p className="text-xs text-[#33383F]">
                  Higher Secondary Certificate (HSC)
                </p>
                <div className="flex items-center space-x-3 text-xs font-mono text-[#686E77] pt-1">
                  <span>Completed: 2023</span>
                  <span>•</span>
                  <span>Udumalpet, TN</span>
                </div>
              </div>

              {/* Coursework */}
              <div className="pt-3 border-t border-[#E4E4E0]">
                <span className="text-[10px] font-mono font-bold text-[#686E77] uppercase tracking-wider block mb-1.5">
                  Relevant Coursework:
                </span>
                <div className="flex flex-wrap gap-1">
                  {[
                    'Data Structures & Algorithms',
                    'OOP in Java',
                    'Database Management Systems',
                    'Operating Systems',
                    'Computer Networks',
                    'RESTful Web Services'
                  ].map(course => (
                    <span 
                      key={course}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F4F4F0] border border-[#E4E4E0] text-[#33383F]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="p-6 rounded-xl border border-[#E4E4E0] bg-white shadow-elevated space-y-3">
              <div className="flex items-center space-x-2.5 text-[#1B4332]">
                <Award className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#141619] font-sans">
                  Certifications
                </h3>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                <div className="p-2.5 rounded bg-[#FBFBF9] border border-[#E4E4E0]">
                  <div className="font-bold text-[#141619]">Python Essentials 1</div>
                  <div className="text-[#686E77] text-[11px] mt-0.5">Cisco Networking Academy / Python Institute • Jun 2026</div>
                </div>

                <div className="p-2.5 rounded bg-[#FBFBF9] border border-[#E4E4E0]">
                  <div className="font-bold text-[#141619]">CCNA: Introduction to Networks</div>
                  <div className="text-[#686E77] text-[11px] mt-0.5">Cisco Networking Academy</div>
                </div>

                <div className="p-2.5 rounded bg-[#FBFBF9] border border-[#E4E4E0]">
                  <div className="font-bold text-[#141619]">Introduction to Modern AI</div>
                  <div className="text-[#686E77] text-[11px] mt-0.5">Cisco Networking Academy • Feb 2026</div>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="p-5 rounded-xl border border-[#E4E4E0] bg-[#FAF9F6] text-xs font-mono flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[#141619]">
                <Languages className="w-4 h-4 text-[#1B4332]" />
                <span className="font-bold">Languages Spoken:</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-white border border-[#E4E4E0] text-[#141619] font-semibold">
                  Tamil (Fluent)
                </span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#E4E4E0] text-[#141619] font-semibold">
                  English (Fluent)
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
