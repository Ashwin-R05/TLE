import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { STUDENT_JOURNEYS } from '../data/guidanceSteps';
import { GuidanceFlowDiagram } from '../components/sections/GuidanceFlowDiagram';
import { IdeaFeasibilityCalculator } from '../components/interactive/IdeaFeasibilityCalculator';

const StudentsPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Background aura */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-violet-600/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />

      {/* ──── HERO: AUTHENTIC STUDENT VOICE ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="max-w-4xl">
          <span className="text-[10px] font-mono text-brand-violet uppercase tracking-widest px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/30 inline-flex items-center gap-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-violet animate-ping" />
            1-on-1 Student Project Mentorship
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            You have a groundbreaking idea.{' '}
            <span className="text-gradient-hologram">Stop building it like a tutorial.</span>
          </h1>

          {/* First-person manifesto box */}
          <div className="glass-card-bespoke rounded-2xl p-6 sm:p-8 border-l-4 border-l-brand-violet mb-8 font-sans space-y-4">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong className="text-white font-semibold">"I spent 3 weeks building a React frontend with fake buttons, only to realize I had no idea how to make the backend algorithm work."</strong>
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We know that exact feeling because we've lived it in engineering hostel rooms. You enter a hackathon or choose a final-year project topic with immense ambition. But quickly, you get bogged down by unscalable architectures, professors asking for IEEE patent novelties you don't know how to define, and bugs that 40 StackOverflow tabs can't solve.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Noth was founded to be the senior engineering mentor we desperately wanted: someone who reviews your pull requests, stress-tests your novelty claims against Google Patents, unblocks your hardware/software integration, and teaches you how to present like an undeniable builder.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#guidance-flow"
              className="px-7 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold bg-brand-violet text-white hover:bg-violet-600 hover:shadow-glow-violet transition-all flex items-center gap-2 cursor-pointer"
            >
              Explore 8-Step Framework <ArrowRight size={15} />
            </a>
            <a
              href="#feasibility-calc"
              className="px-7 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-slate-300 bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              Run Feasibility Diagnostic
            </a>
          </div>
        </div>
      </section>

      {/* ──── INTERACTIVE 8-STEP GUIDANCE FLOW ──── */}
      <GuidanceFlowDiagram />

      {/* ──── INTERACTIVE FEASIBILITY DIAGNOSTIC ──── */}
      <section id="feasibility-calc" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-28">
        <IdeaFeasibilityCalculator />
      </section>

      {/* ──── WHAT WE ARE NOT DISCLAIMER ──── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="glass-card-bespoke rounded-3xl p-8 sm:p-12 border border-amber-500/30 relative overflow-hidden hud-crosshair">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
              <ShieldAlert size={24} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Zero Ghostwriting Policy
              </span>
              <h2 className="text-2xl sm:text-3xl font-syne font-bold text-white">
                What Noth is <span className="text-amber-400">NOT</span>.
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              ❌ <strong className="text-white">We do not sell pre-made project source code or write assignments for you.</strong> If you are looking for someone to secretly complete your college lab for money, please look elsewhere.
            </p>
            <p>
              ✅ <strong className="text-white">We are engineering sparring partners.</strong> We conduct code reviews, architect modular systems, teach you prior-art search across patents/papers, and ensure you understand every algorithm so you can defend your thesis with total command in front of any evaluator or investor.
            </p>
            <p className="text-slate-400 italic">
              "The keyboard must remain in your hands. That is why our students win hackathons and file real patents."
            </p>
          </div>
        </div>
      </section>

      {/* ──── STUDENT JOURNEYS & IMPACT ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="mb-12">
          <span className="text-[10px] font-mono text-brand-violet uppercase tracking-widest block mb-2">
            // Real Transformations
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold text-white">
            Student Breakthroughs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STUDENT_JOURNEYS.map((journey, index) => (
            <motion.div
              key={journey.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card-bespoke rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-violet-500/30 transition-all"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-brand-violet">
                    <Sparkles size={15} />
                  </div>
                  <span className="text-xs font-mono font-semibold text-white">{journey.studentName}</span>
                </div>

                <div className="space-y-4 text-xs font-mono mb-6">
                  <div>
                    <span className="text-amber-400 uppercase tracking-wider block mb-1">Initial Raw Idea:</span>
                    <p className="text-slate-400 font-sans">{journey.initialIdea}</p>
                  </div>

                  <div>
                    <span className="text-brand-cyan uppercase tracking-wider block mb-1">Mentored Pivot:</span>
                    <p className="text-slate-300 font-sans">{journey.breakthrough}</p>
                  </div>

                  <div>
                    <span className="text-brand-emerald uppercase tracking-wider block mb-1">Measurable Result:</span>
                    <p className="text-slate-200 font-sans font-medium">{journey.result}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {journey.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-brand-violet bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──── INTAKE CALL TO ACTION ──── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card-bespoke rounded-3xl p-8 sm:p-14 border border-violet-500/20 hud-crosshair">
          <span className="text-[10px] font-mono text-brand-violet uppercase tracking-widest px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 inline-block mb-4">
            Next Mentorship Cohort Active
          </span>
          <h2 className="text-3xl sm:text-4xl font-syne font-bold text-white mb-4">
            Ready to turn your idea into an undeniable project?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
            Tell us about your project thesis and technical blockages. We will review your submission and schedule a 1-on-1 diagnostic call.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold bg-brand-violet text-white hover:bg-violet-600 hover:shadow-glow-violet transition-all cursor-pointer"
          >
            Apply for Idea Guidance <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StudentsPage;
