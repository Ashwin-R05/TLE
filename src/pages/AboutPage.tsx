import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Zap, ShieldCheck, Compass, Rocket,
  Github, Linkedin, ExternalLink,
} from 'lucide-react';
import { FOUNDER_STORY, PHILOSOPHY_VALUES } from '../data/aboutData';
import { SectionHeading } from '../components/common/SectionHeading';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  Compass: <Compass size={22} />,
  Rocket: <Rocket size={22} />,
};

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const AboutPage: React.FC = () => {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* ──── HERO ──── */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full border text-slate-400 bg-white/5 border-white/10 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              About Noth
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] tracking-tight">
              {FOUNDER_STORY.headline}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {FOUNDER_STORY.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──── STORY ──── */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-6">The Origin</h2>
            <div className="space-y-5">
              {FOUNDER_STORY.storyParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-sm sm:text-base text-slate-300 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── CREDENTIALS ──── */}
      <section className="py-16 sm:py-24 relative border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Credentials"
            title="By the Numbers"
          />

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {FOUNDER_STORY.credentials.map((cred, index) => (
              <motion.div
                key={cred.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-5 sm:p-6 text-center hover:border-brand-cyan/20 transition-colors duration-300"
              >
                <p className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">{cred.value}</p>
                <p className="text-xs font-mono text-brand-cyan uppercase tracking-wider mb-2">{cred.label}</p>
                <p className="text-[11px] text-slate-500">{cred.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── TEAM ──── */}
      <section className="py-16 sm:py-24 relative border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Team"
            title="The People Behind Noth"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FOUNDER_STORY.founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-6 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-violet/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                    {/* TODO: replace with real photo */}
                    <span className="font-mono font-bold text-lg text-white/60">
                      {founder.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-white">{founder.name}</h3>
                    <p className="text-xs font-mono text-brand-cyan mb-3">{founder.role}</p>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{founder.bio}</p>
                    <div className="flex gap-2">
                      <a href={founder.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all">
                        <Github size={15} />
                      </a>
                      <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all">
                        <Linkedin size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── PHILOSOPHY ──── */}
      <section className="py-16 sm:py-24 relative border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Philosophy"
            title="How We Operate"
            subtitle="Four principles that guide every product we ship and every student we mentor."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PHILOSOPHY_VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-6 sm:p-7 hover:border-brand-cyan/20 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4">
                  {iconMap[value.icon]}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Ready to work with us?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              Whether you're a founder, a student innovator, or just curious about what we do — we're always open to a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/businesses"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/40 hover:bg-brand-cyan/20 hover:shadow-glow-cyan transition-all duration-300"
              >
                View Our Services <ExternalLink size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl bg-white/5 text-white border border-white/15 hover:border-white/40 hover:bg-white/10 transition-all duration-300"
              >
                Get In Touch <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
