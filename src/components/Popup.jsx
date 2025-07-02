import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Popup.css";
import popup1 from "../assets/w14.jpg";


const images = [popup1]; // Add/remove images here
const SLIDE_INTERVAL = 7000; // ms

export default function Popup() {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);
  const location = useLocation();
  const touchStartX = useRef(null);
  const touchHold = useRef(null);
  const [pause, setPause] = useState(false);

  // Show popup once per session
  useEffect(() => {
    if (location.pathname !== "/") return;
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShow(true);
        sessionStorage.setItem("hasVisited", "true");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Prevent scrolling when popup is open
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [show]);

  // Auto slide
  useEffect(() => {
    if (!show || pause || images.length < 2) return;
    const interval = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [show, current, pause]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!show) return;
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") setShow(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [show]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) setShow(false);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchHold.current = setTimeout(() => setPause(true), 300); // hold to pause
  };

  const handleTouchEnd = (e) => {
    clearTimeout(touchHold.current);
    setPause(false);
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prevSlide();
    else if (delta < -50) nextSlide();
  };

  if (!show) return null;

  return (
    <div
      className="popup-overlay"
      onClick={handleOverlayClick}
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <div className="popup-content">
        <button className="close-btn" onClick={() => setShow(false)}>×</button>
        <div
          className="slider"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {images.length > 1 && (
            <button className="nav-btn left" onClick={prevSlide}>‹</button>
          )}
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className={`slide-image ${images.length === 1 ? "single-image" : ""}`}
          />
          {images.length > 1 && (
            <button className="nav-btn right" onClick={nextSlide}>›</button>
          )}
        </div>

        {images.length > 1 && (
          <div className="dots-container">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? "active" : ""}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
