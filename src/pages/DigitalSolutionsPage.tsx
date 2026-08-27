import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Logo } from '../components/common/Logo';

interface ProjectItem {
  id: string;
  name: string;
  description: string;
  status: 'Client project' | 'Hackathon build' | 'In development';
  videoUrl?: string;
  techStack?: string[];
}

const projects: ProjectItem[] = [
  {
    id: 'aquacraft',
    name: 'AquaCraft Fleet Telemetry',
    description:
      'IoT marine vessel tracking portal with low-latency sensor telemetry, GPS route rendering, and predictive fuel anomaly alerts.',
    status: 'Client project',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
    techStack: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'Mapbox GL'],
  },
  {
    id: 'moringa-ecommerce',
    name: 'Moringa Organic Store & Subscriptions',
    description:
      'High-performance direct-to-consumer store with localized 2-step checkout, UPI integration, and automated monthly recurring billing.',
    status: 'Client project',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
    techStack: ['React', 'Tailwind CSS', 'Razorpay Subscriptions', 'PostgreSQL'],
  },
  {
    id: 'codementor-ai',
    name: 'CodeMentor AI Code Explainer',
    description:
      'Developer workbench using LLM AST parsing to step through code execution frames visually and explain algorithmic bottlenecks.',
    status: 'Hackathon build',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4',
    techStack: ['React', 'Pyodide WASM', 'Monaco Editor', 'FastAPI'],
  },
  {
    id: 'brandpulse-analytics',
    name: 'BrandPulse Creator Analytics',
    description:
      'Multi-platform social sentiment tracking and automated sponsorship ROI deck generator for boutique talent agencies.',
    status: 'In development',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4',
    techStack: ['React', 'TypeScript', 'Python Celery', 'Supabase'],
  },
];

