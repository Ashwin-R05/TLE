import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Mail, MapPin, Clock, Briefcase, GraduationCap } from 'lucide-react';
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
    setSubmitted(true);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* ──── LEFT INFORMATION (5 cols) ──── */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-flex items-center gap-1.5 mb-4">
                Get In Touch
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.1] mb-4">
                Let's discuss <span className="text-gradient-accent">your project.</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
                Whether you're looking for a digital engineering team or guidance for your student project — reach out directly. We reply within 24 hours.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl card-pro flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Email Us Directly</span>
                  <a href="mailto:contact@tle.in" className="text-white hover:text-blue-400 transition-colors font-semibold text-sm">
                    contact@tle.in
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl card-pro flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Location</span>
                  <span className="text-white font-semibold text-sm">Bengaluru &amp; Remote, India</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl card-pro flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Response Time</span>
                  <span className="text-emerald-400 font-semibold text-sm">&lt; 24 Hours Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Studio Status */}
            <div className="p-4 rounded-2xl bg-surface-100 border border-white/[0.08] text-xs flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-slate-300">Accepting new client sprints and student mentorship applications</span>
            </div>
          </div>

          {/* ──── RIGHT INTAKE FORM (7 cols) ──── */}
          <div className="lg:col-span-7">
            <div className="card-pro rounded-3xl p-6 sm:p-10 shadow-elevated">
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
                    <h3 className="text-2xl font-display font-bold text-white">
                      Message Sent Successfully
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto font-sans leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Our team will review your message and reply to <strong className="text-blue-400">{formData.email}</strong> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', organization: '', message: '', budget: '', timeline: '', ideaStage: '', domain: '' });
                      }}
                      className="text-xs text-blue-400 hover:underline pt-4 block mx-auto cursor-pointer"
                    >
                      Send another message
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
                      <span className="text-xs font-semibold text-slate-300 block mb-2.5">
                        Inquiry Category:
                      </span>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setInquiryType('business')}
                          className={cn(
                            'p-3.5 rounded-xl text-xs font-semibold transition-all border flex items-center justify-center gap-2 cursor-pointer',
                            inquiryType === 'business'
                              ? 'bg-blue-600 text-white border-blue-500 shadow-glow-blue'
                              : 'bg-surface-100 text-slate-400 border-white/[0.08] hover:border-white/20'
                          )}
                        >
                          <Briefcase size={15} />
                          Business Client
                        </button>

                        <button
                          type="button"
                          onClick={() => setInquiryType('student')}
                          className={cn(
                            'p-3.5 rounded-xl text-xs font-semibold transition-all border flex items-center justify-center gap-2 cursor-pointer',
                            inquiryType === 'student'
                              ? 'bg-indigo-600 text-white border-indigo-500 shadow-glow-indigo'
                              : 'bg-surface-100 text-slate-400 border-white/[0.08] hover:border-white/20'
                          )}
                        >
                          <GraduationCap size={15} />
                          Student Mentorship
                        </button>
                      </div>
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="text-xs font-medium text-slate-300 block mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-white/[0.08] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-medium text-slate-300 block mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          placeholder="you@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-white/[0.08] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* Organization / College */}
                    <div className="text-xs">
                      <label className="text-xs font-medium text-slate-300 block mb-1.5">
                        {inquiryType === 'business' ? 'Company or Brand Name' : 'University / Department & Year'}
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => updateField('organization', e.target.value)}
                        placeholder={inquiryType === 'business' ? 'Company Name' : 'e.g. MIT, 3rd Year CSE'}
                        className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-white/[0.08] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>

                    {/* Dynamic Fields */}
                    {inquiryType === 'business' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                          <label className="text-xs font-medium text-slate-300 block mb-1.5">
                            Budget Range
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => updateField('budget', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-white/[0.08] text-white text-xs focus:outline-none focus:border-blue-500 cursor-pointer"
                          >
                            <option value="">Select Range</option>
                            <option value="under-1L">Under ₹1,00,000</option>
                            <option value="1L-3L">₹1,00,000 – ₹3,00,000</option>
                            <option value="3L-8L">₹3,00,000 – ₹8,00,000</option>
                            <option value="custom">Enterprise / Custom Scope</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-medium text-slate-300 block mb-1.5">
                            Target Timeline
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => updateField('timeline', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-white/[0.08] text-white text-xs focus:outline-none focus:border-blue-500 cursor-pointer"
                          >
                            <option value="">Select Timeline</option>
                            <option value="rapid-3w">2–3 Weeks (Rapid Sprint)</option>
                            <option value="month">1 Month</option>
                            <option value="quarter">2–3 Months</option>
                            <option value="retainer">Ongoing Engineering Retainer</option>
                          </select>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                          <label className="text-xs font-medium text-slate-300 block mb-1.5">
                            Project Stage
                          </label>
                          <select
                            value={formData.ideaStage}
                            onChange={(e) => updateField('ideaStage', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-white/[0.08] text-white text-xs focus:outline-none focus:border-indigo-500 cursor-pointer"
                          >
                            <option value="">Select Stage</option>
                            <option value="raw-idea">Early Concept / Brainstorming</option>
                            <option value="prototype-blocked">Prototype In Progress (Need Help)</option>
                            <option value="hackathon-prep">Hackathon Preparation</option>
                            <option value="patent-paper">Research Publication / Patent</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-medium text-slate-300 block mb-1.5">
                            Domain Category
                          </label>
                          <select
                            value={formData.domain}
                            onChange={(e) => updateField('domain', e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-white/[0.08] text-white text-xs focus:outline-none focus:border-indigo-500 cursor-pointer"
                          >
                            <option value="">Select Domain</option>
                            <option value="ai-ml">AI / Machine Learning</option>
                            <option value="iot-hardware">IoT / Embedded Systems</option>
                            <option value="web-app">Web &amp; Mobile Applications</option>
                            <option value="blockchain">Web3 / Decentralized Systems</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Message */}
                    <div className="text-xs">
                      <label className="text-xs font-medium text-slate-300 block mb-1.5">
                        {inquiryType === 'business' ? 'Project Requirements *' : 'Tell Us About Your Project & Objectives *'}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        placeholder={
                          inquiryType === 'business'
                            ? 'Describe what you want to build, current challenges, and desired outcomes...'
                            : 'Explain what you want to build, what you have done so far, and where you need guidance...'
                        }
                        className="w-full px-4 py-3 rounded-xl bg-surface-100 border border-white/[0.08] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className={cn(
                        'w-full py-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer',
                        inquiryType === 'business'
                          ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-glow-blue'
                          : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-glow-indigo'
                      )}
                    >
                      <Send size={15} />
                      {inquiryType === 'business' ? 'Submit Business Inquiry' : 'Submit Mentorship Application'}
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
