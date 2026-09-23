import { Link } from 'react-router-dom'

export function Header({ active = 'Overview', onScan }) {
  return (
    <header className="topbar">
      <Link className="brand" to="/" aria-label="Herbly home">
        <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M5 17c4-7 7-7 11 0s7 7 11 0M8 22c3-4 5-4 8 0s5 4 8 0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><circle cx="16" cy="8" r="2" fill="currentColor"/></svg></span>
        <span>herb<span className="brand-light">ly</span></span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <Link className={active === 'Overview' ? 'nav-active' : ''} to="/">Overview</Link>
        <Link className={active === 'My Herbs' ? 'nav-active' : ''} to="/my-herbs">My Herbs</Link>
        <button className="nav-scan" onClick={onScan}>Scan</button>
        <Link className={active === 'Insights' ? 'nav-active' : ''} to="/insights">Insights</Link>
      </nav>
      <div className="profile"><span className="avatar">HB</span><span className="profile-name">Habibi</span></div>
    </header>
  )
}
