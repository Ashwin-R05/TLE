import { GuidanceStep, StudentJourney } from '../types';

/**
 * 8-Step Student Guidance Flow: Idea -> Patent Direction
 * TODO: replace with any customized stage definitions if needed
 */
export const GUIDANCE_STEPS: GuidanceStep[] = [
  {
    stepNumber: 1,
    id: 'idea-articulation',
    title: 'Idea Articulation & Root Clarification',
    tagline: 'Stripping buzzwords to uncover what you are actually trying to build',
    studentDilemma: '"I have this huge idea for an AI-powered decentralized app, but when people ask me what it does, I ramble for 10 minutes and they look confused."',
    whatWeDo: 'We conduct a 1-on-1 teardown session to distill your thesis into a crisp 1-sentence value hypothesis: Who hurts, what is the exact friction, and why now?',
    actionChecklist: [
      'Deconstruct the raw idea into core input, processing, and output',
      'Identify the exact primary user persona',
      'Frame the single core action loop'
    ],
    deliverable: '1-Page Problem-Solution Thesis Sheet',
    commonPitfall: 'Trying to build 10 features at once instead of solving one acute pain point.',
    icon: 'Lightbulb'
  },
  {
    stepNumber: 2,
    id: 'problem-understanding',
    title: 'Real-World Problem Understanding',
    tagline: 'Validating whether real humans or systems actually suffer from this pain',
    studentDilemma: '"I assume this is a huge problem because I experienced it once, but I have no idea if anyone else cares enough to use a tool for it."',
    whatWeDo: 'We guide you through structured user discovery — framing unbiased interview questions, reaching out to 10-15 potential users, and analyzing verbatim complaints.',
    actionChecklist: [
      'Draft 5 non-leading user interview questions (The Mom Test framework)',
      'Conduct 8-12 recorded stakeholder conversations',
      'Map workflow friction points onto a visual journey map'
    ],
    deliverable: 'User Discovery Insights & Friction Matrix',
    commonPitfall: 'Asking "Would you buy this?" (they will say yes to be polite) instead of "How do you solve this right now?"',
    icon: 'Search'
  },
  {
    stepNumber: 3,
    id: 'prior-art-research',
    title: 'Prior-Art & Competitive Landscape',
    tagline: 'Deep-diving existing GitHub repos, IEEE/arXiv papers, and market products',
    studentDilemma: '"I started building, but then a senior told me a big startup already does this. Am I wasting my time?"',
    whatWeDo: 'We teach you systematic prior-art search across Google Patents, arXiv, IEEE Xplore, Product Hunt, and GitHub open-source repositories.',
    actionChecklist: [
      'Scan Google Patents & Google Scholar for keyword clusters',
      'Audit 4-6 existing commercial and open-source alternatives',
      'Document technical limitations in existing implementations'
    ],
    deliverable: 'Prior-Art & Patent Landscape Benchmark Table',
    commonPitfall: 'Panic-pivoting when you see an existing company. Existence proves market demand; your job is differentiation.',
    icon: 'BookOpen'
  },
  {
    stepNumber: 4,
    id: 'differentiation-novelty',
    title: 'Technical Differentiation & Novelty Claim',
    tagline: 'Isolating the unique algorithmic, architectural, or workflow moat',
    studentDilemma: '"My project does what X does, but my professor says it needs research novelty or commercial uniqueness to stand out."',
    whatWeDo: 'We help you carve out a defensible angle — whether it is a low-resource algorithmic approach, localized dataset tuning, edge deployment, or a novel UX abstraction.',
    actionChecklist: [
      'Formulate your 2 distinct Novelty Claims',
      'Define quantifiable performance or cost benchmarks vs existing baseline',
      'Review thesis with technical mentor for defensibility'
    ],
    deliverable: 'Novelty & Architecture Differentiation Memo',
    commonPitfall: 'Claiming "ours is cheaper" without an underlying engineering reason why.',
    icon: 'Sparkles'
  },
  {
    stepNumber: 5,
    id: 'feasibility-architecture',
    title: 'Feasibility & Tech Stack Architecture',
    tagline: 'Choosing realistic tech stacks that you can actually execute within your semester',
    studentDilemma: '"I want to use Kubernetes, Kafka, and custom GAN models, but I am overwhelmed and nothing works locally."',
    whatWeDo: 'We architect a lean, pragmatic stack. We map out database schemas, API contracts, third-party limits, and hardware constraints so you don\'t get stuck in setup hell.',
    actionChecklist: [
      'Draft component block architecture diagram',
      'Pick tech stack based on team competency and execution velocity',
      'Establish API interface contracts and schema draft'
    ],
    deliverable: 'System Architecture Diagram & Milestone Sprint Plan',
    commonPitfall: 'Over-engineering infrastructure before having a single working end-to-end data flow.',
    icon: 'Layers'
  },
  {
    stepNumber: 6,
    id: 'functional-prototype',
    title: 'Functional Prototype / MVP Sprint',
    tagline: 'Building the core proof-of-concept loop to prove the hypothesis works',
    studentDilemma: '"I have a UI mock, but the actual backend logic or sensor integration is breaking and hackathon deadline is in 2 weeks."',
    whatWeDo: 'We conduct architectural code reviews, unblock integration bugs, and guide you on structuring clean modules so your demo is bulletproof.',
    actionChecklist: [
      'Build end-to-end "Steel Thread" (raw input -> core computation -> output)',
      'Stress-test edge cases on real sample datasets',
      'Prepare reliable, idempotent demo recording & backup scripts'
    ],
    deliverable: 'Working GitHub Repository & Interactive Live Demo URL',
    commonPitfall: 'Spending 80% of time styling buttons while the core backend computation crashes on edge cases.',
    icon: 'Cpu'
  },
  {
    stepNumber: 7,
    id: 'technical-documentation',
    title: 'Technical Documentation & Project Report',
    tagline: 'Writing high-clarity READMEs, system specs, and academic project dossiers',
    studentDilemma: '"My project works great, but our report looks amateurish and our panel will grade us down on documentation."',
    whatWeDo: 'We guide you in writing structured engineering documentation: architectural diagrams, benchmarking methodology, mathematical formulation, and reproducible setup guides.',
    actionChecklist: [
      'Author clean GitHub README with architecture diagrams and animated demo GIF',
      'Format comprehensive project dossier according to university / grant standards',
      'Include benchmark graphs and error analysis sections'
    ],
    deliverable: 'Publication-Grade Technical Dossier & Interactive GitHub Repo',
    commonPitfall: 'Treating documentation as an afterthought instead of the primary artifact evaluators judge.',
    icon: 'FileText'
  },
  {
    stepNumber: 8,
    id: 'patent-research-direction',
    title: 'Research Paper or Patent Filing Direction',
    tagline: 'Navigating IEEE/Scopus conferences, provisional patent drafting, or grant grants',
    studentDilemma: '"We built something novel. How do we file a provisional patent or submit to an IEEE conference without spending thousands?"',
    whatWeDo: 'We demystify the academic paper structure (Abstract, Related Work, Methodology, Evaluation) and guide you through Indian patent office forms (Form 1, 2, 3 Provisional Specs) or student startup grant applications.',
    actionChecklist: [
      'Format research manuscript in IEEE/ACM LaTeX template',
      'Structure provisional patent specification: Claims, Field of Invention, Working Model',
      'Prepare pitch deck for university incubation / BIRAC / MSME student grants'
    ],
    deliverable: 'Paper Manuscript Draft or Provisional Patent Specification Outline',
    commonPitfall: 'Publicly publishing or presenting unfiled patentable novelty without filing a provisional spec first.',
    icon: 'Award'
  }
];

