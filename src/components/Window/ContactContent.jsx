import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './ContentStyles.css'

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')
  const [phoneError, setPhoneError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'phone') {
      // Allow only digits; show error if any non-digit character is present
      if (!/^[0-9]*$/.test(value)) {
        setPhoneError('Phone number must contain digits only')
      } else {
        setPhoneError('')
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Require at least one contact method: email or phone
    if (!formData.email && !formData.phone) {
      setError('Please provide either an email address or a phone number')
      return
    }

    // If phone is filled, ensure it is digits only
    if (formData.phone && !/^[0-9]+$/.test(formData.phone)) {
      setPhoneError('Phone number must contain digits only')
      return
    }

    setIsSending(true)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Email service is not configured.')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        },
        {
          publicKey
        }
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setPhoneError('')
      setTimeout(() => {
        setSubmitted(false)
      }, 4000)
    } catch (err) {
      console.error('Failed to send message', err)
      setError('Sorry, something went wrong. Please try again later.')
    } finally {
      setIsSending(false)
    }
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
      value: 'github.com/byte-void',
      link: 'https://github.com/byte-void'
    },
  ]

  return (
    <div className="content-wrapper contact-content">
      {/* Header */}
      <div className="contact-header">
        <h1>Get In Touch</h1>
      </div>

      <div className="contact-body">
        {/* Contact Form */}
        <div className="contact-form-section">
          <h3>Send a Message</h3>
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}
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
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className={phoneError ? 'input-error' : ''}
                />
                {phoneError && <span className="field-error">{phoneError}</span>}
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
              <button type="submit" className="submit-button" disabled={isSending}>
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M2 12 L22 2 L18 22 L12 14 L22 2" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                {isSending ? 'Sending...' : 'Send Message'}
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
