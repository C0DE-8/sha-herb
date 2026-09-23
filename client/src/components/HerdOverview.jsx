const stats = [
  { label: 'Cattle', count: '42', note: '2 calves', icon: '♧', tone: 'sage' },
  { label: 'Sheep', count: '18', note: 'All accounted for', icon: '❋', tone: 'sand' },
  { label: 'Goats', count: '07', note: '1 new arrival', icon: '♧', tone: 'peach' },
]

export function HerdOverview() {
  return (
    <section className="overview-card" id="herd">
      <div className="card-heading"><div><p className="section-kicker">YOUR FARM</p><h2>Herd overview</h2></div><button className="more-button" aria-label="More herd options">•••</button></div>
      <div className="herd-total"><div className="total-icon"><svg viewBox="0 0 24 24"><path d="M4 10 12 4l8 6v9H4zM9 19v-6h6v6"/></svg></div><div><strong>67 <span>animals</span></strong><small>Across 3 groups</small></div><span className="total-trend">↗ 4%</span></div>
      <div className="group-list">{stats.map((item) => <div className="group-row" key={item.label}><div className={`group-icon ${item.tone}`} aria-hidden="true">{item.icon}</div><div className="group-details"><strong>{item.label}</strong><small>{item.note}</small></div><strong className="group-count">{item.count}</strong><svg className="row-chevron" viewBox="0 0 16 16"><path d="m6 3 5 5-5 5"/></svg></div>)}</div>
      <a className="text-link" href="#herd">View all animals <span>→</span></a>
      <div className="health-note"><span className="health-check">✓</span><span><strong>Looking good</strong><small>Every animal checked in today</small></span></div>
    </section>
  )
}
