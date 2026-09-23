const sampleHerbs = [
  { initials: 'R', name: 'Rosemary', type: 'Salvia rosmarinus', time: 'Today', result: 'Mediterranean', tone: 'match-green', score: '98%' },
  { initials: 'M', name: 'Mint', type: 'Mentha spicata', time: 'Yesterday', result: 'Garden herb', tone: 'match-lavender', score: '96%' },
  { initials: 'T', name: 'Thyme', type: 'Thymus vulgaris', time: 'Jun 12', result: 'Mediterranean', tone: 'match-coral', score: '97%' },
]

export function RecentMatches({ herbs = [], onOpenHerb }) {
  const items = herbs.length ? herbs : sampleHerbs
  return (
    <section className="matches-card" id="my-herbs">
      <div className="card-heading matches-heading"><div><p className="section-kicker">YOUR PERSONAL COLLECTION</p><h2>Recently identified</h2></div><a href="#my-herbs" className="text-link matches-link">My Herbs <span>→</span></a></div>
      <div className="match-list">{items.map((herb) => <button className="match-row" key={`${herb.name}-${herb.time}`} onClick={() => onOpenHerb?.(herb)}><span className={`animal-avatar ${herb.tone || 'match-green'}`}>{herb.initials || herb.name[0]}</span><span className="match-animal"><strong>{herb.name}</strong><small>{herb.scientific || herb.type}</small></span><span className="match-call"><span className="mini-wave" aria-hidden="true"><i/><i/><i/><i/><i/></span><span>{herb.result || 'Herb'}</span></span><span className="match-time">{herb.time}</span><span className="match-score"><strong>{herb.score}</strong><small>match</small></span><span className="row-more" aria-hidden="true">›</span></button>)}</div>
    </section>
  )
}
