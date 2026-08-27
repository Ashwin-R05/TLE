import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const FeaturedVideoSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-black pt-4 sm:pt-6 md:pt-10 pb-16 sm:pb-20 md:pb-32 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden min-h-[440px] sm:min-h-0 sm:aspect-video w-full bg-zinc-950 border border-white/5 shadow-2xl flex flex-col justify-end"
        >
          {/* Video */}
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

          {/* Bottom Overlay Content */}
          <div className="relative p-5 sm:p-6 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 z-10">
            {/* Left Glass Card */}
            <div className="liquid-glass rounded-2xl p-5 sm:p-6 md:p-8 max-w-md">
              <div className="text-white/50 text-xs tracking-widest uppercase mb-2 sm:mb-3 font-semibold">
                Our Approach
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
                We believe real work starts with actually understanding the
                problem — a business's or a student's. Every project starts with
                a question, not a template answer.
              </p>
            </div>

            {/* Right Button */}
            <motion.button
              onClick={() => {
                const el = document.getElementById('about');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-white text-xs sm:text-sm font-medium self-start md:self-auto hover:bg-white/5 transition-colors cursor-pointer"
            >
              Explore more
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default FeaturedVideoSection;
