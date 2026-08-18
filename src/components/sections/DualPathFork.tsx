import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, GraduationCap } from 'lucide-react';
import { TiltCard } from '../common/TiltCard';

export const DualPathFork: React.FC = () => {
  const paths = [
    {
      id: 'businesses',
      icon: <Briefcase size={28} />,
      title: 'For Businesses',
      tagline: 'You need a product shipped. We build it.',
      features: [
        'Full-stack web & mobile development',
        'Product UI/UX & interactive design',
        'Technical SEO & conversion optimization',
        'Rapid MVP prototyping (3-5 weeks)',
      ],
      cta: 'View Services & Selected Work',
      link: '/businesses',
      accentColor: 'cyan',
      borderGlow: 'hover:border-brand-cyan/40',
      iconColor: 'text-brand-cyan',
      bgGlow: 'rgba(0, 240, 255, 0.12)',
    },
    {
      id: 'students',
      icon: <GraduationCap size={28} />,
      title: 'For Students',
      tagline: 'You have an idea. We help you make it real.',
      features: [
        '1-on-1 idea validation & teardown sessions',
        'System architecture & feasibility planning',
        'Hackathon prep & project execution mentoring',
        'Research paper & patent filing guidance',
      ],
      cta: 'Explore Guidance Program',
      link: '/students',
      accentColor: 'violet',
      borderGlow: 'hover:border-brand-violet/40',
      iconColor: 'text-brand-violet',
      bgGlow: 'rgba(139, 92, 246, 0.12)',
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full border text-slate-400 bg-white/5 border-white/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            Two Missions, One Studio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            What brings you here?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {paths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link to={path.link} className="block h-full">
                <TiltCard
                  className="h-full p-7 sm:p-9"
                  glowColor={path.bgGlow}
                >
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-surface-100 border border-white/10 flex items-center justify-center mb-6 ${path.iconColor}`}>
                      {path.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                      {path.title}
                    </h3>
                    <p className="text-slate-400 text-sm sm:text-base mb-6">
                      {path.tagline}
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {path.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <span className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 ${path.accentColor === 'cyan' ? 'bg-brand-cyan' : 'bg-brand-violet'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className={`flex items-center gap-2 text-sm font-semibold ${path.iconColor} group`}>
                      {path.cta}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
