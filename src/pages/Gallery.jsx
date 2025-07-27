import { useState } from "react";
import "./Gallery.css";

import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.jpg";
import w3 from "../assets/w3.jpg";
import w4 from "../assets/w4.jpg";
import w5 from "../assets/w5.jpg";
import w6 from "../assets/w6.jpg";
import w7 from "../assets/w7.jpg";
import w8 from "../assets/w8.jpg";
import w9 from "../assets/w9.jpg";
import w10 from "../assets/w10.jpg";
import w11 from "../assets/w11.jpg";
import w12 from "../assets/w12.jpg";
import w13 from "../assets/w13.jpg";
import w14 from "../assets/w14.jpg";
import w15 from "../assets/w15.jpg";
import w16 from "../assets/w16.jpg";
import w17 from "../assets/w17.jpg";
import w18 from "../assets/w18.jpg";


export default function Gallery() {
  const images = [
    { src: w1, title: "Workshop ", caption: "Interactive session on career guidance." },
    { src: w2, title: "Workshop ", caption: "Team training at corporate event." },
    { src: w3, title: "Seminar ", caption: "Seminar on Soft Skills Development." },
    { src: w4, title: "Seminar ", caption: "Awareness campaign on Emotional Intelligence." },
    { src: w5, title: "Training ", caption: "Motivational session for students." },
    { src: w6, title: "Training ", caption: "Industry expert lecture at WCL." },
    { src: w7, title: "Seminar ", caption: "OBE Seminar." },
    { src: w8, title: "Seminar ", caption: "Carrer guidance." },
    { src: w9, title: "OBE & NAAC", caption: "Seminar at G S Tompe College, Ch Bz, Amravati" },
    { src: w10, title: "OBE & NAAC", caption: "Seminar at G S Tompe College, Ch Bz, Amravati" },
    { src: w11, title: "Carrer Guidance", caption: "Seminar at Annasaheb Vartak College, Vasai" },
    { src: w12, title: "Carrer Guidance", caption: "Seminar at Annasaheb Vartak College, Vasai" },
    { src: w13, title: "OBE Seminar", caption: "Seminar at VCET, Vasai" },
    { src: w14, title: "Webinar", caption: "Futuristic carrer prospects" },
    { src: w15, title: "Seminar ", caption: "" },
    { src: w16, title: "Seminar ", caption: "" },
    { src: w17, title: "Seminar ", caption: "" },
    { src: w18, title: "Seminar ", caption: "" },


  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const showPrev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const showNext = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const closeModal = () => setCurrentIndex(null);

  return (
    <div className="gallery-page" data-aos="fade-up">
      <h1>My Work Gallery</h1>
      <p>
        Glimpses of my impactful sessions, corporate trainings, and personal mentorship journeys.
      </p>

      <div className="gallery-grid">
        {images.map(({ src, title }, idx) => (
          <div key={idx} className="gallery-item" onClick={() => setCurrentIndex(idx)}>
            <img src={src} alt={title} loading="lazy" />
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div className="lightbox" onClick={closeModal}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="nav-arrow prev" onClick={showPrev}>‹</button>
            <img src={images[currentIndex].src} alt={images[currentIndex].title} />
            <div className="lightbox-caption">
              <h3>{images[currentIndex].title}</h3>
              <p>{images[currentIndex].caption}</p>
            </div>
            <button className="nav-arrow next" onClick={showNext}>›</button>
            <button className="close-btn" onClick={closeModal}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
}
