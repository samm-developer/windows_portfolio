import { useState, useEffect } from 'react'
import LoginScreen from './components/LoginScreen/LoginScreen'
import Desktop from './components/Desktop/Desktop'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [crtEnabled, setCrtEnabled] = useState(false)

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
