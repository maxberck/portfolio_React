import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { useRouter } from './hooks/useRouter'
import { portfolioData, getProjectById } from './services/portfolioData'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { ProjectDetails } from './pages/ProjectDetails'
import { Contact } from './pages/Contact'
import { Builder } from './pages/Builder'

function App() {
  const { path, navigate } = useRouter()
  const [dark, setDark] = useState(() => localStorage.getItem('portfolio-theme') !== 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  }, [dark])

  let content
  if (path === '/') content = <Home profile={portfolioData.profile} projects={portfolioData.projects} skills={portfolioData.skills} testimonials={portfolioData.testimonials} onNavigate={navigate} />
  else if (path === '/about') content = <About profile={portfolioData.profile} projectCount={portfolioData.projects.length} skillCount={portfolioData.skills.length} experiences={portfolioData.experiences} certifications={portfolioData.certifications} testimonials={portfolioData.testimonials} />
  else if (path === '/projects') content = <Projects projects={portfolioData.projects} onNavigate={navigate} />
  else if (path.startsWith('/projects/')) content = <ProjectDetails project={getProjectById(path.split('/')[2] || '')} onNavigate={navigate} />
  else if (path === '/contact') content = <Contact profile={portfolioData.profile} />
  else if (path === '/builder') content = <Builder />
  else content = <main className="container page"><span className="eyebrow">404</span><h1>Cette page <em>n’existe pas.</em></h1><button className="primary" onClick={() => navigate('/')}>Retour à l’accueil</button></main>

  return <div className="app"><Header path={path} dark={dark} onNavigate={navigate} onToggleTheme={() => setDark((value) => !value)} />{content}<Footer profile={portfolioData.profile} /></div>
}

export default App
