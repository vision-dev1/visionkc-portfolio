const services = [
  {
    icon: 'web',
    title: 'Software Development',
    desc: 'Creating reliable and innovative software to solve real-world problems.'
  },
  {
    icon: 'security',
    title: 'Security Consultant',
    desc: 'Providing expert advice to secure your infrastructure, data, and compliance posture.'
  },
  {
    icon: 'bug_report',
    title: 'Penetration Testing',
    desc: 'Identifying and exploiting vulnerabilities to strengthen your security defenses.'
  },
  {
    icon: 'trending_up',
    title: 'SEO & Digital Marketing',
    desc: 'Optimizing online presence and driving growth through strategic digital marketing.'
  }
]

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Services</span>
          <h2 className="section-title">One of my finest specialties</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-aos="fade-up">
              <div className="service-icon"><i className="material-icons">{service.icon}</i></div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

