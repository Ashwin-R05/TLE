import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '../../types';
import { ChevronRight, Activity, Cpu, ShoppingBag, Radio, CheckCircle2 } from 'lucide-react';
import { cn } from '../../utils/cn';

interface InteractiveProjectCardProps {
  project: CaseStudy;
  index: number;
}

export const InteractiveProjectCard: React.FC<InteractiveProjectCardProps> = ({ project, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [interactiveParam, setInteractiveParam] = useState(1);

  // Render bespoke custom mockup based on project id
  const renderCustomMockup = () => {
    switch (project.id) {
      case 'aquacraft':
        return (
          <div className="w-full h-full bg-[#080D1A] p-4 flex flex-col justify-between relative overflow-hidden border border-cyan-500/20 rounded-xl">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Radio size={14} className="text-brand-cyan animate-pulse" />
                <span className="text-[10px] font-mono text-brand-cyan tracking-wider">VESSEL TELEMETRY #09</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                MQTT ONLINE
              </span>
            </div>

            {/* Radar circle with animated sweep */}
            <div className="relative my-2 h-24 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border border-cyan-500/30 relative flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-cyan-500/20 border-dashed" />
                <div className="absolute w-full h-full rounded-full border-t border-cyan-400 animate-radar" />
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-glow-cyan animate-ping" />
              </div>
              <div className="absolute right-2 text-right font-mono text-[10px]">
                <div className="text-slate-400">RPM: <span className="text-white font-bold">{2400 + interactiveParam * 120}</span></div>
                <div className="text-slate-400">TEMP: <span className="text-cyan-400 font-bold">84.2°C</span></div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono border-t border-white/5 pt-2">
              <span className="text-slate-500">Latency: 182ms</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setInteractiveParam((p) => (p % 4) + 1);
                }}
                className="text-brand-cyan hover:underline cursor-pointer"
              >
                Ping Next Vessel ❯
              </button>
            </div>
          </div>
        );

      case 'moringa-ecommerce':
        return (
          <div className="w-full h-full bg-[#08140E] p-4 flex flex-col justify-between relative overflow-hidden border border-emerald-500/20 rounded-xl">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <ShoppingBag size={14} className="text-emerald-400" />
                <span className="text-[10px] font-mono text-emerald-400 tracking-wider">FAST 2-STEP CHECKOUT</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                0.9s LCP
              </span>
            </div>

            <div className="my-2 space-y-1.5 font-mono text-[10px]">
              <div className="p-2 rounded bg-emerald-950/40 border border-emerald-500/20 flex justify-between items-center">
                <span className="text-slate-300">Organic Moringa Gold (Sub)</span>
                <span className="text-emerald-400 font-bold">₹890/mo</span>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 py-1.5 px-2 bg-emerald-500/10 border border-emerald-400/40 rounded text-center text-emerald-300">
                  ⚡ 1-Click UPI Pay
                </div>
                <div className="py-1.5 px-2 bg-white/5 rounded text-slate-400">Card</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono border-t border-white/5 pt-2">
              <span className="text-slate-500">Conversion: +38%</span>
              <span className="text-emerald-400">Zero Drop-off</span>
            </div>
          </div>
        );

      case 'codementor-ai':
        return (
          <div className="w-full h-full bg-[#0F0B1E] p-4 flex flex-col justify-between relative overflow-hidden border border-violet-500/20 rounded-xl">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Cpu size={14} className="text-violet-400" />
                <span className="text-[10px] font-mono text-violet-400 tracking-wider">AST STEPPER &amp; WASM</span>
              </div>
              <span className="text-[10px] font-mono text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded">
                1st DevHack
              </span>
            </div>

            <div className="my-2 p-2 rounded bg-[#090714] border border-violet-500/20 font-mono text-[10px] text-slate-300 space-y-1">
              <div className="text-slate-500">1 | fn quick_sort(arr: &amp;mut [i32]) &#123;</div>
              <div className="text-violet-300 bg-violet-500/20 px-1 rounded">2 |   let pivot = partition(arr);</div>
              <div className="text-slate-500">3 |   // Complexity: O(n log n)</div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono border-t border-white/5 pt-2">
              <span className="text-slate-500">4,500+ Active Students</span>
              <span className="text-violet-400">Open Source</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-[#1A1208] p-4 flex flex-col justify-between relative overflow-hidden border border-amber-500/20 rounded-xl">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-amber-400" />
                <span className="text-[10px] font-mono text-amber-400 tracking-wider">SENTIMENT ENGINE</span>
              </div>
              <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded">
                Alpha
              </span>
            </div>

            <div className="my-2 h-16 flex items-end justify-between gap-1 px-2">
              {[40, 65, 30, 85, 95, 75, 60, 90, 80, 100].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-gradient-to-t from-amber-500/30 to-amber-400 rounded-t"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono border-t border-white/5 pt-2">
              <span className="text-slate-500">12 hrs saved/week</span>
              <span className="text-amber-400">8 Agencies</span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card-bespoke rounded-2xl overflow-hidden group transition-all duration-300 hover:border-white/20"
    >
      <div className="p-6 sm:p-7">
        {/* Top meta strip */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={cn(
              'text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border',
              project.badgeLabel === 'Client Project'
                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                : project.badgeLabel === 'Hackathon Build'
                ? 'bg-violet-500/10 text-violet-400 border-violet-500/30'
                : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
            )}
          >
            {project.badgeLabel}
          </span>
          <span className="text-[11px] font-mono text-slate-500">{project.year}</span>
        </div>

        {/* Title and tagline */}
        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
          {project.tagline}
        </p>

        {/* Bespoke interactive mockup stage */}
        <div className="h-44 w-full mb-6">
          {renderCustomMockup()}
        </div>

        {/* Key Metrics Chips */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-2 mb-6">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                <p className="text-sm font-display font-bold text-white">{m.value}</p>
                <p className="text-[9px] font-mono text-slate-500 uppercase mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-[10px] font-mono text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.06]">
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable Case Study Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/20 transition-all text-xs font-mono font-medium text-slate-300 flex items-center justify-between cursor-pointer"
        >
          <span>{isOpen ? 'Close Case Study' : 'View Full Case Breakdown'}</span>
          <ChevronRight
            size={14}
            className={cn('transition-transform duration-300 text-brand-cyan', isOpen ? 'rotate-90' : '')}
          />
        </button>

        {/* Detailed Breakdown Accordion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-white/[0.08] space-y-4 text-xs">
                <div>
                  <span className="font-mono text-brand-amber text-[10px] uppercase tracking-wider block mb-1">
                    Problem Encountered:
                  </span>
                  <p className="text-slate-300 leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <span className="font-mono text-brand-cyan text-[10px] uppercase tracking-wider block mb-1">
                    Engineered Solution:
                  </span>
                  <p className="text-slate-300 leading-relaxed">{project.whatWeBuilt}</p>
                </div>

                <div>
                  <span className="font-mono text-brand-emerald text-[10px] uppercase tracking-wider block mb-1">
                    Measurable Result:
                  </span>
                  <p className="text-slate-300 leading-relaxed">{project.outcome}</p>
                </div>

                <div>
                  <span className="font-mono text-slate-400 text-[10px] uppercase tracking-wider block mb-1.5">
                    Handoff Deliverables:
                  </span>
                  <ul className="space-y-1">
                    {project.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-1.5 text-slate-400">
                        <CheckCircle2 size={12} className="text-brand-emerald" /> {d}
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
