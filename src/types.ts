export interface Service {
  id: string;
  title: string;
  description: string;
  subFeatures: string[];
  technologies: string[];
  iconName: string;
  colorClass: string;
}

export interface ChoicePillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  glowColor: string;
}

export interface ProjectShowcaseItem {
  id: string;
  title: string;
  category: "mobile" | "web" | "dashboard" | "education";
  description: string;
  techStack: string[];
  mockupType: "phone" | "browser" | "dashboard";
  primaryColor: string;
  metric?: string;
  metricLabel?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}
