import './ContentStyles.css'

const ResumeContent = () => {
  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Bounteous and Accolite',
      period: '2025 - Present',
      location: 'India',
      description: 'Optimised React rendering performance up to 30% by reducing unnecessary re-renders using memoization techniques, efficient state management using redux, pagination on api for infinite scroll, and component-level optimisation. Improved initial page load time up to 40% by implementing code splitting, lazy loading, and asset optimization. Improved API response times by refactoring async workflows, optimising queries and implementing indexing. Designed scalable frontend–backend system architecture using Next.js SSR, Redis caching, and optimised API layers. Implemented Socket.IO-based real-time workflows for customer support. Mentored junior developers through code reviews and technical guidance.',
      highlights: ['React Performance', 'Next.js SSR', 'Redis Caching', 'Socket.IO', 'Mentoring']
    },
    {
      title: 'Software Developer',
      company: 'Saksoft',
      period: '2022 - 2025',
      location: 'India',
      description: 'Worked on OSLO v4 (react.js, javascript) and OSLO v5 (next.js, typescript, Redis, Redux) with Express.js, Node.js, MongoDB. Optimised API call in OSLO v5 using SSR by 40%, cutting load time by 30% compared to OSLO v4. Designed and implemented micro-frontend architecture in OSLO v6 using modular React applications. Built optimised search suggestion using debouncing, throttling and redux-toolkit, optimising search latency by 60%. Built RiskWrite and IMS from scratch supporting 1M+ users. Built IFFCO (Govt e-com) with React, Node, Express, GraphQL, AWS. Integrated PayU, AmazonPay, and JusPay payment gateways. Led development of Redington Gulf E-COM project. Integrated RabbitMQ for decoupled communication across microservices. Mentored 4 junior developers.',
      highlights: ['Micro Frontend', 'Payment Gateways', 'GraphQL', 'RabbitMQ', 'E-Commerce']
    },
    {
      title: 'Software Development Intern',
      company: 'BingePrime',
      period: '05/2022 - 11/2022',
      location: 'India',
      description: 'Worked on movie streaming website BingePrime. Implemented Razorpay payment gateway for subscription based model. Reduced javascript execution time by utilizing pre-loading, pre-caching, and lazy loading of assets. Developed a customised movie recommendation system.',
      highlights: ['Razorpay', 'Performance Optimization', 'Recommendation System']
    },
    {
      title: 'Web Developer Intern',
      company: 'LetsGrowMore',
      period: '09/2021 - 03/2022',
      location: 'India',
      description: 'Implemented secure login using access and refresh tokens and cache for blocking used tokens after logout. Handled authorized routing for subscriber-only routes with MongoDB aggregation pipelines. Designed various secure login/signup methods including auto login or OAuth login via Google and Facebook. Managed PhonePe Payment gateway and hosting on AWS.',
      highlights: ['OAuth', 'MongoDB', 'AWS', 'Security']
    }
  ]

  const education = [
    {
      degree: 'B.Tech (Computer Science and Engineering)',
      school: 'Bundelkhand Institute of Engineering and Technology, Jhansi',
      year: '4 years',
      focus: 'Percentage: 77%'
    }
  ]

  return (
    <div className="content-wrapper resume-content">
      {/* Header */}
      <div className="resume-header">
        <div className="resume-title">
          <h1>SAM</h1>
          <h2>Senior Software Developer (SDE-2)</h2>
        </div>
        <div className="resume-contact">
          <span>📧 devsamm72@gmail.com</span>
          <span>📱 9452392955</span>
          <span>🔗 github.com/samm-developer</span>
          <span>🔗 github.com/Sam7777M</span>
          <span>📍 India</span>
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
                  <span className="company">{exp.company} {exp.location ? `• ${exp.location}` : ''}</span>
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
            <h4>Frontend Technologies</h4>
            <div className="skill-tags">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Micro Frontend</span>
              <span className="skill-tag">React-Native</span>
              <span className="skill-tag">Redux</span>
              <span className="skill-tag">Payment-Gateway</span>
              <span className="skill-tag">SSR</span>
              <span className="skill-tag">CSR</span>
              <span className="skill-tag">Material UI</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">React Hook</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Backend Technology</h4>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Micro Services</span>
              <span className="skill-tag">GraphQL</span>
              <span className="skill-tag">RabbitMQ</span>
              <span className="skill-tag">Redis</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">GTM</span>
              <span className="skill-tag">Google Analytics</span>
              <span className="skill-tag">SAP</span>
              <span className="skill-tag">REST API</span>
              <span className="skill-tag">Caching</span>
              <span className="skill-tag">Socket.io</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>DevOps</h4>
            <div className="skill-tags">
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">EC2</span>
              <span className="skill-tag">S3</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Jenkins</span>
              <span className="skill-tag">Lambda</span>
              <span className="skill-tag">Putty</span>
              <span className="skill-tag">CI/CD</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Languages</h4>
            <div className="skill-tags">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">C++</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Database</h4>
            <div className="skill-tags">
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Postgres</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Query Optimisation</span>
              <span className="skill-tag">Indexing</span>
              <span className="skill-tag">Schema Design</span>
              <span className="skill-tag">ACID</span>
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
