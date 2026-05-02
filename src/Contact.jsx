import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, containerVariants, fadeUpVariant } from './ScrollReveal.jsx';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (form.action === '#' || !form.action) {
      setStatus('✅ Message sent successfully!');
      form.reset();
      return;
    }

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' },
      });
      if (response.ok) {
        setStatus('✅ Message sent successfully!');
        form.reset();
      } else {
        setStatus('❌ Oops! Something went wrong.');
      }
    } catch (error) {
      setStatus('⚠️ Network error. Try again later.');
    }
  };

  return (
    <ScrollReveal id="contact" className="section" variants={containerVariants}>
      <motion.div className="section-title" variants={fadeUpVariant}>
        <h2>Contact Me</h2>
        <span>Let's work together on your next project</span>
      </motion.div>
      <motion.form id="contact-form" action="#" method="POST" className="contact-form" onSubmit={handleSubmit} variants={containerVariants}>
        <motion.input type="text" name="name" placeholder="Your Name" required variants={fadeUpVariant} />
        <motion.input type="email" name="email" placeholder="Your Email" required variants={fadeUpVariant} />
        <motion.textarea name="message" rows="5" placeholder="Your Message" required variants={fadeUpVariant} />
        <motion.button type="submit" className="btn" variants={fadeUpVariant} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
          Send Message
        </motion.button>
      </motion.form>
      <motion.div id="form-status" className="form-status" variants={fadeUpVariant}>{status}</motion.div>
    </ScrollReveal>
  );
}
export default Contact;