import { useState } from 'react'
import './ContentStyles.css'

const ProjectsContent = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "The King's Library",
      category: 'web',
      description: 'A live library management system I built for my own library. Students register, sign in, reserve study hours, and pay ₹100/hour or monthly fees online. Admins get a dashboard to view all students, track fee defaulters, and inspect any record — all in one place.',
      tags: ['React', 'Full-Stack', 'Payments', 'Admin Panel', 'Live Product'],
      color: '#ff6b35',
      link: 'https://thekingslibrary.in/'
    },
    {
      id: 2,
      title: 'Student Portal & Auth',
      category: 'web',
      description: 'Built the student-facing side of the library platform — registration with personal details, secure login, and a streamlined flow for reserving study hours and paying fees without manual paperwork.',
      tags: ['Authentication', 'User Flows', 'Web App'],
      color: '#42a5f5',
      link: 'https://thekingslibrary.in/'
    },
    {
      id: 3,
      title: 'Admin Dashboard',
      category: 'web',
      description: 'Created an admin panel for library operations — view all enrolled students, identify fee defaulters at a glance, and drill into individual records. Replaced hours of manual tracking with a single dashboard.',
      tags: ['Dashboard', 'CRUD', 'Reporting', 'Management'],
      color: '#7cb342',
      link: 'https://thekingslibrary.in/'
    },
    {
      id: 4,
      title: 'Rajat XP Portfolio',
      category: 'web',
      description: 'This Windows XP–themed portfolio site — built with React and Vite to showcase my library project and journey into software development in a memorable, interactive way.',
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
        <p>Real software built to solve real problems — starting with my own library</p>
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
          <span className="stat-number">1</span>
          <span className="stat-label">Live Production App</span>
        </div>
        <div className="stat">
          <span className="stat-number">2</span>
          <span className="stat-label">User Roles Built</span>
        </div>
        <div className="stat">
          <span className="stat-number">100%</span>
          <span className="stat-label">Self-Built & Deployed</span>
        </div>
        <div className="stat">
          <span className="stat-number">📚</span>
          <span className="stat-label">Real Library Users</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectsContent
