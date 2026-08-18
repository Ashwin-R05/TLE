import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layout, TrendingUp, Zap, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { PROJECTS_DATA } from '../data/projects';
import { InteractiveProjectCard } from '../components/interactive/InteractiveProjectCard';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { cn } from '../utils/cn';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={22} />,
  Layout: <Layout size={22} />,
  TrendingUp: <TrendingUp size={22} />,
  Zap: <Zap size={22} />,
};

const BusinessesPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'client' | 'development' | 'hackathon'>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <div className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Background aura */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />

      {/* ──── HERO ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="max-w-4xl">
          <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 inline-flex items-center gap-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
            Client Digital Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Production software engineered for{' '}
            <span className="text-gradient-cyan-emerald">speed, scale, and clarity.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed max-w-2xl mb-8">
            We partner with funded startups, local brands, and technical teams to design and build web apps, high-converting digital storefronts, and internal operations portals with sub-second performance.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-7 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold bg-brand-cyan text-black hover:bg-cyan-300 hover:shadow-glow-cyan transition-all flex items-center gap-2 cursor-pointer"
            >
              Initiate Project Inquiry <ArrowRight size={15} />
            </Link>
            <a
              href="#selected-work"
              className="px-7 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-slate-300 bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              Review Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* ──── SERVICES ARCHITECTURE GRID ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="mb-12">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-2">
            // Core Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-syne font-bold text-white">
            What we build and manage.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card-bespoke rounded-2xl p-6 sm:p-8 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-brand-cyan mb-6">
                  {iconMap[service.iconName]}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">{service.shortDesc}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check size={14} className="text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                  Delivery Stack:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──── SELECTED WORK SHOWCASE WITH FILTER TABS ──── */}
      <section id="selected-work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest block mb-2">
              // Proven Implementations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold text-white">
              Selected Work &amp; Case Studies
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-surface-200/80 p-1.5 rounded-xl border border-white/10">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'client', label: 'Client Deployments' },
              { id: 'hackathon', label: 'Hackathon Wins' },
              { id: 'development', label: 'In Alpha' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={cn(
                  'px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer',
                  filter === tab.id
                    ? 'bg-brand-cyan text-black font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <InteractiveProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* ──── 4-STEP PROCESS TIMELINE ──── */}
      <ProcessTimeline />

      {/* ──── INITIATE INTAKE CTA ──── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <div className="glass-card-bespoke rounded-3xl p-8 sm:p-14 border border-cyan-500/20 hud-crosshair">
          <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 inline-block mb-4">
            Sprint Inquiries Open
          </span>
          <h2 className="text-3xl sm:text-4xl font-syne font-bold text-white mb-4">
            Have a product or MVP to engineer?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
            Tell us about your target timeline and technical specs. We will respond with a concrete scope teardown within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold bg-brand-cyan text-black hover:bg-cyan-300 hover:shadow-glow-cyan transition-all cursor-pointer"
          >
            Start Your Sprints <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BusinessesPage;
