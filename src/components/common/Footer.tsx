import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About TLE', path: '/about' },
        { label: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'For Businesses',
      links: [
        { label: 'Client Solutions', path: '/businesses' },
        { label: 'Selected Work', path: '/businesses#selected-work' },
        { label: 'Inquire Project', path: '/contact' },
      ],
    },
    {
      title: 'For Students',
      links: [
        { label: 'Project Mentorship', path: '/students' },
        { label: '8-Step Framework', path: '/students#guidance-flow' },
        { label: 'Apply for Mentorship', path: '/contact' },
      ],
    },
  ];

  return (
    <footer className="bg-surface-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column (2 cols) */}
          <div className="sm:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                TLE
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                tle<span className="text-blue-400">.in</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              TLE is a technology studio delivering high-performance digital products for businesses and 1-on-1 engineering mentorship for student innovators.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-surface-100 text-slate-400 hover:text-white transition-colors">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-surface-100 text-slate-400 hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="mailto:mounaragamtle@gmail.com" className="p-2 rounded-xl bg-surface-100 text-slate-400 hover:text-white transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-mono">
            © {currentYear} TLE Technologies. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 font-mono">
            www.tle.in
          </p>
        </div>
      </div>
    </footer>
  );
};

