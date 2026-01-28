import { useState, useEffect } from 'react'
import './DesktopIcon.css'
import aboutIcon from '../../assets/about.webp'
import resumeIcon from '../../assets/resume.webp'
import projectsIcon from '../../assets/projects.webp'
import contactIcon from '../../assets/contact.webp'

const DesktopIcon = ({ id, title, icon, onDoubleClick, style }) => {
  const [isSelected, setIsSelected] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [lastClickTime, setLastClickTime] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getIcon = () => {
    switch (icon) {
      case 'about':
        // About Me icon using local image
        return (
          <img 
            src={aboutIcon} 
            alt="About Me" 
            className="icon-img"
          />
        )
      case 'resume':
        // PDF document icon using local image
        return (
          <img 
            src={resumeIcon} 
            alt="Resume" 
            className="icon-img"
          />
        )
      case 'projects':
        // My Projects icon using local image
        return (
          <img 
            src={projectsIcon} 
            alt="My Projects" 
            className="icon-img"
          />
        )
      case 'contact':
        // Contact icon using local image
        return (
          <img 
            src={contactIcon} 
            alt="Contact" 
            className="icon-img"
          />
        )
      default:
        return (
          <svg viewBox="0 0 64 64" className="icon-svg">
            <rect x="8" y="8" width="48" height="48" fill="#ffc859" rx="4"/>
          </svg>
        )
    }
  }

  const handleClick = (e) => {
    e.stopPropagation()
    setIsSelected(true)
    
    if (isMobile) {
      // On mobile, single click opens the window
      onDoubleClick()
    } else {
      // On desktop, check for double click
      const currentTime = Date.now()
      if (currentTime - lastClickTime < 300) {
        // Double click detected
        onDoubleClick()
      }
      setLastClickTime(currentTime)
    }
  }

  return (
    <button
      className={`desktop-icon ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
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
