import { SocialIconProps, SocialNames } from "../svgs/SocialIcons";

import { Experience } from "./experience";
import { Language } from "./language";

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

export interface ContactData {
  email?: string;
  phone?: string;
  street?: string;
  city?: string;
  zip?: string;
  className?: string;
}

export type Skill =
  | "Nestjs"
  | "Nextjs"
  | "Angular"
  | "Typescript"
  | "Javascript"
  | "CSS3"
  | "HTML5"
  | "Ionic"
  | "React";

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