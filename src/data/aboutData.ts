import { FounderValue } from '../types';

/**
 * About & Philosophy Data
 * TODO: replace founder bio details or metrics when updated
 */
export const FOUNDER_STORY = {
  headline: "Built by students who write code, break things, and ship real systems.",
  tagline: "We bridge the gap between academic theory and production software engineering.",
  storyParagraphs: [
    "TLE began in late-night engineering hostel rooms in 2023. We watched two consistent breakdowns happening in parallel: small businesses and startups were getting overcharged by bloated agencies for slow, bloated software; while ambitious student developers with brilliant ideas were getting stuck in tutorial hell, failing hackathons, or abandoning novel projects because no one taught them how to architect, validate, or patent a real technical system.",
    "Instead of choosing between building client products or teaching peers, we merged both into an integrated studio model: we build high-velocity, production-grade digital software for businesses, and use our real-world engineering reps to mentor the next wave of student innovators through rigorous, hands-on guidance.",
    "We don't sell generic theoretical courses or write your code for you. We provide the technical sparring partner, architecture review, and execution velocity we wished we had when we wrote our first lines of code."
  ],
  credentials: [
    { label: 'Hackathons Won', value: '7+ Wins', desc: 'National & University hackathons' },
    { label: 'Production Apps Deployed', value: '14+ Systems', desc: 'E-commerce, IoT, SaaS & custom tooling' },
    { label: 'Students Mentored', value: '80+ Builders', desc: 'Guided through MVPs, papers & patents' },
    { label: 'Avg Client Load Speed', value: '< 1.1s', desc: 'Optimized Core Web Vitals standard' }
  ],
  // TODO: replace with team / founder list
  founders: [
    {
      name: 'Ashwin R.',
      role: 'Co-Founder & Technical Lead',
      bio: 'Full-stack systems engineer and hackathon veteran. Passionate about low-latency distributed architectures, React performance, and edge compute.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'TLE Core Engineering Group',
      role: 'Student Builders & Research Mentors',
      bio: 'A collective of competitive programmers, UI designers, and systems hackers from top engineering universities in India.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  ]
};

export const PHILOSOPHY_VALUES: FounderValue[] = [
  {
    title: 'Zero Bloat, Maximum Performance',
    description: 'We reject bloated frameworks, useless abstractions, and buzzword fluff. Every line of code must justify its runtime cost and deliver measurable user speed.',
    icon: 'Zap'
  },
  {
    title: 'Radical Transparency',
    description: 'We label our work honestly — whether it is a live client deployment, an internal alpha, or an open-source hackathon build. No fake testimonials or inflated claims.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Mentorship is Not Ghostwriting',
    description: 'For students, we are mentors, not contract assignment writers. We teach you how to think, debug, architect, and defend your work so you become an undeniable builder.',
    icon: 'Compass'
  },
  {
    title: 'Engineering Velocity',
    description: 'Moving fast doesn\'t mean cutting corners; it means removing bureaucracy, using tight feedback loops, and shipping working software every week.',
    icon: 'Rocket'
  }
];
