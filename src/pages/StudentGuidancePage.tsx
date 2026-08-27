import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Globe, ArrowRight, Sparkles } from 'lucide-react';

interface GuidanceStepItem {
  number: number;
  title: string;
  description: string;
}

const guidanceSteps: GuidanceStepItem[] = [
  {
    number: 1,
    title: 'Understand the problem',
    description:
      'We strip away the buzzwords and deconstruct your raw concept into the exact human or system friction you are trying to solve.',
  },
  {
    number: 2,
    title: 'Analyze existing solutions',
    description:
      'Systematic prior-art research across published papers, patent databases, and open-source GitHub repositories to see what already exists.',
  },
  {
    number: 3,
    title: 'Identify the differentiation',
    description:
      'Pinpointing your project’s novelty — whether through a unique algorithmic approach, localized dataset, novel abstraction, or edge efficiency.',
  },
  {
    number: 4,
    title: 'Evaluate technical feasibility',
    description:
      'Testing compute constraints, sensor accuracy, API limits, and library dependencies before writing a single line of code.',
  },
  {
    number: 5,
    title: 'Suggest technologies & design architecture',
    description:
      'Selecting pragmatic, industry-standard tech stacks and drafting modular system architecture and database schemas.',
  },
  {
    number: 6,
    title: 'Guide prototype development',
    description:
      'Unblocking critical integration bottlenecks and guiding the core end-to-end proof-of-concept loop.',
  },
  {
    number: 7,
    title: 'Guide full project development',
    description:
      'Conducting architectural code reviews, stress-testing edge cases, and ensuring robust error handling.',
  },
  {
    number: 8,
    title: 'Help with documentation & presentation',
    description:
      'Structuring clean engineering READMEs, publication-grade project reports, and high-impact panel presentation decks.',
  },
  {
    number: 9,
    title: 'Explore research/patent direction',
    description:
      'Guidance on paper formatting (IEEE/Scopus) and structuring novelty claims toward qualified patent professionals when appropriate (not a guarantee of patentability).',
  },
];

const exampleJourneys = [
  {
    id: 'journey-agritech',
    student: 'Final Year ECE Builder',
    rawIdea: 'Raw concept: "A drone with lasers to detect and burn crop pests."',
    guidance:
      'Mentored to pivot from sci-fi lasers to an ultra-low-power edge-ML thermal sensor node for early stem-borer infestation.',
    outcome:
      'Filed provisional patent with university IP cell, secured ₹2.5L student research grant, and presented at an IEEE student symposium.',
    tag: 'Hardware / Edge AI',
  },
  {
    id: 'journey-healthtech',
    student: '3rd Year CSE Team',
    rawIdea: 'Raw concept: "An app that predicts mental stress with ChatGPT."',
    guidance:
      'Guided them to abandon generic LLM wrappers and engineer real-time acoustic vocal jitter analysis for remote therapy telemetry.',
    outcome:
      'Secured 1st Runner-Up in national hackathon and completed an initial clinical pilot with 2 counseling centers.',
    tag: 'Signal Processing / ML',
  },
];

