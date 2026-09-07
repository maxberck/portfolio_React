import type { Profile } from '../../types/portfolio'

export function Footer({ profile }: { profile: Profile }) {
  return <footer className="footer container">
    <span>© 2026 {profile.firstName} {profile.lastName}</span>
    {profile.socialLinks?.github && <a href={profile.socialLinks.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
  </footer>
}
