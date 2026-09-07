import { useCallback, useMemo, useState } from 'react'
import type { PortfolioData } from '../types/portfolio'

export type BuilderEntity = keyof PortfolioData
export type BuilderAnswers = Record<string, string>

export interface BuilderQuestion { key: string; label: string; placeholder: string; required?: boolean; type?: 'text' | 'number' | 'url' }

const storageKey = 'portfolio-builder-v2'
const questions: Record<BuilderEntity, BuilderQuestion[]> = {
  profile: [
    { key: 'firstName', label: 'Quel est ton prénom ?', placeholder: 'Maxence', required: true },
    { key: 'lastName', label: 'Quel est ton nom ?', placeholder: 'Berck', required: true },
    { key: 'title', label: 'Quel est ton titre ?', placeholder: 'Développeur Full Stack', required: true },
    { key: 'bio', label: 'Comment te présenter en quelques mots ?', placeholder: 'Je conçois...', required: true },
    { key: 'email', label: 'Quelle adresse e-mail afficher ?', placeholder: 'contact@example.com', type: 'url', required: true },
    { key: 'photo', label: 'Quel chemin d’image utiliser ?', placeholder: '/images/profile.jpg' },
    { key: 'cvUrl', label: 'Quel chemin vers ton CV ?', placeholder: '/cv.pdf' },
  ],
  skills: [
    { key: 'name', label: 'Quel est le nom de la compétence ?', placeholder: 'TypeScript', required: true },
    { key: 'level', label: 'Quel est ton niveau ?', placeholder: 'Avancé', required: true },
    { key: 'years', label: 'Depuis combien d’années ?', placeholder: '3', type: 'number' },
    { key: 'description', label: 'Comment l’utilises-tu ?', placeholder: 'Applications web...', },
    { key: 'projects', label: 'Sur quels projets ?', placeholder: 'portfolio, app-client', },
  ],
  projects: [
    { key: 'title', label: 'Quel est le nom du projet ?', placeholder: 'Mon projet', required: true },
    { key: 'description', label: 'Comment décrire le projet ?', placeholder: 'Une application...', required: true },
    { key: 'image', label: 'Quel chemin d’image ?', placeholder: '/images/project.jpg' },
    { key: 'technologies', label: 'Quelles technologies ?', placeholder: 'React, TypeScript, Vite', required: true },
    { key: 'year', label: 'Quelle année ?', placeholder: '2026', type: 'number', required: true },
    { key: 'githubUrl', label: 'URL GitHub ?', placeholder: 'https://github.com/...' },
    { key: 'demoUrl', label: 'URL de la démo ?', placeholder: 'https://...' },
  ],
  experiences: [
    { key: 'title', label: 'Quel poste ?', placeholder: 'Développeur', required: true },
    { key: 'company', label: 'Quelle entreprise ?', placeholder: 'Entreprise', required: true },
    { key: 'startDate', label: 'Date de début ?', placeholder: '2025-01', required: true },
    { key: 'endDate', label: 'Date de fin ?', placeholder: '2026-06' },
    { key: 'description', label: 'Que faisais-tu ?', placeholder: 'Développement...', required: true },
    { key: 'technologies', label: 'Technologies utilisées ?', placeholder: 'React, Node.js' },
  ],
  certifications: [
    { key: 'name', label: 'Nom de la certification ?', placeholder: 'Certification...', required: true },
    { key: 'issuer', label: 'Quel organisme ?', placeholder: 'Organisme', required: true },
    { key: 'date', label: 'Quelle date ?', placeholder: '2026', required: true },
    { key: 'credentialUrl', label: 'URL du justificatif ?', placeholder: 'https://...' },
    { key: 'description', label: 'Description ?', placeholder: 'Certification obtenue...' },
  ],
  testimonials: [
    { key: 'name', label: 'Qui témoigne ?', placeholder: 'Prénom Nom', required: true },
    { key: 'role', label: 'Quel est son rôle ?', placeholder: 'Product Manager', required: true },
    { key: 'company', label: 'Quelle entreprise ?', placeholder: 'Entreprise' },
    { key: 'quote', label: 'Quel est le témoignage ?', placeholder: 'Une collaboration...', required: true },
  ],
}

