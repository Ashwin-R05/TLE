import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { STUDENT_JOURNEYS } from '../data/guidanceSteps';
import { GuidanceFlowDiagram } from '../components/sections/GuidanceFlowDiagram';
import { SectionHeading } from '../components/common/SectionHeading';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const StudentsPage: React.FC = () => {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* ──── HERO ──── */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full border text-brand-violet bg-brand-violet/10 border-brand-violet/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
              For Students
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] tracking-tight">
              You have an idea that won't let you sleep.{' '}
              <span className="text-gradient-brand">We'll help you build it properly.</span>
            </h1>
          </motion.div>

          {/* First-person student voice problem statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 glass-panel rounded-2xl p-6 sm:p-8 border-l-2 border-l-brand-violet/50"
          >
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-5">
              We've been there. You're up at 2 AM sketching architecture diagrams on the back of an assignment. You've watched 40 YouTube tutorials but your Flask backend keeps crashing. Your team is excited but nobody has built anything real before. The hackathon deadline is in 3 weeks and your "revolutionary AI platform" is still a single HTML file.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-5">
              You don't need another online course. You don't need a motivational talk about "disruption." You need someone who has actually shipped systems, won competitions, and filed patents to sit with you, rip apart your architecture, and show you exactly how to get from where you are to a working, defensible, demo-ready product.
            </p>
            <p className="text-sm text-slate-500 italic">
              That's what Noth's student guidance program does. No hand-holding. No ghostwriting. Real technical mentorship that treats you as an engineer, not a customer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──── INTERACTIVE GUIDANCE FLOW ──── */}
      <GuidanceFlowDiagram />

      {/* ──── WHAT WE'RE NOT ──── */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-8 sm:p-10 border-l-2 border-l-brand-amber/50 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
              <ShieldAlert className="text-brand-amber/30" size={48} />
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full border text-brand-amber bg-brand-amber/10 border-brand-amber/30 mb-4">
                Honest Disclaimer
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
                What We're <span className="text-brand-amber">NOT</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">We are not a contract coding service.</strong> We will not write your final-year project code for you, build your hackathon submission while you sleep, or ghostwrite your research paper. If that's what you're looking for, this isn't the right fit.
                </p>
                <p>
                  <strong className="text-white">We are mentors.</strong> We teach you how to think about system architecture, debug production issues, validate research novelty, and defend your technical decisions in front of panels, investors, and reviewers.
                </p>
                <p>
                  <strong className="text-white">You build it.</strong> We guide the process, review your code, challenge your assumptions, and accelerate your velocity — but the hands on the keyboard are yours. That's the entire point. When you present your system, you can answer any question about it because you actually built it.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── EXAMPLE JOURNEYS ──── */}
      <section className="py-16 sm:py-24 relative border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Student Journeys"
            title="From Raw Idea to Real Impact"
            subtitle="Real students. Real pivots. Real outcomes."
            accentColor="violet"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {STUDENT_JOURNEYS.map((journey, index) => (
              <motion.div
                key={journey.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col h-full hover:border-brand-violet/20 transition-colors duration-300"
              >
                {/* Student name */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center">
                    <Sparkles size={16} className="text-brand-violet" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{journey.studentName}</p>
                  </div>
                </div>

                {/* Stages */}
                <div className="space-y-4 flex-grow">
                  <div>
                    <h4 className="text-[10px] font-mono font-semibold text-brand-amber uppercase tracking-wider mb-1">Raw Idea</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{journey.initialIdea}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-semibold text-brand-cyan uppercase tracking-wider mb-1">Breakthrough Pivot</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{journey.breakthrough}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-semibold text-brand-emerald uppercase tracking-wider mb-1">Result</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{journey.result}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/[0.04]">
                  {journey.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-mono text-brand-violet/70 bg-brand-violet/5 px-2 py-0.5 rounded border border-brand-violet/15">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── INTAKE CTA ──── */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-cyan/5 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Have an idea worth building?
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8">
                Tell us about your project, your current stage, and what you're stuck on. We'll assess fit and respond within 48 hours. No commitment required.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-brand-violet/10 text-brand-violet border border-brand-violet/40 hover:bg-brand-violet/20 hover:border-brand-violet/70 hover:shadow-glow-violet transition-all duration-300"
              >
                Apply for Guidance
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default StudentsPage;
