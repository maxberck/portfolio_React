import { useState } from 'react'
import type { Profile, Project, Skill, Testimonial } from '../types/portfolio'
import { ProjectCard } from '../components/projects/ProjectCard'

interface HomeProps { profile: Profile; projects: Project[]; skills: Skill[]; testimonials: Testimonial[]; onNavigate: (path: string) => void }

export function Home({ profile, projects, skills, testimonials, onNavigate }: HomeProps) {
  const [photoFailed, setPhotoFailed] = useState(false)
  const initials = `${profile.firstName[0] ?? ''}${profile.lastName[0] ?? ''}`
  const currentYear = new Date().getFullYear()

  return <main>
    <section className="hero-section container">
      <div className="hero-copy">
        <div className="hero-meta"><span className="eyebrow">{String(currentYear)} / PORTFOLIO</span><span className="hero-location">{profile.location || 'WEB / DIGITAL'}</span></div>
        <h1>{profile.firstName}<br /><em>{profile.lastName}.</em></h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-lead">{profile.bio}</p>
        <div className="actions"><a className="text-action" href="/projects" onClick={(e) => { e.preventDefault(); onNavigate('/projects') }}>Explorer les projets <span>↗</span></a><a className="text-action muted-action" href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('/contact') }}>Me contacter <span>↗</span></a></div>
      </div>
      <div className="hero-aside">
        <span className="hero-index">MB / 001</span>
        <div className="hero-portrait">{profile.photo && !photoFailed ? <img className="hero-photo" src={profile.photo} alt={`${profile.firstName} ${profile.lastName}`} onError={() => setPhotoFailed(true)} /> : <div className="hero-avatar" aria-hidden="true">{initials}</div>}</div>
        <div className="hero-caption"><strong>{profile.firstName} {profile.lastName}</strong><span>{profile.title}</span></div>
      </div>
    </section>

    <section className="section container work-section">
      <div className="section-heading"><span className="section-number">01</span><div><span className="eyebrow">SELECTED WORK</span><h2>Projets récents</h2></div><span className="section-count">{String(projects.length).padStart(2, '0')} projets</span></div>
      <div className="project-grid comic-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={(id) => onNavigate(`/projects/${id}`)} />)}</div>{!projects.length && <p className="empty">Les projets arrivent bientôt.</p>}
    </section>

    <section className="section container about-strip">
      <div className="section-number">02</div>
      <div><span className="eyebrow">APPROCHE</span><h2>Construire des choses<br /><em>simples et utiles.</em></h2></div>
      <div className="about-copy"><p>{profile.bio}</p><a className="text-action" href="/about" onClick={(e) => { e.preventDefault(); onNavigate('/about') }}>En savoir plus <span>↗</span></a></div>
    </section>

    <section className="section container stack-section">
      <div className="section-heading"><span className="section-number">03</span><div><span className="eyebrow">TOOLBOX</span><h2>Ce que j'utilise</h2></div></div>
      <div className="skill-list">{skills.map((skill, index) => <div className="skill-row" key={skill.id}><span className="skill-index">{String(index + 1).padStart(2, '0')}</span><b>{skill.name}</b><span>{skill.level}</span></div>)}</div>
    </section>

    {testimonials.length > 0 && <section className="section container testimonials-section"><div className="section-heading"><span className="section-number">04</span><div><span className="eyebrow">WORDS</span><h2>Ils en parlent</h2></div></div><div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.id}><p>“{item.quote}”</p><strong>{item.name}</strong><span>{item.role}{item.company ? ` · ${item.company}` : ''}</span></article>)}</div></section>}
  </main>
}
