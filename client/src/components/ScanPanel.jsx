export function ScanPanel({ scanning, onScan, notice }) {
  return (
    <section className={`scan-card${scanning ? ' is-scanning' : ''}`} aria-labelledby="scan-title">
      <div className="scan-copy"><p className="section-kicker"><span className="live-dot" /> HERD SOUND ID</p><h2 id="scan-title">Who’s calling?</h2><p>Capture a call and find out who’s behind it.</p><button className="scan-button" onClick={onScan} disabled={scanning}><span className="mic-icon"><svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3m-4 0h8"/></svg></span>{scanning ? 'Listening…' : 'Start a scan'}<span className="button-arrow">↗</span></button><span className="scan-hint">Best results in a quiet spot</span>{notice && <p className="scan-notice" role="status">{notice}</p>}</div>
      <div className="sound-visual" aria-hidden="true"><div className="sound-halo halo-one"/><div className="sound-halo halo-two"/><div className="sound-orb"><svg viewBox="0 0 110 110"><path d="M12 56h10l8-18 12 38 12-51 13 61 11-42 10 24 8-12h14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div><span className="sound-caption">SOUND IN, ANSWERS OUT</span></div>
      <div className="scan-card-leaf leaf-one"/><div className="scan-card-leaf leaf-two"/>
    </section>
  )
}
