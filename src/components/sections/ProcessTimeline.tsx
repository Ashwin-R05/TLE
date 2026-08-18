import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../../data/services';
import { SectionHeading } from '../common/SectionHeading';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Process"
          title="How We Work"
          subtitle="Transparent, sprint-based execution with live staging builds at every milestone. No black boxes."
        />

        <div className="mt-14 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan/50 via-brand-violet/30 to-transparent" />

          <div className="space-y-8 sm:space-y-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Step number circle */}
                <div className="absolute left-2 sm:left-4 top-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-surface-100 border border-brand-cyan/30 flex items-center justify-center z-10">
                  <span className="text-xs font-mono font-bold text-brand-cyan">{step.step}</span>
                </div>

                {/* Content card */}
                <div className="glass-panel rounded-xl p-5 sm:p-6 group hover:border-brand-cyan/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2.5">
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <span className="text-[10px] font-mono text-brand-cyan/80 bg-brand-cyan/5 border border-brand-cyan/15 px-2.5 py-1 rounded-md whitespace-nowrap">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
