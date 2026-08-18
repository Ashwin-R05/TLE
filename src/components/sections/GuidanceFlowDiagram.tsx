import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GUIDANCE_STEPS } from '../../data/guidanceSteps';
import { SectionHeading } from '../common/SectionHeading';
import {
  Lightbulb, Search, BookOpen, Sparkles,
  Layers, Cpu, FileText, Award, ChevronRight, CheckCircle2, AlertTriangle,
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
      <div className="absolute inset-0 bg-dots-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="The Guidance Framework"
          title="Idea to Patent in 8 Structured Steps"
          subtitle="Each step is designed to eliminate the exact failure point where we've seen student projects die. Click through the stages below."
          accentColor="violet"
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Step Selector Column */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="glass-panel rounded-2xl p-3 sm:p-4 space-y-1.5">
              {GUIDANCE_STEPS.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    'w-full text-left rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-300 group cursor-pointer',
                    activeStep === index
                      ? 'bg-brand-violet/15 border border-brand-violet/30 text-white'
                      : 'hover:bg-white/[0.03] border border-transparent text-slate-500 hover:text-slate-300'
                  )}
                >
                  <span className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-mono font-bold transition-colors',
                    activeStep === index
                      ? 'bg-brand-violet/20 text-brand-violet border border-brand-violet/30'
                      : 'bg-white/5 text-slate-600 border border-white/5'
                  )}>
                    {step.stepNumber}
                  </span>
                  <span className="text-sm font-medium truncate flex-1">{step.title}</span>
                  {activeStep === index && (
                    <ChevronRight size={14} className="text-brand-violet flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="mt-4 px-4">
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-violet to-brand-cyan rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((activeStep + 1) / GUIDANCE_STEPS.length) * 100}%` }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <p className="text-[10px] font-mono text-slate-600 mt-2">
                Stage {activeStep + 1} of {GUIDANCE_STEPS.length}
              </p>
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-8 xl:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 h-full"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-violet/10 border border-brand-violet/25 flex items-center justify-center text-brand-violet flex-shrink-0">
                    {iconComponents[currentStep.icon]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-brand-violet bg-brand-violet/10 px-2 py-0.5 rounded-md">
                        STEP {currentStep.stepNumber}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                      {currentStep.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">{currentStep.tagline}</p>
                  </div>
                </div>

                {/* Student Dilemma quote */}
                <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 border-l-2 border-l-brand-amber/50">
                  <p className="text-sm text-slate-400 italic leading-relaxed">
                    {currentStep.studentDilemma}
                  </p>
                  <p className="text-[10px] font-mono text-slate-600 mt-2">— Every student, at this exact stage</p>
                </div>

                {/* What We Do */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-semibold text-brand-violet uppercase tracking-wider mb-2.5">What We Do</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{currentStep.whatWeDo}</p>
                </div>

                {/* Action checklist */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-3">Action Checklist</h4>
                  <ul className="space-y-2.5">
                    {currentStep.actionChecklist.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08 }}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <CheckCircle2 size={15} className="text-brand-emerald flex-shrink-0 mt-0.5" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Deliverable */}
                  <div className="p-4 rounded-xl bg-brand-emerald/5 border border-brand-emerald/15">
                    <h4 className="text-[10px] font-mono font-semibold text-brand-emerald uppercase tracking-wider mb-1.5">Deliverable</h4>
                    <p className="text-sm text-slate-300">{currentStep.deliverable}</p>
                  </div>

                  {/* Common Pitfall */}
                  <div className="p-4 rounded-xl bg-brand-amber/5 border border-brand-amber/15">
                    <h4 className="text-[10px] font-mono font-semibold text-brand-amber uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <AlertTriangle size={12} /> Common Pitfall
                    </h4>
                    <p className="text-sm text-slate-400">{currentStep.commonPitfall}</p>
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
