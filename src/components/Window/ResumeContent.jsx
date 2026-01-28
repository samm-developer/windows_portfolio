import { useRef } from 'react'
import './ContentStyles.css'
import resumePdf from '../../assets/Sam_CV.pdf'

const ResumeContent = ({ onOpenContact }) => {
  const iframeRef = useRef(null)

  // Generate iframe src
  const getIframeSrc = () => {
    return `${resumePdf}#view=FitH&toolbar=0&navpanes=0&scrollbar=1`
  }

  const handleSave = async () => {
    try {
      // Fetch the PDF as a blob
      const response = await fetch(resumePdf)
      const blob = await response.blob()
      
      // Create an object URL from the blob
      const url = window.URL.createObjectURL(blob)
      
      // Create a temporary anchor element and trigger download
      const link = document.createElement('a')
      link.href = url
      link.download = 'Sam_cv.pdf'
      document.body.appendChild(link)
      link.click()
      
      // Clean up: remove the link and revoke the object URL
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading resume:', error)
      // Fallback: try direct download
      const link = document.createElement('a')
      link.href = resumePdf
      link.download = 'Sam_cv.pdf'
      link.click()
    }
  }

  const handlePrint = () => {
    window.open(resumePdf, '_blank')
  }

  return (
    <div className="content-wrapper resume-content pdf-viewer-wrapper">
      {/* Windows XP Style PDF Viewer */}
      <div className="pdf-viewer-window">
        {/* Menu Bar */}
        <div className="pdf-menu-bar">
          <div className="pdf-menu-item">File</div>
          <div className="pdf-menu-item">View</div>
          <div className="pdf-menu-item">Help</div>
        </div>

        {/* Toolbar */}
        <div className="pdf-toolbar">
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
          <button className="pdf-toolbar-button" onClick={onOpenContact} title="Contact Me">
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
            ref={iframeRef}
            src={getIframeSrc()}
            className="pdf-object"
            title="Resume PDF"
          />
        </div>

        {/* Status Bar */}
        <div className="pdf-status-bar">
          <span>Scroll to view the document</span>
        </div>
      </div>
    </div>
  )
}

export default ResumeContent
