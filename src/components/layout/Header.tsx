import type { ReactNode } from 'react'

interface HeaderProps {
  path: string
  dark: boolean
  onNavigate: (path: string) => void
  onToggleTheme: () => void
}

interface NavLinkProps {
  to: string
  path: string
  children: ReactNode
  onNavigate: (path: string) => void
}

function NavLink({ to, path, children, onNavigate }: NavLinkProps) {
  const active = to === '/' ? path === '/' : path === to || path.startsWith(`${to}/`)

  return (
    <a
      href={to}
      className={active ? 'nav-link active' : 'nav-link'}
      aria-current={active ? 'page' : undefined}
      onClick={(event) => {
        event.preventDefault()
        onNavigate(to)
      }}
    >
      {children}
    </a>
  )
}

export function Header({ path, dark, onNavigate, onToggleTheme }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="/" onClick={(event) => { event.preventDefault(); onNavigate('/') }}>MB<span>.</span></a>
      <nav aria-label="Navigation principale">
        <NavLink to="/" path={path} onNavigate={onNavigate}>Accueil</NavLink>
        <NavLink to="/about" path={path} onNavigate={onNavigate}>À propos</NavLink>
        <NavLink to="/projects" path={path} onNavigate={onNavigate}>Projets</NavLink>
        <NavLink to="/contact" path={path} onNavigate={onNavigate}>Contact</NavLink>
      </nav>
      <div className="header-actions">
        <NavLink to="/builder" path={path} onNavigate={onNavigate}>Builder</NavLink>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label={dark ? 'Activer le thème clair' : 'Activer le thème sombre'}>{dark ? '☼' : '☾'}</button>
      </div>
    </header>
  )
}