const emptyAnswers = (entity: BuilderEntity): BuilderAnswers => Object.fromEntries(questions[entity].map((question) => [question.key, '']))
const slugify = (value: string) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

function buildJson(entity: BuilderEntity, answers: BuilderAnswers) {
  const a = answers
  if (entity === 'profile') return { firstName: a.firstName, lastName: a.lastName, title: a.title, bio: a.bio, photo: a.photo, email: a.email, cvUrl: a.cvUrl, location: '', socialLinks: { github: '' } }
  if (entity === 'skills') return { skills: [{ id: slugify(a.name), name: a.name, level: a.level, ...(a.years ? { years: Number(a.years) } : {}), ...(a.description ? { description: a.description } : {}), ...(a.projects ? { projects: a.projects.split(',').map((x) => x.trim()).filter(Boolean) } : {}) }] }
  if (entity === 'projects') return { projects: [{ id: slugify(a.title), title: a.title, description: a.description, image: a.image, technologies: a.technologies.split(',').map((x) => x.trim()).filter(Boolean), year: Number(a.year), ...(a.githubUrl ? { githubUrl: a.githubUrl } : {}), ...(a.demoUrl ? { demoUrl: a.demoUrl } : {}) }] }
  if (entity === 'experiences') return { experiences: [{ id: slugify(`${a.company}-${a.title}`), title: a.title, company: a.company, startDate: a.startDate, ...(a.endDate ? { endDate: a.endDate } : {}), description: a.description, ...(a.technologies ? { technologies: a.technologies.split(',').map((x) => x.trim()).filter(Boolean) } : {}) }] }
  if (entity === 'certifications') return { certifications: [{ id: slugify(a.name), name: a.name, issuer: a.issuer, date: a.date, ...(a.credentialUrl ? { credentialUrl: a.credentialUrl } : {}), ...(a.description ? { description: a.description } : {}) }] }
  return { testimonials: [{ id: slugify(a.name), name: a.name, role: a.role, ...(a.company ? { company: a.company } : {}), quote: a.quote }] }
}

export function usePortfolioBuilder() {
  const [saved, setSaved] = useState<{ entity: BuilderEntity; step: number; answers: BuilderAnswers }>(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || '') } catch { return { entity: 'profile', step: 0, answers: emptyAnswers('profile') } }
  })
  const { entity, step, answers } = saved
  const entityQuestions = questions[entity]
  const question = entityQuestions[step]
  const setState = useCallback((next: typeof saved) => { setSaved(next); localStorage.setItem(storageKey, JSON.stringify(next)) }, [])
  const setEntity = useCallback((nextEntity: BuilderEntity) => setState({ entity: nextEntity, step: 0, answers: emptyAnswers(nextEntity) }), [setState])
  const setAnswer = useCallback((value: string) => setState({ ...saved, answers: { ...answers, [question.key]: value } }), [answers, question.key, saved, setState])
  const next = useCallback(() => { if (question.required && !answers[question.key]?.trim()) return false; if (step < entityQuestions.length - 1) setState({ ...saved, step: step + 1 }); return true }, [answers, entityQuestions.length, question.key, question.required, saved, setState, step])
  const previous = useCallback(() => { if (step > 0) setState({ ...saved, step: step - 1 }) }, [saved, setState, step])
  const reset = useCallback(() => setState({ entity, step: 0, answers: emptyAnswers(entity) }), [entity, setState])
  const json = useMemo(() => JSON.stringify(buildJson(entity, answers), null, 2), [answers, entity])
  const copyJson = useCallback(async () => { await navigator.clipboard?.writeText(json) }, [json])
  const downloadJson = useCallback(() => { const blob = new Blob([json], { type: 'application/json' }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `${entity}.json`; link.click(); URL.revokeObjectURL(url) }, [entity, json])
  return { entity, step, answers, question, questions: entityQuestions, progress: ((step + 1) / entityQuestions.length) * 100, json, setEntity, setAnswer, next, previous, reset, copyJson, downloadJson, isComplete: step === entityQuestions.length - 1 }
}
