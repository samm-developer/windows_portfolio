import { useState, useRef, useEffect, useCallback } from 'react'
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
  const [resizeDirection, setResizeDirection] = useState(null)
  const dragOffsetRef = useRef({ x: 0, y: 0 })
  const resizeStartRef = useRef({ x: 0, y: 0, width: 0, height: 0, left: 0, top: 0 })
  const isDraggingRef = useRef(false)
  const isResizingRef = useRef(false)
  const resizeDirectionRef = useRef(null)

  // Handle dragging
  const handleMouseDown = (e) => {
    if (e.target.closest('.window-controls') || e.target.closest('.resize-handle')) return
    
    onFocus()
    if (maximized) return
    
    setIsDragging(true)
    isDraggingRef.current = true
    dragOffsetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    }
  }

  const handleMouseMove = useCallback((e) => {
    if (isDraggingRef.current && !maximized) {
      const newX = Math.max(0, e.clientX - dragOffsetRef.current.x)
      const newY = Math.max(0, e.clientY - dragOffsetRef.current.y)
      onPositionChange({ x: newX, y: newY })
    }
    
    if (isResizingRef.current && resizeDirectionRef.current) {
      const start = resizeStartRef.current
      const direction = resizeDirectionRef.current
      const minWidth = 400
      const minHeight = 300
      
      let newWidth = start.width
      let newHeight = start.height
      let newX = start.left
      let newY = start.top
      
      // Handle horizontal resizing
      if (direction.includes('e')) {
        newWidth = Math.max(minWidth, start.width + (e.clientX - start.x))
      }
      if (direction.includes('w')) {
        const deltaX = e.clientX - start.x
        newWidth = Math.max(minWidth, start.width - deltaX)
        newX = Math.max(0, start.left + deltaX)
      }
      
      // Handle vertical resizing
      if (direction.includes('s')) {
        newHeight = Math.max(minHeight, start.height + (e.clientY - start.y))
      }
      if (direction.includes('n')) {
        const deltaY = e.clientY - start.y
        newHeight = Math.max(minHeight, start.height - deltaY)
        newY = Math.max(0, start.top + deltaY)
      }
      
      onSizeChange({ width: newWidth, height: newHeight })
      if (direction.includes('w') || direction.includes('n')) {
        onPositionChange({ x: newX, y: newY })
      }
    }
  }, [maximized, onPositionChange, onSizeChange])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    setIsResizing(false)
    setResizeDirection(null)
    isDraggingRef.current = false
    isResizingRef.current = false
    resizeDirectionRef.current = null
  }, [])

  // Resize handle
  const handleResizeStart = (e, direction) => {
    e.stopPropagation()
    e.preventDefault()
    onFocus()
    if (maximized) return
    
    setIsResizing(true)
    setResizeDirection(direction)
    isResizingRef.current = true
    resizeDirectionRef.current = direction
    resizeStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
      left: position.x,
      top: position.y
    }
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
  }, [isDragging, isResizing, handleMouseMove, handleMouseUp])

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

      {/* Resize Handles */}
      {!maximized && (
        <>
          {/* Corners */}
          <div 
            className="resize-handle resize-nw"
            onMouseDown={(e) => handleResizeStart(e, 'nw')}
          />
          <div 
            className="resize-handle resize-ne"
            onMouseDown={(e) => handleResizeStart(e, 'ne')}
          />
          <div 
            className="resize-handle resize-sw"
            onMouseDown={(e) => handleResizeStart(e, 'sw')}
          />
          <div 
            className="resize-handle resize-se"
            onMouseDown={(e) => handleResizeStart(e, 'se')}
          />
          {/* Edges */}
          <div 
            className="resize-handle resize-n"
            onMouseDown={(e) => handleResizeStart(e, 'n')}
          />
          <div 
            className="resize-handle resize-s"
            onMouseDown={(e) => handleResizeStart(e, 's')}
          />
          <div 
            className="resize-handle resize-w"
            onMouseDown={(e) => handleResizeStart(e, 'w')}
          />
          <div 
            className="resize-handle resize-e"
            onMouseDown={(e) => handleResizeStart(e, 'e')}
          />
        </>
      )}
    </div>
  )
}

export default Window
