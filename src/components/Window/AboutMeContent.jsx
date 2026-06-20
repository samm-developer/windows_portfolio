import './ContentStyles.css'

const AboutMeContent = () => {
  return (
    <div className="content-wrapper about-content">
      {/* Header Section */}
      <div className="content-header">
        <div className="profile-section">
          <div className="profile-avatar-large">
            <svg viewBox="0 0 120 120" className="avatar-svg-large">
              <rect x="0" y="0" width="120" height="120" fill="#87ceeb"/>
              <ellipse cx="25" cy="30" rx="18" ry="10" fill="white" opacity="0.8"/>
              <ellipse cx="95" cy="35" rx="15" ry="8" fill="white" opacity="0.8"/>
              <ellipse cx="60" cy="54" rx="22" ry="24" fill="#e8c4a0"/>
              <path d="M38 48 Q42 30 60 26 Q78 30 82 48 Q78 42 60 46 Q42 42 38 48" fill="#3d2314"/>
              <ellipse cx="50" cy="54" rx="4" ry="5" fill="white"/>
              <ellipse cx="70" cy="54" rx="4" ry="5" fill="white"/>
              <circle cx="50" cy="55" r="2.5" fill="#3d2314"/>
              <circle cx="70" cy="55" r="2.5" fill="#3d2314"/>
              <path d="M43 46 Q50 43 57 47" stroke="#3d2314" strokeWidth="2.5" fill="none"/>
              <path d="M63 47 Q70 43 77 46" stroke="#3d2314" strokeWidth="2.5" fill="none"/>
              <path d="M60 56 L58 65 L63 65" stroke="#c9a080" strokeWidth="1.5" fill="none"/>
              <path d="M45 70 Q52 75 60 70 Q68 75 75 70" fill="#3d2314"/>
              <path d="M52 75 Q60 80 68 75" stroke="#b88070" strokeWidth="2" fill="none"/>
              <ellipse cx="60" cy="110" rx="35" ry="30" fill="#4a90d9"/>
            </svg>
          </div>
          <div className="profile-info">
            <h1>RAJAT</h1>
            <h2>Library Owner · Aspiring Software Developer</h2>
            <p className="tagline">
              I run <span className="highlight-years">The King&apos;s Library</span> and built a full library management platform from scratch — now looking to bring that hands-on product experience to a software development role.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-body">
        <section className="about-section">
          <h3>👋 Hello!</h3>
          <p>
            I&apos;m Rajat, owner of The King&apos;s Library. When managing students, study hours, and monthly fees became overwhelming on paper, I taught myself to build software that could handle it all. The result is{' '}
            <a href="https://thekingslibrary.in/" target="_blank" rel="noopener noreferrer">thekingslibrary.in</a>
            — a live library management system where students register, book study hours, pay fees online, and admins track everything from one dashboard.
          </p>
          <p>
            Building this product end-to-end gave me real experience in web development, user flows, payments, and admin tooling. I&apos;m now actively seeking a software developer position where I can keep growing while contributing to meaningful products.
          </p>
        </section>

        <section className="about-section">
          <h3>🎯 What I&apos;ve Built & Done</h3>
          <ul className="skills-list">
            <li>
              <span className="skill-icon">📚</span>
              <div>
                <strong>The King&apos;s Library — Management System</strong>
                <p>Designed and deployed a production web app for student registration, login, hourly/monthly fee payments, and a full admin panel to view students, track defaulters, and inspect records.</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">🏛️</span>
              <div>
                <strong>Library Operations</strong>
                <p>Run a physical library serving students daily — understanding real user needs before writing a single line of code.</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">💳</span>
              <div>
                <strong>Online Payments</strong>
                <p>Integrated online fee collection so students can pay ₹100/hour or monthly fees digitally, reducing manual follow-ups.</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">🖥️</span>
              <div>
                <strong>This Portfolio</strong>
                <p>Built this Windows XP–themed portfolio site to showcase my work and journey into software development.</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">🚀</span>
              <div>
                <strong>Product Ownership</strong>
                <p>Handled everything from idea to deployment — requirements, UI, development, testing, and ongoing maintenance for real users.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h3>📖 Background</h3>
          <ul className="skills-list">
            <li>
              <span className="skill-icon">📚</span>
              <div>
                <strong>Founder & Owner — The King&apos;s Library</strong>
                <p>Operating a student-focused library and building the digital tools needed to run it efficiently at scale.</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">💻</span>
              <div>
                <strong>Self-Taught Developer</strong>
                <p>Learned web development by solving my own business problems — building software with real users and real stakes from day one.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h3>🛠️ Tools & Technologies</h3>

          <div className="tools-category">
            <h4>Frontend</h4>
            <div className="tools-grid">
              <div className="tool-item">React.js</div>
              <div className="tool-item">JavaScript</div>
              <div className="tool-item">HTML & CSS</div>
              <div className="tool-item">Responsive UI</div>
              <div className="tool-item">Vite</div>
            </div>
          </div>

          <div className="tools-category">
            <h4>Backend & APIs</h4>
            <div className="tools-grid">
              <div className="tool-item">Node.js</div>
              <div className="tool-item">REST APIs</div>
              <div className="tool-item">Authentication</div>
              <div className="tool-item">Payment Integration</div>
            </div>
          </div>

          <div className="tools-category">
            <h4>Database & Deployment</h4>
            <div className="tools-grid">
              <div className="tool-item">Database Design</div>
              <div className="tool-item">CRUD Operations</div>
              <div className="tool-item">Production Deployment</div>
              <div className="tool-item">Domain & Hosting</div>
            </div>
          </div>

          <div className="tools-category">
            <h4>Product & Admin</h4>
            <div className="tools-grid">
              <div className="tool-item">Admin Dashboards</div>
              <div className="tool-item">User Management</div>
              <div className="tool-item">Fee Tracking</div>
              <div className="tool-item">Reporting</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutMeContent
