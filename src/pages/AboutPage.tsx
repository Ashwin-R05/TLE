import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Zap, ShieldCheck, Compass, Rocket,
  Github, Linkedin
} from 'lucide-react';
import { FOUNDER_STORY, PHILOSOPHY_VALUES } from '../data/aboutData';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  Compass: <Compass size={20} />,
  Rocket: <Rocket size={20} />,
};

const AboutPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* ──── HERO ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-flex items-center gap-1.5 mb-4">
            About TLE
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
            Building software with craft.{' '}
            <span className="text-gradient-accent">Mentoring the next generation.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            {FOUNDER_STORY.tagline}
          </p>
        </div>
      </section>

      {/* ──── FOUNDER STORY ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
              Our Origin
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Why we started TLE.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            {FOUNDER_STORY.storyParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ──── CREDENTIALS & STATS ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FOUNDER_STORY.credentials.map((cred, index) => (
            <motion.div
              key={cred.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-pro rounded-2xl p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">
                {cred.value}
              </div>
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                {cred.label}
              </div>
              <p className="text-xs text-slate-400 font-sans">{cred.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──── OPERATING PRINCIPLES ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="mb-12">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
            Our Values
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            How we make engineering decisions.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PHILOSOPHY_VALUES.map((val, index) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-pro rounded-3xl p-8"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                {iconMap[val.icon]}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">{val.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──── LEADERSHIP & TEAM ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="mb-12">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
            Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            The Team Behind TLE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FOUNDER_STORY.founders.map((founder) => (
            <div key={founder.name} className="card-pro rounded-3xl p-8 flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-indigo-600/30 border border-white/10 flex items-center justify-center flex-shrink-0 font-display font-bold text-lg text-white">
                {founder.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white">{founder.name}</h3>
                <span className="text-xs font-medium text-blue-400 block mb-3">{founder.role}</span>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">{founder.bio}</p>
                <div className="flex gap-3">
                  <a href={founder.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-surface-100 text-slate-400 hover:text-white transition-all">
                    <Github size={15} />
                  </a>
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-surface-100 text-slate-400 hover:text-white transition-all">
                    <Linkedin size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="card-pro rounded-3xl p-8 sm:p-14 shadow-elevated">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Let's work together.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
            Whether you have a digital product to engineer or an innovative idea that needs guidance, our team is ready to talk.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-blue-600 text-white hover:bg-blue-500 shadow-glow-blue transition-all cursor-pointer"
          >
            Contact the Founders <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
