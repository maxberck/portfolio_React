export interface SocialLinks {
  github?: string
  linkedin?: string
  twitter?: string
}

export interface Profile {
  firstName: string
  lastName: string
  title: string
  bio: string
  photo: string
  email: string
  cvUrl: string
  location?: string
  socialLinks?: SocialLinks
}

export interface Skill {
  id: string
  name: string
  level: string
  years?: number
  description?: string
  projects?: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  year: number
  githubUrl?: string
  demoUrl?: string
  featured?: boolean
}

export interface Experience {
  id: string
  title: string
  company: string
  startDate: string
  endDate?: string
  description: string
  technologies?: string[]
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialUrl?: string
  description?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  quote: string
}

export interface PortfolioData {
  profile: Profile
  skills: Skill[]
  projects: Project[]
  experiences: Experience[]
  certifications: Certification[]
  testimonials: Testimonial[]
}
