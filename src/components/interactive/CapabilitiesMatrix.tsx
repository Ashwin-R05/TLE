import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Shield, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

type MetricTab = 'solutions' | 'mentorship' | 'standards';

export const CapabilitiesMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MetricTab>('solutions');

  return (
    <div className="w-full rounded-2xl card-pro overflow-hidden shadow-elevated">
      {/* Top Segmented Control */}
      <div className="p-2 bg-surface-300/80 border-b border-white/[0.06] flex items-center justify-between gap-1 overflow-x-auto">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab('solutions')}
            className={cn(
              'px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer flex items-center gap-1.5',
              activeTab === 'solutions'
                ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                : 'text-slate-400 hover:text-slate-200'
            )}
          >
            <Layers size={13} />
            Digital Solutions
          </button>

          <button
            onClick={() => setActiveTab('mentorship')}
            className={cn(
              'px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer flex items-center gap-1.5',
              activeTab === 'mentorship'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200'
            )}
          >
            <Zap size={13} />
            Idea Mentorship
          </button>

          <button
            onClick={() => setActiveTab('standards')}
            className={cn(
              'px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer flex items-center gap-1.5',
              activeTab === 'standards'
                ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30'
                : 'text-slate-400 hover:text-slate-200'
            )}
          >
            <Shield size={13} />
            Quality Standards
          </button>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Active Studio
        </span>
      </div>

      {/* Dynamic Tab Body */}
      <div className="p-5 sm:p-6 bg-surface-200/90 min-h-[220px]">
        <AnimatePresence mode="wait">
          {activeTab === 'solutions' && (
            <motion.div
              key="solutions"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">Full-Lifecycle Product Delivery</h4>
                  <p className="text-xs text-slate-400">Production-ready React, Next.js, Node.js &amp; Cloud Systems</p>
                </div>
                <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                  2–4 Week MVPs
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0" />
                  <span>Sub-second page loads</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0" />
                  <span>Zero vendor lock-in</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0" />
                  <span>Interactive Figma prototypes</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0" />
                  <span>30-day post-launch warranty</span>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs">
                <span className="text-slate-400">Ready to scope your requirements?</span>
                <Link to="/businesses" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
                  View Services <ArrowUpRight size={13} />
                </Link>
              </div>
            </motion.div>
          )}

          {activeTab === 'mentorship' && (
            <motion.div
              key="mentorship"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">Student Project &amp; Patent Guidance</h4>
                  <p className="text-xs text-slate-400">1-on-1 technical advisory from ideation to defensible demo</p>
                </div>
                <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
                  8-Stage Framework
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-indigo-400 flex-shrink-0" />
                  <span>Prior-art patent search</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-indigo-400 flex-shrink-0" />
                  <span>Architecture &amp; code reviews</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-indigo-400 flex-shrink-0" />
                  <span>Hackathon prep &amp; pitching</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-indigo-400 flex-shrink-0" />
                  <span>Research &amp; provisional IP</span>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs">
                <span className="text-slate-400">Have a raw project idea?</span>
                <Link to="/students" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1">
                  Explore Guidance <ArrowUpRight size={13} />
                </Link>
              </div>
            </motion.div>
          )}

          {activeTab === 'standards' && (
            <motion.div
              key="standards"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">Engineering Quality Guarantee</h4>
                  <p className="text-xs text-slate-400">Clean code, responsive layouts, and performance benchmarks</p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                  95+ Lighthouse
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <p className="text-base font-bold text-white">&lt; 1.1s</p>
                  <p className="text-[10px] text-slate-400 uppercase mt-0.5">Core Web Vitals</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <p className="text-base font-bold text-white">100%</p>
                  <p className="text-[10px] text-slate-400 uppercase mt-0.5">Source Ownership</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <p className="text-base font-bold text-white">24h</p>
                  <p className="text-[10px] text-slate-400 uppercase mt-0.5">Support SLA</p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                Every project undergoes cross-device testing, accessibility validation, and performance auditing before client sign-off.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
