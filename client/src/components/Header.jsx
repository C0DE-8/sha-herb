export function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Herdly home">
        <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M5 17c4-7 7-7 11 0s7 7 11 0M8 22c3-4 5-4 8 0s5 4 8 0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><circle cx="16" cy="8" r="2" fill="currentColor"/></svg></span>
        <span>herd<span className="brand-light">ly</span></span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a className="nav-active" href="#overview">Overview</a><a href="#herd">My herd</a><a href="#insights">Insights</a>
      </nav>
      <div className="profile"><button className="icon-button" aria-label="Notifications"><svg viewBox="0 0 24 24"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg><span className="notification-dot" /></button><span className="avatar">AW</span><span className="profile-name">Alex Wilson</span><svg className="chevron" viewBox="0 0 16 16"><path d="m4 6 4 4 4-4"/></svg></div>
    </header>
  )
}
