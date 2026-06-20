import './StartMenu.css'

const StartMenu = ({ isOpen, onClose, onOpenWindow, onLogout }) => {
  if (!isOpen) return null

  const menuItems = [
    { id: 'about', title: 'About Me', description: 'Learn more about Rajat' },
    { id: 'resume', title: 'My Resume', description: 'View professional experience' },
    { id: 'projects', title: 'My Projects', description: 'Browse portfolio work' },
    { id: 'contact', title: 'Contact Me', description: 'Get in touch' },
  ]

  const getMenuIcon = (id) => {
    switch (id) {
      case 'about':
        return (
          <svg viewBox="0 0 32 32" className="menu-icon-svg">
            <path d="M4 8 L4 28 L28 28 L28 12 L16 12 L14 8 Z" fill="#ffc859"/>
            <circle cx="16" cy="20" r="4" fill="#0078d7"/>
            <path d="M10 28 Q10 24 16 24 Q22 24 22 28" fill="#0078d7"/>
          </svg>
        )
      case 'resume':
        return (
          <svg viewBox="0 0 32 32" className="menu-icon-svg">
            <path d="M6 2 L6 30 L26 30 L26 10 L18 2 Z" fill="#fff"/>
            <path d="M18 2 L18 10 L26 10 Z" fill="#e0e0e0"/>
            <path d="M6 2 L6 30 L26 30 L26 10 L18 10 L18 2 Z" stroke="#666" strokeWidth="1" fill="none"/>
            <line x1="9" y1="14" x2="23" y2="14" stroke="#333" strokeWidth="2"/>
            <line x1="9" y1="18" x2="23" y2="18" stroke="#999" strokeWidth="1"/>
            <line x1="9" y1="22" x2="23" y2="22" stroke="#999" strokeWidth="1"/>
            <line x1="9" y1="26" x2="18" y2="26" stroke="#999" strokeWidth="1"/>
          </svg>
        )
      case 'projects':
        return (
          <svg viewBox="0 0 32 32" className="menu-icon-svg">
            <path d="M4 8 L4 28 L28 28 L28 12 L16 12 L14 8 Z" fill="#ffc859"/>
            <polygon points="16,14 17.5,18 22,18 18.5,21 20,26 16,23 12,26 13.5,21 10,18 14.5,18" fill="#ff6b35"/>
          </svg>
        )
      case 'contact':
        return (
          <svg viewBox="0 0 32 32" className="menu-icon-svg">
            <rect x="4" y="8" width="24" height="18" rx="2" fill="#f5f5f5" stroke="#666" strokeWidth="1"/>
            <path d="M4 10 L16 20 L28 10" stroke="#666" strokeWidth="1.5" fill="none"/>
            <rect x="4" y="8" width="24" height="5" fill="#0078d7" opacity="0.8"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="start-menu" onClick={(e) => e.stopPropagation()}>
      {/* Header */}
      <div className="start-menu-header">
        <div className="user-avatar-small">
          <svg viewBox="0 0 40 40" className="avatar-svg-small">
            <rect x="0" y="0" width="40" height="40" fill="#87ceeb"/>
            <ellipse cx="20" cy="18" rx="8" ry="9" fill="#e8c4a0"/>
            <path d="M12 15 Q14 10 20 8 Q26 10 28 15 Q26 13 20 14 Q14 13 12 15" fill="#3d2314"/>
            <ellipse cx="17" cy="18" rx="1.5" ry="2" fill="#3d2314"/>
            <ellipse cx="23" cy="18" rx="1.5" ry="2" fill="#3d2314"/>
            <path d="M15 24 Q18 26 20 24 Q22 26 25 24" fill="#3d2314"/>
            <ellipse cx="20" cy="36" rx="12" ry="10" fill="#4a90d9"/>
          </svg>
        </div>
        <span className="user-name-header">RAJAT</span>
      </div>

      {/* Content */}
      <div className="start-menu-content">
        {/* Left side - Programs */}
        <div className="start-menu-left">
          <div className="menu-section-title">Portfolio</div>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="menu-item"
              onClick={() => {
                onOpenWindow(item.id)
                onClose()
              }}
            >
              <div className="menu-item-icon">
                {getMenuIcon(item.id)}
              </div>
              <div className="menu-item-text">
                <span className="menu-item-title">{item.title}</span>
                <span className="menu-item-description">{item.description}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="menu-divider"></div>

        {/* Right side - Places */}
        <div className="start-menu-right">
          <div className="menu-section-title">Quick Links</div>
          <a
            href="https://thekingslibrary.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-link"
          >
            <svg viewBox="0 0 24 24" className="link-icon">
              <rect x="3" y="4" width="18" height="16" rx="2" fill="#4a90d9"/>
              <line x1="3" y1="8" x2="21" y2="8" stroke="#fff" strokeWidth="1.5"/>
              <circle cx="7" cy="6" r="1" fill="#fff"/>
              <circle cx="10" cy="6" r="1" fill="#fff"/>
            </svg>
            The King&apos;s Library
          </a>
          <a
            href="https://thekingslibrary.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-link"
          >
            <svg viewBox="0 0 24 24" className="link-icon">
              <rect x="4" y="2" width="16" height="20" rx="2" fill="#ffc859"/>
              <line x1="8" y1="7" x2="16" y2="7" stroke="#333" strokeWidth="1.5"/>
              <line x1="8" y1="11" x2="16" y2="11" stroke="#666" strokeWidth="1"/>
              <line x1="8" y1="15" x2="13" y2="15" stroke="#666" strokeWidth="1"/>
            </svg>
            Library App (Live)
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="start-menu-footer">
        <button className="footer-button" onClick={onLogout}>
          <svg viewBox="0 0 24 24" className="footer-icon">
            <circle cx="12" cy="12" r="10" fill="#ff6b35"/>
            <rect x="10" y="5" width="4" height="10" fill="#fff"/>
            <circle cx="12" cy="12" r="5" fill="none" stroke="#fff" strokeWidth="2"/>
          </svg>
          <span>Log Off</span>
        </button>
      </div>
    </div>
  )
}

export default StartMenu
