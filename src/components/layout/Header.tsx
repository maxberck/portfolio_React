import type { ReactNode } from 'react'

interface HeaderProps {
  path: string
  dark: boolean
  onNavigate: (path: string) => void
  onToggleTheme: () => void
}

export function Header({ path, dark, onNavigate, onToggleTheme }: HeaderProps) {
  const Link = ({ to, children }: { to: string; children: ReactNode }) => (
    <a href={to} className={path === to ? 'nav-link active' : 'nav-link'} onClick={(event) => { event.preventDefault(); onNavigate(to) }}>{children}</a>
  )
  return <header className="site-header">
    <a className="brand" href="/" onClick={(event) => { event.preventDefault(); onNavigate('/') }}>MB<span>.</span></a>
    <nav aria-label="Navigation principale"><Link to="/">Accueil</Link><Link to="/about">À propos</Link><Link to="/projects">Projets</Link><Link to="/contact">Contact</Link></nav>
    <div className="header-actions"><Link to="/builder">Builder</Link><button className="theme-toggle" onClick={onToggleTheme} aria-label="Changer le thème">{dark ? '☼' : '☾'}</button></div>
  </header>
}
