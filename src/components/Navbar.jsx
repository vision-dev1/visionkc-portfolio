import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let current = ''
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 300) {
          current = section.getAttribute('id')
        }
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileLinkClick = () => {
    setMobileOpen(false)
  }

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#skills', label: 'Skills' },
  ]

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="https://visionkc.com.np" className="logo">
          <img src="/assets/images/logo.png" alt="Vision KC" className="logo-img" />
          <span className="logo-text">Vision KC</span>
        </a>
        <div className="nav-links">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary">Contact</a>
          <ThemeToggle />
        </div>
        <div className="mobile-nav-right">
          <ThemeToggle />
          <div className="mobile-menu-btn" onClick={() => setMobileOpen(prev => !prev)}>
            <i className="material-icons">menu</i>
          </div>
        </div>
      </div>
      <div className={`mobile-nav-links${mobileOpen ? ' active' : ''}`}>
        <a href="#about" onClick={handleMobileLinkClick}>About</a>
        <a href="#portfolio" onClick={handleMobileLinkClick}>Portfolio</a>
        <a href="#services" onClick={handleMobileLinkClick}>Services</a>
        <a href="#skills" onClick={handleMobileLinkClick}>Skills</a>
        <a href="#contact" onClick={handleMobileLinkClick}>Contact</a>
      </div>
    </nav>
  )
}

