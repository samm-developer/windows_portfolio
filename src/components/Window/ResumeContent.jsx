import './ContentStyles.css'

const ResumeContent = () => {
  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      description: 'Leading design systems and visual direction for flagship products. Collaborating with cross-functional teams to deliver exceptional user experiences.',
      highlights: ['Design System Architecture', 'Team Leadership', 'Product Strategy']
    },
    {
      title: 'UI/UX Designer',
      company: 'Creative Agency Co.',
      period: '2018 - 2021',
      description: 'Designed digital experiences for diverse clients across fintech, healthcare, and e-commerce sectors.',
      highlights: ['Client Projects', 'User Research', 'Prototyping']
    },
    {
      title: 'Junior Designer',
      company: 'StartUp Studio',
      period: '2016 - 2018',
      description: 'Started career creating marketing materials and web designs for early-stage startups.',
      highlights: ['Brand Design', 'Web Development', 'Marketing']
    }
  ]

  const education = [
    {
      degree: 'Master of Design',
      school: 'California Institute of Arts',
      year: '2016',
      focus: 'Interactive Media'
    },
    {
      degree: 'Bachelor of Fine Arts',
      school: 'Rhode Island School of Design',
      year: '2014',
      focus: 'Graphic Design'
    }
  ]

  return (
    <div className="content-wrapper resume-content">
      {/* Header */}
      <div className="resume-header">
        <div className="resume-title">
          <h1>Sam Developer</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="resume-contact">
          <span>📧 mitch@example.com</span>
          <span>📍 San Francisco, CA</span>
          <span>🔗 linkedin.com/in/mitchivin</span>
        </div>
      </div>

      {/* Experience Section */}
      <section className="resume-section">
        <h3>💼 Professional Experience</h3>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="experience-title">
                  <h4>{exp.title}</h4>
                  <span className="company">{exp.company}</span>
                </div>
                <span className="period">{exp.period}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="highlights">
                {exp.highlights.map((highlight, i) => (
                  <span key={i} className="highlight-tag">{highlight}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="resume-section">
        <h3>🎓 Education</h3>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <h4>{edu.degree}</h4>
                <span className="year">{edu.year}</span>
              </div>
              <span className="school">{edu.school}</span>
              <span className="focus">Focus: {edu.focus}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="resume-section">
        <h3>🛠️ Skills</h3>
        <div className="skills-container">
          <div className="skill-category">
            <h4>Design</h4>
            <div className="skill-bars">
              <div className="skill-bar">
                <span>UI Design</span>
                <div className="bar"><div className="fill" style={{ width: '95%' }}></div></div>
              </div>
              <div className="skill-bar">
                <span>UX Design</span>
                <div className="bar"><div className="fill" style={{ width: '90%' }}></div></div>
              </div>
              <div className="skill-bar">
                <span>Visual Design</span>
                <div className="bar"><div className="fill" style={{ width: '95%' }}></div></div>
              </div>
              <div className="skill-bar">
                <span>Motion Design</span>
                <div className="bar"><div className="fill" style={{ width: '80%' }}></div></div>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h4>Tools</h4>
            <div className="skill-bars">
              <div className="skill-bar">
                <span>Figma</span>
                <div className="bar"><div className="fill" style={{ width: '95%' }}></div></div>
              </div>
              <div className="skill-bar">
                <span>Adobe Suite</span>
                <div className="bar"><div className="fill" style={{ width: '90%' }}></div></div>
              </div>
              <div className="skill-bar">
                <span>Prototyping</span>
                <div className="bar"><div className="fill" style={{ width: '85%' }}></div></div>
              </div>
              <div className="skill-bar">
                <span>HTML/CSS</span>
                <div className="bar"><div className="fill" style={{ width: '75%' }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Button */}
      <div className="resume-actions">
        <button className="download-button">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path d="M12 16 L12 4 M12 16 L8 12 M12 16 L16 12 M4 20 L20 20" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
          Download PDF Resume
        </button>
      </div>
    </div>
  )
}

export default ResumeContent
