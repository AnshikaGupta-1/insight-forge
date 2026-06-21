export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  tech: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  accent: string;
  icon: string;
  github: string;
  demo: string;
  tech: string[];
  problem: string;
  solution: string;
  challenges: string;
  results: string;
}

export interface Certification {
  name: string;
  provider: string;
  date: string;
  type: "image" | "credly" | "databricks";
  image?: string;
  embedUrl?: string;
  url?: string;
}
