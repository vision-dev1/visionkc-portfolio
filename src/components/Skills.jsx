import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const gridSkills = [
  { name: 'Social Engineering', pct: 90, level: 'Professional', exp: '5 years experience' },
  { name: 'Network Mapper', pct: 60, level: 'Intermediate', exp: '2 years experience' },
  { name: 'Linux (Debian)', pct: 50, level: 'Intermediate', exp: '2 years experience' },
  { name: 'Brute Force Attacks', pct: 60, level: 'Intermediate', exp: '3 years experience' },
  { name: 'DDoS Attacks', pct: 50, level: 'Intermediate', exp: '2 years experience' },
  { name: 'Burp Suite', pct: 40, level: 'Beginner', exp: '1 years experience' },
]

const centerSkill = { name: 'Injection Attacks', pct: 30, level: 'Beginner', exp: '1 years experience' }

function SkillBar({ name, pct, level, exp, animate }) {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span>{name}</span>
        <span>{pct}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress"
          initial={{ width: 0 }}
          animate={{ width: animate ? `${pct}%` : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
      <div className="skill-tags">
        <span>{level}</span>
        <span>{exp}</span>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true)
    }
  }, [isInView, animated])

  return (
    <section id="skills" className="section bg-light" ref={ref}>
      <div className="container skills-container-width">
        <div className="section-header">
          <span className="section-subtitle">Skills</span>
          <h2 className="section-title">Mastering skills that are beyond legal</h2>
        </div>

        <div className="skills-grid">
          {gridSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <SkillBar {...skill} animate={animated} />
            </motion.div>
          ))}
        </div>

        <div className="center-skill">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <SkillBar {...centerSkill} animate={animated} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

