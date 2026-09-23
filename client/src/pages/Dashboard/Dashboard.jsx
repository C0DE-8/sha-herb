import { useState } from 'react'
import { Header } from '../../components/Header.jsx'
import { ScanPanel } from '../../components/ScanPanel.jsx'
import { HerdOverview } from '../../components/HerdOverview.jsx'
import { RecentMatches } from '../../components/RecentMatches.jsx'

export default function Dashboard() {
  const [scanning, setScanning] = useState(false)
  const [notice, setNotice] = useState('')

  function startScan() {
    setScanning(true)
    setNotice('Listening for herd sounds…')
    window.setTimeout(() => {
      setScanning(false)
      setNotice('No new herd calls detected. Try again near your animals.')
    }, 3200)
  }

  return (
    <main className="app-shell">
      <Header />
      <section className="welcome-row">
        <div>
          <p className="eyebrow">MONDAY, MAY 20, 2024 <span className="eyebrow-dot">•</span> RANCHO LOS OLIVOS</p>
          <h1>Good morning, Alex <span aria-hidden="true">☀️</span></h1>
          <p className="welcome-copy">Your herd is doing well. Here’s what’s happening today.</p>
        </div>
        <div className="weather-pill"><span aria-hidden="true">☀</span><span><strong>72°</strong><small>Clear skies</small></span></div>
      </section>

      <div className="dashboard-grid">
        <div className="main-column">
          <ScanPanel scanning={scanning} onScan={startScan} notice={notice} />
          <RecentMatches />
        </div>
        <aside className="side-column"><HerdOverview /></aside>
      </div>
      <footer className="dashboard-footer"><span>FIELD NOTES FOR A HEALTHIER HERD</span><span>All systems healthy <i className="status-dot" /></span></footer>
    </main>
  )
}
