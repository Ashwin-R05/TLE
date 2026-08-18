import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  accentColor?: 'cyan' | 'violet' | 'emerald';
  className?: string;
}

const accentMap = {
  cyan: 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/30',
  violet: 'text-brand-violet bg-brand-violet/10 border-brand-violet/30',
  emerald: 'text-brand-emerald bg-brand-emerald/10 border-brand-emerald/30',
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  accentColor = 'cyan',
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full border mb-4 sm:mb-5',
            accentMap[accentColor]
          )}
        >
          <span className={cn('w-1.5 h-1.5 rounded-full', accentColor === 'cyan' ? 'bg-brand-cyan' : accentColor === 'violet' ? 'bg-brand-violet' : 'bg-brand-emerald')} />
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
