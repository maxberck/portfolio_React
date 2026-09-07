import { BuilderQuestion } from '../components/builder/BuilderQuestion'
import { BuilderPreview } from '../components/builder/BuilderPreview'
import { type BuilderEntity, usePortfolioBuilder } from '../hooks/usePortfolioBuilder'

const entities: { value: BuilderEntity; label: string }[] = [
  { value: 'profile', label: 'Profil' }, { value: 'skills', label: 'Compétence' }, { value: 'projects', label: 'Projet' },
  { value: 'experiences', label: 'Expérience' }, { value: 'certifications', label: 'Certification' }, { value: 'testimonials', label: 'Témoignage' },
]

export function Builder() {
  const builder = usePortfolioBuilder()
  const current = entities.find((item) => item.value === builder.entity)?.label
  const advance = () => builder.next()
  return <main className="container page builder"><span className="eyebrow">BUILDER / PROPRIÉTAIRE</span><h1>Construis ton contenu <em>en répondant.</em></h1><p className="wide-copy">Choisis le type de contenu, réponds aux questions une par une, puis télécharge le JSON. Il n’y a ni compte ni backend.</p>
    <div className="builder-types" role="tablist" aria-label="Type de contenu">{entities.map((item) => <button key={item.value} className={builder.entity === item.value ? 'selected' : ''} onClick={() => builder.setEntity(item.value)} role="tab" aria-selected={builder.entity === item.value}>{item.label}</button>)}</div>
    <p className="builder-context"><strong>{current}</strong> · Les modifications sont conservées localement dans ce navigateur.</p>
    <div className="builder-grid"><BuilderQuestion question={builder.question} value={builder.answers[builder.question.key] || ''} progress={builder.progress} step={builder.step} total={builder.questions.length} onChange={builder.setAnswer} onNext={advance} onPrevious={builder.previous} isComplete={builder.isComplete} /><BuilderPreview json={builder.json} onCopy={builder.copyJson} onDownload={builder.downloadJson} /></div>
    <div className="builder-footer"><button onClick={builder.reset}>Réinitialiser ce brouillon</button><p>Après téléchargement, remplace le fichier correspondant dans <code>src/data/</code>, puis commit/push sur GitHub.</p></div>
  </main>
}
