import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardData {
  videoUrl: string;
  tag: string;
  title: string;
  description: string;
}

const services: ServiceCardData[] = [
  {
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
    tag: 'FOR BUSINESSES',
    title: 'Digital Solutions',
    description:
      'Web, app, and software development, UI/UX design, and digital marketing — built by people who understand the problem, not just the brief.',
  },
  {
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
    tag: 'FOR STUDENTS',
    title: 'Idea & Project Guidance',
    description:
      'From confused idea to real project — we mentor students through research, feasibility, design, and documentation, without building it for them.',
  },
];

export const ServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleServiceClick = (tag: string) => {
    if (tag === 'FOR BUSINESSES') {
      navigate('/digital-solutions');
    } else {
      const subject = encodeURIComponent('Idea & Project Guidance Inquiry — TLE');
      const body = encodeURIComponent(
        'Hi TLE team,\n\nI am a student looking for guidance and mentorship on my project idea.\n\nProject Details:\n- Name & College:\n- Project Topic / Concept:\n- Areas needing guidance (Research / Architecture / Documentation / Tech Stack):\n\nLooking forward to hearing from you!'
      );
      window.location.href = `mailto:contact@tle.in?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section id="services" className="bg-black py-28 md:py-40 px-6 overflow-hidden relative">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight font-normal">
            What we do
          </h2>
          <span className="text-white/40 text-sm hidden md:inline font-medium tracking-wide">
            Our services
          </span>
        </motion.div>

        {/* Two-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.tag}
              id={index === 0 ? 'businesses' : 'students'}
              onClick={() => handleServiceClick(service.tag)}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer flex flex-col"
            >
              {/* Card video area */}
              <div className="aspect-video relative overflow-hidden bg-zinc-950">
                <video
                  src={service.videoUrl}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Card body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <span className="uppercase tracking-widest text-white/40 text-xs font-semibold">
                    {service.tag}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service.tag);
                    }}
                    aria-label={`Inquire about ${service.title}`}
                    className="liquid-glass rounded-full p-2 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-medium">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
