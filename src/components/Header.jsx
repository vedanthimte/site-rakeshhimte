import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.site-header')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="site-header">
      <nav className="header-navbar">
        <h1 className="header-logo">Dr Rakesh Himte</h1>

        <div className="header-hamburger" onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(!menuOpen);
        }}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>

        <ul className={`header-nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li className="mobile-only">
            <a href="https://in.linkedin.com/in/rakeshhimte" className="header-btn" target="_blank">Follow Me</a>
          </li>
        </ul>

        <a href="https://in.linkedin.com/in/rakeshhimte" className="header-btn desktop-only" target="_blank">Follow Me</a>
      </nav>
    </header>
  );
}
