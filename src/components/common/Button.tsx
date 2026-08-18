import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const sizeClasses = {
  sm: 'px-4 py-2 text-xs gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
};

const variantClasses = {
  primary:
    'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/40 hover:bg-brand-cyan/20 hover:border-brand-cyan/70 hover:shadow-glow-cyan',
  secondary:
    'bg-brand-violet/10 text-brand-violet border border-brand-violet/40 hover:bg-brand-violet/20 hover:border-brand-violet/70 hover:shadow-glow-violet',
  ghost:
    'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 border border-transparent',
  outline:
    'bg-transparent text-slate-200 border border-white/15 hover:border-white/40 hover:bg-white/5',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  icon,
  iconRight,
  className,
  ...props
}) => {
  const classes = cn(
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 ease-out cursor-pointer whitespace-nowrap select-none',
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={classes}
      {...(href ? { href } : {})}
      {...(props as Record<string, unknown>)}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </MotionTag>
  );
};
