import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Mail, MapPin, Clock, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { cn } from '../utils/cn';

type InquiryType = 'business' | 'student';

const ContactPage: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<InquiryType>('business');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    budget: '',
    timeline: '',
    ideaStage: '',
    domain: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger celebratory confetti effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00F0FF', '#8B5CF6', '#10B981'],
    });
    setSubmitted(true);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Background aura */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-cyan-500/10 via-violet-600/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* ──── LEFT INFORMATION COLUMN (5 cols) ──── */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 inline-flex items-center gap-1.5 mb-4">
                <Sparkles size={12} /> Direct Transmission
              </span>
              <h1 className="text-4xl sm:text-5xl font-syne font-extrabold text-white tracking-tight leading-[1.1] mb-4">
                Let's engineer <span className="text-gradient-cyan-emerald">the future.</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
                Send us your product specs, technical bottleneck, or student idea thesis. We respond directly with an engineering scope within 24 hours.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 rounded-xl glass-card-bespoke flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-brand-cyan">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">ELECTRONIC MAIL</span>
                  <a href="mailto:contact@noth.in" className="text-white hover:text-brand-cyan transition-colors font-bold">
                    contact@noth.in
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card-bespoke flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-brand-violet">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">COORDINATES</span>
                  <span className="text-white font-bold">Bengaluru &amp; Distributed Nodes, India</span>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card-bespoke flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-brand-emerald">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">RESPONSE TELEMETRY</span>
                  <span className="text-brand-emerald font-bold">&lt; 24 Hours Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Live studio status */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] font-mono text-xs flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-emerald"></span>
              </span>
              <span className="text-slate-300">Intake Channels Open for Q1/Q2 Engagements</span>
            </div>
          </div>

          {/* ──── RIGHT INTAKE FORM (7 cols) ──── */}
          <div className="lg:col-span-7">
            <div className="glass-card-bespoke rounded-3xl p-6 sm:p-10 border border-white/10 hud-crosshair">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-syne font-bold text-white">
                      Transmission Received.
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto font-sans leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Our engineering leads will review your submission and reply to <strong className="text-brand-cyan">{formData.email}</strong> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', organization: '', message: '', budget: '', timeline: '', ideaStage: '', domain: '' });
                      }}
                      className="text-xs font-mono text-brand-cyan hover:underline pt-4 block mx-auto cursor-pointer"
                    >
                      ❮ Send another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Inquiry Switcher */}
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2.5">
                        Routing Protocol:
                      </span>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setInquiryType('business')}
                          className={cn(
                            'p-3.5 rounded-xl text-xs font-mono font-semibold transition-all border flex items-center justify-center gap-2 cursor-pointer',
                            inquiryType === 'business'
                              ? 'bg-brand-cyan text-black border-brand-cyan font-bold shadow-glow-cyan'
                              : 'bg-white/[0.03] text-slate-400 border-white/[0.08] hover:border-white/20'
                          )}
                        >
                          <Briefcase size={15} />
                          Business Client
                        </button>

                        <button
                          type="button"
                          onClick={() => setInquiryType('student')}
                          className={cn(
                            'p-3.5 rounded-xl text-xs font-mono font-semibold transition-all border flex items-center justify-center gap-2 cursor-pointer',
                            inquiryType === 'student'
                              ? 'bg-brand-violet text-white border-brand-violet font-bold shadow-glow-violet'
                              : 'bg-white/[0.03] text-slate-400 border-white/[0.08] hover:border-white/20'
                          )}
                        >
                          <GraduationCap size={15} />
                          Student Mentorship
                        </button>
                      </div>
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
                      <div>
                        <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan transition-all"
                        />
                      </div>

                      <div>
                        <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          placeholder="e.g. rahul@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan transition-all"
                        />
                      </div>
                    </div>

                    {/* Organization / University */}
                    <div className="font-sans text-xs">
                      <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5">
                        {inquiryType === 'business' ? 'Company / Brand Name' : 'College / University & Dept'}
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => updateField('organization', e.target.value)}
                        placeholder={inquiryType === 'business' ? 'e.g. Nexus Logistics Pvt Ltd' : 'e.g. IIT Madras, 3rd Yr CSE'}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan transition-all"
                      />
                    </div>

                    {/* Dynamic Fields */}
                    {inquiryType === 'business' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
                        <div>
                          <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5">
                            Target Budget Scope
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => updateField('budget', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-[#090C16] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-brand-cyan cursor-pointer"
                          >
                            <option value="">Select Range</option>
                            <option value="under-1L">Under ₹1,00,000</option>
                            <option value="1L-3L">₹1,00,000 – ₹3,00,000</option>
                            <option value="3L-8L">₹3,00,000 – ₹8,00,000</option>
                            <option value="custom">Enterprise / Custom Scope</option>
                          </select>
                        </div>

                        <div>
                          <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5">
                            Target Launch Timeline
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => updateField('timeline', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-[#090C16] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-brand-cyan cursor-pointer"
                          >
                            <option value="">Select Timeline</option>
                            <option value="rapid-3w">Rapid Sprint (2–3 Weeks)</option>
                            <option value="month">1 Month</option>
                            <option value="quarter">2–3 Months</option>
                            <option value="retainer">Ongoing Engineering Retainer</option>
                          </select>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
                        <div>
                          <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5">
                            Current Project Phase
                          </label>
                          <select
                            value={formData.ideaStage}
                            onChange={(e) => updateField('ideaStage', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-[#090C16] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-brand-violet cursor-pointer"
                          >
                            <option value="">Select Phase</option>
                            <option value="raw-idea">Initial Hypothesis / Sketch</option>
                            <option value="prototype-blocked">Prototype Stuck / Bugs</option>
                            <option value="hackathon-prep">Hackathon Crunch Time</option>
                            <option value="patent-paper">IEEE Paper / Patent Guidance</option>
                          </select>
                        </div>

                        <div>
                          <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5">
                            Domain Category
                          </label>
                          <select
                            value={formData.domain}
                            onChange={(e) => updateField('domain', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-[#090C16] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-brand-violet cursor-pointer"
                          >
                            <option value="">Select Category</option>
                            <option value="ai-ml">AI / Deep Learning</option>
                            <option value="iot-hardware">IoT / Embedded Systems</option>
                            <option value="web-app">Full-Stack Web / Mobile</option>
                            <option value="blockchain">Web3 / Decentralized</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Message Box */}
                    <div className="font-sans text-xs">
                      <label className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5">
                        {inquiryType === 'business' ? 'Project Requirements / Problem Brief *' : 'Idea Description & What You Need Help With *'}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        placeholder={
                          inquiryType === 'business'
                            ? 'Describe what you want to build, current technical challenges, and any required third-party integrations...'
                            : 'Explain what you want to invent, who it is for, what you have built so far, and where you are stuck...'
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className={cn(
                        'w-full py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer',
                        inquiryType === 'business'
                          ? 'bg-brand-cyan text-black hover:bg-cyan-300 hover:shadow-glow-cyan'
                          : 'bg-brand-violet text-white hover:bg-violet-600 hover:shadow-glow-violet'
                      )}
                    >
                      <Send size={15} />
                      {inquiryType === 'business' ? 'Transmit Client Project Scope' : 'Submit Mentorship Application'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
