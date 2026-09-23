import { Link } from 'react-router-dom'
import { Header } from '../../components/Header.jsx'

export default function Insights({ herbs, onScan }) {
  const count = herbs.length
  return <main className="app-shell collection-page"><Header active="Insights" onScan={onScan}/><section className="collection-heading"><div><p className="section-kicker">YOUR BOTANICAL JOURNEY</p><h1>Insights</h1><p>A little perspective on the plants you’re discovering.</p></div></section><div className="insight-grid"><article className="insight-card"><span className="detail-icon">⌕</span><small>PLANTS IDENTIFIED</small><strong>{count}</strong><p>{count ? 'Your collection is growing with every scan.' : 'Your first scan is the start of something green.'}</p></article><article className="insight-card insight-feature"><span className="detail-icon">☼</span><small>IN SEASON</small><strong>Discover what’s growing</strong><p>Seasonal and regional plant insights will appear here as you explore.</p><Link to="/scan">Identify a plant →</Link></article></div><footer className="dashboard-footer"><span>HERBLY · YOUR POCKET FIELD GUIDE</span><span>Explore with care <i className="status-dot"/></span></footer></main>
}
