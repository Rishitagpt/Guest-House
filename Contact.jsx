import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Booking form submitted (demo)");
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        {/* Booking Form */}
        <div>
          <h2 className="section-title">Book Your Stay</h2>
          <p className="section-subtitle">Fill in your details and we’ll confirm your booking.</p>

          <form className="card form" onSubmit={onSubmit}>
            <div className="field">
              <label>Name</label>
              <input className="input" placeholder="Your name" required />
            </div>

            <div className="field">
              <label>Email</label>
              <input className="input" type="email" placeholder="you@example.com" required />
            </div>

            <div className="grid2">
              <div className="field">
                <label>Check-in Date</label>
                <input className="input" type="date" required />
              </div>
              <div className="field">
                <label>Check-out Date</label>
                <input className="input" type="date" required />
              </div>
            </div>

            <div className="field">
              <label>Guests</label>
              <input className="input" type="number" min="1" max="10" placeholder="Number of guests" required />
            </div>

            <button type="submit" className="btn">Confirm Booking</button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">We’d love to hear from you</p>

          <div className="contact-list">
            <div>📧 info@happyhomestay.com</div>
            <div>📞 +91 98765 43210</div>
            <div>📍 Varanasi, Uttar Pradesh</div>
          </div>

          {/* Google Maps Embed */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.12345!2d82.973914!3d25.317644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31777ab6cd27%3A0xabcdef123456!2sVaransi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Happy Home Stay Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
