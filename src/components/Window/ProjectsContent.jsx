import { useState } from 'react'
import './ContentStyles.css'

const ProjectsContent = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'SmartTicket Assigner (AI + Automation)',
      category: 'ai',
      description: 'Designed and implemented a system that reads incoming tickets and extracts required technologies using natural language processing (NLP). Created a dynamic skill-matching algorithm to identify team members who possess the relevant expertise. Built an automated ticket assignment engine that assigns tasks to the most suitable person based on skills, availability, and workload.',
      tags: ['AI', 'NLP', 'Automation', 'Python'],
      color: '#ff6b35',
      link: 'https://github.com/Sam7777M/Auto-Ticket-Assigning-Agent'
    },
    {
      id: 2,
      title: 'PriceWise',
      category: 'web',
      description: 'A project to solve the problem faced by customers to get the lowest price to compare current price. It shows the customer the lowest price, average price, and current price of any product on Amazon or Flipkart so the customer can compare prices easily, especially during sales.',
      tags: ['Web App', 'Price Comparison', 'E-commerce'],
      color: '#42a5f5',
      link: 'https://github.com/samm-developer/PriceWise'
    },
    {
      id: 3,
      title: 'WatchParty',
      category: 'web',
      description: 'Developed realtime collaborative video platform enabling synchronised YouTube player for multiple users using WebSocket based architecture (especially for couples). Implemented advanced synchronisation algorithms with timestamp-based latency compensation, achieving sub-second accuracy for play/pause/seek operations across all connected clients.',
      tags: ['WebSocket', 'Real-time', 'Video Streaming', 'Node.js'],
      color: '#7cb342',
      link: 'https://github.com/Sam7777M/watch_party'
    },
    {
      id: 4,
      title: 'EasyED (Mobile App)',
      category: 'mobile',
      description: 'Automatic counselling system designed using React Native technology. The application sends reports to parents at month-end. This project was showcased in GFG HackerFest where I secured 2nd rank. Available on PlayStore.',
      tags: ['React Native', 'Mobile App', 'Education'],
      color: '#9c27b0',
      link: null
    },
    {
      id: 5,
      title: 'Smart Truck Routing Solution',
      category: 'ai',
      description: 'Winner (2025) and Runner up (2024) at Smart India Hackathon by Govt of India. Designed a smart truck routing solution optimizing routes by goods availability, improving vehicle utilization by 30%.',
      tags: ['AI', 'Optimization', 'Hackathon Winner', 'Logistics'],
      color: '#ff9800',
      link: null
    },
    {
      id: 6,
      title: 'Node Module (Published on NPM)',
      category: 'tools',
      description: 'Published my own node-module on npm for the developer community.',
      tags: ['NPM', 'Node.js', 'Open Source'],
      color: '#00bcd4',
      link: null
    },
    {
      id: 7,
      title: 'Extension Service',
      category: 'tools',
      description: 'Created my own extension for controlling the speed of any video. Used it to increase Youtube video speed beyond 2X for learning purpose.',
      tags: ['Browser Extension', 'Chrome Extension', 'Productivity'],
      color: '#e91e63',
      link: null
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'tools', label: 'Tools & Extensions' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="content-wrapper projects-content">
      {/* Header */}
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>A collection of projects showcasing my development expertise and achievements</p>
      </div>

      {/* Filters */}
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

      {/* Projects Grid */}
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

      {/* Stats */}
      <div className="projects-stats">
        <div className="stat">
          <span className="stat-number">4+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat">
          <span className="stat-number">1000+</span>
          <span className="stat-label">DSA Problems Solved</span>
        </div>
        <div className="stat">
          <span className="stat-number">2</span>
          <span className="stat-label">Hackathon Wins</span>
        </div>
        <div className="stat">
          <span className="stat-number">1M+</span>
          <span className="stat-label">Users Supported</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectsContent
