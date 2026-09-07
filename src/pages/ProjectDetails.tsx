import type { Project } from '../types/portfolio'

export function ProjectDetails({ project, onNavigate }: { project?: Project; onNavigate: (path: string) => void }) {
  if (!project) return <main className="container page"><span className="eyebrow">PROJET</span><h1>Projet <em>introuvable.</em></h1><button className="primary" onClick={() => onNavigate('/projects')}>Retour aux projets</button></main>
  return <main className="container page"><button className="back-button" onClick={() => onNavigate('/projects')}>← Tous les projets</button><span className="eyebrow detail-label">PROJET / {project.year}</span><h1>{project.title}</h1><p className="wide-copy">{project.description}</p><div className="detail-visual" style={{ backgroundImage: project.image ? `url(${project.image})` : undefined }} />
    <div className="project-detail-grid"><div><span className="eyebrow">TECHNOLOGIES</span><div className="tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div><div className="project-detail-actions">{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Voir le code ↗</a>}{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Voir la démo ↗</a>}</div></div>
  </main>
}
