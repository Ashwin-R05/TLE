import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

export const DualPathFork: React.FC = () => {
  const paths = [
    {
      id: 'businesses',
      icon: <Briefcase size={24} />,
      badge: 'For Companies & Startups',
      title: 'Digital Solutions & Engineering',
      tagline: 'High-velocity web/mobile app engineering, UI/UX systems, and conversion-optimized digital products.',
      features: [
        'Full-stack Web & Mobile Applications',
        'Figma UI/UX & Design Systems',
        'Technical SEO & Performance Optimization',
        '3-5 Week Rapid MVP Delivery',
      ],
      cta: 'Explore Business Services',
      link: '/businesses',
      badgeClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      iconClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      btnClass: 'bg-blue-600 text-white hover:bg-blue-500 shadow-glow-blue',
    },
    {
      id: 'students',
      icon: <GraduationCap size={24} />,
      badge: 'For Student Innovators',
      title: 'Idea Guidance & Mentorship',
      tagline: '1-on-1 engineering advisory, architecture reviews, and patent direction to turn your hypothesis into an undeniable project.',
      features: [
        'Idea Clarification & Problem Validation',
        'System Architecture & Stack Selection',
        'Hackathon Prep & Execution Coaching',
        'Research Paper & Provisional Patent Specs',
      ],
      cta: 'Explore Mentorship Program',
      link: '/students',
      badgeClass: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      iconClass: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      btnClass: 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-glow-indigo',
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 inline-block mb-3">
            Two Pillars of Noth
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            How can we partner with you?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-pro rounded-3xl p-8 sm:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${path.iconClass}`}>
                    {path.icon}
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${path.badgeClass}`}>
                    {path.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {path.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {path.tagline}
                </p>

                <div className="space-y-3 mb-8">
                  {path.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={15} className="text-slate-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={path.link}
                className={`w-full py-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${path.btnClass}`}
              >
                {path.cta}
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
