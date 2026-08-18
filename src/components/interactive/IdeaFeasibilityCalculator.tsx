import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export const IdeaFeasibilityCalculator: React.FC = () => {
  const [domain, setDomain] = useState('ai');
  const [stage, setStage] = useState('raw');
  const [timeline, setTimeline] = useState('semester');

  const getFeasibilityInsight = () => {
    if (stage === 'raw') {
      return {
        readinessScore: '35%',
        primaryHurdle: 'Undefined value proposition & missing prior-art validation',
        recommendation: 'Conduct a 4-hour prior art patent sweep before writing any code. Avoid building another generic wrapper.',
        stepToFocus: 'Step 1 & 2 (Idea Articulation + Mom Test User Interviews)',
        accent: '#00F0FF',
      };
    } else if (stage === 'proto') {
      return {
        readinessScore: '70%',
        primaryHurdle: 'Edge-case handling & unquantified benchmarking vs baselines',
        recommendation: 'Build a repeatable evaluation dataset. Isolate your single novelty claim to prepare for paper / patent drafting.',
        stepToFocus: 'Step 4 & 7 (Novelty Formulation + Technical Documentation)',
        accent: '#8B5CF6',
      };
    } else {
      return {
        readinessScore: '85%',
        primaryHurdle: 'Patent disclosure safety & grant application structuring',
        recommendation: 'File provisional specification (Form 1 & 2) before any public hackathon demonstration or GitHub release.',
        stepToFocus: 'Step 8 (Patent Specification & Incubation Grant Roadmapping)',
        accent: '#10B981',
      };
    }
  };

  const insight = getFeasibilityInsight();

  return (
    <div className="glass-card-bespoke rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden hud-crosshair">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-[10px] font-mono text-brand-violet uppercase tracking-widest px-2.5 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/30 inline-flex items-center gap-1.5 mb-2">
            <Sparkles size={12} />
            Interactive Tool
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Instant Idea Feasibility Diagnostic
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Simulate how our engineering team evaluates student project viability.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-right font-mono text-xs">
          <span className="text-slate-500 block text-[10px]">ESTIMATED VIABILITY</span>
          <span className="text-xl font-bold font-display" style={{ color: insight.accent }}>
            {insight.readinessScore}
          </span>
        </div>
      </div>

      {/* Selectors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {/* Domain */}
        <div>
          <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
            1. Target Domain
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'ai', label: 'AI / ML' },
              { id: 'iot', label: 'IoT / Robotics' },
              { id: 'web3', label: 'Web3 / P2P' },
              { id: 'saas', label: 'Web / App SaaS' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setDomain(item.id)}
                className={`py-2 px-3 rounded-lg text-xs font-mono transition-all text-left cursor-pointer border ${
                  domain === item.id
                    ? 'bg-brand-violet/20 border-brand-violet/60 text-white shadow-sm'
                    : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:border-white/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Current Stage */}
        <div>
          <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
            2. Current Status
          </label>
          <div className="grid grid-cols-1 gap-2">
            {[
              { id: 'raw', label: 'Raw Idea / Sketch' },
              { id: 'proto', label: 'Partial Prototype Built' },
              { id: 'novel', label: 'Working System with Novelty' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setStage(item.id)}
                className={`py-2 px-3 rounded-lg text-xs font-mono transition-all text-left cursor-pointer border ${
                  stage === item.id
                    ? 'bg-brand-cyan/20 border-brand-cyan/60 text-white shadow-sm'
                    : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:border-white/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Deadline */}
        <div>
          <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
            3. Target Horizon
          </label>
          <div className="grid grid-cols-1 gap-2">
            {[
              { id: 'hackathon', label: 'Upcoming Hackathon (2–3 Weeks)' },
              { id: 'semester', label: 'Final-Year Project / Capstone' },
              { id: 'patent', label: 'Research Paper / Patent Spec' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setTimeline(item.id)}
                className={`py-2 px-3 rounded-lg text-xs font-mono transition-all text-left cursor-pointer border ${
                  timeline === item.id
                    ? 'bg-brand-emerald/20 border-brand-emerald/60 text-white shadow-sm'
                    : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:border-white/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Diagnostic Result Box */}
      <motion.div
        key={`${domain}-${stage}-${timeline}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-5 sm:p-6 rounded-2xl bg-[#090C16] border border-white/10 space-y-3"
      >
        <div className="flex items-start gap-3">
          <Compass size={18} className="text-brand-cyan flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
              Critical Mentorship Focus Area:
            </span>
            <span className="text-sm sm:text-base font-semibold text-white font-display">
              {insight.stepToFocus}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
          <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/15">
            <span className="font-mono text-[10px] text-amber-400 uppercase tracking-wider block mb-1">
              Main Risk to Solve:
            </span>
            <p className="text-slate-300">{insight.primaryHurdle}</p>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/15">
            <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider block mb-1">
              Engineering Action:
            </span>
            <p className="text-slate-300">{insight.recommendation}</p>
          </div>
        </div>

        <div className="pt-3 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-500">
            Want us to review your specific architecture?
          </span>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-violet hover:text-brand-cyan transition-colors"
          >
            Apply for 1-on-1 Review <ArrowRight size={13} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
