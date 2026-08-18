import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GUIDANCE_STEPS } from '../../data/guidanceSteps';
import {
  Lightbulb, Search, BookOpen, Sparkles,
  Layers, Cpu, FileText, Award, ChevronRight, CheckCircle2, AlertCircle,
} from 'lucide-react';
import { cn } from '../../utils/cn';

const iconComponents: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb size={20} />,
  Search: <Search size={20} />,
  BookOpen: <BookOpen size={20} />,
  Sparkles: <Sparkles size={20} />,
  Layers: <Layers size={20} />,
  Cpu: <Cpu size={20} />,
  FileText: <FileText size={20} />,
  Award: <Award size={20} />,
};

export const GuidanceFlowDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = GUIDANCE_STEPS[activeStep];

  return (
    <section id="guidance-flow" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 inline-block mb-3">
            Structured 8-Stage Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            From Raw Idea to Working Prototype &amp; Patent
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            A milestone-driven engineering framework designed to eliminate student project failure points. Click through each stage below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Step Selector List (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <div className="card-pro rounded-2xl p-3 space-y-1">
              {GUIDANCE_STEPS.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    'w-full text-left rounded-xl px-3.5 py-3 flex items-center gap-3 transition-all cursor-pointer',
                    activeStep === index
                      ? 'bg-indigo-600/20 text-white border border-indigo-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                  )}
                >
                  <span
                    className={cn(
                      'w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold flex-shrink-0',
                      activeStep === index
                        ? 'bg-indigo-600 text-white'
                        : 'bg-surface-100 text-slate-400 border border-white/5'
                    )}
                  >
                    {step.stepNumber}
                  </span>
                  <span className="text-xs font-medium truncate flex-1">{step.title}</span>
                  {activeStep === index && (
                    <ChevronRight size={14} className="text-indigo-400 flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>

            {/* Progress counter */}
            <div className="p-3 text-center text-xs text-slate-400 font-mono">
              Stage {activeStep + 1} of {GUIDANCE_STEPS.length} Completed
            </div>
          </div>

          {/* Step Detailed View (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="card-pro rounded-3xl p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-between"
              >
                <div>
                  {/* Stage Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                      {iconComponents[currentStep.icon]}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-1">
                        Phase {currentStep.stepNumber}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                        {currentStep.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">{currentStep.tagline}</p>
                    </div>
                  </div>

                  {/* Typical Student Dilemma */}
                  <div className="p-4 rounded-xl bg-surface-100/70 border-l-4 border-l-amber-500/70 mb-6">
                    <span className="text-[11px] font-semibold text-amber-400 block mb-1">
                      Common Student Challenge at this Stage:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                      {currentStep.studentDilemma}
                    </p>
                  </div>

                  {/* What We Mentor */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Our Mentorship Guidance:
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {currentStep.whatWeDo}
                    </p>
                  </div>

                  {/* Action Checklist */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                      Key Milestone Objectives:
                    </h4>
                    <div className="space-y-2">
                      {currentStep.actionChecklist.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Deliverable and Pitfall row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/[0.06] text-xs">
                  <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <span className="font-semibold text-emerald-400 block mb-1">Stage Deliverable:</span>
                    <p className="text-slate-300">{currentStep.deliverable}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                    <span className="font-semibold text-amber-400 block mb-1 flex items-center gap-1">
                      <AlertCircle size={13} /> Common Pitfall to Avoid:
                    </span>
                    <p className="text-slate-400">{currentStep.commonPitfall}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
