import { motion } from 'framer-motion';
import { ScrollReveal, containerVariants, fadeUpVariant, slideInLeftVariant } from './ScrollReveal.jsx';
import profileImg from './assets/alam02.jpg';

function About() {
  return (
    <main className="container" id="about">
      <ScrollReveal className="about-section" variants={containerVariants}>
        <motion.img src={profileImg} alt="Alam photo" className="profile-img" variants={slideInLeftVariant} />

        <motion.div className="info" variants={containerVariants}>
          <motion.div className="section-title" variants={fadeUpVariant}>
            <h2>About Me</h2>
            <span>My Introduction</span>
          </motion.div>

          <motion.p variants={fadeUpVariant}>
            I’m Alauddin Alam, Detail-oriented and creative Software Developer with proficiency in programming languages including C, C++, Python, and core web technologies such as HTML, CSS, and JavaScript, along with experience in modern frameworks like Bootstrap and Django. Skilled in building responsive, user-friendly applications. Possesses excellent problem-solving abilities, version control expertise (Git/GitHub), and effective teamwork and communication skills.
          </motion.p>

          <motion.p className="quote" variants={fadeUpVariant}>
            "Design is intelligence made visible. Code brings it to life."
          </motion.p>

          <motion.ul variants={fadeUpVariant}>
            <li><strong>Name:</strong> Alauddin Alam</li>
            <li><strong>DOB:</strong> July 25, 2004</li>
            <li><strong>Address:</strong> Siwan, Bihar 841435</li>
            <li><strong>Email:</strong> alamalauddin399@gmail.com</li>
            <li><strong>Phone:</strong> +91-62009-36159</li>
          </motion.ul>

          <motion.div className="tags" variants={fadeUpVariant}>
            <span>🎵 Music</span>
            <span>🌍 Travel</span>
            <span>🎬 Movie</span>
            <span>🏀 Sports</span>
          </motion.div>
        </motion.div>
      </ScrollReveal>
    </main>
  );
}
export default About;