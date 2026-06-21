import './ContentStyles.css'

const AboutMeContent = () => {
  return (
    <div className="content-wrapper about-content">
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
            <h1>RAJAT KESHARI</h1>
            <h2>Software Developer · NIT Student</h2>
            <p className="tagline">
              Resourceful developer with expertise in scalable system design — built a full-stack library management platform from scratch and reduced load times by up to <span className="highlight-years">40%</span> through performance-driven engineering.
            </p>
          </div>
        </div>
      </div>

      <div className="content-body">
        <section className="about-section">
          <h3>👋 Hello!</h3>
          <p>
            I&apos;m Rajat Keshari, a Software Developer and M.Tech (Computer Science) student at NIT Jalandhar. I own and operate{' '}
            <a href="https://thekingslibrary.in/" target="_blank" rel="noopener noreferrer">The King&apos;s Library</a>
            , where I built a production library management system from the ground up — handling seat reservations, book rentals, online payments, and admin operations for real students every day.
          </p>
          <p>
            I design robust, scalable architectures with a focus on performance, reliability, and maintainability. From real-time seat allocation with MongoDB transactions to RabbitMQ-based notification microservices, I enjoy solving complex problems end-to-end.
          </p>
        </section>

        <section className="about-section">
          <h3>💼 Work Experience</h3>
          <ul className="skills-list">
            <li>
              <span className="skill-icon">📚</span>
              <div>
                <strong>Software Developer (Owner) — The King&apos;s Library</strong>
                <p>Apr 2023 – Jul 2025 · <a href="https://thekingslibrary.in/" target="_blank" rel="noopener noreferrer">thekingslibrary.in</a></p>
                <p>Developed a full-stack Library Management System with React.js, TypeScript, Express.js, Node.js, and MongoDB. Built real-time seat allocation with transactions, secure auth with access/refresh tokens, book rental/purchase module, Razorpay &amp; PhonePe payments, and a RabbitMQ notification microservice.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h3>🎯 Key Achievements</h3>
          <ul className="skills-list">
            <li>
              <span className="skill-icon">⚡</span>
              <div>
                <strong>Performance Optimization</strong>
                <p>Reduced load times by up to 40% through state management and API optimization. Improved search response latency by 60% using debouncing, throttling, and Redux Toolkit.</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">🔒</span>
              <div>
                <strong>Real-Time Seat Allocation</strong>
                <p>Designed automatic seat allocation with MongoDB transactions and rollback to prevent booking conflicts and manage occupancy efficiently.</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">💻</span>
              <div>
                <strong>DSA Practice</strong>
                <p>Solved 500+ DSA problems on CodeChef, GeeksforGeeks, and LeetCode — strengthening logic building and algorithmic thinking.</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">📨</span>
              <div>
                <strong>Async Notification System</strong>
                <p>Integrated RabbitMQ microservice for asynchronous payment confirmations, fee reminders, and booking notification emails.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h3>📚 Education</h3>
          <ul className="skills-list">
            <li>
              <span className="skill-icon">🎓</span>
              <div>
                <strong>M.Tech (Computer Science) — NIT Jalandhar</strong>
                <p>Jul 2025 – Present · 74% · Machine Learning, Advanced Computer Networks, Data Structures &amp; Analysis, Operating Systems, Cryptography</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">🎓</span>
              <div>
                <strong>B.Tech (Computer Science) — B.I.E.T Jhansi</strong>
                <p>Jul 2019 – Apr 2023 · 74% · Web Development, DBMS, Operating Systems, Compiler Design, Computer Networks, OOPs</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h3>🏅 Certifications</h3>
          <ul className="skills-list">
            <li>
              <span className="skill-icon">🛡️</span>
              <div>
                <strong>Cyber Job Simulation — Deloitte</strong>
              </div>
            </li>
            <li>
              <span className="skill-icon">📊</span>
              <div>
                <strong>Graph Theory Programming Camp</strong>
              </div>
            </li>
            <li>
              <span className="skill-icon">💡</span>
              <div>
                <strong>Introduction to C++ &amp; Data Structures in C++ — Coding Ninjas</strong>
              </div>
            </li>
            <li>
              <span className="skill-icon">📝</span>
              <div>
                <strong>C Language — LearnVern</strong>
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
              <div className="tool-item">Next.js</div>
              <div className="tool-item">JavaScript</div>
              <div className="tool-item">TypeScript</div>
              <div className="tool-item">Redux Toolkit</div>
              <div className="tool-item">Tailwind CSS</div>
            </div>
          </div>

          <div className="tools-category">
            <h4>Backend & APIs</h4>
            <div className="tools-grid">
              <div className="tool-item">Node.js</div>
              <div className="tool-item">Express.js</div>
              <div className="tool-item">MERN Stack</div>
              <div className="tool-item">REST APIs</div>
              <div className="tool-item">GraphQL</div>
              <div className="tool-item">Socket.io</div>
              <div className="tool-item">RabbitMQ</div>
            </div>
          </div>

          <div className="tools-category">
            <h4>Database & Cloud</h4>
            <div className="tools-grid">
              <div className="tool-item">MongoDB</div>
              <div className="tool-item">AWS</div>
              <div className="tool-item">Query Optimization</div>
              <div className="tool-item">Indexing</div>
            </div>
          </div>

          <div className="tools-category">
            <h4>Payments & Integrations</h4>
            <div className="tools-grid">
              <div className="tool-item">Razorpay</div>
              <div className="tool-item">PhonePe</div>
              <div className="tool-item">YouTube IFrame API</div>
              <div className="tool-item">YouTube Data API v3</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutMeContent
