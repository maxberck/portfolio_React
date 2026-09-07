import type { Profile } from '../types/portfolio'

export function Contact({ profile }: { profile: Profile }) {
  return <main className="container page"><span className="eyebrow">CONTACT</span><h1>Construisons quelque <em>chose.</em></h1><p className="wide-copy">Pour une collaboration, un projet ou simplement échanger, écrivez-moi directement.</p><a className="email-card" href={`mailto:${profile.email}`}>{profile.email}<span>↗</span></a></main>
}
