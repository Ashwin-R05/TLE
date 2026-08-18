import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { STUDENT_JOURNEYS } from '../data/guidanceSteps';
import { GuidanceFlowDiagram } from '../components/sections/GuidanceFlowDiagram';
import { IdeaFeasibilityCalculator } from '../components/interactive/IdeaFeasibilityCalculator';

const StudentsPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* ──── HERO: STUDENT VOICE MANIFESTO ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 inline-flex items-center gap-1.5 mb-4">
            1-on-1 Student Project Mentorship
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
            You have an ambitious idea.{' '}
            <span className="text-gradient-accent">We'll help you engineer it properly.</span>
          </h1>

          {/* Authentic Student Voice Box */}
          <div className="card-pro rounded-3xl p-6 sm:p-8 border-l-4 border-l-indigo-500 mb-8 space-y-4">
            <p className="text-white text-sm sm:text-base font-semibold leading-relaxed">
              "We've been in your shoes: up late in university labs, passionate about building something novel, but stuck navigating architecture choices, complex bugs, and patent requirements."
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              You don't need another generic theoretical course. You need experienced peer mentors who have competed in hackathons, deployed real systems, and navigated patent filings. Someone to review your architecture, challenge your assumptions, and help you structure a defensible, working product.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Noth's student guidance program is built to bridge that gap — giving you the technical sparring and milestone structure needed to turn an idea into an undeniable engineering accomplishment.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#guidance-flow"
              className="px-7 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-indigo-600 text-white hover:bg-indigo-500 shadow-glow-indigo transition-all flex items-center gap-2 cursor-pointer"
            >
              Explore 8-Step Framework <ArrowRight size={15} />
            </a>
            <a
              href="#feasibility-calc"
              className="px-7 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 bg-surface-100 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              Assess Your Project Scope
            </a>
          </div>
        </div>
      </section>

      {/* ──── INTERACTIVE 8-STEP GUIDANCE FLOW ──── */}
      <GuidanceFlowDiagram />

      {/* ──── INTERACTIVE PROJECT ROADMAP PLANNER ──── */}
      <section id="feasibility-calc" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-28">
        <IdeaFeasibilityCalculator />
      </section>

      {/* ──── TRANSPARENT MENTORSHIP CHARTER ──── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="card-pro rounded-3xl p-8 sm:p-12 border border-white/10 shadow-elevated">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest block mb-1">
                Our Mentorship Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Our Commitment to Student Builders
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              <strong className="text-white">We are mentors, not contract assignment writers.</strong> We will not write your project code for you or ghostwrite papers. If that is what you seek, this is not the right program.
            </p>
            <p>
              <strong className="text-white">We teach you how to engineer and defend your system.</strong> We conduct code reviews, architect clean schemas, guide prior-art searches across IEEE and Google Patents, and ensure you command every technical detail so you can confidently present to evaluators, investors, or conference panels.
            </p>
            <p className="text-slate-400 italic">
              "The hands on the keyboard are always yours. That is why our mentored students build genuine confidence and deep engineering capability."
            </p>
          </div>
        </div>
      </section>

      {/* ──── STUDENT JOURNEYS ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="mb-12">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest block mb-2">
            Case Studies
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">
            Student Case Studies &amp; Outcomes
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
              className="card-pro rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Sparkles size={14} />
                  </div>
                  <span className="text-xs font-semibold text-white">{journey.studentName}</span>
                </div>

                <div className="space-y-4 text-xs mb-6">
                  <div>
                    <span className="font-semibold text-slate-400 block mb-1">Initial Concept:</span>
                    <p className="text-slate-400">{journey.initialIdea}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-blue-400 block mb-1">Mentored Pivot:</span>
                    <p className="text-slate-300">{journey.breakthrough}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-emerald-400 block mb-1">Result Achieved:</span>
                    <p className="text-slate-200 font-medium">{journey.result}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {journey.tags.map((t) => (
                  <span key={t} className="text-[10px] text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──── INTAKE CTA ──── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="card-pro rounded-3xl p-8 sm:p-14 shadow-elevated">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 inline-block mb-4">
            Cohort Admissions Open
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Ready to turn your idea into a working project?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
            Tell us about your project thesis and technical goals. We will review your submission and schedule a 1-on-1 exploratory session.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-indigo-600 text-white hover:bg-indigo-500 shadow-glow-indigo transition-all cursor-pointer"
          >
            Apply for Mentorship <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StudentsPage;
