function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="contact-item">
          <i className="fab fa-whatsapp" />
          <div>
            <h4>WhatsApp</h4>
            <a href="https://wa.me/916200936159" target="_blank" rel="noopener noreferrer">
              +91 6200936159
            </a>
          </div>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone" />
          <div>
            <h4>Call</h4>
            <a href="tel:+916200936159">+91 6200936159</a>
          </div>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope" />
          <div>
            <h4>Email</h4>
            <a href="mailto:alamalauddin399@gmail.com">alamalauddin399@gmail.com</a>
          </div>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt" />
          <div>
            <h4>Location</h4>
            <p>Siwan, Bihar, 841435</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        Made with ♥ by <b>Alauddin Alam</b>
        <br />
        © 2025 All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;