import { Link } from 'react-router-dom'
import { Header } from '../../components/Header.jsx'

export default function NotFound() {
  return (
    <main className="app-shell not-found-page">
      <Header />
      <section className="not-found-content">
        <div className="not-found-illustration" aria-hidden="true">
          <span>4</span><span className="not-found-leaf">✿</span><span>4</span>
        </div>
        <p className="section-kicker">A LITTLE OFF THE GARDEN PATH</p>
        <h1>We couldn’t find that page.</h1>
        <p className="not-found-copy">This page may have moved, or the link might be a little overgrown.</p>
        <Link className="scan-button" to="/">Back to Overview <span>→</span></Link>
      </section>
      <footer className="dashboard-footer"><span>HERBLY · YOUR POCKET FIELD GUIDE</span><span>Explore with care <i className="status-dot" /></span></footer>
    </main>
  )
}
