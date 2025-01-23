export interface PersonalInfo {
    name: string;
    title: string;
    location: string;
    about: string;
    image: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    type: string;
    technologies: string[];
    description: string[];
}

export interface Education {
    school: string;
    degree: string;
    period: string;
}

export interface Skill {
    name: string;
}

export interface Language {
    name: string;
    level: string;
}

export interface Project {
    name: string;
    date: string;
    description: string;
    technologies: string[];
    url: string;
}

export interface Hobby {
    name: string;
    description?: string;
}

export interface CVData {
    personalInfo: PersonalInfo;
    socialLinks: SocialLink[];
    experiences: Experience[];
    education: Education[];
    skills: Skill[];
    languages: Language[];
    projects: Project[];
    hobbies: Hobby[];
} 