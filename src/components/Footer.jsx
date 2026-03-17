import Contact from './Contact'

function Footer() {
  return (
    <footer id="contact" className="footer">
      <Contact />
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <div className="footer-info">
            <a href="https://visionkc.com.np" className="logo">
              <img src="/assets/images/logo.png" alt="Vision KC" className="logo-img footer-logo-img" />
            </a>
            <div className="social-icons footer-socials">
              <a href="https://www.linkedin.com/in/visionkc" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <img src="/assets/images/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="mailto:info.visionn7@gmail.com" aria-label="Email">
                <img src="/assets/images/mail.png" alt="Mail" />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Menu</h4>
              <a href="#about">About</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#services">Services</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2025 Vision KC. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer

