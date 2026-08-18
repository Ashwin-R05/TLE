import { ServiceItem } from '../types';

/**
 * Business Digital Services
 * TODO: replace with final client service specs if needed
 */
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-engineering',
    title: 'Full-Stack Web & App Engineering',
    shortDesc: 'Production-ready web applications, SaaS MVPs, and mobile-responsive portals built with modern TypeScript ecosystems.',
    iconName: 'Code',
    features: [
      'Single-page applications & interactive dashboards',
      'Scalable backend REST & GraphQL API architecture',
      'Database modeling (PostgreSQL, Supabase, Redis)',
      'Third-party API integrations (Payment gateways, CRMs, Auth)'
    ],
    deliverables: [
      'Clean, documented TypeScript codebase with zero vendor lock-in',
      'CI/CD automated deployment pipeline setup',
      '30 days post-launch warranty and bug fixes'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    id: 'ui-ux-design',
    title: 'Product UI/UX & Interactive Design',
    shortDesc: 'User journeys, Figma wireframes, and design systems crafted for high conversion and intuitive user ergonomics.',
    iconName: 'Layout',
    features: [
      'User research & competitive UX heuristic teardowns',
      'Figma wireframing, high-fidelity prototypes & design tokens',
      'Micro-interactions, animations & accessible UI components',
      'Responsive design across desktop, tablet, and mobile'
    ],
    deliverables: [
      'Organized Figma file with atomic components & auto-layout',
      'Ready-to-code design system documentation',
      'Interactive clickable prototype for investor/user testing'
    ],
    techStack: ['Figma', 'Framer', 'Design Systems', 'WCAG 2.1 AA']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Conversion Optimization',
    shortDesc: 'Technical SEO audits, high-converting landing pages, analytics instrumentation, and structured growth funnels.',
    iconName: 'TrendingUp',
    features: [
      'Core Web Vitals & Technical SEO performance tuning',
      'Conversion Rate Optimization (CRO) and A/B test setups',
      'Google Analytics 4, Mixpanel, and event tracking pipelines',
      'Meta & Google Ads landing page funnels tailored to specific ICPs'
    ],
    deliverables: [
      'Speed-optimized landing page (90+ mobile Lighthouse score)',
      'Custom Analytics & Event Dashboard',
      'SEO audit report with keyword roadmap'
    ],
    techStack: ['GA4', 'Mixpanel', 'Search Console', 'Schema.org', 'Lighthouse']
  },
  {
    id: 'mvp-rapid-prototyping',
    title: 'Rapid MVP Prototyping for Startups',
    shortDesc: 'Go from zero to live testable product in 3 to 5 weeks. Built for founders needing early traction without bloated agency costs.',
    iconName: 'Zap',
    features: [
      'Scoped MVP feature definition and technical trade-off matrix',
      'Rapid frontend + backend development sprint',
      'Authentication, stripe/razorpay billing, and admin panel',
      'Live staging URL with weekly interactive check-ins'
    ],
    deliverables: [
      'Working production MVP hosted on Vercel/AWS/Render',
      'Architecture documentation & founder walkthrough video',
      'Clean Git repo handed over with full ownership'
    ],
    techStack: ['React', 'Supabase', 'Node.js', 'Vercel', 'Tailwind']
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Scope Alignment',
    desc: 'We unpack your operational bottleneck or product vision. We define unambiguous feature boundaries, deliverables, tech constraints, and milestones.',
    duration: '2-4 Days'
  },
  {
    step: '02',
    title: 'Interactive Prototype & Architecture',
    desc: 'Before writing backend code, we provide high-fidelity UI flows and schema architectures so you see and test the exact user journey.',
    duration: '1-2 Weeks'
  },
  {
    step: '03',
    title: 'Agile Engineering & Staging Builds',
    desc: 'We build in iterative sprints with live staging links updated every 48 hours. No black boxes — you test working features in real time.',
    duration: '2-4 Weeks'
  },
  {
    step: '04',
    title: 'Launch, Testing & Handoff',
    desc: 'Performance audits, cross-browser testing, SEO checklist, and complete code & domain handover with zero vendor lock-in.',
    duration: 'Final Week'
  }
];
