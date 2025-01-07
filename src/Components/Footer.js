import React from "react";
import "./CSS/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Futuristic Website. All rights reserved.</p>
        <div className="social-icons">
          <a href="#facebook" className="icon">FB</a>
          <a href="#twitter" className="icon">TW</a>
          <a href="#linkedin" className="icon">LI</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
