import profile from '../data/profile.json'
import skills from '../data/skills.json'
import projects from '../data/projects.json'
import experiences from '../data/experiences.json'
import certifications from '../data/certifications.json'
import testimonials from '../data/testimonials.json'
import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  profile,
  skills: skills.skills,
  projects: projects.projects,
  experiences: experiences.experiences,
  certifications: certifications.certifications,
  testimonials: testimonials.testimonials,
}

export function getProjectById(id: string) {
  return portfolioData.projects.find((project) => project.id === id)
}

export function getProjectsByTechnology(technology: string) {
  if (technology === 'all') return portfolioData.projects
  return portfolioData.projects.filter((project) =>
    project.technologies.some((item) => item.toLowerCase() === technology.toLowerCase()),
  )
}
