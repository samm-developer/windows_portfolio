import { useState, useEffect } from 'react'
import LoginScreen from './components/LoginScreen/LoginScreen'
import Desktop from './components/Desktop/Desktop'
import './App.css'
import desktopBg from './assets/sam-background.png'
import mobileBg from './assets/sam-mobile.png'
import aboutIcon from './assets/about.webp'
import resumeIcon from './assets/resume.webp'
import projectsIcon from './assets/projects.webp'
import contactIcon from './assets/contact.webp'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [crtEnabled, setCrtEnabled] = useState(false)

  // Preload heavy background + desktop icon images while on login / loading screens
  useEffect(() => {
    const images = [
      desktopBg,
      mobileBg,
      aboutIcon,
      resumeIcon,
      projectsIcon,
      contactIcon,
    ]
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  const handleLogin = () => {
    setIsLoading(true)
    // Simulate Windows XP login animation
    setTimeout(() => {
      setIsLoading(false)
      setIsLoggedIn(true)
    }, 1500)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const handleRestart = () => {
    setIsLoggedIn(false)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const toggleCrt = () => {
    setCrtEnabled(!crtEnabled)
  }

  return (
    <div className={`app ${crtEnabled ? 'crt-enabled' : ''}`}>
      {!isLoggedIn ? (
        <LoginScreen 
          onLogin={handleLogin} 
          onRestart={handleRestart}
          isLoading={isLoading}
        />
      ) : (
        <Desktop 
          onLogout={handleLogout}
          crtEnabled={crtEnabled}
          toggleCrt={toggleCrt}
        />
      )}
    </div>
  )
}

export default App