export const STUDENT_JOURNEYS: StudentJourney[] = [
  {
    id: 'journey-1',
    studentName: 'Rohan M. (Final Year ECE, Bengaluru)',
    initialIdea: 'Raw concept: "A camera that watches crops to stop pests with drone lasers."',
    breakthrough: 'Mentored to pivot from sci-fi lasers to a practical edge-ML thermal sensor node for early stem-borer infestation in paddy crops.',
    result: 'Filed provisional patent with university IP cell, secured ₹2.5L student grant, and published in an IEEE conference.',
    tags: ['Edge AI', 'AgriTech', 'Patent Direction']
  },
  {
    id: 'journey-2',
    studentName: 'Sneha & Tanmay (3rd Year CSE, Chennai)',
    initialIdea: 'Raw concept: "An app that tests your mental health using AI chatbots."',
    breakthrough: 'Guided them to abandon generic LLM wrapper and focus on real-time acoustic vocal jitter analysis for remote therapy telemetry.',
    result: 'Won 1st Runner-Up at Smart India Hackathon internal rounds and built a working clinical pilot with 2 counseling centers.',
    tags: ['Audio Processing', 'HealthTech', 'Hackathon']
  },
  {
    id: 'journey-3',
    studentName: 'Karthik R. (2nd Year IT, Hyderabad)',
    initialIdea: 'Raw concept: "A decentralized social network for college clubs."',
    breakthrough: 'Refined into an offline-first mesh attendance & event protocol using BLE beacon relays for campus auditoriums with zero network.',
    result: 'Scaled to 3,000+ student attendees across 4 campus fests with 100% uptime and 0 cloud server cost.',
    tags: ['Offline Mesh', 'Web3 / P2P', 'Campus Scale']
  }
];
