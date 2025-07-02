import "./Home.css";
import { Link } from "react-router-dom";
import Counter from "../components/Counter";
import heroImage from "../assets/dr-rakesh.jpg";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the World of Wisdom & Growth</h1>
          <br />
          <div className="hero-subtitle">
            <p>
              <strong>Dr Rakesh Himte</strong>
            </p>
            <p>B.E., M.Tech., PhD (Mechanical Engineering) LMISTE & AMM</p>
            <p>
              Working as a Principal Vidyavardhini’s College of Engineering & Technology, Vasai, Mumbai
            </p>
          </div>
          <br />
          <div align="center" class="yt-btn">
            <a
              href="https://www.youtube.com/@rakeshhimte"
              className="hero-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch My Videos
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Dr. Rakesh Himte" />
        </div>
      </section>

      {/* About Snapshot */}
      <section className="about-snapshot">
        <h2>Quick Facts</h2>
        <div className="facts-grid">
          <div className="fact-box">
            <Counter target="25" label="Years of Teaching & Mentoring Experience" />
          </div>
          <div className="fact-box">
            <Counter target="52" label="Research Papers Published" />
          </div>
          <div className="fact-box">
            <Counter target="7" label="Countries Visited for International Trainings" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-preview">
        <h2>Areas of Expertise</h2>
        <p className="section-subtitle">
          Explore how I help individuals and industries grow holistically
        </p>
        <div className="service-grid">
          <div className="service-box">
            <h3>Career & Employability</h3>
            <p>
              Career counselling, soft skills, industry readiness, and guidance for
              students and teachers.
            </p>
          </div>
          <div className="service-box">
            <h3>Spiritual Guidance</h3>
            <p>
              Empowering lives through knowledge on Dharma, Karma, Bhakti, and
              holistic self-development.
            </p>
          </div>
          <div className="service-box">
            <h3>Industry Training</h3>
            <p>
              Training modules for production & service industries – from power
              plants to hospitals.
            </p>
          </div>
          <div className="service-box">
            <h3>Entrepreneurship</h3>
            <p>
              Guidance for starting and managing businesses, fund planning, and
              insurance literacy.
            </p>
          </div>
        </div>
        <Link to="/services" className="view-more">
          Explore All Services →
        </Link>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="avatar">OW</div>
            <h4>Ofra Walter</h4>
            <p className="role">Senior Professor, Tel Hai Academic College, Israel</p>
            <p className="testimonial-text">
              Dr. Rakesh had delivered a motivational lecture to our students and lecturers. The webinar was interesting and relevant, especially in these times. I fully recommend his sessions to you all.
            </p>
          </div>

          <div className="testimonial-card">
            <div className="avatar">SM</div>
            <h4>Mr. Shyamsundar Maddiwar</h4>
            <p className="role">Regional Manager, Vidarbha Konkan Gramin Bank</p>
            <p className="testimonial-text">
              Mr. Rakesh Himteji motivated 1200+ staff during our in-house training. His natural and heart-touching way of interacting was appreciated by all.
            </p>
          </div>

          <div className="testimonial-card">
            <div className="avatar">MK</div>
            <h4>Mr. Mayur Kulkarni</h4>
            <p className="role">Proprietor, Swastik Aircon</p>
            <p className="testimonial-text">
              Dr. Rakesh Sir guided me from being ordinary to becoming a successful entrepreneur. His constant support and vision made the biggest difference.
            </p>
          </div>

          <div className="testimonial-card">
            <div className="avatar">BA</div>
            <h4>Dr. Bhumika Agrawal</h4>
            <p className="role">HoD Humanities Department, PIET, Nagpur</p>
            <p className="testimonial-text">
              I’ve attended multiple sessions by Himte sir. His ability to connect concepts with real life makes learning enjoyable, focused, and impactful.
            </p>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="cta-section">
        <h2>Get in Touch</h2>
        <p>
          Let’s work together to overcome obstacles and unlock your true potential.
        </p>
        <Link to="/contact" className="cta-btn">
          Contact
        </Link>
      </section>
    </div>
  );
}
