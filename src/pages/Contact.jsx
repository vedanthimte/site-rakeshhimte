import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FaEnvelope,
  FaPhoneVolume,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptcha = (token) => {
    setRecaptchaToken(token);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setStatus("❌ Please verify you are not a robot.");
      return;
    }

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        formRef.current.reset();
        setRecaptchaToken(null);
        setLoading(false);
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section className="contact-page" data-aos="fade-up">
      <h2>Contact me</h2>
      <p>Have a query or want to book a session? Feel free to connect.</p>

      <div className="contact-container">
        {/* Contact Info Card */}
        <div className="contact-info-card">
          <h3>Get in Touch</h3>
          <p>
            <FaEnvelope />
            <a href="mailto:rakeshhimte@gmail.com"> rakeshhimte@gmail.com</a>
          </p>
          <p>
            <FaPhoneVolume />
            <a href="tel:+919617271779">+91 96172 71779</a>
          </p>

          <div className="social-icons">
            <a
              href="https://in.linkedin.com/in/rakeshhimte"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@rakeshhimte"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/rakeshhimte/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/rakeshhimte/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Form Card */}
        <div className="contact-form-card">
          <form ref={formRef} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
              disabled={loading}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              disabled={loading}
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              title="Phone number"
              required
              disabled={loading}
            />

            {/* User Place / Location */}
            <input
              type="text"
              name="user_place"
              placeholder="Your City / Location"
              required
              disabled={loading}
            />

            {/* User Occupation / Role */}
            <input
              type="text"
              name="user_occupation"
              placeholder="Your Occupation / Role"
              required
              disabled={loading}
            />

            {/* User Organisation / Institution / Individual */}
            <input
              type="text"
              name="user_org"
              placeholder="Organisation / Institution"
              required
              disabled={loading}
            />
            
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              disabled={loading}
            ></textarea>

            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={handleRecaptcha}
            />
            <br />

            <button type="submit" disabled={loading || !recaptchaToken}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
      </div>
    </section>
  );
}
