import "./About.css"; // ✅ KEEP this in About.jsx

import profileImage from "../assets/dr-rakesh.jpg";

export default function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-image">
          <img src={profileImage} alt="Dr. Rakesh Himte" />
        </div>
        <div className="about-text">
          <h1>Dr. Rakesh Himte</h1>
          <p>
            Principal at Vidyavardhini’s College of Engineering & Technology, Vasai, Mumbai. A seasoned academic leader,
            motivational speaker, and spiritual guide with over 25 years of experience in mentoring, research, and education
            administration.
          </p>
          <p>
            His expertise spans Mechanical Engineering, Employability Skills, Industry 4.0, Soft Skills Training, Career Counseling,
            and Entrepreneurship. He has inspired thousands through national and international seminars and continues to guide
            the next generation with his deep insight into life, leadership, and learning.
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/rakeshhimte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.youtube.com/@rakeshhimte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.instagram.com/rakeshhimte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/rakeshhimte/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="about-section">
        <h2>Leadership & Contributions</h2>
        <ul>
          <li>Over 25 years of teaching, mentoring, and institutional development.</li>
          <li>Worked on European Union Funded project</li>
          <li>Established AICTE IDEA Lab worth ₹90 lakhs at VCET, Vasai.</li>
          <li>Organised more than 10 workshop and international conferences </li>
          <li>Fetched the grant of ₹60 lakh for DST FIST project.</li>
          <li>Conducted national-level STTPs and FDPs on Outcome-Based Education and Industry 4.0.</li>
          <li>Organized 250+ numerous campus workshops, trainings and value-based sessions.</li>
        </ul>
      </section>

      {/* Research Section */}
      <section className="about-section">
        <h2>Research & Innovation</h2>
        <p>
          Dr. Himte has published 50+ research papers in national and international journals on Mechanical Engineering topics like
          pure iron casting, hybrid composites, and green energy. He is regularly invited as a keynote speaker for global
          conferences and technology summits.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-section">
        <h2>Mission & Vision</h2>
        <p>
          Mission is to create technically strong and morally sound professionals by integrating traditional wisdom with modern
          education. He believes in holistic human development through Dharma, Knowledge, and Social Responsibility.
        </p>
      </section>

      <section className="awards-section" data-aos="fade-up">
        <h3>Awards & Recognition</h3>
        <ul className="awards-list">
          <li>❁ <strong>Outstanding Teacher</strong> – RCET, Bhilai (2015)</li>
          <li>❁ <strong>Overall Best Department</strong> – Mechanical Department under his leadership (2012)</li>
        </ul>
      </section>

    </div>
  );
}
