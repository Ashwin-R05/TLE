import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Zap, Shield, Users } from 'lucide-react';
import { HeroCanvas } from '../components/3d/HeroCanvas';
import { DualPathFork } from '../components/sections/DualPathFork';
import { ShowcaseStrip } from '../components/sections/ShowcaseStrip';

const stats = [
  { label: 'Production Systems Live', value: '14+', icon: <Zap size={16} /> },
  { label: 'Student Builders Mentored', value: '80+', icon: <Users size={16} /> },
  { label: 'Avg Mobile Load Speed', value: '< 1.1s', icon: <Shield size={16} /> },
];

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const HomePage: React.FC = () => {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* ──── HERO ──── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Layered background effects */}
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Copy Column */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-brand-emerald tracking-wider uppercase">
                  Accepting New Projects
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight">
                We build digital products.{' '}
                <span className="text-gradient-brand">We mentor student builders.</span>
              </h1>

              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
                Noth is a student-founded tech studio. We ship production-grade web apps, mobile products, and SaaS MVPs for businesses — and guide ambitious student inventors from raw idea to working prototype and patent direction.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/businesses"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/40 hover:bg-brand-cyan/20 hover:border-brand-cyan/70 hover:shadow-glow-cyan transition-all duration-300"
                >
                  I need a product built
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/students"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl bg-brand-violet/10 text-brand-violet border border-brand-violet/40 hover:bg-brand-violet/20 hover:border-brand-violet/70 hover:shadow-glow-violet transition-all duration-300"
                >
                  I have a student project idea
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Stats strip */}
              <div className="mt-10 sm:mt-14 flex flex-wrap gap-6 sm:gap-10">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-500">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-lg sm:text-xl font-display font-bold text-white">{stat.value}</p>
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 3D Canvas Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2 h-[320px] sm:h-[400px] lg:h-[520px] relative"
            >
              <HeroCanvas />
              {/* Radial glow behind 3D element */}
              <div className="absolute inset-0 bg-gradient-radial from-brand-cyan/8 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-1 h-1.5 bg-brand-cyan/60 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ──── DUAL PATH FORK ──── */}
      <DualPathFork />

      {/* ──── SHOWCASE STRIP ──── */}
      <ShowcaseStrip />

      {/* ──── PHILOSOPHY TEASER ──── */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-hero-glow opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full border text-slate-400 bg-white/5 border-white/10 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              Operating Philosophy
            </span>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-white leading-relaxed tracking-tight">
              "We don't sell promises — we ship working software and teach others to do the same."
            </blockquote>
            <p className="mt-6 text-sm text-slate-500">
              Built by engineers who compete in hackathons, debug at 3 AM, and believe great software should be accessible to founders and students alike.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan mt-6 hover:underline group"
            >
              Read Our Story <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ──── CTA BANNER ──── */}
      <section className="py-16 sm:py-20 border-y border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-violet/5 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Ready to build something real?
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8">
                Whether you're a startup founder looking for a technical team or a student with an idea that won't let you sleep — let's talk.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/40 hover:bg-brand-cyan/20 hover:border-brand-cyan/70 hover:shadow-glow-cyan transition-all duration-300"
              >
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
