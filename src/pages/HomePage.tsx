import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Check, ArrowUpRight } from 'lucide-react';
import { HeroCanvas } from '../components/3d/HeroCanvas';
import { LiveTelemetryTerminal } from '../components/interactive/LiveTelemetryTerminal';
import { DualPathFork } from '../components/sections/DualPathFork';
import { InteractiveProjectCard } from '../components/interactive/InteractiveProjectCard';
import { PROJECTS_DATA } from '../data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* ──── HERO COMMAND CENTER ──── */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-radial from-cyan-500/10 via-violet-600/5 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
          >
            {/* Left Copy & Headline (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Studio Status Pill */}
              <motion.div variants={itemVariants} className="flex items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-300 tracking-wider">
                    NOTH STUDIO // 2 OPERATING NODES
                  </span>
                </div>
              </motion.div>

              {/* Kinetic Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold text-white tracking-tight leading-[1.05]"
              >
                We engineer digital software.{' '}
                <span className="text-gradient-hologram block sm:inline">
                  We mentor student inventors.
                </span>
              </motion.h1>

              {/* Concrete Subheading */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed max-w-2xl"
              >
                A student-founded studio based in India. We ship high-velocity web/mobile systems for growing companies, and guide ambitious student developers from raw hypothesis to working prototype and patent direction.
              </motion.p>

              {/* CTA Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
              >
                <Link
                  to="/businesses"
                  className="px-7 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold bg-brand-cyan text-black hover:bg-cyan-300 hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Explore Client Services
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/students"
                  className="px-7 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-slate-200 bg-white/[0.04] border border-white/15 hover:border-brand-violet hover:bg-brand-violet/10 hover:text-white transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Student Idea Guidance
                  <Sparkles size={14} className="text-brand-violet" />
                </Link>
              </motion.div>

              {/* Live telemetry teaser stats */}
              <motion.div
                variants={itemVariants}
                className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 font-mono"
              >
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-syne text-white">14+</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Systems Deployed</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-syne text-brand-cyan">&lt; 0.9s</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Avg Core Web Vitals</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-syne text-brand-violet">80+</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Student Builders</div>
                </div>
              </motion.div>
            </div>

            {/* Right 3D Visual + Live Terminal (5 cols) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              {/* 3D Scene viewport */}
              <div className="h-[280px] sm:h-[320px] w-full rounded-2xl glass-card-bespoke relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-500 uppercase tracking-wider z-10 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
                  R3F Geometric Engine // 60 FPS
                </div>
                <HeroCanvas />
              </div>

              {/* Interactive hacker terminal widget */}
              <LiveTelemetryTerminal />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──── DUAL PATH INTERACTIVE FORK ──── */}
      <DualPathFork />

      {/* ──── WHAT WE'VE BUILT: BESPOKE WORK SHOWCASE ──── */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 inline-block mb-3">
                Selected Work &amp; Case Studies
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-white tracking-tight">
                What we've engineered.
              </h2>
            </div>

            <Link
              to="/businesses"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-cyan hover:underline"
            >
              View Full Work Archive <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PROJECTS_DATA.map((project, index) => (
              <InteractiveProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ──── PHILOSOPHY STRIP ──── */}
      <section className="py-20 border-t border-white/[0.08] relative overflow-hidden bg-[#070912]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[10px] font-mono text-brand-violet uppercase tracking-widest px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/30 inline-block mb-4">
            Our Working Ethos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold text-white mb-6">
            "Zero Bloat. Production Grade. Real Mentorship."
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
            We don't outsource to junior contractors or sell cookie-cutter templates. When you partner with Noth, you work directly with competitive builders who understand systems at the metal and UI at pixel perfection.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono">
            <div className="px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.08] text-slate-300 flex items-center gap-2">
              <Check size={14} className="text-brand-emerald" /> Full Source Handover
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.08] text-slate-300 flex items-center gap-2">
              <Check size={14} className="text-brand-cyan" /> 30-Day Post-Launch Warranty
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.08] text-slate-300 flex items-center gap-2">
              <Check size={14} className="text-brand-violet" /> Non-Ghostwriting Student Policy
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
