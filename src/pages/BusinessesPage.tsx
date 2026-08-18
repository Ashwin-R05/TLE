import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layout, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';
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
      {/* ──── HERO ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-flex items-center gap-1.5 mb-4">
            Client Digital Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
            Digital engineering built for{' '}
            <span className="text-gradient-blue">speed, conversion, and scale.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed mb-8">
            We build high-performance web applications, headless e-commerce stores, custom internal tools, and rapid startup MVPs. Delivered with clean TypeScript architectures and complete IP ownership.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-7 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-blue-600 text-white hover:bg-blue-500 shadow-glow-blue transition-all flex items-center gap-2 cursor-pointer"
            >
              Start a Project Inquiry <ArrowRight size={15} />
            </Link>
            <a
              href="#selected-work"
              className="px-7 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 bg-surface-100 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* ──── CORE SERVICES ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="mb-12">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
            Our Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Engineering services tailored to your roadmap.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-pro rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                  {iconMap[service.iconName]}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">{service.shortDesc}</p>

                <div className="space-y-2.5 mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-white/[0.06]">
                <span className="text-[11px] text-slate-400 block mb-2">Core Technologies:</span>
                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
                    <span key={tech} className="text-[11px] text-slate-400 bg-surface-100 px-2.5 py-1 rounded-md border border-white/[0.06]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──── SELECTED CASE STUDIES ──── */}
      <section id="selected-work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block mb-2">
              Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">
              Selected Work &amp; Case Studies
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-surface-200 p-1.5 rounded-xl border border-white/10">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'client', label: 'Client Deployments' },
              { id: 'hackathon', label: 'Hackathon Builds' },
              { id: 'development', label: 'In Development' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={cn(
                  'px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer',
                  filter === tab.id
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <InteractiveProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* ──── 4-STEP PROCESS TIMELINE ──── */}
      <ProcessTimeline />

      {/* ──── INITIATE INTAKE CTA ──── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <div className="card-pro rounded-3xl p-8 sm:p-14 shadow-elevated">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-4">
            Sprint Inquiries Open
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Have a project or MVP to build?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
            Tell us about your requirements, timeline, and goals. We will reply within 24 hours with an actionable technical assessment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-blue-600 text-white hover:bg-blue-500 shadow-glow-blue transition-all cursor-pointer"
          >
            Start a Conversation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BusinessesPage;
