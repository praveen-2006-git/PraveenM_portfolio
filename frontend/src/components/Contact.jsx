import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Send, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight,
  Clock 
} from './Icons';

const INQUIRY_TEMPLATES = [
  { label: 'Full-Time SDE (2027)', text: 'Hi Praveen, we reviewed your projects and would love to discuss a Full-Time SDE opening (Batch 2027) at our company...' },
  { label: 'Final-Year SDE Intern', text: 'Hi Praveen, we have an SDE internship opening and would like to connect regarding your projects and experience...' },
  { label: 'General Connect', text: 'Hi Praveen, let\'s connect and discuss potential software engineering opportunities...' }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('praveen.cs23@bitsathy.ac.in');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+918610236420');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleApplyTemplate = (text) => {
    setFormData(prev => ({ ...prev, message: text }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message before sending.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit dispatch to API.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.warn('Contact API error:', err.message);
      setStatus('error');
      setErrorMessage(
        'Backend server currently offline. Feel free to email me directly at praveen.cs23@bitsathy.ac.in!'
      );
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#FBFBF9] relative">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header with Signature Ghost Number and Accent Rule */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E4E4E0] relative">
          <span className="ghost-section-num">05</span>

          <div className="section-accent-rule relative z-10">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#1B4332] font-semibold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332]"></span>
              <span>№ 05 // GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141619] tracking-tight">
              Contact & Inquiries
            </h2>
            <p className="mt-1 text-sm text-[#686E77]">
              Open for Full-Time SDE opportunities (2027 batch), final-year internships, and collaborative software engineering.
            </p>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
          
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h3 className="text-base font-bold text-[#141619] font-sans mb-1">
                Direct Engineering Channels
              </h3>
              <p className="text-xs text-[#686E77] font-mono">
                Verified direct contacts. SLA: Response within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 rounded-lg border border-[#E4E4E0] bg-white hover:border-[#1B4332] transition-all shadow-subtle">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded bg-[#F0F5F2] text-[#1B4332] border border-[#BFD5C8]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#686E77] uppercase tracking-wider">Primary Email</div>
                      <a 
                        href="mailto:praveen.cs23@bitsathy.ac.in" 
                        className="text-xs sm:text-sm font-semibold text-[#141619] hover:text-[#1B4332] font-mono"
                      >
                        praveen.cs23@bitsathy.ac.in
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[11px] font-mono px-2.5 py-1 rounded border border-[#E4E4E0] bg-[#F4F4F0] text-[#33383F] hover:text-[#141619] hover:border-[#141619] transition-colors"
                  >
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Phone Card with Copy & WhatsApp */}
              <div className="p-4 rounded-lg border border-[#E4E4E0] bg-white hover:border-[#1B4332] transition-all shadow-subtle">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded bg-[#F0F5F2] text-[#1B4332] border border-[#BFD5C8]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#686E77] uppercase tracking-wider">Direct Phone & WhatsApp</div>
                      <a 
                        href="tel:+918610236420" 
                        className="text-xs sm:text-sm font-semibold text-[#141619] hover:text-[#1B4332] font-mono"
                      >
                        +91 8610236420
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    <a
                      href="https://wa.me/918610236420?text=Hi%20Praveen,%20reviewed%20your%20engineering%20portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#F0F5F2] text-[#1B4332] border border-[#BFD5C8] hover:bg-[#1B4332] hover:text-white transition-colors"
                      title="Open WhatsApp chat with Praveen"
                    >
                      WhatsApp
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="text-[11px] font-mono px-2.5 py-1 rounded border border-[#E4E4E0] bg-[#F4F4F0] text-[#33383F] hover:text-[#141619] hover:border-[#141619] transition-colors"
                    >
                      {copiedPhone ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Base Location */}
              <div className="p-4 rounded-lg border border-[#E4E4E0] bg-white shadow-subtle">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded bg-[#F4F4F0] text-[#686E77]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#686E77] uppercase tracking-wider">Base Location</div>
                    <span className="text-xs sm:text-sm font-semibold text-[#141619] font-mono">
                      Udumalpet / Erode, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Timezone & Availability Card */}
              <div className="p-4 rounded-lg border border-[#E4E4E0] bg-[#F4F4F0] text-xs font-mono space-y-2">
                <div className="flex items-center justify-between text-[#686E77]">
                  <span className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#1B4332]" />
                    <span className="font-semibold text-[#141619]">Timezone & SLA</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#F0F5F2] text-[#1B4332] font-bold border border-[#BFD5C8]">
                    IST (UTC+5:30)
                  </span>
                </div>
                <p className="text-[#33383F] text-[11px] leading-relaxed">
                  Active working hours: 09:00 – 21:00 IST. Average response latency: &lt; 24 hours.
                </p>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="https://github.com/praveen-2006-git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg border border-[#E4E4E0] bg-white hover:border-[#141619] text-xs font-mono font-semibold text-[#141619] transition-all shadow-subtle"
              >
                <div className="flex items-center space-x-2">
                  <Github className="w-4 h-4 text-[#1B4332]" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#686E77]" />
              </a>

              <a
                href="https://linkedin.com/in/praveen-m-492715311"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg border border-[#E4E4E0] bg-white hover:border-[#141619] text-xs font-mono font-semibold text-[#141619] transition-all shadow-subtle"
              >
                <div className="flex items-center space-x-2">
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#686E77]" />
              </a>
            </div>

          </div>

          {/* Contact Dispatch Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl border border-[#E4E4E0] bg-white shadow-elevated">
              <h3 className="text-base font-bold text-[#141619] font-sans mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#686E77] font-mono mb-4">
                Leave a note below and I will respond to your email within 24 hours.
              </p>

              {/* Inquiry Topic Fast Presets */}
              <div className="mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#686E77] block mb-1.5">
                  Quick Message Templates:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {INQUIRY_TEMPLATES.map((tmpl) => (
                    <button
                      key={tmpl.label}
                      type="button"
                      onClick={() => handleApplyTemplate(tmpl.text)}
                      className="px-2.5 py-1 rounded text-[10px] font-mono bg-[#F4F4F0] hover:bg-[#F0F5F2] hover:text-[#1B4332] text-[#33383F] border border-[#E4E4E0] transition-colors"
                    >
                      + {tmpl.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label htmlFor="name" className="block text-[#141619] font-bold mb-1.5 uppercase text-[11px]">
                    Your Name <span className="text-[#C97A3E]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Rivera"
                    disabled={status === 'sending'}
                    className="w-full rounded bg-[#F4F4F0] border border-[#E4E4E0] px-3.5 py-2.5 text-[#141619] placeholder:text-[#9C998F] focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#141619] font-bold mb-1.5 uppercase text-[11px]">
                    Your Email Address <span className="text-[#C97A3E]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    disabled={status === 'sending'}
                    className="w-full rounded bg-[#F4F4F0] border border-[#E4E4E0] px-3.5 py-2.5 text-[#141619] placeholder:text-[#9C998F] focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] transition-colors"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="message" className="text-[#141619] font-bold uppercase text-[11px]">
                      Message / Inquiry Details <span className="text-[#C97A3E]">*</span>
                    </label>
                    <span className="text-[10px] text-[#686E77] font-mono">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Praveen, we reviewed your case studies and would love to discuss an SDE internship opening..."
                    disabled={status === 'sending'}
                    className="w-full rounded bg-[#F4F4F0] border border-[#E4E4E0] px-3.5 py-2.5 text-[#141619] placeholder:text-[#9C998F] focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] transition-colors resize-none"
                  />
                </div>

                {/* Status Alerts */}
                {status === 'success' && (
                  <div className="p-3 rounded bg-[#F0F5F2] border border-[#BFD5C8] flex items-start space-x-2 text-[#1B4332]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#1B4332]" />
                    <span>Message received! Your dispatch has been logged in MongoDB. I will respond within 24 hours.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3 rounded bg-[#FCF4EE] border border-[#F3D5C3] flex items-start space-x-2 text-[#C97A3E]">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#C97A3E]" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded bg-[#1B4332] hover:bg-[#123023] disabled:bg-[#E4E4E0] text-white font-bold transition-all shadow-subtle"
                >
                  <span>{status === 'sending' ? 'Sending Message...' : 'Send Message to Praveen'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
