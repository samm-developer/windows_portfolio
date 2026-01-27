import { useState, useCallback, useEffect } from 'react'
import Taskbar from '../Taskbar/Taskbar'
import DesktopIcon from '../Icons/DesktopIcon'
import Window from '../Window/Window'
import StartMenu from '../StartMenu/StartMenu'
import AboutMeContent from '../Window/AboutMeContent'
import ResumeContent from '../Window/ResumeContent'
import ProjectsContent from '../Window/ProjectsContent'
import ContactContent from '../Window/ContactContent'
import './Desktop.css'

const Desktop = ({ onLogout, crtEnabled, toggleCrt }) => {
  const [openWindows, setOpenWindows] = useState([])
  const [activeWindow, setActiveWindow] = useState(null)
  const [startMenuOpen, setStartMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const icons = [
    { id: 'about', title: 'About Me', icon: 'about' },
    { id: 'resume', title: 'My Resume', icon: 'resume' },
    { id: 'projects', title: 'My Projects', icon: 'projects' },
    { id: 'contact', title: 'Contact Me', icon: 'contact' },
  ]

  const getWindowContent = (id) => {
    switch (id) {
      case 'about':
        return <AboutMeContent />
      case 'resume':
        return <ResumeContent />
      case 'projects':
        return <ProjectsContent />
      case 'contact':
        return <ContactContent />
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

  const openWindow = useCallback((id) => {
    if (!openWindows.find(w => w.id === id)) {
      const basePosition = isMobile 
        ? { x: 0, y: 0 } 
        : { x: 100 + openWindows.length * 30, y: 50 + openWindows.length * 30 }
      
      // For resume on mobile, use full screen dimensions
      let defaultSize
      if (isMobile && id === 'resume') {
        defaultSize = { 
          width: window.innerWidth, 
          height: window.innerHeight - (window.innerWidth <= 480 ? 55 : 50) 
        }
      } else if (isMobile) {
        defaultSize = { 
          width: window.innerWidth, 
          height: window.innerHeight - (window.innerWidth <= 480 ? 55 : 50) 
        }
      } else {
        defaultSize = { width: 950, height: 701 }
      }
      
      setOpenWindows(prev => [...prev, { 
        id, 
        position: basePosition,
        size: defaultSize,
        minimized: false,
        maximized: isMobile // Auto-maximize on mobile
      }])
    }
    setActiveWindow(id)
    setStartMenuOpen(false)
  }, [openWindows, isMobile])

  const closeWindow = useCallback((id) => {
    setOpenWindows(prev => prev.filter(w => w.id !== id))
    if (activeWindow === id) {
      const remaining = openWindows.filter(w => w.id !== id)
      setActiveWindow(remaining.length > 0 ? remaining[remaining.length - 1].id : null)
    }
  }, [openWindows, activeWindow])

  const minimizeWindow = useCallback((id) => {
    setOpenWindows(prev => prev.map(w => 
      w.id === id ? { ...w, minimized: true } : w
    ))
    const visible = openWindows.filter(w => w.id !== id && !w.minimized)
    setActiveWindow(visible.length > 0 ? visible[visible.length - 1].id : null)
  }, [openWindows])

  const maximizeWindow = useCallback((id) => {
    setOpenWindows(prev => prev.map(w => 
      w.id === id ? { ...w, maximized: !w.maximized } : w
    ))
  }, [])

  const restoreWindow = useCallback((id) => {
    setOpenWindows(prev => prev.map(w => 
      w.id === id ? { ...w, minimized: false } : w
    ))
    setActiveWindow(id)
  }, [])

  const focusWindow = useCallback((id) => {
    setActiveWindow(id)
    setStartMenuOpen(false)
  }, [])

  const updateWindowPosition = useCallback((id, position) => {
    setOpenWindows(prev => prev.map(w => 
      w.id === id ? { ...w, position } : w
    ))
  }, [])

  const updateWindowSize = useCallback((id, size) => {
    setOpenWindows(prev => prev.map(w => 
      w.id === id ? { ...w, size } : w
    ))
  }, [])

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen)
  }

  const handleDesktopClick = () => {
    setStartMenuOpen(false)
  }

  return (
    <div className="desktop" onClick={handleDesktopClick}>
      {/* Desktop background */}
      <div className="desktop-background"></div>
      
      {/* Desktop icons */}
      <div className="desktop-icons">
        {icons.map((icon, index) => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            title={icon.title}
            icon={icon.icon}
            onDoubleClick={() => openWindow(icon.id)}
            style={isMobile ? {} : { top: `${20 + index * 115}px` }}
          />
        ))}
      </div>

      {/* Windows */}
      {openWindows.map((window, index) => (
        <Window
          key={window.id}
          id={window.id}
          title={getWindowTitle(window.id)}
          position={window.position}
          size={window.size}
          minimized={window.minimized}
          maximized={window.maximized}
          isActive={activeWindow === window.id}
          zIndex={100 + index + (activeWindow === window.id ? 100 : 0)}
          onClose={() => closeWindow(window.id)}
          onMinimize={() => minimizeWindow(window.id)}
          onMaximize={() => maximizeWindow(window.id)}
          onFocus={() => focusWindow(window.id)}
          onPositionChange={(pos) => updateWindowPosition(window.id, pos)}
          onSizeChange={(size) => updateWindowSize(window.id, size)}
        >
          {getWindowContent(window.id)}
        </Window>
      ))}

      {/* Start Menu */}
      <StartMenu 
        isOpen={startMenuOpen}
        onClose={() => setStartMenuOpen(false)}
        onOpenWindow={openWindow}
        onLogout={onLogout}
      />

      {/* Taskbar */}
      <Taskbar
        openWindows={openWindows}
        activeWindow={activeWindow}
        onStartClick={toggleStartMenu}
        startMenuOpen={startMenuOpen}
        onWindowClick={restoreWindow}
        onToggleCrt={toggleCrt}
        crtEnabled={crtEnabled}
      />
    </div>
  )
}

export default Desktop
