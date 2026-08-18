import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const IdeaFeasibilityCalculator: React.FC = () => {
  const [domain, setDomain] = useState('ai');
  const [stage, setStage] = useState('raw');
  const [timeline, setTimeline] = useState('semester');

  const getFeasibilityInsight = () => {
    if (stage === 'raw') {
      return {
        readinessScore: 'Early Stage',
        primaryHurdle: 'Undefined user problem & lack of prior-art benchmark',
        recommendation: 'Complete a structured prior-art search across patents and existing products before writing backend code.',
        stepToFocus: 'Phase 1 & 2: Problem Understanding & Prior-Art Benchmarking',
        accentColor: '#3B82F6',
      };
    } else if (stage === 'proto') {
      return {
        readinessScore: 'Prototyping Phase',
        primaryHurdle: 'Edge-case handling & unquantified performance claims',
        recommendation: 'Establish repeatable evaluation metrics and isolate your technical novelty for academic / patent filing.',
        stepToFocus: 'Phase 4 & 7: Novelty Formulation & Technical Documentation',
        accentColor: '#6366F1',
      };
    } else {
      return {
        readinessScore: 'Launch & IP Ready',
        primaryHurdle: 'Provisional patent protection & grant proposal structure',
        recommendation: 'File provisional patent specifications (Form 1 & 2) before public hackathon presentations or open-source releases.',
        stepToFocus: 'Phase 8: Patent Filing & Grant Roadmapping',
        accentColor: '#10B981',
      };
    }
  };

  const insight = getFeasibilityInsight();

  return (
    <div className="card-pro rounded-3xl p-6 sm:p-10 shadow-elevated">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-semibold text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 inline-flex items-center gap-1.5 mb-2">
            <Sparkles size={13} />
            Interactive Assessment
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Project Feasibility &amp; Roadmap Planner
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            See how our mentors assess project scope, engineering bottlenecks, and patent viability.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-surface-100/80 border border-white/10 text-right">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Assessment</span>
          <span className="text-base sm:text-lg font-bold font-display" style={{ color: insight.accentColor }}>
            {insight.readinessScore}
          </span>
        </div>
      </div>

      {/* Selectors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {/* Domain */}
        <div>
          <label className="text-xs font-semibold text-slate-300 block mb-2">
            1. Technology Domain
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'ai', label: 'AI / Machine Learning' },
              { id: 'iot', label: 'IoT / Embedded Systems' },
              { id: 'web3', label: 'Web3 / Distributed' },
              { id: 'saas', label: 'Web & Mobile App' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setDomain(item.id)}
                className={`py-2 px-3 rounded-xl text-xs font-medium transition-all text-left cursor-pointer border ${
                  domain === item.id
                    ? 'bg-blue-600/20 border-blue-500/50 text-white shadow-sm'
                    : 'bg-surface-100/50 border-white/[0.06] text-slate-400 hover:border-white/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <div>
          <label className="text-xs font-semibold text-slate-300 block mb-2">
            2. Current Project Status
          </label>
          <div className="grid grid-cols-1 gap-2">
            {[
              { id: 'raw', label: 'Early Concept / Rough Idea' },
              { id: 'proto', label: 'Partial Prototype In Progress' },
              { id: 'novel', label: 'Working System with Novel Claims' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setStage(item.id)}
                className={`py-2 px-3 rounded-xl text-xs font-medium transition-all text-left cursor-pointer border ${
                  stage === item.id
                    ? 'bg-indigo-600/20 border-indigo-500/50 text-white shadow-sm'
                    : 'bg-surface-100/50 border-white/[0.06] text-slate-400 hover:border-white/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Target Deadline */}
        <div>
          <label className="text-xs font-semibold text-slate-300 block mb-2">
            3. Target Milestone
          </label>
          <div className="grid grid-cols-1 gap-2">
            {[
              { id: 'hackathon', label: 'Hackathon (2–3 Weeks)' },
              { id: 'semester', label: 'Capstone / Final Year Project' },
              { id: 'patent', label: 'Research Publication / Patent' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setTimeline(item.id)}
                className={`py-2 px-3 rounded-xl text-xs font-medium transition-all text-left cursor-pointer border ${
                  timeline === item.id
                    ? 'bg-emerald-600/20 border-emerald-500/50 text-white shadow-sm'
                    : 'bg-surface-100/50 border-white/[0.06] text-slate-400 hover:border-white/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Structured Recommendation */}
      <motion.div
        key={`${domain}-${stage}-${timeline}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-5 sm:p-6 rounded-2xl bg-surface-100/80 border border-white/10 space-y-4"
      >
        <div className="flex items-start gap-3">
          <Compass size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-medium text-slate-400 block">
              Recommended Mentorship Focus:
            </span>
            <span className="text-sm sm:text-base font-semibold text-white">
              {insight.stepToFocus}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-surface-200/90 border border-white/5">
            <span className="font-semibold text-amber-400 block mb-1">
              Key Challenge to Address:
            </span>
            <p className="text-slate-300 leading-relaxed">{insight.primaryHurdle}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-surface-200/90 border border-white/5">
            <span className="font-semibold text-blue-400 block mb-1">
              Action Plan:
            </span>
            <p className="text-slate-300 leading-relaxed">{insight.recommendation}</p>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-emerald-400" />
            1-on-1 personalized advisory available
          </span>
          <Link
            to="/contact"
            className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1"
          >
            Apply for Mentorship Session <ArrowRight size={13} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
