import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, Instagram, Twitter } from 'lucide-react';
import { Logo } from '../components/common/Logo';
import { AboutSection } from '../components/AboutSection';
import { FeaturedVideoSection } from '../components/FeaturedVideoSection';
import { PhilosophySection } from '../components/PhilosophySection';
import { ServicesSection } from '../components/ServicesSection';

export const Index: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const isFadingOutRef = useRef<boolean>(false);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  // Smooth vanilla JS requestAnimationFrame opacity fade helper
  const animateOpacity = (
    from: number,
    to: number,
    durationMs: number,
    onComplete?: () => void
  ) => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const currentOpacity = from + (to - from) * progress;

      if (videoRef.current) {
        videoRef.current.style.opacity = currentOpacity.toString();
      }

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(tick);
      } else {
        rafIdRef.current = null;
        if (onComplete) onComplete();
      }
    };

    rafIdRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';

    const handleCanPlay = () => {
      video.play().catch(() => {
        // Autoplay may be restricted until interaction
      });
      animateOpacity(0, 1, 500);
    };

    const handleTimeUpdate = () => {
      if (video.duration) {
        const remaining = video.duration - video.currentTime;
        if (remaining <= 0.55 && !isFadingOutRef.current) {
          isFadingOutRef.current = true;
          const current = parseFloat(video.style.opacity || '1');
          animateOpacity(current, 0, 500);
        }
      }
    };

    const handleEnded = () => {
      if (videoRef.current) {
        videoRef.current.style.opacity = '0';
      }
      setTimeout(() => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
        isFadingOutRef.current = false;
        animateOpacity(0, 1, 500);
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // Initial check if already playable
    if (video.readyState >= 3) {
      video.play().catch(() => {});
      animateOpacity(0, 1, 500);
    }

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Compose pre-filled email client dispatch
    const subject = encodeURIComponent('Project Inquiry via TLE Web');
    const body = encodeURIComponent(
      `Hi TLE team,\n\nHere is what I am building / exploring:\n\n${message.trim()}\n\nContact Details:\n- Name:\n- Email / Phone:\n\nLooking forward to speaking!`
    );

    window.location.href = `mailto:mounaragamtle@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setMessage('');
    }, 6000);
  };

  return (
    <div className="bg-black text-white min-h-screen w-full select-none selection:bg-white/20 selection:text-white relative">
      {/* ========================================================================= */}
      {/* SECTION 1 -- HERO (Full Viewport) */}
      {/* ========================================================================= */}
      <section className="min-h-screen overflow-hidden relative flex flex-col justify-between">
        {/* Background Video */}
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
          className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
          muted
          autoPlay
          playsInline
          preload="auto"
          style={{ opacity: 0 }}
        />

        {/* Subtle Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none z-0" />

        {/* Navbar */}
        <header className="relative z-20 px-4 sm:px-6 py-4 sm:py-6 w-full">
          <nav className="liquid-glass rounded-full max-w-5xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
            {/* Left: Logo & Nav items */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={scrollToTop}
                className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer bg-transparent border-none p-0 text-left"
              >
                <Logo className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-105 transition-transform duration-300" />
                <span className="text-white font-semibold text-base sm:text-lg tracking-tight">
                  TLE
                </span>
              </button>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-8 ml-8">
                <button
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer bg-transparent border-none p-0"
                >
                  About
                </button>
              </div>
            </div>

            {/* Right: Action buttons */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                to="/student-guidance"
                className="text-white text-xs sm:text-sm font-medium hover:text-white/80 transition-colors cursor-pointer px-1.5 sm:px-2 whitespace-nowrap"
              >
                For Students
              </Link>
              <Link
                to="/digital-solutions"
                className="liquid-glass rounded-full px-3.5 sm:px-6 py-1.5 sm:py-2 text-white text-xs sm:text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer inline-block whitespace-nowrap"
              >
                For Businesses
              </Link>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 text-center -translate-y-[2%] sm:-translate-y-[5%] md:-translate-y-[10%]">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[1.08] font-instrument font-normal mb-6 sm:mb-8 max-w-4xl"
          >
            Ideas, then <em className="italic">impact</em>.
          </motion.h1>

          {/* Email input */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl w-full"
          >
            <div className="liquid-glass rounded-full pl-4 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 flex items-center gap-2 sm:gap-3 w-full border-white/10">
              <input
                type="text"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  isSubmitted
                    ? 'Opening your email client...'
                    : "Tell us what you're building"
                }
                className="bg-transparent text-white placeholder:text-white/40 text-xs sm:text-sm md:text-base outline-none flex-1 font-sans min-w-0"
              />
              <button
                type="submit"
                aria-label="Submit project message"
                className="bg-white rounded-full p-2.5 sm:p-3 text-black hover:bg-white/90 hover:scale-105 active:scale-95 transition-all cursor-pointer flex-shrink-0"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 h-5" />
              </button>
            </div>
            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white/70 text-xs mt-3 font-light tracking-wide"
              >
                Email draft generated. If your client didn't open automatically, write to us directly at mounaragamtle@gmail.com.
              </motion.p>
            )}
          </motion.form>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed px-2 sm:px-4 max-w-lg mt-5 sm:mt-6 mb-6 sm:mb-8 font-light"
          >
            We build digital products for businesses, and help students turn ideas into real, understood projects. Tell us where you're starting from.
          </motion.p>

          {/* Manifesto Button */}
          <motion.button
            onClick={() => scrollToSection('manifesto')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-white text-xs sm:text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer"
          >
            Manifesto
          </motion.button>
        </div>

        {/* Social Icons Footer */}
        <div className="relative z-10 flex justify-center gap-4 pb-12">
          <a
            href="https://instagram.com/tle.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/tle_in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 hover:scale-110"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="mailto:mounaragamtle@gmail.com"
            aria-label="Email TLE"
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 hover:scale-110"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2 -- ABOUT SECTION */}
      {/* ========================================================================= */}
      <AboutSection />

      {/* ========================================================================= */}
      {/* SECTION 3 -- FEATURED VIDEO */}
      {/* ========================================================================= */}
      <FeaturedVideoSection />

      {/* ========================================================================= */}
      {/* SECTION 4 -- PHILOSOPHY / INNOVATION x VISION */}
      {/* ========================================================================= */}
      <PhilosophySection />

      {/* ========================================================================= */}
      {/* SECTION 5 -- SERVICES / WHAT WE DO */}
      {/* ========================================================================= */}
      <ServicesSection />

      {/* Modern Minimalist Global Footer */}
      <footer className="border-t border-white/5 py-10 sm:py-12 px-4 sm:px-6 text-center text-white/40 text-xs bg-black">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5">
            <Logo className="w-4 h-4 text-white/80" />
            <span className="text-white/80 font-medium">TLE</span>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
            <span className="mx-1 text-white/20 hidden sm:inline">|</span>
            <span className="block sm:inline w-full sm:w-auto">Tech studio, Trichy</span>
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => scrollToSection('about')}
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="liquid-glass rounded-3xl p-6 sm:p-8 max-w-md w-full border border-white/10 text-left max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-white text-lg sm:text-xl font-medium tracking-tight mb-3">
              {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6 font-light">
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
export default Index;
