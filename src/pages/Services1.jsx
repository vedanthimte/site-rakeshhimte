import "./Services.css";

export default function Services() {
  return (
    <div className="services-page">
      <section className="services-header">
        <h1>My Core Services</h1>
        <p>
          As a Motivational & Spiritual Trainer, I provide impactful sessions across industries,
          educational institutions, startups, and individuals.
        </p>
      </section>

      <section className="services-section">
        <h2>Training to Industry Personnel</h2>
        <div className="service-group">
          <div className="service-card">
            <h3>Production Industry</h3>
            <p>✪ Automobile<br />✪ Power Plant<br />✪ WCL</p>
          </div>
          <div className="service-card">
            <h3>Service Industry</h3>
            <p>✪ Banking<br />✪ Travel & Tourism<br />✪ Hospital<br />✪ Hospitality</p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Education & Training</h2>
        <div className="service-group">
          <div className="service-card">
            <h3>Students & Career</h3>
            <p>
              ✪ Employability Skills<br />
              ✪ Soft Skills<br />
              ✪ Career Counselling<br />
              ✪ Learning Techniques (Primary to PhD)
            </p>
          </div>
          <div className="service-card">
            <h3>Teachers & Institutions</h3>
            <p>
              ✪ Teaching Methodology (Primary to PhD)<br />
              ✪ NBA & NAAC Preparation <br />
              ✪ Autonomous Institution
            </p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Business & Finance</h2>
        <div className="service-group">
          <div className="service-card">
            <h3>Entrepreneurship</h3>
            <p>
              ✪ How to Start a Business<br />
              ✪ Fund Management<br />
              ✪ Strategic Planning
            </p>
          </div>
          <div className="service-card">
            <h3>Insurance & Security</h3>
            <p>
              ✪ Financial Management<br />
              ✪ Insurance Planning
            </p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Spirituality & Inner Growth</h2>
        <div className="service-group">
          <div className="service-card">
            <h3>Essentials of Spirituality</h3>
            <p>
              ✪ What is Spirituality?<br />
              ✪ Dharma & Karma<br />
              ✪ Bhagya & Karma<br />
              ✪ Guru, Gyan, Bhakti, Karma Yoga
            </p>
          </div>
          <div className="service-card">
            <h3>Mind & Life Clarity</h3>
            <p>
              ✪ Charitra (Character)<br />
              ✪ Confusion to Satisfaction<br />
              ✪ Frustration to Focus
            </p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>One-to-One Counselling</h2>
        <div className="service-group">
          <div className="service-card">
            <h3>Personal Sessions</h3>
            <p>
              ✪ Tailored Counselling<br />
              ✪ Mental, Emotional & Professional Support<br />
              ✪ Goal Alignment & Motivation
            </p>
          </div>
        </div>
      </section>

      <section className="services-section qr-section">
        <h2>Paymnet Details</h2>
        <p>Scan the QR code below.</p>
        <div className="qr-container">
          <img
            src="../assets/qr.jpg" // 🔁 Replace with your actual file path
            alt="Payment QR Code"
            className="qr-image"
          />
        </div>
      </section>
    </div>
  );
}
