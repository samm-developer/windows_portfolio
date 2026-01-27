import { useState, useEffect } from 'react'
import './Taskbar.css'

const Taskbar = ({ 
  openWindows, 
  activeWindow, 
  onStartClick, 
  startMenuOpen,
  onWindowClick,
  onToggleCrt,
  crtEnabled
}) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const getWindowIcon = (id) => {
    switch (id) {
      case 'about':
        return (
          <svg viewBox="0 0 16 16" className="taskbar-icon-svg">
            <path d="M2 4 L2 14 L14 14 L14 6 L8 6 L7 4 Z" fill="#ffc859"/>
            <circle cx="8" cy="10" r="2" fill="#0078d7"/>
          </svg>
        )
      case 'resume':
        return (
          <svg viewBox="0 0 16 16" className="taskbar-icon-svg">
            <path d="M3 1 L3 15 L13 15 L13 5 L9 1 Z" fill="#fff" stroke="#666" strokeWidth="0.5"/>
            <line x1="5" y1="7" x2="11" y2="7" stroke="#333" strokeWidth="1"/>
            <line x1="5" y1="9" x2="11" y2="9" stroke="#999" strokeWidth="0.5"/>
            <line x1="5" y1="11" x2="11" y2="11" stroke="#999" strokeWidth="0.5"/>
          </svg>
        )
      case 'projects':
        return (
          <svg viewBox="0 0 16 16" className="taskbar-icon-svg">
            <path d="M2 4 L2 14 L14 14 L14 6 L8 6 L7 4 Z" fill="#ffc859"/>
            <polygon points="8,7 8.5,9 10.5,9 9,10.5 9.5,12.5 8,11 6.5,12.5 7,10.5 5.5,9 7.5,9" fill="#ff6b35"/>
          </svg>
        )
      case 'contact':
        return (
          <svg viewBox="0 0 16 16" className="taskbar-icon-svg">
            <rect x="2" y="4" width="12" height="9" rx="1" fill="#f5f5f5" stroke="#666" strokeWidth="0.5"/>
            <path d="M2 5 L8 10 L14 5" stroke="#666" strokeWidth="0.5" fill="none"/>
          </svg>
        )
      default:
        return null
    }
  }

  const getWindowTitle = (id) => {
    switch (id) {
      case 'about':
        return 'About Me'
      case 'resume':
        return 'My Resume'
      case 'projects':
        return 'My Projects'
      case 'contact':
        return 'Contact Me'
      default:
        return ''
    }
  }

  return (
    <div className="taskbar" onClick={(e) => e.stopPropagation()}>
      {/* Start Button */}
      <button 
        className={`start-button ${startMenuOpen ? 'active' : ''}`}
        onClick={onStartClick}
      >
        <div className="start-logo">
          <svg viewBox="0 0 24 24" className="windows-logo-small">
            <rect x="2" y="2" width="9" height="9" fill="#ff6b35"/>
            <rect x="13" y="2" width="9" height="9" fill="#7cb342"/>
            <rect x="2" y="13" width="9" height="9" fill="#42a5f5"/>
            <rect x="13" y="13" width="9" height="9" fill="#ffca28"/>
          </svg>
        </div>
        <span className="start-text">start</span>
      </button>

      {/* Quick Launch Area */}
      <div className="quick-launch">
        <div className="separator"></div>
      </div>

      {/* Open Windows */}
      <div className="taskbar-windows">
        {openWindows.map((window) => (
          <button
            key={window.id}
            className={`taskbar-window-button ${activeWindow === window.id && !window.minimized ? 'active' : ''} ${window.minimized ? 'minimized' : ''}`}
            onClick={() => onWindowClick(window.id)}
          >
            <div className="taskbar-window-icon">
              {getWindowIcon(window.id)}
            </div>
            <span className="taskbar-window-title">{getWindowTitle(window.id)}</span>
          </button>
        ))}
      </div>

      {/* System Tray */}
      <div className="system-tray">
        <div className="tray-icons">
          <button 
            className={`tray-button ${crtEnabled ? 'active' : ''}`}
            onClick={onToggleCrt}
            title="Toggle CRT effects"
          >
            <svg viewBox="0 0 16 16" className="tray-icon">
              <rect x="2" y="3" width="12" height="9" rx="1" fill="none" stroke="#fff" strokeWidth="1.5"/>
              <rect x="6" y="12" width="4" height="2" fill="#fff"/>
              <line x1="4" y1="14" x2="12" y2="14" stroke="#fff" strokeWidth="1.5"/>
            </svg>
          </button>
          <button 
            className="tray-button"
            onClick={toggleFullscreen}
            title="Toggle fullscreen mode"
          >
            <svg viewBox="0 0 16 16" className="tray-icon">
              {isFullscreen ? (
                <>
                  <path d="M5 2 L2 2 L2 5" stroke="#fff" strokeWidth="1.5" fill="none"/>
                  <path d="M11 2 L14 2 L14 5" stroke="#fff" strokeWidth="1.5" fill="none"/>
                  <path d="M5 14 L2 14 L2 11" stroke="#fff" strokeWidth="1.5" fill="none"/>
                  <path d="M11 14 L14 14 L14 11" stroke="#fff" strokeWidth="1.5" fill="none"/>
                </>
              ) : (
                <>
                  <path d="M2 5 L2 2 L5 2" stroke="#fff" strokeWidth="1.5" fill="none"/>
                  <path d="M14 5 L14 2 L11 2" stroke="#fff" strokeWidth="1.5" fill="none"/>
                  <path d="M2 11 L2 14 L5 14" stroke="#fff" strokeWidth="1.5" fill="none"/>
                  <path d="M14 11 L14 14 L11 14" stroke="#fff" strokeWidth="1.5" fill="none"/>
                </>
              )}
            </svg>
          </button>
        </div>
        <div className="clock">
          {formatTime(currentTime)}
        </div>
      </div>
    </div>
  )
}

export default Taskbar
