import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ScrollReveal, fadeUpVariant } from './ScrollReveal.jsx';

function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2, rootMargin: '-80px' });

  const skills = useMemo(
    () => [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', progress: '95%' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', progress: '92%' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', progress: '80%' },
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', progress: '88%' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', progress: '90%' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', progress: '70%' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', progress: '90%' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', progress: '90%' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', progress: '90%' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', progress: '78%' },
      { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', progress: '97%' },
    ],
    []
  );

  return (
    <section className="skills-section" id="skill">
      <ScrollReveal className="section-title" variants={fadeUpVariant}>
        <h2>My Skills</h2>
        <span>Tools and technologies I use daily</span>
      </ScrollReveal>

      <div ref={ref} className={`skills-container ${inView ? 'reveal' : ''}`}>
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            style={{ '--progress': skill.progress }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUpVariant}
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
            <span />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Skills;