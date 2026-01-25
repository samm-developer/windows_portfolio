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
            <h1>Mitch Ivin</h1>
            <h2>Visual Designer</h2>
            <p className="tagline">Crafting digital experiences with purpose and precision.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-body">
        <section className="about-section">
          <h3>👋 Hello!</h3>
          <p>
            I'm a visual designer passionate about creating intuitive, beautiful, and 
            functional digital experiences. With a keen eye for detail and a love for 
            nostalgic interfaces (like this Windows XP theme!), I bring creativity and 
            technical expertise to every project.
          </p>
        </section>

        <section className="about-section">
          <h3>🎨 What I Do</h3>
          <ul className="skills-list">
            <li>
              <span className="skill-icon">🖥️</span>
              <div>
                <strong>UI/UX Design</strong>
                <p>Creating user-centered designs that delight and engage</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">🎭</span>
              <div>
                <strong>Brand Identity</strong>
                <p>Developing cohesive visual systems and brand guidelines</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">🌐</span>
              <div>
                <strong>Web Design</strong>
                <p>Crafting responsive, modern websites that stand out</p>
              </div>
            </li>
            <li>
              <span className="skill-icon">✨</span>
              <div>
                <strong>Motion Design</strong>
                <p>Bringing interfaces to life with thoughtful animations</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h3>🛠️ Tools & Technologies</h3>
          <div className="tools-grid">
            <div className="tool-item">Figma</div>
            <div className="tool-item">Sketch</div>
            <div className="tool-item">Adobe XD</div>
            <div className="tool-item">Photoshop</div>
            <div className="tool-item">Illustrator</div>
            <div className="tool-item">After Effects</div>
            <div className="tool-item">HTML/CSS</div>
            <div className="tool-item">React</div>
          </div>
        </section>

        <section className="about-section">
          <h3>💡 Philosophy</h3>
          <blockquote>
            "Every pixel matters. Great design is invisible – it just works. 
            My goal is to create experiences that feel natural, intuitive, 
            and bring joy to users."
          </blockquote>
        </section>
      </div>
    </div>
  )
}

export default AboutMeContent