export const StudentGuidancePage: React.FC = () => {
  const navigate = useNavigate();
  const [ideaText, setIdeaText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const handleNavClick = (sectionId: string) => {
    navigate(`/#${sectionId}`);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleIdeaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ideaText.trim()) return;

    const subject = encodeURIComponent('[Student Inquiry] Project Idea Mentorship — TLE');
    const body = encodeURIComponent(
      `Hi TLE team,\n\nI am a student looking for guidance on my project idea.\n\nHere is what I am thinking of building:\n\n${ideaText.trim()}\n\nMy Details:\n- Name & College:\n- Year & Department:\n- Where I am stuck:\n\nLooking forward to speaking with you!`
    );

    window.location.href = `mailto:contact@tle.in?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIdeaText('');
    }, 6000);
  };

  return (
    <div className="bg-black text-white min-h-screen w-full select-none selection:bg-white/20 selection:text-white relative">
      {/* 1. Navbar */}
      <header className="relative z-20 px-6 py-6 w-full">
        <nav className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Left: Logo & Nav items */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2 group cursor-pointer bg-transparent border-none p-0 text-left"
            >
              <Globe className="w-6 h-6 text-white group-hover:rotate-45 transition-transform duration-500" />
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
            Student Mentorship &amp; Project Lab
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight font-instrument font-normal mb-8"
          >
            Idea &amp; Project Guidance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/70 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-light"
          >
            You have an idea. We help you figure out if it's worth building,
            what's already out there, and how to turn it into something real — you
            build it, we guide you.
          </motion.p>
        </div>
      </section>

      {/* 3. The Problem Section (Statement Pattern) */}
      <section className="py-20 md:py-28 px-6 bg-zinc-950/40 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white/40 text-xs md:text-sm tracking-widest uppercase mb-6 font-medium"
          >
            The Problem
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl text-white leading-[1.2] tracking-tight mb-8 font-normal"
          >
            You have an idea, and{' '}
            <span className="font-instrument italic text-white/60">
              no idea if it's worth building.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl font-light"
          >
            Whether it already exists, how to improve it, if it's technically
            feasible, what to build it with — most students figure this out alone,
            or hand the whole thing to someone who builds it for them and hands it
            back without them understanding a line of it. We do it differently.
          </motion.p>
        </div>
      </section>

      {/* 4. The Guidance Flow Section */}
      <section className="py-24 md:py-36 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header row */}
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <span className="text-white/40 text-xs md:text-sm tracking-widest uppercase mb-2 block font-medium">
                Methodology &amp; Mentorship
              </span>
              <h2 className="text-3xl md:text-5xl text-white tracking-tight font-normal">
                The Guidance Flow
              </h2>
            </div>
            <span className="text-white/40 text-sm hidden md:inline font-medium tracking-wide">
              9-Stage Framework
            </span>
          </div>

          {/* 9-Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {guidanceSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="liquid-glass rounded-3xl p-6 md:p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-white/80 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      0{step.number}
                    </span>
                    <Sparkles className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors" />
                  </div>

                  <h3 className="text-white text-lg md:text-xl font-medium tracking-tight mb-3">
                    {step.title}
                  </h3>

                  <p className="text-white/50 text-xs md:text-sm leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "What We're Not" Section */}
      <section className="py-20 md:py-28 px-6 bg-zinc-950/60 border-y border-white/5 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-white/40 text-xs md:text-sm tracking-widest uppercase mb-6 font-medium">
            What We're Not
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-relaxed tracking-tight mb-4">
            "We don't take your idea, build it ourselves, and hand it back.{' '}
            <span className="font-instrument italic text-white/70">
              We want you to actually understand what you're building
            </span>{' '}
            — that's the whole point."
          </h2>
        </div>
      </section>

      {/* 6. Example Journeys Section */}
      <section className="py-24 md:py-36 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header row */}
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <span className="text-white/40 text-xs md:text-sm tracking-widest uppercase mb-2 block font-medium">
                Case Examples
              </span>
              <h2 className="text-3xl md:text-5xl text-white tracking-tight font-normal">
                How Ideas Got Shaped
              </h2>
            </div>
            <span className="text-white/40 text-sm hidden md:inline font-medium tracking-wide">
              Sample student journeys
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {exampleJourneys.map((journey, index) => (
              <motion.div
                key={journey.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="liquid-glass rounded-3xl p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border bg-blue-500/10 text-blue-300 border-blue-500/20">
                      {journey.tag}
                    </span>
                    <span className="text-xs text-white/40 font-mono">
                      {journey.student}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs text-white/40 uppercase tracking-wider block mb-1">
                      Starting point:
                    </span>
                    <p className="text-white/70 text-sm italic font-light">
                      {journey.rawIdea}
                    </p>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs text-white/40 uppercase tracking-wider block mb-1">
                      Guidance &amp; Pivot:
                    </span>
                    <p className="text-white/80 text-sm leading-relaxed font-light">
                      {journey.guidance}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <span className="text-xs text-emerald-400/80 uppercase tracking-wider block mb-1 font-semibold">
                    Outcome:
                  </span>
                  <p className="text-white/60 text-xs leading-relaxed font-light">
                    {journey.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How to Start / Intake Section */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl text-white tracking-tight font-instrument mb-6">
            Tell us your idea
          </h2>
          <p className="text-white/60 text-sm md:text-base mb-8 max-w-lg mx-auto font-light leading-relaxed">
            Describe what you're trying to solve or build in a couple of sentences.
            We'll review it and get in touch to map out the next steps.
          </p>

          <form onSubmit={handleIdeaSubmit} className="max-w-xl mx-auto mb-8">
            <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 w-full border-white/10">
              <input
                type="text"
                required
                value={ideaText}
                onChange={(e) => setIdeaText(e.target.value)}
                placeholder={
                  isSubmitted
                    ? 'Opening your email client...'
                    : 'Describe your idea in one sentence...'
                }
                className="bg-transparent text-white placeholder:text-white/40 text-sm md:text-base outline-none flex-1 font-sans"
              />
              <button
                type="submit"
                aria-label="Submit project idea"
                className="bg-white rounded-full p-3 text-black hover:bg-white/90 hover:scale-105 active:scale-95 transition-all cursor-pointer flex-shrink-0"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white/70 text-xs mt-3 font-light tracking-wide"
              >
                Draft created. If your mail app didn't open, write directly to contact@tle.in.
              </motion.p>
            )}
          </form>

          <a
            href="mailto:contact@tle.in?subject=%5BStudent%20Inquiry%5D%20Project%20Idea%20Mentorship%20%E2%80%94%20TLE&body=Hi%20TLE%20team,%0A%0AI%20am%20a%20student%20and%20would%20like%20guidance%20on%20my%20project%20idea.%0A%0AProject%20Concept:%0A- Name:%0A- College%20%26%20Year:%0A- Idea%20Summary:%0A%0ALooking%20forward%20to%20connecting!"
            className="liquid-glass rounded-full px-8 py-3.5 text-white text-sm font-medium hover:bg-white/5 transition-all inline-flex items-center gap-2 group cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Tell us your idea</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 text-center text-white/40 text-xs bg-black">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-white/60" />
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
              <a href="mailto:contact@tle.in" className="text-white underline">
                contact@tle.in
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
export default StudentGuidancePage;
