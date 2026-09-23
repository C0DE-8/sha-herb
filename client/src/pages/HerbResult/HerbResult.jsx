import { Header } from '../../components/Header.jsx'

export default function HerbResult({ herb, onBack, onSave, saved }) {
  const title = herb?.name || 'Rosemary'
  const scientific = herb?.scientific || herb?.type || 'Salvia rosmarinus'
  const photo = herb?.preview
  return (
    <main className="app-shell result-shell">
      <Header active="My Herbs" onScan={onBack} />
      <button className="back-link" onClick={onBack}>← Back to overview</button>
      <section className="result-hero">
        <div className="result-photo">{photo ? <img src={photo} alt={title} /> : <div className="result-plant-art" aria-hidden="true"><svg viewBox="0 0 260 300"><path d="M128 273c-4-65 1-132 8-221M133 214c-59 1-91-30-97-83 58-2 90 31 97 83Zm5-62c8-55 42-87 96-86-3 55-38 85-96 86Zm-8 104c-42 0-67-22-72-61 42 0 67 22 72 61Zm10-63c7-42 34-67 75-68-3 41-30 66-75 68Z" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>}<span className="photo-label">IDENTIFIED PLANT</span></div>
        <div className="result-intro"><p className="section-kicker">HERB IDENTIFICATION</p><h1>{title}</h1><p className="scientific-name">{scientific}</p><span className="confidence-pill"><span>✓</span> {herb?.score || '96%'} match</span><p className="result-description">Rosemary is a fragrant, evergreen herb native to the Mediterranean. Its needle-like leaves carry a distinctive piney aroma and have been valued in gardens and kitchens for centuries.</p><button className={`save-herb${saved ? ' is-saved' : ''}`} onClick={onSave}>{saved ? '✓ Saved to My Herbs' : '+ Save to My Herbs'}</button></div>
      </section>
      <div className="result-details">
        <section className="detail-card"><span className="detail-icon">✿</span><h2>Common & traditional uses</h2><p>Fresh or dried leaves bring a warm, aromatic flavor to roasted vegetables, breads, and infused oils. Traditionally used in herbal preparations and fragrant sachets.</p><div className="tag-list"><span>Culinary</span><span>Aromatic</span><span>Traditional use</span></div></section>
        <section className="detail-card"><span className="detail-icon">⌖</span><h2>Where it grows</h2><p>Native to the sunny, rocky coastal regions of the Mediterranean. Now grown in gardens and warm climates around the world.</p><p className="detail-note">Loves sun · Well-drained soil · Drought tolerant</p></section>
        <section className="detail-card"><span className="detail-icon">↟</span><h2>How to grow it</h2><p>Give rosemary at least 6 hours of direct sun each day. Plant in loose, well-draining soil and water deeply, allowing the soil to dry between watering.</p><p className="detail-note">Perennial · Easy care · Prune lightly</p></section>
        <section className="detail-card caution-card"><span className="detail-icon">!</span><h2>Safety & caution</h2><p>Use as a food in typical amounts. Concentrated oils and supplements may not be suitable for everyone. Ask a qualified health professional before using herbs medicinally, especially during pregnancy or when taking medication.</p><p className="detail-note">Identification is a guide. Never eat a wild plant based on an app result alone.</p></section>
      </div>
      <footer className="dashboard-footer"><span>HERBLY · YOUR POCKET FIELD GUIDE</span><span>Explore with care <i className="status-dot" /></span></footer>
    </main>
  )
}
