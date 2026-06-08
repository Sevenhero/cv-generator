export interface Experience {
  title: string;
  company: string;
  workRange: string;
  description: string;
  projectName?: string;
  technologies?: string[];
  addition?: string[];
  roles?: string[];
  projectUrl?: string;
  companyUrl?: string;
}

export interface Language {
  language: string;
  level?: string;
}

export type Skill = "Nestjs" | "Nextjs" | "Angular" | "Typescript" | "Javascript" | "CSS3" | "HTML5" | "Ionic" | "React";

export interface Testimonial {
  name: string;
  company?: string;
  jobDescription: string;
  testimonial: string;
  imgName?: string;
}

export interface SkillWithLevel {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience?: number;
}

export interface SkillCategory {
  key: string;
  label: string;
  icon?: string;
  skills: SkillWithLevel[];
}

export type SocialNames = "linkedIn" | "youtube" | "facebook" | "instagram" | "twitter" | "xing" | "email" | "github" | "phone";

export interface SocialIconProps {
  url?: string;
  social: SocialNames;
  email?: string;
  phone?: string;
}

export interface ContactData {
  email?: string;
  phone?: string;
  street?: string;
  city?: string;
  zip?: string;
  className?: string;
}

export interface UserData {
  firstName: string;
  lastName: string;
  title: string;
  image?: string;
  description?: string;
  skills: Skill[];
  languages: Language[];
  social?: SocialIconProps[];
  experience?: Experience[];
  education?: Experience[];
  contact?: ContactData;
  testimonials?: Testimonial[];
  skillCategories?: SkillCategory[];
}
