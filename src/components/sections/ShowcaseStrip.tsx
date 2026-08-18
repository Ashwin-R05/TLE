import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projects';
import { SectionHeading } from '../common/SectionHeading';
import { cn } from '../../utils/cn';

const badgeColorMap: Record<string, string> = {
  'Client Project': 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30',
  'In Development': 'bg-brand-amber/10 text-brand-amber border-brand-amber/30',
  'Hackathon Build': 'bg-brand-violet/10 text-brand-violet border-brand-violet/30',
};

export const ShowcaseStrip: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="What We've Built"
          title="Selected Work & Active Systems"
          subtitle="Client software, hackathon wins, and systems we're actively developing. Labeled honestly."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/businesses" className="group block h-full">
                <div className="relative h-full rounded-2xl overflow-hidden glass-panel glass-card-hover p-1">
                  {/* Image/Visual placeholder */}
                  <div
                    className="w-full h-40 sm:h-44 rounded-xl flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${project.accentColor}15 0%, ${project.accentColor}05 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                    {/* TODO: replace with real project screenshot */}
                    <div className="relative flex flex-col items-center gap-2">
                      <div
                        className="w-12 h-12 rounded-xl border flex items-center justify-center"
                        style={{
                          borderColor: `${project.accentColor}40`,
                          background: `${project.accentColor}15`,
                        }}
                      >
                        <span className="font-mono font-bold text-sm" style={{ color: project.accentColor }}>
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 tracking-widest">
                        {project.imagePlaceholder}
                      </span>
                    </div>

                    {/* Hover arrow icon */}
                    <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink size={13} className="text-white/70" />
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-4 sm:p-5">
                    {/* Badge */}
                    <span
                      className={cn(
                        'inline-flex text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border mb-3',
                        badgeColorMap[project.badgeLabel]
                      )}
                    >
                      {project.badgeLabel}
                    </span>

                    <h3 className="text-sm sm:text-base font-semibold text-white leading-snug mb-1.5 group-hover:text-brand-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {project.tagline}
                    </p>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[9px] font-mono text-slate-500 bg-white/[0.04] px-1.5 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[9px] font-mono text-slate-600">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            to="/businesses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-brand-cyan transition-colors duration-300 group"
          >
            View all work with full case studies
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
