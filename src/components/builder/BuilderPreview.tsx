interface Props { json: string; onCopy: () => void; onDownload: () => void }

export function BuilderPreview({ json, onCopy, onDownload }: Props) {
  return <aside className="preview-card"><small>APERÇU JSON</small><pre>{json}</pre><div className="preview-actions"><button onClick={onCopy}>Copier le JSON</button><button className="primary" onClick={onDownload}>Télécharger .json</button></div></aside>
}
