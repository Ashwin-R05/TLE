import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const PhilosophySection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
        >
          Innovation{' '}
          <span className="font-instrument italic text-white/40 font-normal">
            x
          </span>{' '}
          Vision
        </motion.h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column: Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl overflow-hidden aspect-[4/3] w-full bg-zinc-950 border border-white/5 shadow-2xl relative"
          >
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            />
          </motion.div>

          {/* Right Column: Two Text Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Block 1 */}
            <div>
              <div className="text-white/40 text-xs tracking-widest uppercase mb-4 font-semibold">
                Choose your space
              </div>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                Every meaningful breakthrough begins at the intersection of
                disciplined strategy and remarkable creative vision. We operate
                at that crossroads, turning bold thinking into tangible outcomes
                that move people and reshape industries.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Block 2 */}
            <div>
              <div className="text-white/40 text-xs tracking-widest uppercase mb-4 font-semibold">
                Shape the future
              </div>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                We believe the best work happens when technical depth meets real
                understanding — whether that's a business that needs a system that
                actually works, or a student who needs to understand what they're
                building, not just hand it in.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default PhilosophySection;
