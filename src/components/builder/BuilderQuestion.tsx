import type { BuilderQuestion as Question } from '../../hooks/usePortfolioBuilder'

interface Props { question: Question; value: string; progress: number; step: number; total: number; onChange: (value: string) => void; onNext: () => void; onPrevious: () => void; isComplete: boolean }

export function BuilderQuestion({ question, value, progress, step, total, onChange, onNext, onPrevious, isComplete }: Props) {
  return <section className="builder-card"><div className="progress"><span style={{ width: `${progress}%` }} /></div><small>QUESTION {step + 1} / {total}</small><h2>{question.label}</h2><input autoFocus value={value} type={question.type === 'number' ? 'number' : question.type === 'url' ? 'email' : 'text'} onChange={(event) => onChange(event.target.value)} placeholder={question.placeholder} required={question.required} onKeyDown={(event) => { if (event.key === 'Enter') onNext() }} /><div className="builder-actions"><button disabled={step === 0} onClick={onPrevious}>Retour</button><button className="primary" onClick={onNext}>{isComplete ? 'Terminer' : 'Continuer →'}</button></div>{question.required && <small>Champ obligatoire</small>}</section>
}
