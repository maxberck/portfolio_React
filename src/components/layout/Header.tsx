import type { ReactNode } from 'react'

interface HeaderProps {
  path: string
  dark: boolean
  onNavigate: (path: string) => void
  onToggleTheme: () => void
}

export function Header({ path, dark, onNavigate, onToggleTheme }: HeaderProps) {
  const Link = ({ to, children }: { to: string; children: ReactNode }) => {
    const active = to === '/' ? path === '/' : path === to || path.startsWith(`${to}/`)
    return <a href={to} className={active ? 'nav-link active' : 'nav-link'} aria-current={active ? 'page' : undefined} onClick={(event) => { event.preventDefault(); onNavigate(to) }}>{children}</a>
  }
  return <header className="site-header">
    <a className="brand" href="/" onClick={(event) => { event.preventDefault(); onNavigate('/') }}>MB<span>.</span></a>
    <nav aria-label="Navigation principale"><Link to="/">Accueil</Link><Link to="/about">À propos</Link><Link to="/projects">Projets</Link><Link to="/contact">Contact</Link></nav>
    <div className="header-actions"><Link to="/builder">Builder</Link><button className="theme-toggle" onClick={onToggleTheme} aria-label={dark ? 'Activer le thème clair' : 'Activer le thème sombre'}>{dark ? '☼' : '☾'}</button></div>
  </header>
}
