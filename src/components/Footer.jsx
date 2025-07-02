import { FaLinkedin, FaYoutube, FaInstagram, FaEnvelope, FaFacebook } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-left">
          <a href="https://in.linkedin.com/in/rakeshhimte" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/@rakeshhimte" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/rakeshhimte/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/rakeshhimte/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>

        <div className="footer-center">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <p>
            Created & Managed by Vedant Himte
          </p>
        </div>

        <div className="footer-right">
          <a href="mailto:rakeshhimte@gmail.com">
            <FaEnvelope style={{ marginRight: "5px" }} />
            rakeshhimte@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
