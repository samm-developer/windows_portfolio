import { useState } from 'react'
import './DesktopIcon.css'

const DesktopIcon = ({ id, title, icon, onDoubleClick, style }) => {
  const [isSelected, setIsSelected] = useState(false)

  const getIcon = () => {
    switch (icon) {
      case 'about':
        return (
          <svg viewBox="0 0 48 48" className="icon-svg">
            {/* Folder background */}
            <path d="M4 12 L4 42 L44 42 L44 16 L24 16 L20 12 Z" fill="#ffc859"/>
            <path d="M4 12 L4 14 L20 14 L24 18 L44 18 L44 16 L24 16 L20 12 Z" fill="#ffd87a"/>
            {/* Person icon */}
            <circle cx="24" cy="26" r="6" fill="#0078d7"/>
            <path d="M16 38 Q16 32 24 32 Q32 32 32 38" fill="#0078d7"/>
          </svg>
        )
      case 'resume':
        return (
          <svg viewBox="0 0 48 48" className="icon-svg">
            {/* Document */}
            <path d="M10 4 L10 44 L38 44 L38 14 L28 4 Z" fill="#fff"/>
            <path d="M28 4 L28 14 L38 14 Z" fill="#e0e0e0"/>
            <path d="M10 4 L10 44 L38 44 L38 14 L28 14 L28 4 Z" stroke="#666" strokeWidth="1" fill="none"/>
            {/* Lines */}
            <line x1="14" y1="20" x2="34" y2="20" stroke="#333" strokeWidth="2"/>
            <line x1="14" y1="26" x2="34" y2="26" stroke="#999" strokeWidth="1.5"/>
            <line x1="14" y1="31" x2="34" y2="31" stroke="#999" strokeWidth="1.5"/>
            <line x1="14" y1="36" x2="28" y2="36" stroke="#999" strokeWidth="1.5"/>
          </svg>
        )
      case 'projects':
        return (
          <svg viewBox="0 0 48 48" className="icon-svg">
            {/* Folder */}
            <path d="M4 10 L4 40 L44 40 L44 14 L24 14 L20 10 Z" fill="#ffc859"/>
            <path d="M4 10 L4 12 L20 12 L24 16 L44 16 L44 14 L24 14 L20 10 Z" fill="#ffd87a"/>
            {/* Star */}
            <polygon points="24,20 26,26 32,26 27,30 29,36 24,32 19,36 21,30 16,26 22,26" fill="#ff6b35"/>
          </svg>
        )
      case 'contact':
        return (
          <svg viewBox="0 0 48 48" className="icon-svg">
            {/* Envelope */}
            <rect x="6" y="12" width="36" height="26" rx="2" fill="#f5f5f5" stroke="#666" strokeWidth="1"/>
            <path d="M6 14 L24 28 L42 14" stroke="#666" strokeWidth="1.5" fill="none"/>
            {/* Blue accent */}
            <rect x="6" y="12" width="36" height="6" fill="#0078d7" opacity="0.8"/>
          </svg>
        )
      default:
        return (
          <svg viewBox="0 0 48 48" className="icon-svg">
            <rect x="8" y="8" width="32" height="32" fill="#ffc859" rx="2"/>
          </svg>
        )
    }
  }

  return (
    <button
      className={`desktop-icon ${isSelected ? 'selected' : ''}`}
      onClick={(e) => {
        e.stopPropagation()
        setIsSelected(true)
      }}
      onDoubleClick={(e) => {
        e.stopPropagation()
        onDoubleClick()
      }}
      onBlur={() => setIsSelected(false)}
      style={style}
    >
      <div className="icon-image">
        {getIcon()}
      </div>
      <span className="icon-label">{title}</span>
    </button>
  )
}

export default DesktopIcon
