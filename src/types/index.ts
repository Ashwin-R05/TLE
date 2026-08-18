export type ProjectCategory = 'all' | 'client' | 'development' | 'hackathon';

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  category: 'client' | 'development' | 'hackathon';
  badgeLabel: 'Client Project' | 'In Development' | 'Hackathon Build';
  clientOrContext: string;
  problem: string;
  whatWeBuilt: string;
  techStack: string[];
  outcome: string;
  metrics?: { label: string; value: string }[];
  imagePlaceholder: string; // Used for UI mockups
  accentColor: string;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  deliverables: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  techStack: string[];
}

export interface GuidanceStep {
  stepNumber: number;
  id: string;
  title: string;
  tagline: string;
  studentDilemma: string; // The honest student problem at this stage
  whatWeDo: string;
  actionChecklist: string[];
  deliverable: string;
  commonPitfall: string;
  icon: string;
}

export interface StudentJourney {
  id: string;
  studentName: string; // e.g. "Arjun V. (3rd Yr CSE)"
  initialIdea: string;
  breakthrough: string;
  result: string;
  tags: string[];
}

export interface FounderValue {
  title: string;
  description: string;
  icon: string;
}
