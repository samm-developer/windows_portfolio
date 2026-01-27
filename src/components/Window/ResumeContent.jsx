import { useState } from 'react'
import './ContentStyles.css'
import resumePdf from '../../assets/Shashwat_CV.pdf'

const ResumeContent = () => {
  const [zoom, setZoom] = useState(100)

  const handleZoomIn = () => {
    setZoom(prev => {
      const newZoom = Math.min(prev + 25, 200)
      // Update PDF zoom via iframe if needed
      return newZoom
    })
  }

  const handleZoomOut = () => {
    setZoom(prev => {
      const newZoom = Math.max(prev - 25, 50)
      return newZoom
    })
  }

  const handleSave = () => {
    const link = document.createElement('a')
    link.href = resumePdf
    link.download = 'Shashwat_CV.pdf'
    link.click()
  }

  const handlePrint = () => {
    window.open(resumePdf, '_blank')
  }

  return (
    <div className="content-wrapper resume-content pdf-viewer-wrapper">
      {/* Windows XP Style PDF Viewer */}
      <div className="pdf-viewer-window">
        {/* Title Bar */}
        <div className="pdf-title-bar">
          <div className="pdf-title-left">
            <svg viewBox="0 0 16 16" className="pdf-icon" width="16" height="16">
              <path d="M3 1 L3 15 L13 15 L13 5 L9 1 Z" fill="#fff" stroke="#666" strokeWidth="0.5"/>
              <path d="M9 1 L9 5 L13 5 Z" fill="#e0e0e0"/>
              <rect x="5" y="7" width="6" height="1" fill="#cc0000"/>
              <rect x="5" y="9" width="6" height="1" fill="#cc0000"/>
            </svg>
            <span className="pdf-title-text">My Resume</span>
          </div>
          <div className="pdf-title-buttons">
            <button className="pdf-window-button minimize">_</button>
            <button className="pdf-window-button maximize">□</button>
            <button className="pdf-window-button close">×</button>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="pdf-menu-bar">
          <div className="pdf-menu-item">File</div>
          <div className="pdf-menu-item">View</div>
          <div className="pdf-menu-item">Help</div>
        </div>

        {/* Toolbar */}
        <div className="pdf-toolbar">
          <button className="pdf-toolbar-button" onClick={handleZoomIn} title="Zoom In">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="8" y1="4" x2="8" y2="12" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="4" y1="8" x2="12" y2="8" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span>Zoom</span>
          </button>
          <button className="pdf-toolbar-button" onClick={handleSave} title="Save">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <rect x="2" y="2" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="2" y1="6" x2="14" y2="6" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="5" y1="2" x2="5" y2="6" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span>Save</span>
          </button>
          <button className="pdf-toolbar-button" onClick={handlePrint} title="Print">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <rect x="3" y="4" width="10" height="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="5" y="2" width="6" height="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="3" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="3" y1="9" x2="13" y2="9" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span>Print</span>
          </button>
          <button className="pdf-toolbar-button" title="Contact Me">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <circle cx="8" cy="8" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 3 A5 5 0 0 1 13 8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 13 A5 5 0 0 1 3 8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span>Contact Me</span>
          </button>
        </div>

        {/* PDF Content Area */}
        <div className="pdf-content-area">
          <iframe
            src={`${resumePdf}#zoom=${zoom}&toolbar=0&navpanes=0&scrollbar=1`}
            className="pdf-object"
            title="Resume PDF"
          />
        </div>

        {/* Status Bar */}
        <div className="pdf-status-bar">
          <span>Click to zoom, then drag to view other areas</span>
        </div>
      </div>
    </div>
  )
}

export default ResumeContent
