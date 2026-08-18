import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code, Layout, TrendingUp, Zap,
  ChevronDown, ChevronUp, ExternalLink,
} from 'lucide-react';
import { SERVICES_DATA, PROCESS_STEPS } from '../data/services';
import { PROJECTS_DATA } from '../data/projects';
import { SectionHeading } from '../components/common/SectionHeading';
import { TiltCard } from '../components/common/TiltCard';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { cn } from '../utils/cn';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={24} />,
  Layout: <Layout size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Zap: <Zap size={24} />,
};

const badgeColorMap: Record<string, string> = {
  'Client Project': 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30',
  'In Development': 'bg-brand-amber/10 text-brand-amber border-brand-amber/30',
  'Hackathon Build': 'bg-brand-violet/10 text-brand-violet border-brand-violet/30',
};

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const BusinessesPage: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* ──── HERO ──── */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full border text-brand-cyan bg-brand-cyan/10 border-brand-cyan/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              For Businesses
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight">
              Digital products built for{' '}
              <span className="text-gradient-brand">speed and precision</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We deliver production-grade web applications, mobile MVPs, UI/UX systems, and data-driven marketing funnels. Every engagement ships a working product — not a slide deck.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──── SERVICES ──── */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="What We Build"
            subtitle="End-to-end digital engineering, from interactive prototypes to deployed production systems."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard className="h-full p-6 sm:p-8" glowColor="rgba(0, 240, 255, 0.1)">
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-5">
                      {iconMap[service.iconName]}
                    </div>
                    <h3 className="text-lg font-display font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-400 mb-5 leading-relaxed">{service.shortDesc}</p>

                    <ul className="space-y-2 mb-5 flex-grow">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <span className="w-1 h-1 rounded-full bg-brand-cyan mt-2 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04]">
                      {service.techStack.map((tech) => (
                        <span key={tech} className="text-[9px] font-mono text-slate-500 bg-white/[0.04] px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── SELECTED WORK ──── */}
      <section id="work" className="py-16 sm:py-24 relative border-t border-white/[0.04]">
        <div className="absolute inset-0 bg-dots-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Selected Work"
            title="Case Studies & Active Projects"
            subtitle="Each project labeled honestly as a client deployment, hackathon build, or system under active development."
          />

          <div className="mt-14 space-y-6">
            {PROJECTS_DATA.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="glass-panel rounded-2xl overflow-hidden group">
                  {/* Header */}
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="w-full p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-left cursor-pointer hover:bg-white/[0.01] transition-colors"
                  >
                    {/* Project icon / visual */}
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border"
                      style={{
                        background: `${project.accentColor}12`,
                        borderColor: `${project.accentColor}30`,
                      }}
                    >
                      {/* TODO: replace with actual project icon */}
                      <span className="font-mono font-bold text-xl" style={{ color: project.accentColor }}>
                        {project.title.charAt(0)}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span
                          className={cn(
                            'text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border',
                            badgeColorMap[project.badgeLabel]
                          )}
                        >
                          {project.badgeLabel}
                        </span>
                        <span className="text-[10px] font-mono text-slate-600">{project.year}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-white">{project.title}</h3>
                      <p className="text-sm text-slate-500 mt-1 line-clamp-1">{project.tagline}</p>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                      {/* Quick metrics */}
                      {project.metrics && project.metrics.slice(0, 2).map((m) => (
                        <div key={m.label} className="hidden md:block text-right">
                          <p className="text-sm font-bold text-white">{m.value}</p>
                          <p className="text-[9px] font-mono text-slate-600 uppercase">{m.label}</p>
                        </div>
                      ))}
                      <div className="text-slate-500">
                        {expandedProject === project.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>
                  </button>

                  {/* Expanded Detail */}
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-8 border-t border-white/[0.04] pt-6">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                            {/* Left: Problem -> Solution */}
                            <div className="space-y-5">
                              <div>
                                <h4 className="text-xs font-mono font-semibold text-brand-amber uppercase tracking-wider mb-2">The Problem</h4>
                                <p className="text-sm text-slate-300 leading-relaxed">{project.problem}</p>
                              </div>
                              <div>
                                <h4 className="text-xs font-mono font-semibold text-brand-cyan uppercase tracking-wider mb-2">What We Built</h4>
                                <p className="text-sm text-slate-300 leading-relaxed">{project.whatWeBuilt}</p>
                              </div>
                              <div>
                                <h4 className="text-xs font-mono font-semibold text-brand-emerald uppercase tracking-wider mb-2">Outcome</h4>
                                <p className="text-sm text-slate-300 leading-relaxed">{project.outcome}</p>
                              </div>
                            </div>

                            {/* Right: Metrics + Tech + Deliverables */}
                            <div className="space-y-5">
                              {/* Metrics Grid */}
                              {project.metrics && (
                                <div className="grid grid-cols-3 gap-3">
                                  {project.metrics.map((m) => (
                                    <div key={m.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-center">
                                      <p className="text-base sm:text-lg font-bold text-white">{m.value}</p>
                                      <p className="text-[9px] font-mono text-slate-500 uppercase mt-1">{m.label}</p>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Tech Stack */}
                              <div>
                                <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.techStack.map((tech) => (
                                    <span key={tech} className="text-xs font-mono text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/[0.06]">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Deliverables */}
                              <div>
                                <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">Deliverables</h4>
                                <ul className="space-y-1.5">
                                  {project.deliverables.map((d) => (
                                    <li key={d} className="flex items-center gap-2 text-xs text-slate-400">
                                      <span className="w-1 h-1 rounded-full bg-slate-600" />
                                      {d}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Links */}
                              <div className="flex gap-3 pt-2">
                                {project.liveUrl && (
                                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan hover:underline">
                                    <ExternalLink size={12} /> Live Site
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── PROCESS TIMELINE ──── */}
      <ProcessTimeline />

      {/* ──── CONTACT CTA ──── */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Have a project in mind?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              Share your requirements and timeline. We'll respond within 24 hours with a clear scope assessment — no obligation, no sales pitch.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/40 hover:bg-brand-cyan/20 hover:border-brand-cyan/70 hover:shadow-glow-cyan transition-all duration-300"
            >
              Start a Conversation
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default BusinessesPage;
