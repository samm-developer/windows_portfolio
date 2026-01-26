import './StartMenu.css'

const StartMenu = ({ isOpen, onClose, onOpenWindow, onLogout }) => {
  if (!isOpen) return null

  const menuItems = [
    { id: 'about', title: 'About Me', description: 'Learn more about SAM' },
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
        <span className="user-name-header">SAM</span>
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
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="menu-link"
          >
            <svg viewBox="0 0 24 24" className="link-icon">
              <rect x="3" y="3" width="18" height="18" rx="2" fill="#0077b5"/>
              <path d="M7 10 L7 17 M7 7 L7 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <path d="M11 17 L11 12 Q11 10 13 10 Q15 10 15 12 L15 17" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
            LinkedIn
          </a>
          <a 
            href="https://github.com/samm-developer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="menu-link"
          >
            <svg viewBox="0 0 24 24" className="link-icon">
              <circle cx="12" cy="12" r="10" fill="#333"/>
              <path d="M12 2 C6.5 2 2 6.5 2 12 C2 16.5 5 20 9 21 L9 18 C7 18.5 6.5 17 6.5 17 C6 16 5.5 15.5 5.5 15.5 C4.5 15 5.5 15 5.5 15 C6.5 15 7 16 7 16 C8 17.5 9.5 17 10 16.5 C10 16 10.5 15.5 10.5 15 C8 14.5 5 13.5 5 10 C5 9 5.5 8 6 7.5 C6 7 5.5 6 6 5 C6 5 7 5 8.5 6 C9 6 10 5.5 12 5.5 C14 5.5 15 6 15.5 6 C17 5 18 5 18 5 C18.5 6 18 7 18 7.5 C18.5 8 19 9 19 10 C19 13.5 16 14.5 13.5 15 C14 15.5 14 16 14 17 L14 21 C18 20 22 16.5 22 12 C22 6.5 17.5 2 12 2" fill="#fff"/>
            </svg>
            GitHub
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="menu-link"
          >
            <svg viewBox="0 0 24 24" className="link-icon">
              <rect x="3" y="3" width="18" height="18" rx="2" fill="#1da1f2"/>
              <path d="M8 17 C10 17 12 16 13 15 C16 13 17 10 17 8 C17.5 7.5 18 7 18 6 C17.5 6.5 17 6.5 16.5 6.5 C17 6 17.5 5.5 17.5 5 C17 5.5 16.5 5.5 16 5.5 C15.5 5 15 4.5 14 4.5 C12.5 4.5 11.5 5.5 11.5 7 C11.5 7.5 11.5 7.5 11.5 7.5 C9 7.5 7 6 5.5 4 C5 5 5 6 5.5 6.5 C5 6.5 4.5 6.5 4 6 C4 7.5 5 9 6.5 9.5 C6 9.5 5.5 9.5 5 9.5 C5.5 11 6.5 12 8 12 C7 13 5.5 13.5 4 13.5 C4.5 14 5 14 5.5 14" fill="#fff"/>
            </svg>
            Twitter
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
