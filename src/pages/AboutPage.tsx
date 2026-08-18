import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Zap, ShieldCheck, Compass, Rocket,
  Github, Linkedin, Terminal
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
      {/* Background aura */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-cyan-500/10 via-violet-600/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />

      {/* ──── HERO ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="max-w-4xl">
          <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 inline-flex items-center gap-1.5 mb-4">
            <Terminal size={12} />
            Hacker Roots &amp; Mission
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            We are builders who write code,{' '}
            <span className="text-gradient-cyan-emerald">break production, and ship.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed max-w-2xl">
            {FOUNDER_STORY.tagline}
          </p>
        </div>
      </section>

      {/* ──── THE ORIGIN NARRATIVE ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
              // Why We Exist
            </span>
            <h2 className="text-2xl sm:text-3xl font-syne font-bold text-white mb-4">
              The dual-engine studio model.
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs text-slate-400">
              <span className="text-brand-cyan">Hostel Room 402</span> ➔ <span className="text-brand-violet">A Distributed Engineering Studio</span>
            </div>
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
              className="glass-card-bespoke rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-syne font-bold text-white mb-1">
                {cred.value}
              </div>
              <div className="text-xs font-mono text-brand-cyan uppercase tracking-wider mb-2">
                {cred.label}
              </div>
              <p className="text-[11px] text-slate-400 font-sans">{cred.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──── OPERATING PRINCIPLES ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="mb-12">
          <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest block mb-2">
            // Core Tenets
          </span>
          <h2 className="text-2xl sm:text-3xl font-syne font-bold text-white">
            How we make decisions.
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
              className="glass-card-bespoke rounded-2xl p-6 sm:p-8 hover:border-violet-500/30 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-brand-violet mb-4">
                {iconMap[val.icon]}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">{val.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──── TEAM COLLECTIVE ──── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="mb-12">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
            // The Architects
          </span>
          <h2 className="text-2xl sm:text-3xl font-syne font-bold text-white">
            Core Leadership &amp; Mentors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FOUNDER_STORY.founders.map((founder) => (
            <div key={founder.name} className="glass-card-bespoke rounded-2xl p-6 sm:p-8 flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-violet-600/20 border border-white/10 flex items-center justify-center flex-shrink-0 font-syne font-bold text-lg text-white">
                {founder.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white">{founder.name}</h3>
                <span className="text-xs font-mono text-brand-cyan block mb-3">{founder.role}</span>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">{founder.bio}</p>
                <div className="flex gap-3">
                  <a href={founder.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                    <Github size={15} />
                  </a>
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/10 transition-all">
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
        <div className="glass-card-bespoke rounded-3xl p-8 sm:p-14 border border-cyan-500/20 hud-crosshair">
          <h2 className="text-3xl sm:text-4xl font-syne font-bold text-white mb-4">
            Let's build something exceptional.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
            Whether you have a product backlog to clear or an idea that needs rigorous technical execution, our team is ready.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold bg-brand-cyan text-black hover:bg-cyan-300 hover:shadow-glow-cyan transition-all cursor-pointer"
          >
            Get In Touch With Founders <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
