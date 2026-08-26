import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="about"
      className="bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden relative"
    >
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center md:text-left">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/40 text-sm tracking-widest uppercase mb-6 font-medium"
        >
          About Us
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.15] tracking-tight"
        >
          Building{' '}
          <span className="font-instrument italic text-white/60">
            then solutions
          </span>{' '}
          for businesses that need them, and ideas{' '}
          <br className="hidden md:inline" />
          <span className="font-instrument italic text-white/60">
            then projects
          </span>{' '}
          for students who have them.
        </motion.h2>

        {/* Manifesto Content Anchor */}
        <div id="manifesto" className="mt-8 text-white/60 text-sm md:text-base max-w-2xl font-light leading-relaxed">
          We build real digital solutions for businesses, and guide students from confused idea to real, understood project — impact first, sustainable business second.
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
