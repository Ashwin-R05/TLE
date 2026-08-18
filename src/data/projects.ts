import { CaseStudy } from '../types';

/**
 * Projects and Case Studies Dataset
 * TODO: replace with final list and real client assets when available
 */
export const PROJECTS_DATA: CaseStudy[] = [
  {
    id: 'aquacraft',
    title: 'AquaCraft Fleet Telemetry',
    tagline: 'IoT-enabled marine vessel tracking & predictive fuel telemetry portal',
    category: 'client',
    badgeLabel: 'Client Project',
    clientOrContext: 'Regional Marine Engineering Co.',
    problem: 'Fleet managers relied on manual radio logs and paper sheets to monitor fuel consumption and boat engine health, causing undetected engine overheating and delayed maintenance.',
    whatWeBuilt: 'Engineered a low-latency web dashboard connected to boat sensor telemetry via MQTT, featuring real-time GPS path rendering, engine temperature threshold alerts, and automated weekly maintenance reports.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MQTT WebSockets', 'Tailwind CSS', 'Mapbox GL'],
    outcome: 'Eliminated manual log entries across 18 operational vessels, reduced anomalous fuel burn by 14%, and automated fleet health alerts.',
    metrics: [
      { label: 'Vessels Monitored', value: '18 Active' },
      { label: 'Telemetry Latency', value: '< 400ms' },
      { label: 'Fuel Anomaly Drop', value: '14%' }
    ],
    // TODO: replace with final client screenshot
    imagePlaceholder: 'aquacraft_telemetry',
    accentColor: '#00F0FF',
    year: '2024',
    deliverables: ['Custom Telemetry UI', 'WebSocket Alert Engine', 'Role-Based Fleet Portal', 'REST API']
  },
  {
    id: 'moringa-ecommerce',
    title: 'Moringa Organic Store & Subscriptions',
    tagline: 'Direct-to-consumer superfood storefront with recurring subscription checkout',
    category: 'client',
    badgeLabel: 'Client Project',
    clientOrContext: 'Organic Wellness Brand (Southern India)',
    problem: 'A natural wellness producer had high ad spend but poor conversion rates due to a slow, generic CMS template with a 6-step cumbersome checkout flow.',
    whatWeBuilt: 'Built a lightweight, headless e-commerce experience with sub-second page loads, custom 2-step localized checkout (UPI + Card), and an automated monthly repeat-order subscription engine.',
    techStack: ['Next.js / React', 'Tailwind CSS', 'Razorpay Subscriptions', 'PostgreSQL', 'Framer Motion', 'Redis'],
    outcome: 'Spur checkout completion by 38% in the first 60 days, decreased mobile load time from 4.8s to 0.9s, and converted 22% of buyers to monthly auto-subscribers.',
    metrics: [
      { label: 'Mobile Page Load', value: '0.9s' },
      { label: 'Checkout Conversion', value: '+38%' },
      { label: 'Subscriber Retention', value: '86%' }
    ],
    // TODO: replace with final client screenshot
    imagePlaceholder: 'moringa_ecommerce',
    accentColor: '#10B981',
    year: '2024',
    deliverables: ['Headless Storefront', '2-Step Fast Checkout', 'Razorpay Recurring Engine', 'Admin Analytics Dashboard']
  },
  {
    id: 'codementor-ai',
    title: 'CodeMentor AI Code Explainer',
    tagline: 'Context-aware interactive code review and algorithmic walkthrough tool',
    category: 'hackathon',
    badgeLabel: 'Hackathon Build',
    clientOrContext: 'National DevHack Winner & Open-Source Utility',
    problem: 'CS students often get stuck understanding legacy codebases and complex recursion trees without an accessible way to step through call frames visually.',
    whatWeBuilt: 'Created a developer web workbench integrating LLM-assisted AST parsing that steps through code line-by-line, highlighting variable state changes and explaining algorithmic complexity visually.',
    techStack: ['React', 'WebAssembly (Pyodide)', 'Monaco Editor', 'FastAPI', 'Framer Motion', 'Tailwind CSS'],
    outcome: 'Secured 1st place in National DevHack, 1,200+ active student GitHub stars, and adopted as a teaching aid in 2 university coding labs.',
    metrics: [
      { label: 'Hackathon Rank', value: '1st Place' },
      { label: 'Student Users', value: '4,500+' },
      { label: 'GitHub Stars', value: '1.2k' }
    ],
    // TODO: replace with final client screenshot
    imagePlaceholder: 'codementor_ai',
    accentColor: '#8B5CF6',
    year: '2024',
    deliverables: ['AST Visualizer Engine', 'Monaco Editor Integration', 'WASM Sandbox', 'Documentation']
  },
  {
    id: 'brandpulse-analytics',
    title: 'BrandPulse Creator Analytics',
    tagline: 'Multi-platform social sentiment tracking and sponsorship ROI calculator',
    category: 'development',
    badgeLabel: 'In Development',
    clientOrContext: 'Creator Economy SaaS (Internal Incubator)',
    problem: 'Boutique marketing agencies spend 15+ hours weekly aggregating YouTube, Instagram, and LinkedIn metrics manually into spreadsheet pitch decks.',
    whatWeBuilt: 'Building an automated scraper and analytics pipeline that normalizes cross-platform engagement, runs sentiment scoring on audience comments, and exports one-click PDF sponsor valuation decks.',
    techStack: ['React', 'TypeScript', 'Python Celery', 'Tailwind CSS', 'Chart.js', 'Supabase'],
    outcome: 'Currently running closed alpha testing with 8 creator talent agencies; early feedback shows 12 hours saved per agency per campaign report.',
    metrics: [
      { label: 'Development Stage', value: 'Closed Alpha' },
      { label: 'Hours Saved/Week', value: '~12 hrs' },
      { label: 'Agency Testers', value: '8 Active' }
    ],
    // TODO: replace with final client screenshot
    imagePlaceholder: 'brandpulse_analytics',
    accentColor: '#F59E0B',
    year: '2024 - 2025',
    deliverables: ['Multi-Channel Aggregator', 'Sentiment Analysis Pipeline', 'Automated PDF Pitch Builder']
  }
];
