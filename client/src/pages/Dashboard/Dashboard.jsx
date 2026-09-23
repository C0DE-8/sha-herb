import { Header } from '../../components/Header.jsx'
import { ScanPanel } from '../../components/ScanPanel.jsx'
import { RecentMatches } from '../../components/RecentMatches.jsx'

export default function Dashboard({ onScan, onOpenHerb, onPhotoSelect, recentHerbs = [] }) {
  return (
    <main className="app-shell" id="overview">
      <Header active="Overview" onScan={onScan} />
      <section className="welcome-row">
        <div>
          <p className="eyebrow">YOUR PERSONAL PLANT IDENTIFIER</p>
          <h1>Good morning, Habibi <span aria-hidden="true">☀️</span></h1>
          <p className="welcome-copy">Meet the herbs growing around you. Start with a photo or scan one live.</p>
        </div>
      </section>
      <div className="main-column overview-main">
        <ScanPanel onScan={onScan} onPhotoSelect={onPhotoSelect} />
        <RecentMatches herbs={recentHerbs} onOpenHerb={onOpenHerb} />
      </div>
      <footer className="dashboard-footer"><span>HERBLY · YOUR POCKET FIELD GUIDE</span><span>Curiosity, naturally <i className="status-dot" /></span></footer>
    </main>
  )
}
