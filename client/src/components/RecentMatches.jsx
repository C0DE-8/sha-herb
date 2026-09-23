const matches = [
  { initials: 'M', name: 'Maple', type: 'Holstein cow · North pasture', time: '8:42 AM', result: 'Hungry call', tone: 'match-coral', score: '94%' },
  { initials: 'B', name: 'Bluebell', type: 'Merino sheep · Creek field', time: '7:18 AM', result: 'Contact call', tone: 'match-lavender', score: '89%' },
  { initials: 'P', name: 'Pepper', type: 'Nubian goat · East barn', time: 'Yesterday', result: 'Greeting call', tone: 'match-green', score: '97%' },
]

export function RecentMatches() {
  return (
    <section className="matches-card" id="insights">
      <div className="card-heading matches-heading"><div><p className="section-kicker">A LITTLE HERD CHATTER</p><h2>Recent matches</h2></div><a href="#matches" className="text-link matches-link">See all <span>→</span></a></div>
      <div className="match-list">{matches.map((match) => <article className="match-row" key={match.name}><div className={`animal-avatar ${match.tone}`}>{match.initials}</div><div className="match-animal"><strong>{match.name}</strong><small>{match.type}</small></div><div className="match-call"><span className="mini-wave" aria-hidden="true"><i/><i/><i/><i/><i/></span><span>{match.result}</span></div><div className="match-time">{match.time}</div><div className="match-score"><strong>{match.score}</strong><small>match</small></div><button className="row-more" aria-label={`More about ${match.name}`}>•••</button></article>)}</div>
    </section>
  )
}
