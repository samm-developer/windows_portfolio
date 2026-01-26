import { useState } from 'react'
import './LoginScreen.css'

const LoginScreen = ({ onLogin, onRestart, isLoading }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="login-screen">
      {/* Scanlines overlay */}
      <div className="scanlines"></div>
      
      {/* Main content area */}
      <div className="login-content">
        {/* Left side - Logo */}
        <div className="login-left">
          <div className="xp-logo-container">
            <div className="windows-flag">
              <div className="flag-piece red"></div>
              <div className="flag-piece green"></div>
              <div className="flag-piece blue"></div>
              <div className="flag-piece yellow"></div>
            </div>
            <div className="logo-text">
              <span className="mitch">SAM</span>
              <span className="ivin">Developer</span>
              <span className="xp">XP</span>
            </div>
            <div className="visual-designer-subtitle">Senior Software Developer</div>
          </div>
          
          <p className="login-instruction">
            To begin, click on SAM to log in
          </p>
        </div>
        
        {/* Center divider */}
        <div className="login-divider"></div>
        
        {/* Right side - User profile */}
        <div className="login-right">
          <button 
            className={`user-profile ${isHovered ? 'hovered' : ''}`}
            onClick={onLogin}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            disabled={isLoading}
          >
            <div className="user-avatar">
              <div className="avatar-image">
                <svg viewBox="0 0 100 100" className="avatar-svg">
                  {/* Background - sky */}
                  <rect x="0" y="0" width="100" height="100" fill="#87ceeb"/>
                  {/* Clouds */}
                  <ellipse cx="20" cy="25" rx="15" ry="8" fill="white" opacity="0.8"/>
                  <ellipse cx="80" cy="30" rx="12" ry="6" fill="white" opacity="0.8"/>
                  {/* Person - head */}
                  <ellipse cx="50" cy="45" rx="18" ry="20" fill="#e8c4a0"/>
                  {/* Hair */}
                  <path d="M32 40 Q35 25 50 22 Q65 25 68 40 Q65 35 50 38 Q35 35 32 40" fill="#3d2314"/>
                  {/* Eyes */}
                  <ellipse cx="42" cy="45" rx="3" ry="4" fill="white"/>
                  <ellipse cx="58" cy="45" rx="3" ry="4" fill="white"/>
                  <circle cx="42" cy="46" r="2" fill="#3d2314"/>
                  <circle cx="58" cy="46" r="2" fill="#3d2314"/>
                  {/* Eyebrows */}
                  <path d="M36 38 Q42 36 48 39" stroke="#3d2314" strokeWidth="2" fill="none"/>
                  <path d="M52 39 Q58 36 64 38" stroke="#3d2314" strokeWidth="2" fill="none"/>
                  {/* Nose */}
                  <path d="M50 47 L48 54 L52 54" stroke="#c9a080" strokeWidth="1" fill="none"/>
                  {/* Mustache */}
                  <path d="M38 58 Q44 62 50 58 Q56 62 62 58" fill="#3d2314"/>
                  {/* Mouth */}
                  <path d="M44 62 Q50 66 56 62" stroke="#b88070" strokeWidth="1.5" fill="none"/>
                  {/* Shirt/body */}
                  <ellipse cx="50" cy="90" rx="30" ry="25" fill="#4a90d9"/>
                </svg>
              </div>
            </div>
            <div className="user-info">
              <span className="user-name">SAM</span>
              <span className="user-role">Senior Software Developer</span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Bottom taskbar */}
      <div className="login-taskbar">
        <button className="restart-button" onClick={onRestart} disabled={isLoading}>
          <div className="restart-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="7" height="7" fill="#ff6b35"/>
              <rect x="13" y="4" width="7" height="7" fill="#7cb342"/>
              <rect x="4" y="13" width="7" height="7" fill="#42a5f5"/>
              <rect x="13" y="13" width="7" height="7" fill="#ffca28"/>
            </svg>
          </div>
          <span>Restart SAM Developer XP</span>
        </button>
        
        <div className="login-footer-text">
          <p>After you log on, the system's yours to explore.</p>
          <p>Every detail has been designed with a purpose.</p>
        </div>
      </div>
      
      {/* Loading overlay */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <div className="windows-loading">
              <div className="loading-bar"></div>
            </div>
            <p>Loading your settings...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoginScreen
