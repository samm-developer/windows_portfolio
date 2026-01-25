import { useState } from 'react'
import './ContentStyles.css'

const ProjectsContent = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Redesign',
      category: 'ui',
      description: 'Complete redesign of an e-commerce platform focusing on conversion optimization.',
      tags: ['UI Design', 'UX Research', 'E-commerce'],
      color: '#ff6b35'
    },
    {
      id: 2,
      title: 'Banking App',
      category: 'ux',
      description: 'Mobile banking application with focus on accessibility and ease of use.',
      tags: ['UX Design', 'Mobile', 'Fintech'],
      color: '#42a5f5'
    },
    {
      id: 3,
      title: 'Brand Identity System',
      category: 'brand',
      description: 'Comprehensive brand guidelines for a tech startup including logo, colors, typography.',
      tags: ['Branding', 'Visual Design', 'Guidelines'],
      color: '#7cb342'
    },
    {
      id: 4,
      title: 'Health Dashboard',
      category: 'ui',
      description: 'Data visualization dashboard for healthcare professionals.',
      tags: ['Dashboard', 'Data Viz', 'Healthcare'],
      color: '#9c27b0'
    },
    {
      id: 5,
      title: 'Social Media Campaign',
      category: 'brand',
      description: 'Visual assets and campaign design for product launch.',
      tags: ['Marketing', 'Social Media', 'Campaign'],
      color: '#ff9800'
    },
    {
      id: 6,
      title: 'Travel App Concept',
      category: 'ux',
      description: 'Concept design for a travel planning application with AR features.',
      tags: ['Mobile', 'Concept', 'AR'],
      color: '#00bcd4'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ui', label: 'UI Design' },
    { id: 'ux', label: 'UX Design' },
    { id: 'brand', label: 'Branding' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="content-wrapper projects-content">
      {/* Header */}
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>A collection of selected works showcasing my design expertise</p>
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
            <button className="project-view-btn">View Project →</button>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="projects-stats">
        <div className="stat">
          <span className="stat-number">50+</span>
          <span className="stat-label">Projects Completed</span>
        </div>
        <div className="stat">
          <span className="stat-number">30+</span>
          <span className="stat-label">Happy Clients</span>
        </div>
        <div className="stat">
          <span className="stat-number">5</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat">
          <span className="stat-number">12</span>
          <span className="stat-label">Awards Won</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectsContent
