import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Mail, MapPin, Clock, Briefcase, GraduationCap } from 'lucide-react';
import { cn } from '../utils/cn';

type InquiryType = 'business' | 'student';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

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
    // TODO: replace with actual form submission (e.g., Formspree, Supabase, or custom API)
    setSubmitted(true);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section className="pt-28 sm:pt-36 pb-20 sm:pb-28 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* ──── LEFT: Info column ──── */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full border text-brand-cyan bg-brand-cyan/10 border-brand-cyan/30 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  Get In Touch
                </span>
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight tracking-tight mb-5">
                  Let's start a conversation.
                </h1>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-10">
                  Whether you need a product shipped or need guidance on your student project — reach out. We respond within 24–48 hours.
                </p>

                {/* Contact details */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-500">
                      <Mail size={16} />
                    </div>
                    <div>
                      {/* TODO: replace with final email */}
                      <p className="text-sm font-semibold text-white">contact@noth.in</p>
                      <p className="text-xs text-slate-500">Email us directly</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-500">
                      <MapPin size={16} />
                    </div>
                    <div>
                      {/* TODO: replace with actual location */}
                      <p className="text-sm font-semibold text-white">Bengaluru, India</p>
                      <p className="text-xs text-slate-500">Remote-first team</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-500">
                      <Clock size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Response Time</p>
                      <p className="text-xs text-slate-500">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="mt-8 glass-panel rounded-xl p-4 flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-emerald"></span>
                  </span>
                  <span className="text-xs font-mono text-brand-emerald">Currently accepting new projects</span>
                </div>
              </motion.div>
            </div>

            {/* ──── RIGHT: Form ──── */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="glass-panel rounded-2xl p-6 sm:p-8"
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={30} className="text-brand-emerald" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-3">
                        Message sent successfully!
                      </h3>
                      <p className="text-sm text-slate-400 max-w-sm mx-auto">
                        We've received your inquiry and will get back to you within 24–48 hours. Check your email for a confirmation.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', email: '', organization: '', message: '', budget: '', timeline: '', ideaStage: '', domain: '' });
                        }}
                        className="mt-6 text-sm text-brand-cyan hover:underline"
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
                      {/* Inquiry Type Toggle */}
                      <div>
                        <label className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-3 block">
                          I'm reaching out as a:
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setInquiryType('business')}
                            className={cn(
                              'flex items-center gap-2.5 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 border cursor-pointer',
                              inquiryType === 'business'
                                ? 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/40'
                                : 'bg-white/[0.02] text-slate-500 border-white/[0.06] hover:border-white/15'
                            )}
                          >
                            <Briefcase size={16} />
                            Business Inquiry
                          </button>
                          <button
                            type="button"
                            onClick={() => setInquiryType('student')}
                            className={cn(
                              'flex items-center gap-2.5 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 border cursor-pointer',
                              inquiryType === 'student'
                                ? 'bg-brand-violet/10 text-brand-violet border-brand-violet/40'
                                : 'bg-white/[0.02] text-slate-500 border-white/[0.06] hover:border-white/15'
                            )}
                          >
                            <GraduationCap size={16} />
                            Student Idea Guidance
                          </button>
                        </div>
                      </div>

                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-mono text-slate-500 mb-1.5 block">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => updateField('name', e.target.value)}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/20 transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono text-slate-500 mb-1.5 block">Email *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            placeholder="you@email.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Organization / University */}
                      <div>
                        <label className="text-xs font-mono text-slate-500 mb-1.5 block">
                          {inquiryType === 'business' ? 'Company / Organization' : 'University & Department'}
                        </label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => updateField('organization', e.target.value)}
                          placeholder={inquiryType === 'business' ? 'Company name' : 'e.g. MIT CSE, 3rd Year'}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/20 transition-all"
                        />
                      </div>

                      {/* Context-specific fields */}
                      <AnimatePresence mode="wait">
                        {inquiryType === 'business' ? (
                          <motion.div
                            key="business-fields"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                          >
                            <div>
                              <label className="text-xs font-mono text-slate-500 mb-1.5 block">Budget Range</label>
                              <select
                                value={formData.budget}
                                onChange={(e) => updateField('budget', e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-brand-cyan/50 transition-all appearance-none cursor-pointer"
                              >
                                <option value="" className="bg-surface-200">Select range</option>
                                <option value="under-50k" className="bg-surface-200">Under ₹50K</option>
                                <option value="50k-2l" className="bg-surface-200">₹50K – ₹2L</option>
                                <option value="2l-5l" className="bg-surface-200">₹2L – ₹5L</option>
                                <option value="5l-plus" className="bg-surface-200">₹5L+</option>
                                <option value="not-sure" className="bg-surface-200">Not sure yet</option>
                              </select>
                            </div>
                            <div>
                              <label className="text-xs font-mono text-slate-500 mb-1.5 block">Timeline</label>
                              <select
                                value={formData.timeline}
                                onChange={(e) => updateField('timeline', e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-brand-cyan/50 transition-all appearance-none cursor-pointer"
                              >
                                <option value="" className="bg-surface-200">Select timeline</option>
                                <option value="2-weeks" className="bg-surface-200">2–3 Weeks</option>
                                <option value="1-month" className="bg-surface-200">1 Month</option>
                                <option value="2-3-months" className="bg-surface-200">2–3 Months</option>
                                <option value="ongoing" className="bg-surface-200">Ongoing / Retainer</option>
                              </select>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="student-fields"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                          >
                            <div>
                              <label className="text-xs font-mono text-slate-500 mb-1.5 block">Idea Stage</label>
                              <select
                                value={formData.ideaStage}
                                onChange={(e) => updateField('ideaStage', e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-brand-violet/50 transition-all appearance-none cursor-pointer"
                              >
                                <option value="" className="bg-surface-200">Select stage</option>
                                <option value="raw-idea" className="bg-surface-200">Raw idea / concept</option>
                                <option value="researching" className="bg-surface-200">Researching & validating</option>
                                <option value="prototyping" className="bg-surface-200">Building a prototype</option>
                                <option value="stuck" className="bg-surface-200">Stuck on implementation</option>
                                <option value="documentation" className="bg-surface-200">Need paper / patent help</option>
                              </select>
                            </div>
                            <div>
                              <label className="text-xs font-mono text-slate-500 mb-1.5 block">Target Domain</label>
                              <select
                                value={formData.domain}
                                onChange={(e) => updateField('domain', e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-brand-violet/50 transition-all appearance-none cursor-pointer"
                              >
                                <option value="" className="bg-surface-200">Select domain</option>
                                <option value="web-mobile" className="bg-surface-200">Web / Mobile App</option>
                                <option value="ai-ml" className="bg-surface-200">AI / ML</option>
                                <option value="iot-embedded" className="bg-surface-200">IoT / Embedded</option>
                                <option value="blockchain" className="bg-surface-200">Blockchain / Web3</option>
                                <option value="healthtech" className="bg-surface-200">HealthTech</option>
                                <option value="edtech" className="bg-surface-200">EdTech</option>
                                <option value="other" className="bg-surface-200">Other</option>
                              </select>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Message */}
                      <div>
                        <label className="text-xs font-mono text-slate-500 mb-1.5 block">
                          {inquiryType === 'business' ? 'Project Details *' : 'Tell Us About Your Idea *'}
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => updateField('message', e.target.value)}
                          placeholder={
                            inquiryType === 'business'
                              ? 'Describe your project, the key problem you want solved, and any technical requirements...'
                              : 'Describe your idea, what stage you are at, what you have built so far, and what specific help you need...'
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/20 transition-all resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className={cn(
                          'w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer',
                          inquiryType === 'business'
                            ? 'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/40 hover:bg-brand-cyan/20 hover:border-brand-cyan/70 hover:shadow-glow-cyan'
                            : 'bg-brand-violet/10 text-brand-violet border border-brand-violet/40 hover:bg-brand-violet/20 hover:border-brand-violet/70 hover:shadow-glow-violet'
                        )}
                      >
                        <Send size={16} />
                        {inquiryType === 'business' ? 'Submit Business Inquiry' : 'Apply for Guidance'}
                      </button>

                      <p className="text-[10px] text-center text-slate-600 font-mono">
                        We respect your data. No spam, no newsletters — just a direct reply to your inquiry.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
