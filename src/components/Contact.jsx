function Contact() {
  return (
    <div className="contact-section">
      <div className="container contact-container">
        <div className="contact-form-col">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <span className="section-subtitle">Contact Me</span>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Get In Touch</h2>
          </div>
          <form action="https://formspree.io/f/meopywnb" method="POST" className="contact-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        <div className="contact-info-col">
          <h3>Let&apos;s Connect</h3>
          <p>Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to
            connect.</p>
          <div className="contact-icons-row">
            <a href="https://www.linkedin.com/in/visionkc" target="_blank" rel="noreferrer" className="contact-icon-link"
              aria-label="LinkedIn">
              <img src="/assets/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.github.com/vision-dev1" target="_blank" rel="noreferrer" className="contact-icon-link"
              aria-label="GitHub">
              <img src="/assets/images/github.png" alt="GitHub" />
            </a>
            <a href="mailto:info.visionn7@gmail.com" className="contact-icon-link" aria-label="Email">
              <img src="/assets/images/mail.png" alt="Mail" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

