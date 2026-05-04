import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ICONS = {
  moon: <i className="fa-solid fa-moon"></i>,
  sun: <i className="fa-solid fa-sun"></i>,
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    document.documentElement.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    if (media && typeof media.addEventListener === 'function') {
      media.addEventListener('change', handleChange);
      return () => media.removeEventListener('change', handleChange);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <motion.header className="header" initial="hidden" animate="visible" variants={headerVariants}>
      <a href="#home" className="logo">
        <i className='fa-solid fa-graduation-cap'></i>Alam
      </a>

      <nav className={`navbar ${navbarOpen ? 'show' : ''}`} id="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skill">Skills</a>
        <a href="#projects">Projects/Excel</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="header-actions">
        <button id="theme-toggle" className="theme-toggle" aria-pressed={theme === 'dark'} onClick={toggleTheme}>
          {theme === 'dark' ? ICONS.sun : ICONS.moon}
        </button>
        <div className="menu-toggle" id="menu-toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
          ☰
        </div>
      </div>
    </motion.header>
  );
}

export default Header;