export function ScanPanel({ scanning = false, onScan, notice = '', photoName = '', onPhotoSelect }) {
  return (
    <section className={`scan-card${scanning ? ' is-scanning' : ''}`} aria-labelledby="scan-title">
      <div className="scan-copy">
        <p className="section-kicker"><span className="live-dot" /> YOUR AI HERB IDENTIFIER</p>
        <h2 id="scan-title">What’s this herb?</h2>
        <p>Take a photo or upload an image and let AI identify it.</p>
        <div className="scan-actions">
          <button className="scan-button" onClick={onScan} disabled={scanning}>
            <span className="mic-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 14 8l5-2-2 5 5 2-5 2 2 5-5-2-2 5-2-5-5 2 2-5-5-2 5-2-2-5 5 2z"/><circle cx="12" cy="13" r="2.5"/></svg></span>
            {scanning ? 'Scanning…' : '📷  Scan an Herb'}
          </button>
          <label className="photo-button"><svg viewBox="0 0 24 24"><path d="M4 7h3l1.5-2h7L17 7h3v12H4z"/><circle cx="12" cy="13" r="3.5"/></svg><span>{photoName || 'Upload a photo'}</span><input type="file" accept="image/*" onChange={(event) => onPhotoSelect?.(event.target.files?.[0])} /></label>
        </div>
        <span className="scan-hint">Point your camera at a plant or choose a clear photo.</span>
        {notice && <p className="scan-notice" role="status">{notice}</p>}
      </div>
      <div className="sound-visual" aria-hidden="true"><div className="sound-halo halo-one"/><div className="sound-halo halo-two"/><div className="sound-orb"><svg viewBox="0 0 110 110"><path d="M54 87c-1-17 1-35 5-54M56 69c-17 1-29-8-31-25 17-1 28 8 31 25ZM58 55c2-16 13-26 28-27 0 16-11 26-28 27ZM53 81c-13 1-22-6-25-19 13-1 22 6 25 19Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div><span className="sound-caption">DISCOVER WHAT’S GROWING</span></div>
      <div className="scan-card-leaf leaf-one"/><div className="scan-card-leaf leaf-two"/>
    </section>
  )
}
