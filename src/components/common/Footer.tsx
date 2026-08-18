import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About Noth', path: '/about' },
        { label: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'For Businesses',
      links: [
        { label: 'Our Services', path: '/businesses' },
        { label: 'Selected Work', path: '/businesses#work' },
        { label: 'Start a Project', path: '/contact' },
      ],
    },
    {
      title: 'For Students',
      links: [
        { label: 'Idea Guidance', path: '/students' },
        { label: 'How It Works', path: '/students#guidance-flow' },
        { label: 'Apply for Mentorship', path: '/contact' },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] bg-surface-300/50">
      {/* Glow line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan/20 to-brand-violet/20 border border-brand-cyan/30 flex items-center justify-center">
                <span className="text-brand-cyan font-mono font-bold text-xs">N</span>
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                noth<span className="text-brand-cyan">.in</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Student-founded tech studio building production-grade digital products and guiding ambitious student builders from idea to prototype.
            </p>

            {/* Status indicator */}
            <div className="mt-5 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-emerald"></span>
              </span>
              <span className="text-xs font-mono text-brand-emerald tracking-wider">ACCEPTING PROJECTS</span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-5">
              {/* TODO: replace with final social URLs */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-300">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="mailto:contact@noth.in" className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-300">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-[0.15em] mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-cyan transition-colors duration-300"
                    >
                      <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-cyan" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-slate-600 font-mono">
            © {currentYear} Noth. Built with precision and shipped with purpose.
          </p>
          <p className="text-xs text-slate-600 font-mono">
            {/* TODO: replace with final domain */}
            www.noth.in
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
