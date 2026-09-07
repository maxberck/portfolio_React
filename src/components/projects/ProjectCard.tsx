import type { Project } from '../../types/portfolio'

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (id: string) => void }) {
  return <article className="project-card">
    <button className="project-hit" onClick={() => onOpen(project.id)} aria-label={`Voir le projet ${project.title}`}>
      <div className="project-image" style={{ backgroundImage: project.image ? `url(${project.image})` : undefined }} aria-hidden="true" />
      <div className="project-body"><small>{project.year}{project.featured ? ' · FEATURED' : ''}</small><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
    </button>
    <div className="project-links">
      {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>}
      {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Demo ↗</a>}
    </div>
  </article>
}
