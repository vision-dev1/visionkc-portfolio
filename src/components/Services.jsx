import { motion } from 'framer-motion'

const services = [
  {
    icon: 'code',
    title: 'Software Development',
    desc: 'Creating reliable and innovative software to solve real-world problems.'
  },
  {
    icon: 'security',
    title: 'Security Consultant',
    desc: 'Providing expert advice to secure your infrastructure, data, and compliance posture.'
  },
  {
    icon: 'devices',
    title: 'Web App Development',
    desc: 'Creating secure, scalable, and user-centric web applications tailored to your business needs.'
  },
  {
    icon: 'trending_up',
    title: 'SEO & Digital Marketing',
    desc: 'Optimizing online presence and driving growth through strategic digital marketing.'
  }
]

const floatVariants = [
  { y: [-6, 6, -6], transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' } },
  { y: [-6, 6, -6], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } },
  { y: [-6, 6, -6], transition: { duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 } },
  { y: [-6, 6, -6], transition: { duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 } }
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Services</span>
          <h2 className="section-title">One of my finest specialties</h2>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              animate={floatVariants[i]}
              whileHover={{
                scale: 1.04,
                rotateX: 3,
                rotateY: -3,
                boxShadow: '0 20px 40px -8px rgba(37,99,235,0.2)',
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d', perspective: 800 }}
            >
              <div className="service-icon">
                <i className="material-icons">{service.icon}</i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

