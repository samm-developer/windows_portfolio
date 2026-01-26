import { useState } from 'react'
import './ContentStyles.css'

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'devsamm72@gmail.com',
      link: 'mailto:devsamm72@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '9452392955',
      link: 'tel:9452392955'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'India',
      link: null
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/samm-developer',
      link: 'https://github.com/samm-developer'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/Sam7777M',
      link: 'https://github.com/Sam7777M'
    },
  ]

  return (
    <div className="content-wrapper contact-content">
      {/* Header */}
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have a project in mind or just want to say hello? I'd love to hear from you!</p>
      </div>

      <div className="contact-body">
        {/* Contact Form */}
        <div className="contact-form-section">
          <h3>Send a Message</h3>
          {submitted ? (
            <div className="success-message">
              <span className="success-icon">✅</span>
              <h4>Message Sent!</h4>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M2 12 L22 2 L18 22 L12 14 L22 2" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="contact-info-section">
          <h3>Contact Info</h3>
          <div className="contact-cards">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-card">
                <span className="contact-card-icon">{item.icon}</span>
                <div className="contact-card-content">
                  <span className="contact-card-label">{item.label}</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-card-value">
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-card-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactContent
