import './ContentStyles.css'

const AboutMeContent = () => {
  return (
    <div className="content-wrapper about-content">
      {/* Header Section */}
      <div className="content-header">
        <div className="profile-section">
          <div className="profile-avatar-large">
            <svg viewBox="0 0 120 120" className="avatar-svg-large">
              {/* Background - sky */}
              <rect x="0" y="0" width="120" height="120" fill="#87ceeb"/>
              {/* Clouds */}
              <ellipse cx="25" cy="30" rx="18" ry="10" fill="white" opacity="0.8"/>
              <ellipse cx="95" cy="35" rx="15" ry="8" fill="white" opacity="0.8"/>
              {/* Person - head */}
              <ellipse cx="60" cy="54" rx="22" ry="24" fill="#e8c4a0"/>
              {/* Hair */}
              <path d="M38 48 Q42 30 60 26 Q78 30 82 48 Q78 42 60 46 Q42 42 38 48" fill="#3d2314"/>
              {/* Eyes */}
              <ellipse cx="50" cy="54" rx="4" ry="5" fill="white"/>
              <ellipse cx="70" cy="54" rx="4" ry="5" fill="white"/>
              <circle cx="50" cy="55" r="2.5" fill="#3d2314"/>
              <circle cx="70" cy="55" r="2.5" fill="#3d2314"/>
              {/* Eyebrows */}
              <path d="M43 46 Q50 43 57 47" stroke="#3d2314" strokeWidth="2.5" fill="none"/>
              <path d="M63 47 Q70 43 77 46" stroke="#3d2314" strokeWidth="2.5" fill="none"/>
              {/* Nose */}
              <path d="M60 56 L58 65 L63 65" stroke="#c9a080" strokeWidth="1.5" fill="none"/>
              {/* Mustache */}
              <path d="M45 70 Q52 75 60 70 Q68 75 75 70" fill="#3d2314"/>
              {/* Mouth */}
              <path d="M52 75 Q60 80 68 75" stroke="#b88070" strokeWidth="2" fill="none"/>
              {/* Shirt/body */}
              <ellipse cx="60" cy="110" rx="35" ry="30" fill="#4a90d9"/>
            </svg>
          </div>
          <div className="profile-info">
            <h1>SAM</h1>
            <h2>Senior Software Developer (SDE-2)</h2>
            <p className="tagline">
              Building scalable, high-performance web applications with <span className="highlight-years">4+ years</span> of experience using React, Next.js, Node.js, and AWS.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-body">
        <section className="about-section">
          <h3>👋 Hello!</h3>
          <p>
            I’m a Senior Software Development Engineer with a strong foundation in building clean, scalable, and user centric systems. I bring hands on experience designing and shipping reliable, maintainable applications, with a focus on writing high-quality code and making sound architectural decisions. I’m comfortable owning features end-to-end, collaborating across teams, and balancing technical trade-offs to deliver long-term value. With a passion for intuitive UX, I enjoy blending thoughtful design with solid engineering to create software that is both robust and delightful to use.
          </p>
        </section>

        <section className="about-section">
          <h3>🎯 Key Achievements</h3>
          <ul className="skills-list">
            <li>
              <span className="skill-icon">🏆</span>
              <div>
                <strong>Smart India Hackathon</strong>
                <p>Winner (2025) and Runner up (2024) - Designed smart truck routing solution optimizing routes by goods availability, improving vehicle utilization by 30%</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">🥈</span>
              <div>
                <strong>GFG HackerFest</strong>
                <p>Secured 2nd rank - Designed automatic counselling system using React Native technology (EasyED app available on PlayStore)</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">💻</span>
              <div>
                <strong>DSA Expertise</strong>
                <p>Solved 1000+ DSA problems on LeetCode and GFG, strengthening logic building and algorithmic thinking</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">⚡</span>
              <div>
                <strong>Performance Optimization</strong>
                <p>Optimized React rendering performance up to 30%, improved initial page load time up to 40%, and enhanced API response times</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">🎓</span>
              <div>
                <strong>GATE Exam Qualifier</strong>
                <p>Qualified GATE exam in CSE (Computer Science and Engineering) and DA (Data Science and Artificial Intelligence)</p>
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
                <strong>B.Tech (Computer Science and Engineering)</strong>
                <p>77% (Pass with Distinction)</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">📖</span>
              <div>
                <strong>12th Standard (PCM)</strong>
                <p>80%</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">📝</span>
              <div>
                <strong>10th Standard</strong>
                <p>10 CGPA</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h3>🛠️ Tools & Technologies</h3>
          
          <div className="tools-category">
            <h4>Frontend Technologies</h4>
            <div className="tools-grid">
              <div className="tool-item">React.js</div>
              <div className="tool-item">Next.js</div>
              <div className="tool-item">Micro Frontend</div>
              <div className="tool-item">React-Native</div>
              <div className="tool-item">Redux</div>
              <div className="tool-item">Payment-Gateway</div>
              <div className="tool-item">SSR</div>
              <div className="tool-item">CSR</div>
              <div className="tool-item">Material UI</div>
              <div className="tool-item">Tailwind CSS</div>
              <div className="tool-item">React Hook</div>
            </div>
          </div>

          <div className="tools-category">
            <h4>Backend Technology</h4>
            <div className="tools-grid">
              <div className="tool-item">Node.js</div>
              <div className="tool-item">Micro Services</div>
              <div className="tool-item">GraphQL</div>
              <div className="tool-item">RabbitMQ</div>
              <div className="tool-item">Redis</div>
              <div className="tool-item">Express.js</div>
              <div className="tool-item">GTM</div>
              <div className="tool-item">Google Analytics</div>
              <div className="tool-item">SAP</div>
              <div className="tool-item">REST API</div>
              <div className="tool-item">Caching</div>
              <div className="tool-item">Socket.io</div>
            </div>
          </div>

          <div className="tools-category">
            <h4>Devops</h4>
            <div className="tools-grid">
              <div className="tool-item">AWS</div>
              <div className="tool-item">EC2</div>
              <div className="tool-item">S3</div>
              <div className="tool-item">Docker</div>
              <div className="tool-item">Jenkins</div>
              <div className="tool-item">Lambda</div>
              <div className="tool-item">Putty</div>
              <div className="tool-item">CI/CD</div>
            </div>
          </div>

          <div className="tools-category">
            <h4>Languages</h4>
            <div className="tools-grid">
              <div className="tool-item">JavaScript</div>
              <div className="tool-item">TypeScript</div>
              <div className="tool-item">Python</div>
              <div className="tool-item">C</div>
              <div className="tool-item">C++</div>
            </div>
          </div>

          <div className="tools-category">
            <h4>Database</h4>
            <div className="tools-grid">
              <div className="tool-item">MongoDB</div>
              <div className="tool-item">Postgres</div>
              <div className="tool-item">MySQL</div>
              <div className="tool-item">Query Optimisation</div>
              <div className="tool-item">Indexing</div>
              <div className="tool-item">Schema Design</div>
              <div className="tool-item">ACID</div>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  )
}

export default AboutMeContent