export const DigitalSolutionsPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const handleNavClick = (sectionId: string) => {
    navigate(`/#${sectionId}`);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleProjectInquiry = (projectName: string) => {
    const subject = encodeURIComponent(`Project Inquiry: ${projectName} — TLE`);
    const body = encodeURIComponent(
      `Hi TLE team,\n\nI saw your work on "${projectName}" and would like to explore a similar custom digital solution for our business.\n\nProject Scope:\n- Business Name:\n- Requirements & Goals:\n- Timeline:\n\nLooking forward to speaking!`
    );
    window.location.href = `mailto:mounaragamtle@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-black text-white min-h-screen w-full select-none selection:bg-white/20 selection:text-white relative">
      {/* Navbar */}
      <header className="relative z-20 px-6 py-6 w-full">
        <nav className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Left: Logo & Nav items */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2.5 group cursor-pointer bg-transparent border-none p-0 text-left"
            >
              <Logo className="w-6 h-6 text-white group-hover:scale-105 transition-transform duration-300" />
              <span className="text-white font-semibold text-lg tracking-tight">
                TLE
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8 ml-8">
              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                About
              </button>
            </div>
          </div>

          {/* Right: Action buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="/student-guidance"
              className="text-white text-sm font-medium hover:text-white/80 transition-colors cursor-pointer px-2"
            >
              For Students
            </Link>
            <Link
              to="/digital-solutions"
              className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer inline-block"
            >
              For Businesses
            </Link>
          </div>
        </nav>
      </header>

      {/* 2. Hero Headline Section */}
      <section className="pt-20 md:pt-32 pb-16 md:pb-24 px-6 relative overflow-hidden text-center">
        {/* Subtle radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04)_0%,_transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/40 text-xs md:text-sm tracking-widest uppercase mb-6 font-medium"
          >
            Capabilities &amp; Practice
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight font-instrument font-normal mb-8"
          >
            Digital Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/70 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-light"
          >
            Web, app, and software development, UI/UX design, and digital
            marketing — for businesses that need real solutions, not templates.
          </motion.p>
        </div>
      </section>

      {/* 3. Agenda / Goal Section (Statement Pattern) */}
      <section className="py-20 md:py-28 px-6 bg-zinc-950/40 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white/40 text-xs md:text-sm tracking-widest uppercase mb-6 font-medium"
          >
            Our Agenda
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl text-white leading-[1.2] tracking-tight mb-8 font-normal"
          >
            We started this because most agencies sell templates dressed up as
            solutions.{' '}
            <span className="font-instrument italic text-white/60">
              Our goal is to build things we'd stake our name on
            </span>{' '}
            — for businesses that need a real technical partner, not just a vendor.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 text-sm md:text-base leading-relaxed max-w-3xl font-light"
          >
            We don't outsource core engineering or hide behind jargon. Every
            system, storefront, and architecture we build is crafted to handle
            scale, provide clean performance, and directly solve business bottlenecks.
          </motion.p>
        </div>
      </section>

      {/* 4. Projects / Work Section */}
      <section className="py-24 md:py-36 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header row */}
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <span className="text-white/40 text-xs md:text-sm tracking-widest uppercase mb-2 block font-medium">
                Portfolio &amp; Work
              </span>
              <h2 className="text-3xl md:text-5xl text-white tracking-tight font-normal">
                Featured Projects
              </h2>
            </div>
            <span className="text-white/40 text-sm hidden md:inline font-medium tracking-wide">
              Selected builds
            </span>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => handleProjectInquiry(project.name)}
                className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Area */}
                <div className="aspect-video relative overflow-hidden bg-zinc-950">
                  {project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="auto"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-white/20 font-mono text-sm">
                      [Screenshot Preview]
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {/* Honest Status Tag */}
                      <span
                        className={`text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border ${
                          project.status === 'Client project'
                            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                            : project.status === 'Hackathon build'
                            ? 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                            : 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                        }`}
                      >
                        {project.status}
                      </span>

                      <div className="liquid-glass rounded-full p-2 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-medium">
                      {project.name}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl text-white tracking-tight font-instrument mb-6">
            Have a project in mind?
          </h2>
          <p className="text-white/60 text-sm md:text-base mb-10 max-w-lg mx-auto font-light leading-relaxed">
            Tell us about the challenge you're solving. We'll give you an honest
            technical breakdown and architecture plan.
          </p>

          <a
            href="mailto:mounaragamtle@gmail.com?subject=Start%20a%20Project%20%E2%80%94%20Digital%20Solutions%20TLE&body=Hi%20TLE%20team,%0A%0AI%20would%20like%20to%20start%20a%20project.%0A%0AOverview:%0A- Business/Brand Name:%0A- Scope:%0A- Target Timeline:%0A%0ALooking%20forward%20to%20connecting!"
            className="liquid-glass rounded-full px-8 py-3.5 text-white text-sm font-medium hover:bg-white/5 transition-all inline-flex items-center gap-2 group cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Start a project.</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 text-center text-white/40 text-xs bg-black">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Logo className="w-4 h-4 text-white/80" />
            <span className="text-white/80 font-medium">TLE</span>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
            <span className="mx-1 text-white/20">|</span>
            <span>Tech studio, Trichy</span>
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Privacy
            </button>
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Terms
            </button>
          </div>
        </div>
      </footer>

      {/* Lightweight Placeholder Modal for Privacy / Terms */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="liquid-glass rounded-3xl p-8 max-w-md w-full border border-white/10 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-white text-xl font-medium tracking-tight mb-3">
              {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
              Our official {activeModal === 'privacy' ? 'privacy policy' : 'terms of service'} document is coming soon before public release.
              For any questions or data requests, please write to us at{' '}
              <a href="mailto:mounaragamtle@gmail.com" className="text-white underline">
                mounaragamtle@gmail.com
              </a>.
            </p>
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="liquid-glass rounded-full px-6 py-2 text-white text-xs font-medium hover:bg-white/5 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default DigitalSolutionsPage;
