import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '../../types';
import { ChevronRight, CheckCircle2, Activity, ShoppingBag, Code, TrendingUp } from 'lucide-react';
import { cn } from '../../utils/cn';

interface InteractiveProjectCardProps {
  project: CaseStudy;
  index: number;
}

export const InteractiveProjectCard: React.FC<InteractiveProjectCardProps> = ({ project, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderCleanMockup = () => {
    switch (project.id) {
      case 'aquacraft':
        return (
          <div className="w-full h-full bg-[#0D1527] p-4 flex flex-col justify-between rounded-xl border border-blue-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-blue-400" />
                <span className="text-xs font-medium text-blue-300">Fleet Operations Dashboard</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                18 Vessels Live
              </span>
            </div>

            {/* Clean metrics row */}
            <div className="grid grid-cols-3 gap-2 my-2 text-center font-mono">
              <div className="p-2 rounded-lg bg-surface-100/80 border border-white/5">
                <div className="text-[10px] text-slate-400">Avg Speed</div>
                <div className="text-xs font-bold text-white">22.4 kts</div>
              </div>
              <div className="p-2 rounded-lg bg-surface-100/80 border border-white/5">
                <div className="text-[10px] text-slate-400">Fuel Burn</div>
                <div className="text-xs font-bold text-emerald-400">-14% Anom</div>
              </div>
              <div className="p-2 rounded-lg bg-surface-100/80 border border-white/5">
                <div className="text-[10px] text-slate-400">Latency</div>
                <div className="text-xs font-bold text-blue-400">&lt; 380ms</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 pt-2">
              <span>MQTT WebSockets Engine</span>
              <span className="text-blue-400 font-medium">PostgreSQL + Mapbox</span>
            </div>
          </div>
        );

      case 'moringa-ecommerce':
        return (
          <div className="w-full h-full bg-[#0D1F1A] p-4 flex flex-col justify-between rounded-xl border border-emerald-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag size={14} className="text-emerald-400" />
                <span className="text-xs font-medium text-emerald-300">Direct-to-Consumer Storefront</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                +38% Conversion
              </span>
            </div>

            <div className="my-2 space-y-1.5 text-xs">
              <div className="p-2.5 rounded-lg bg-surface-100/80 border border-white/5 flex justify-between items-center">
                <span className="text-slate-300 font-medium">Moringa Superfood Starter Pack</span>
                <span className="text-emerald-400 font-bold font-mono">₹890/mo</span>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 py-1.5 px-3 bg-emerald-600/20 border border-emerald-500/30 rounded-lg text-center text-xs text-emerald-300 font-medium">
                  ⚡ 2-Step Fast Checkout (UPI / Card)
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 pt-2">
              <span>0.9s Mobile LCP</span>
              <span className="text-emerald-400 font-medium">Razorpay Auto-Billing</span>
            </div>
          </div>
        );

      case 'codementor-ai':
        return (
          <div className="w-full h-full bg-[#161228] p-4 flex flex-col justify-between rounded-xl border border-indigo-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code size={14} className="text-indigo-400" />
                <span className="text-xs font-medium text-indigo-300">Interactive Algorithm Visualizer</span>
              </div>
              <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded">
                1st Place DevHack
              </span>
            </div>

            <div className="my-2 p-2.5 rounded-lg bg-surface-100/80 border border-white/5 font-mono text-[11px] text-slate-300 space-y-1">
              <div className="text-slate-500">1 | // Line-by-line AST Call Frame Stepper</div>
              <div className="text-indigo-300 bg-indigo-500/20 px-1.5 py-0.5 rounded">
                2 | state.partition(array, pivot) ➔ O(n log n)
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 pt-2">
              <span>4,500+ Student Users</span>
              <span className="text-indigo-400 font-medium">WebAssembly Sandbox</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-[#1F170E] p-4 flex flex-col justify-between rounded-xl border border-amber-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp size={14} className="text-amber-400" />
                <span className="text-xs font-medium text-amber-300">Creator Analytics &amp; Valuation</span>
              </div>
              <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded">
                In Development
              </span>
            </div>

            <div className="my-2 grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-surface-100/80 border border-white/5">
                <div className="text-[10px] text-slate-400">Reporting Time</div>
                <div className="text-xs font-bold text-white">~12 hrs saved/wk</div>
              </div>
              <div className="p-2 rounded-lg bg-surface-100/80 border border-white/5">
                <div className="text-[10px] text-slate-400">Agencies Testing</div>
                <div className="text-xs font-bold text-amber-400">8 Active Pilots</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 pt-2">
              <span>Automated Pitch Decks</span>
              <span className="text-amber-400 font-medium">Multi-Channel Scraper</span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-pro rounded-2xl overflow-hidden flex flex-col justify-between"
    >
      <div className="p-6 sm:p-7">
        {/* Badge and Year Header */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={cn(
              'text-[11px] font-medium px-2.5 py-1 rounded-md border',
              project.badgeLabel === 'Client Project'
                ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                : project.badgeLabel === 'Hackathon Build'
                ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
            )}
          >
            {project.badgeLabel}
          </span>
          <span className="text-xs text-slate-400 font-mono">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-bold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
          {project.tagline}
        </p>

        {/* Live UI Preview Box */}
        <div className="h-44 w-full mb-5">
          {renderCleanMockup()}
        </div>

        {/* Metric Chips */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-2 mb-5">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-2.5 rounded-xl bg-surface-100/50 border border-white/[0.04] text-center">
                <p className="text-sm font-bold text-white">{m.value}</p>
                <p className="text-[10px] text-slate-400 uppercase mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-[11px] text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.06]">
              {tech}
            </span>
          ))}
        </div>

        {/* Case Study Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-2.5 px-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/15 transition-all text-xs font-medium text-slate-300 flex items-center justify-between cursor-pointer"
        >
          <span>{isOpen ? 'Hide Case Details' : 'Read Full Case Study'}</span>
          <ChevronRight
            size={14}
            className={cn('transition-transform duration-300 text-blue-400', isOpen ? 'rotate-90' : '')}
          />
        </button>

        {/* Expanded Details */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-5 border-t border-white/[0.08] space-y-3.5 text-xs">
                <div>
                  <span className="text-[11px] font-semibold text-amber-400 block mb-1">
                    Problem Context:
                  </span>
                  <p className="text-slate-300 leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-blue-400 block mb-1">
                    What We Engineered:
                  </span>
                  <p className="text-slate-300 leading-relaxed">{project.whatWeBuilt}</p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-emerald-400 block mb-1">
                    Outcome &amp; Impact:
                  </span>
                  <p className="text-slate-300 leading-relaxed">{project.outcome}</p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                    Deliverables Handed Over:
                  </span>
                  <ul className="space-y-1">
                    {project.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-1.5 text-slate-300">
                        <CheckCircle2 size={13} className="text-emerald-400" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
