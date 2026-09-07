import type { Certification, Experience, Profile, Testimonial } from '../types/portfolio'

interface AboutProps { profile: Profile; projectCount: number; skillCount: number; experiences: Experience[]; certifications: Certification[]; testimonials: Testimonial[] }

export function About({ profile, projectCount, skillCount, experiences, certifications, testimonials }: AboutProps) {
  return <main className="container page"><span className="eyebrow">À PROPOS</span><h1>Développeur <em>curieux</em>, orienté produit.</h1><p className="wide-copy">{profile.bio} Je privilégie les interfaces claires, les architectures simples et les détails qui rendent une expérience mémorable.</p>
    <div className="stats"><div><b>{projectCount}</b><span>Projets</span></div><div><b>{skillCount}</b><span>Compétences</span></div><div><b>{experiences.length}</b><span>Expériences</span></div></div>
    <section className="detail-section"><span className="eyebrow">EXPÉRIENCE</span>{experiences.length ? experiences.map((item) => <article className="timeline-item" key={item.id}><small>{item.startDate} — {item.endDate || 'Aujourd’hui'}</small><h2>{item.title}</h2><strong>{item.company}</strong><p>{item.description}</p></article>) : <p className="empty">Les expériences seront ajoutées via le Builder.</p>}</section>
    <section className="detail-section"><span className="eyebrow">CERTIFICATIONS</span>{certifications.length ? certifications.map((item) => <article className="timeline-item" key={item.id}><small>{item.date}</small><h2>{item.name}</h2><strong>{item.issuer}</strong><p>{item.description}</p>{item.credentialUrl && <a href={item.credentialUrl} target="_blank" rel="noreferrer">Voir le justificatif ↗</a>}</article>) : <p className="empty">Les certifications seront ajoutées via le Builder.</p>}</section>
    {testimonials.length > 0 && <section className="detail-section"><span className="eyebrow">TÉMOIGNAGES</span>{testimonials.map((item) => <article className="timeline-item" key={item.id}><p>“{item.quote}”</p><strong>{item.name}</strong><span> — {item.role}{item.company ? `, ${item.company}` : ''}</span></article>)}</section>}
    <div className="actions">{profile.cvUrl && <a className="nav-link" href={profile.cvUrl} target="_blank" rel="noreferrer">Voir mon CV ↗</a>}</div>
  </main>
}
