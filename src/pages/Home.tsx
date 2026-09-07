import type { Profile, Project, Skill, Testimonial } from '../types/portfolio'
import { ProjectCard } from '../components/projects/ProjectCard'

interface HomeProps { profile: Profile; projects: Project[]; skills: Skill[]; testimonials: Testimonial[]; onNavigate: (path: string) => void }

export function Home({ profile, projects, skills, testimonials, onNavigate }: HomeProps) {
  return <main>
    <section className="hero-section container"><div><span className="eyebrow">PORTFOLIO / 2026</span><h1>Je transforme des idées en <em>expériences web.</em></h1><p className="hero-lead">{profile.bio}</p><div className="actions"><a className="nav-link" href="/projects" onClick={(e) => { e.preventDefault(); onNavigate('/projects') }}>Voir mes projets</a><a className="nav-link" href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('/contact') }}>Me contacter</a></div></div>
      <div className="hero-card">{profile.photo ? <img className="hero-photo" src={profile.photo} alt={`${profile.firstName} ${profile.lastName}`} onError={(e) => { e.currentTarget.style.display = 'none' }} /> : <div className="hero-avatar">{profile.firstName[0]}{profile.lastName[0]}</div>}<strong>{profile.firstName} {profile.lastName}</strong><span>{profile.title}</span><i>● Disponible</i></div>
    </section>
    <section className="section container"><span className="eyebrow">01 / SÉLECTION</span><h2>Quelques projets.</h2><div className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={(id) => onNavigate(`/projects/${id}`)} />)}</div>{!projects.length && <p className="empty">Aucun projet pour le moment.</p>}</section>
    <section className="section container split"><div><span className="eyebrow">02 / STACK</span><h2>Construire vite, sans sacrifier la qualité.</h2></div><div>{skills.map((skill) => <div className="skill-row" key={skill.id}><b>{skill.name}</b><span>{skill.level}</span></div>)}</div></section>
    {testimonials.length > 0 && <section className="section container"><span className="eyebrow">03 / TÉMOIGNAGES</span><h2>Ils en parlent.</h2><div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.id}><p>“{item.quote}”</p><strong>{item.name}</strong><span>{item.role}{item.company ? ` · ${item.company}` : ''}</span></article>)}</div></section>}
  </main>
}
