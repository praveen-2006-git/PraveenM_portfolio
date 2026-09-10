import React, { useState } from 'react';
import { FileText, Download, Github, GraduationCap, ArrowUpRight, Copy, Check, Award, Languages } from './Icons';

export default function Resume() {
  const [copiedAts, setCopiedAts] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlaintextResume = () => {
    const atsText = `PRAVEEN M
Final Year Computer Science Engineering Student | Bannari Amman Institute of Technology (2023 - 2027)
Email: praveen.cs23@bitsathy.ac.in | Phone: +91 8610236420
GitHub: https://github.com/praveen-2006-git | LinkedIn: https://linkedin.com/in/praveen-m-492715311
Target: Full-Time SDE Roles (Batch 2027) & Final-Year Internships
Location: Tamil Nadu, India

EDUCATION
- Bannari Amman Institute of Technology (BIT Sathy) | 2023 - 2027
  Bachelor of Engineering - Computer Science & Engineering | CGPA: 6.42 / 10.0
  Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems, Operating Systems, Computer Networks, Full-Stack Architecture.
- Srinivasa Vidhyalaya Matriculation Higher Secondary School | Completed 2023
  Higher Secondary Certificate (HSC) | Score: 71.17%

TECHNICAL SKILLS
- Programming Languages: Java, Python, JavaScript (ES6+)
- Web Technologies: React, Node.js, Express.js, HTML5, CSS3, Tailwind CSS
- Databases & Storage: MongoDB, Mongoose ODM, Basic SQL
- Developer Tools & Practices: Git, GitHub, VS Code, Postman, REST APIs, RBAC Middleware
- AI Tools: Antigravity, Claude

KEY PROJECTS
1. Academic Syllabus Management System (MERN Stack)
- Architected multi-tier RBAC (Admin, Faculty, Student) protecting syllabus modifications at the Express API gateway.
- Integrated Multer stream storage pipeline with strict MIME validation to handle PDF curriculum uploads without Node.js RAM bloat.
- Built compound indexed MongoDB schemas ({ courseCode: 1, version: -1 }) achieving sub-85ms lookups.

2. Asset & Warranty Lifecycle Tracker (Full-Stack MERN)
- Developed an automated threshold evaluation engine evaluating 30-day and 7-day hardware warranty expiration windows.
- Structured compound date indexes ({ expiryDate: 1, userId: 1 }) reducing query latency to O(log N).
- Created a categorized dashboard UI in React providing instant status classifications (Active, Warning, Expired).

3. Community Surplus Food Ingredient Inventory Routing Portal (MERN Stack)
- Built concurrent claim-prevention architecture in Node.js/Express to prevent duplicate food allocation across soup kitchens.
- Developed single-use verification code handoffs ensuring physical audit tracking between donors and volunteers.
- Implemented role-based logistics dashboard in React with live status updates (Available, Claimed, Picked Up, Delivered).

CERTIFICATIONS
- Python Essentials 1 — Cisco Networking Academy / Python Institute (Jun 2026)
- CCNA: Introduction to Networks — Cisco Networking Academy
- Introduction to Modern AI — Cisco Networking Academy (Feb 2026)

LANGUAGES
- Tamil: Native / Fluent
- English: Professional / Fluent`;

    const copyWithFallback = () => {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = atsText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopiedAts(true);
        setTimeout(() => setCopiedAts(false), 2000);
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(atsText)
        .then(() => {
          setCopiedAts(true);
          setTimeout(() => setCopiedAts(false), 2000);
        })
        .catch(() => copyWithFallback());
    } else {
      copyWithFallback();
    }
  };


  return (
    <section id="resume" className="py-24 px-6 border-b border-[#E4E4E0] bg-[#FBFBF9] relative">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header with Signature Ghost Number and Accent Rule */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#E4E4E0] relative">
          <span className="ghost-section-num">04</span>

          <div className="section-accent-rule relative z-10">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#1B4332] font-semibold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332]"></span>
              <span>№ 04 // VERIFIABLE CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141619] tracking-tight">
              Curriculum Vitae & Qualifications
            </h2>
            <p className="mt-1 text-sm text-[#686E77]">
              ATS-aligned engineering summary formatted for quick recruiter review.
            </p>
          </div>

          {/* CV Actions: PDF, ATS Plaintext, GitHub */}
          <div className="flex flex-wrap items-center gap-2.5 relative z-10">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded bg-[#1B4332] hover:bg-[#123023] text-white text-xs font-mono font-bold transition-all hover:shadow-subtle"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleCopyPlaintextResume}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded border border-[#E4E4E0] hover:border-[#1B4332] bg-white text-xs font-mono font-semibold text-[#141619] transition-all hover:shadow-subtle"
              title="Copy ATS-formatted plaintext markdown for job application portals"
            >
              {copiedAts ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#1B4332]" />
                  <span>ATS Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#1B4332]" />
                  <span>Copy ATS Plaintext</span>
                </>
              )}
            </button>

            <a
              href="https://github.com/praveen-2006-git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded border border-[#E4E4E0] hover:border-[#141619] bg-white text-xs font-mono font-semibold text-[#141619] transition-all hover:shadow-subtle"
            >
              <Github className="w-3.5 h-3.5 text-[#1B4332]" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#686E77]" />
            </a>
          </div>
        </div>

        {/* Monograph Document Container */}
        <div className="mt-8 rounded-xl border border-[#E4E4E0] bg-white shadow-elevated p-6 sm:p-10 divide-y divide-[#E4E4E0]">
          
          {/* Header Block */}
          <div className="pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#E4E4E0] bg-[#F4F4F0] shrink-0 shadow-xs">
                <img
                  src="/profile.png"
                  alt="Praveen M"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-[#141619] tracking-tight">Praveen M</h3>
                <p className="text-sm font-mono text-[#1B4332] font-bold mt-0.5">
                  Final Year CS Student (Batch 2023–2027) | Full-Stack Software Developer
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#686E77] mt-1.5 font-mono">
                  <span>Tamil Nadu, India</span>
                  <span>•</span>
                  <a href="mailto:praveen.cs23@bitsathy.ac.in" className="hover:text-[#1B4332]">praveen.cs23@bitsathy.ac.in</a>
                  <span>•</span>
                  <span>+91 8610236420</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-2">
              <span className="inline-block px-3 py-1.5 rounded bg-[#F0F5F2] text-[#1B4332] text-xs font-mono font-semibold border border-[#BFD5C8]">
                Target: Full-Time SDE & Internships (2027 Batch)
              </span>
              <span className="text-[11px] font-mono text-[#686E77]">
                CGPA: <strong className="text-[#141619]">6.42 / 10.0</strong> • BIT Sathy
              </span>
            </div>
          </div>

          {/* Education Block */}
          <div className="py-8">
            <h4 className="text-xs font-mono font-bold text-[#686E77] uppercase tracking-wider mb-6 flex items-center space-x-2">
              <GraduationCap className="w-4 h-4 text-[#1B4332]" />
              <span>Academic Education</span>
            </h4>

            <div className="space-y-6">
              {/* College */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <h5 className="text-base font-bold text-[#141619]">
                    Bannari Amman Institute of Technology (BIT Sathy)
                  </h5>
                  <p className="text-xs font-medium text-[#33383F] mt-0.5">
                    Bachelor of Engineering — Computer Science & Engineering (Batch 2023–2027)
                  </p>
                  <p className="text-xs text-[#686E77] mt-2 max-w-xl leading-relaxed">
                    Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems, Operating Systems, Computer Networks, and Full-Stack Web Architecture.
                  </p>
                </div>

                <div className="text-xs font-mono text-[#686E77] shrink-0 sm:text-right">
                  <div className="font-bold text-[#141619]">2023 – 2027</div>
                  <div className="text-[11px] text-[#1B4332] font-semibold">Final Year • CGPA: 6.42</div>
                </div>
              </div>

              {/* School */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pt-4 border-t border-[#F0F0ED]">
                <div>
                  <h5 className="text-sm font-bold text-[#141619]">
                    Srinivasa Vidhyalaya Matriculation Higher Secondary School
                  </h5>
                  <p className="text-xs font-medium text-[#33383F] mt-0.5">
                    Higher Secondary Certificate (HSC) — Science & Mathematics
                  </p>
                </div>

                <div className="text-xs font-mono text-[#686E77] shrink-0 sm:text-right">
                  <div className="font-bold text-[#141619]">Completed 2023</div>
                  <div className="text-[11px] text-[#1B4332] font-semibold">Score: 71.17%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Projects Block */}
          <div className="py-8">
            <h4 className="text-xs font-mono font-bold text-[#686E77] uppercase tracking-wider mb-6 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-[#1B4332]" />
              <span>Featured Software Projects</span>
            </h4>

            <div className="space-y-6">
              {/* Project 1 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center space-x-2">
                    <h5 className="text-sm font-bold text-[#141619]">Academic Syllabus Management System</h5>
                    <span className="text-[10px] font-mono text-[#1B4332] px-2 py-0.5 rounded bg-[#F0F5F2] border border-[#BFD5C8]">MERN Stack</span>
                  </div>
                  <span className="text-xs font-mono text-[#686E77]">Full-Stack Developer • 2024</span>
                </div>
                <ul className="mt-2 space-y-1.5 text-xs text-[#33383F] list-disc list-inside leading-relaxed">
                  <li>Architected role-based access control (Admin, Faculty, Student) protecting syllabus modifications at the Express API gateway.</li>
                  <li>Integrated Multer disk storage pipeline with strict MIME validation to stream large document uploads without Node.js memory exhaustion.</li>
                  <li>Achieved sub-85ms response times across multi-course indexed queries on MongoDB collections.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center space-x-2">
                    <h5 className="text-sm font-bold text-[#141619]">Asset & Warranty Lifecycle Tracker</h5>
                    <span className="text-[10px] font-mono text-[#1B4332] px-2 py-0.5 rounded bg-[#F0F5F2] border border-[#BFD5C8]">Full-Stack MERN</span>
                  </div>
                  <span className="text-xs font-mono text-[#686E77]">Full-Stack Developer • 2024</span>
                </div>
                <ul className="mt-2 space-y-1.5 text-xs text-[#33383F] list-disc list-inside leading-relaxed">
                  <li>Developed an automated date threshold evaluation engine notifying users 30 days prior to hardware warranty expiration.</li>
                  <li>Structured compound indexed MongoDB schemas to run fast date range scans instead of full-table scans.</li>
                  <li>Engineered a categorized dashboard UI in React providing instant status classifications (Active, Warning, Expired).</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center space-x-2">
                    <h5 className="text-sm font-bold text-[#141619]">Community Surplus Food Ingredient Inventory Routing Portal</h5>
                    <span className="text-[10px] font-mono text-[#1B4332] px-2 py-0.5 rounded bg-[#F0F5F2] border border-[#BFD5C8]">MERN Stack</span>
                  </div>
                  <span className="text-xs font-mono text-[#686E77]">Full-Stack Developer • 2024</span>
                </div>
                <ul className="mt-2 space-y-1.5 text-xs text-[#33383F] list-disc list-inside leading-relaxed">
                  <li>Engineered concurrent claim-prevention architecture in Node.js/Express to prevent race conditions and duplicate batch pickups.</li>
                  <li>Developed single-use verification code handoffs ensuring physical audit tracking between donors and volunteers.</li>
                  <li>Implemented role-based logistics dashboard in React with live status updates (Available, Claimed, Picked Up, Delivered).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications Block */}
          <div className="py-8">
            <h4 className="text-xs font-mono font-bold text-[#686E77] uppercase tracking-wider mb-6 flex items-center space-x-2">
              <Award className="w-4 h-4 text-[#1B4332]" />
              <span>Certifications & Accreditations</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-lg border border-[#E4E4E0] bg-[#FBFBF9]">
                <div className="text-xs font-bold text-[#141619]">Python Essentials 1</div>
                <div className="text-[11px] text-[#686E77] mt-0.5">Cisco Networking Academy / Python Institute</div>
                <div className="text-[10px] font-mono text-[#1B4332] font-semibold mt-2">Completed Jun 2026</div>
              </div>

              <div className="p-3.5 rounded-lg border border-[#E4E4E0] bg-[#FBFBF9]">
                <div className="text-xs font-bold text-[#141619]">CCNA: Introduction to Networks</div>
                <div className="text-[11px] text-[#686E77] mt-0.5">Cisco Networking Academy</div>
                <div className="text-[10px] font-mono text-[#1B4332] font-semibold mt-2">Verified Networking Credential</div>
              </div>

              <div className="p-3.5 rounded-lg border border-[#E4E4E0] bg-[#FBFBF9]">
                <div className="text-xs font-bold text-[#141619]">Introduction to Modern AI</div>
                <div className="text-[11px] text-[#686E77] mt-0.5">Cisco Networking Academy</div>
                <div className="text-[10px] font-mono text-[#1B4332] font-semibold mt-2">Completed Feb 2026</div>
              </div>
            </div>
          </div>

          {/* Languages & Technical Skills Summary */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 rounded-lg bg-[#F4F4F0] border border-[#E4E4E0]">
              <span className="text-[#C97A3E] font-bold block mb-1">PROGRAMMING LANGUAGES</span>
              <span className="text-[#141619]">Java, Python, JavaScript (ES6+), SQL</span>
            </div>
            <div className="p-4 rounded-lg bg-[#F4F4F0] border border-[#E4E4E0]">
              <span className="text-[#C97A3E] font-bold block mb-1">FULL-STACK & DATABASES</span>
              <span className="text-[#141619]">React, Node.js, Express.js, MongoDB, Mongoose, Tailwind CSS</span>
            </div>
            <div className="p-4 rounded-lg bg-[#F4F4F0] border border-[#E4E4E0]">
              <div className="flex items-center space-x-1.5 text-[#1B4332] font-bold mb-1">
                <Languages className="w-3.5 h-3.5" />
                <span>LANGUAGES</span>
              </div>
              <span className="text-[#141619]">Tamil (Fluent, Native), English (Fluent, Professional)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

