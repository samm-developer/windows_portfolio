import { useState, useRef, useEffect } from 'react'
import './Window.css'

const Window = ({
  id,
  title,
  children,
  position,
  size,
  minimized,
  maximized,
  isActive,
  zIndex,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onPositionChange,
  onSizeChange
}) => {
  const windowRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 })

  // Handle dragging
  const handleMouseDown = (e) => {
    if (e.target.closest('.window-controls')) return
    
    onFocus()
    if (maximized) return
    
    setIsDragging(true)
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  const handleMouseMove = (e) => {
    if (isDragging && !maximized) {
      const newX = Math.max(0, e.clientX - dragOffset.x)
      const newY = Math.max(0, e.clientY - dragOffset.y)
      onPositionChange({ x: newX, y: newY })
    }
    
    if (isResizing) {
      const newWidth = Math.max(400, resizeStart.width + (e.clientX - resizeStart.x))
      const newHeight = Math.max(300, resizeStart.height + (e.clientY - resizeStart.y))
      onSizeChange({ width: newWidth, height: newHeight })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsResizing(false)
  }

  // Resize handle
  const handleResizeStart = (e) => {
    e.stopPropagation()
    onFocus()
    if (maximized) return
    
    setIsResizing(true)
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height
    })
  }

  useEffect(() => {
    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, isResizing, dragOffset, resizeStart])

  if (minimized) return null

  const windowStyle = maximized
    ? {
        top: 0,
        left: 0,
        width: '100%',
        height: 'calc(100% - 30px)',
        zIndex
      }
    : {
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
        zIndex
      }

  const getWindowIcon = () => {
    switch (id) {
      case 'about':
        return (
          <svg viewBox="0 0 16 16" className="title-icon">
            <path d="M2 4 L2 14 L14 14 L14 6 L8 6 L7 4 Z" fill="#ffc859"/>
            <circle cx="8" cy="10" r="2" fill="#0078d7"/>
          </svg>
        )
      case 'resume':
        return (
          <svg viewBox="0 0 16 16" className="title-icon">
            <path d="M3 1 L3 15 L13 15 L13 5 L9 1 Z" fill="#fff" stroke="#666" strokeWidth="0.5"/>
            <line x1="5" y1="7" x2="11" y2="7" stroke="#333" strokeWidth="1"/>
            <line x1="5" y1="9" x2="11" y2="9" stroke="#999" strokeWidth="0.5"/>
          </svg>
        )
      case 'projects':
        return (
          <svg viewBox="0 0 16 16" className="title-icon">
            <path d="M2 4 L2 14 L14 14 L14 6 L8 6 L7 4 Z" fill="#ffc859"/>
            <polygon points="8,7 8.5,9 10.5,9 9,10.5 9.5,12.5 8,11 6.5,12.5 7,10.5 5.5,9 7.5,9" fill="#ff6b35"/>
          </svg>
        )
      case 'contact':
        return (
          <svg viewBox="0 0 16 16" className="title-icon">
            <rect x="2" y="4" width="12" height="9" rx="1" fill="#f5f5f5" stroke="#666" strokeWidth="0.5"/>
            <path d="M2 5 L8 10 L14 5" stroke="#666" strokeWidth="0.5" fill="none"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div
      ref={windowRef}
      className={`window ${isActive ? 'active' : 'inactive'}`}
      style={windowStyle}
      onMouseDown={onFocus}
    >
      {/* Title Bar */}
      <div 
        className="window-titlebar"
        onMouseDown={handleMouseDown}
        onDoubleClick={onMaximize}
      >
        <div className="window-title">
          {getWindowIcon()}
          <span>{title}</span>
        </div>
        <div className="window-controls">
          <button 
            className="window-button minimize"
            onClick={onMinimize}
            title="Minimize"
          >
            <svg viewBox="0 0 10 10">
              <rect x="1" y="7" width="8" height="2" fill="currentColor"/>
            </svg>
          </button>
          <button 
            className="window-button maximize"
            onClick={onMaximize}
            title={maximized ? "Restore" : "Maximize"}
          >
            {maximized ? (
              <svg viewBox="0 0 10 10">
                <rect x="2" y="4" width="6" height="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M4 4 L4 2 L9 2 L9 7 L8 7" fill="none" stroke="currentColor" strokeWidth="1"/>
              </svg>
            ) : (
              <svg viewBox="0 0 10 10">
                <rect x="1" y="1" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            )}
          </button>
          <button 
            className="window-button close"
            onClick={onClose}
            title="Close"
          >
            <svg viewBox="0 0 10 10">
              <path d="M1 1 L9 9 M9 1 L1 9" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="window-content">
        {children}
      </div>

      {/* Resize Handle */}
      {!maximized && (
        <div 
          className="resize-handle"
          onMouseDown={handleResizeStart}
        />
      )}
    </div>
  )
}

export default Window
