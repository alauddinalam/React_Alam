import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, containerVariants, fadeUpVariant } from './ScrollReveal.jsx';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get('name')?.toString().trim() || 'Portfolio Visitor';
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    if (!email || !message) {
      setStatus('⚠️ Please enter your email and message before sending.');
      return;
    }

    const subject = `Portfolio contact from ${name}`;
    const body = `Name: ${name}\r\nEmail: ${email}\r\n\r\n${message}`;
    const mailto = `mailto:alamalauddin399@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailto;
      setStatus('✅ Your email client has been opened. Send the message to alamalauddin399@gmail.com.');
      form.reset();
    } catch (error) {
      setStatus('⚠️ Unable to open email client. Please email alamalauddin399@gmail.com manually.');
    }
  };

  return (
    <ScrollReveal id="contact" className="section" variants={containerVariants}>
      <motion.div className="section-title" variants={fadeUpVariant}>
        <h2>Contact Me</h2>
        <span>Let's work together on your next project</span>
        <p className="contact-note">Complete the form and your mail client will open to send the message to <strong>alamalauddin399@gmail.com</strong>.</p>
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