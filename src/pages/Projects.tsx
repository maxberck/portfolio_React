import { useMemo, useState } from 'react'
import type { Project } from '../types/portfolio'
import { ProjectCard } from '../components/projects/ProjectCard'

export function Projects({ projects, onNavigate }: { projects: Project[]; onNavigate: (path: string) => void }) {
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState<'newest' | 'oldest'>('newest')
  const techs = useMemo(() => Array.from(new Set(projects.flatMap((project) => project.technologies))).sort(), [projects])
  const visible = useMemo(() => projects.filter((project) => filter === 'all' || project.technologies.includes(filter)).sort((a, b) => sort === 'newest' ? b.year - a.year : a.year - b.year), [projects, filter, sort])
  return <main className="container page"><span className="eyebrow">PROJETS</span><h1>Ce que je <em>construis.</em></h1>
    <div className="project-toolbar"><div className="filters"><button className={filter === 'all' ? 'selected' : ''} onClick={() => setFilter('all')}>Tous</button>{techs.map((technology) => <button className={filter === technology ? 'selected' : ''} onClick={() => setFilter(technology)} key={technology}>{technology}</button>)}</div><label className="sort-control">Trier <select value={sort} onChange={(e) => setSort(e.target.value as 'newest' | 'oldest')}><option value="newest">Plus récents</option><option value="oldest">Plus anciens</option></select></label></div>
    <div className="project-grid">{visible.map((project) => <ProjectCard key={project.id} project={project} onOpen={(id) => onNavigate(`/projects/${id}`)} />)}</div>{!visible.length && <p className="empty">Aucun projet pour cette sélection.</p>}
  </main>
}
