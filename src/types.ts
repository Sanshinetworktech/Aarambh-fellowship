export interface RoleSpecification {
  id: string;
  name: string;
  title: string;
  category: "Business" | "Technology";
  location: string;
  schedule: string;
  shortDescription: string;
  founderReport: string;
  deliverables: string[];
  zohoIntegrations: string[];
  skillsRequired: string[];
  weeklyCommitment: string;
}

export interface Season {
  id: string;
  name: string;
  title: string;
  cohort: string;
  duration: string;
  startDate: string;
  active: boolean;
  colorClass: string;
  borderClass: string;
  textColorClass: string;
  description: string;
}

export interface Benefit {
  id: string;
  title: string;
  tag: string;
  description: string;
  detail: string;
}

export interface Channel {
  id: string;
  name: string;
  tagline: string;
  subtitle: string;
  description: string;
  linkText: string;
}
