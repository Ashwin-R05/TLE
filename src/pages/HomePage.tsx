import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { HeroCanvas } from '../components/3d/HeroCanvas';
import { CapabilitiesMatrix } from '../components/interactive/CapabilitiesMatrix';
import { DualPathFork } from '../components/sections/DualPathFork';
import { InteractiveProjectCard } from '../components/interactive/InteractiveProjectCard';
import { PROJECTS_DATA } from '../data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* ──── HERO SECTION ──── */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 bg-soft-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          >
            {/* Left Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status Badge */}
              <motion.div variants={itemVariants} className="flex items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                  </span>
                  <span className="text-xs font-semibold text-blue-300">
                    Noth Technology Studio &amp; Mentorship
                  </span>
                </div>
              </motion.div>

              {/* Clean Confident Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]"
              >
                We engineer digital products.{' '}
                <span className="text-gradient-accent block sm:inline">
                  We mentor ambitious builders.
                </span>
              </motion.h1>

              {/* Authoritative Subheading */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl"
              >
                Noth is a student-founded technology studio. We deliver production-grade web applications, UI/UX systems, and SaaS MVPs for growing companies — and guide student innovators from early hypothesis to working prototype and patent direction.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
              >
                <Link
                  to="/businesses"
                  className="px-7 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-blue-600 text-white hover:bg-blue-500 shadow-glow-blue transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Client Services
                  <ArrowRight size={15} />
                </Link>

                <Link
                  to="/students"
                  className="px-7 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-200 bg-surface-100/80 border border-white/15 hover:border-indigo-500/40 hover:bg-indigo-600/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Student Idea Mentorship
                  <Sparkles size={14} className="text-indigo-400" />
                </Link>
              </motion.div>

              {/* Key Trust Metrics */}
              <motion.div
                variants={itemVariants}
                className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4"
              >
                <div>
                  <div className="text-2xl font-bold font-display text-white">14+</div>
                  <div className="text-xs text-slate-400">Deployed Systems</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-display text-blue-400">&lt; 1.0s</div>
                  <div className="text-xs text-slate-400">Avg Mobile LCP</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-display text-indigo-400">80+</div>
                  <div className="text-xs text-slate-400">Builders Mentored</div>
                </div>
              </motion.div>
            </div>

            {/* Right 3D Visual + Capabilities Dashboard (5 cols) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              {/* 3D Scene Viewport */}
              <div className="h-[280px] sm:h-[320px] w-full rounded-2xl card-pro relative overflow-hidden flex items-center justify-center">
                <HeroCanvas />
              </div>

              {/* Corporate Capabilities Matrix */}
              <CapabilitiesMatrix />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──── DUAL PATH PILLARS ──── */}
      <DualPathFork />

      {/* ──── SELECTED WORK SHOWCASE ──── */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-3">
                Selected Work &amp; Case Studies
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                Systems we've engineered.
              </h2>
            </div>

            <Link
              to="/businesses"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              View Full Work Archive <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS_DATA.map((project, index) => (
              <InteractiveProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ──── CORPORATE ETHOS STRIP ──── */}
      <section className="py-20 border-t border-white/[0.06] bg-surface-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 inline-block mb-4">
            Our Studio Standard
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-6">
            "Engineering Clarity. Measurable Performance."
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
            We operate with radical transparency. No bloated overhead, no black boxes. When you work with Noth, you get dedicated engineers who write clean, maintainable code and take full responsibility for delivery.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <div className="px-4 py-2.5 rounded-xl bg-surface-100 border border-white/[0.08] text-slate-300 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-400" /> Complete Code Ownership
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-surface-100 border border-white/[0.08] text-slate-300 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-blue-400" /> 30-Day Post-Launch Support
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-surface-100 border border-white/[0.08] text-slate-300 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-indigo-400" /> Genuine Technical Mentorship
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
