import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, containerVariants, fadeUpVariant, slideInBottomVariant } from './ScrollReveal.jsx';
import profile from './assets/Alam3.jpg';
import cv from './assets/Alauddin_Alam01_CV.pdf.pdf';

const typedStrings = [
  'Frontend Developer',
  'Backend Developer',
  'Web Designer',
];

function Home() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let timer = null;

    const type = () => {
      const fullText = typedStrings[currentIndex];
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }

      setTypedText(currentText);

      let delay = isDeleting ? 60 : 120;
      if (!isDeleting && currentText === fullText) {
        delay = 1500;
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % typedStrings.length;
        delay = 400;
      }

      timer = window.setTimeout(type, delay);
    };

    type();
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <ScrollReveal className="home" id="home" variants={containerVariants}>
      <motion.div className="home-content">
        <motion.h3 variants={fadeUpVariant}>WELCOME TO MY PORTFOLIO</motion.h3>
        <motion.h1 variants={fadeUpVariant}>
          Hi! My name is <span className="highlight">Alauddin Alam</span>
        </motion.h1>
        <motion.h3 variants={fadeUpVariant}>
          And I'm a <span id="element" className="ani">{typedText}</span>
        </motion.h3>
        <motion.p variants={fadeUpVariant}>
          Web Developer with 1 year of experience building vibrant, responsive websites and apps. Expert in creating polished user experiences using modern React, HTML, CSS and backend tools.
        </motion.p>
        <motion.div className="home-icon" variants={fadeUpVariant}>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/alam_official01/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/alauddin-alam-b33590322/"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.youtube.com/@bestlife01"><i className="fab fa-youtube"></i></a>
          <a href="https://github.com/alauddinalam"><i className="fab fa-github"></i></a>
        </motion.div>
        <motion.div className="home-action" variants={fadeUpVariant}>
          <motion.a href="#about" className="btn-box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            More About Me
          </motion.a>
          <motion.a href={cv} className="btn-box secondary" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div className="home-hero-image" variants={slideInBottomVariant}>
        <img src={profile} alt="Alauddin Alam" />
      </motion.div>
    </ScrollReveal>
  );
}

export default Home;