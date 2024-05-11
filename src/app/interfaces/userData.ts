import { SocialIconProps, SocialNames } from "../svgs/SocialIcons";
import { Experience } from "./experience";
import { Language } from "./language";

export interface UserData {
  firstName: string;
  lastName: string;
  title: string;
  image?: string;
  description?: string;
  topSkills: string[];
  languages: Language[];
  social?: SocialIconProps[];
  experience?: Experience[];
  education?: Experience[];
  contact?: ContactData;
}

export interface ContactData {
  email?: string;
  phone?: string;
  street?: string;
  city?: string;
  zip?: string;
}
