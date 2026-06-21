import { useState } from 'react'
import './ContentStyles.css'

const ProjectsContent = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "The King's Library",
      category: 'web',
      description: 'Full-stack library management system built from scratch. Features real-time seat allocation with MongoDB transactions, secure auth with access/refresh tokens, book rental & purchase module, Razorpay & PhonePe payments, and a RabbitMQ notification microservice for payment confirmations and booking alerts.',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'RabbitMQ', 'Live Product'],
      color: '#ff6b35',
      link: 'https://thekingslibrary.in/'
    },
    {
      id: 2,
      title: 'SyncStream',
      category: 'web',
      description: 'Real-time collaborative video platform with synchronized YouTube playback for multiple users. Built with Socket.io, Node.js, and React — achieving sub-second sync accuracy using timestamp-based latency compensation and a scalable client–server architecture.',
      tags: ['Socket.io', 'React', 'Node.js', 'Real-time', 'WebSocket'],
      color: '#42a5f5',
      link: 'https://github.com/samm-developer/Watch-Party'
    },
    {
      id: 3,
      title: 'YouTube Clone',
      category: 'web',
      description: 'Video streaming platform with optimized search using debouncing and caching — reducing API calls by 98%. Features nested comments via recursive components, live chat simulation, YouTube Data API v3 integration, and a responsive Tailwind CSS UI.',
      tags: ['React', 'Redux Toolkit', 'Tailwind CSS', 'API Integration'],
      color: '#7cb342',
      link: 'https://github.com/samm-developer/YT_Srch-Nstd_Cmnt'
    },
    {
      id: 4,
      title: 'Rajat XP Portfolio',
      category: 'web',
      description: 'This Windows XP–themed portfolio site — built with React and Vite to showcase my projects, experience, and skills in an interactive, memorable way.',
      tags: ['React', 'Vite', 'Portfolio', 'UI/UX'],
      color: '#9c27b0',
      link: null
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="content-wrapper projects-content">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Production apps and personal projects — from library management to real-time video sync</p>
      </div>

      <div className="projects-filters">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div
              className="project-thumbnail"
              style={{ backgroundColor: project.color }}
            >
              <div className="project-icon">
                <svg viewBox="0 0 48 48">
                  <rect x="8" y="8" width="32" height="32" rx="4" fill="white" opacity="0.2"/>
                  <rect x="12" y="12" width="24" height="24" rx="2" fill="white" opacity="0.3"/>
                  <circle cx="24" cy="24" r="6" fill="white" opacity="0.5"/>
                </svg>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-view-btn"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                View Project →
              </a>
            ) : (
              <button className="project-view-btn" disabled>View Project →</button>
            )}
          </div>
        ))}
      </div>

      <div className="projects-stats">
        <div className="stat">
          <span className="stat-number">500+</span>
          <span className="stat-label">DSA Problems Solved</span>
        </div>
        <div className="stat">
          <span className="stat-number">40%</span>
          <span className="stat-label">Load Time Reduced</span>
        </div>
        <div className="stat">
          <span className="stat-number">98%</span>
          <span className="stat-label">Fewer API Calls</span>
        </div>
        <div className="stat">
          <span className="stat-number">1</span>
          <span className="stat-label">Live Production App</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectsContent
