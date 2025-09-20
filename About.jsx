import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="about-text">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            At HAPPY HOME STAY, we offer luxurious rooms, modern amenities, and warm hospitality.
            Enjoy our restaurant, free Wi-Fi, pool, and more.
          </p>
        </div>
        <div className="about-image">
          {/* Replace 'interior.jpg' with your actual image name */}
          <img src="/images/hero-interior.jpg" alt="Hotel Interior" className="about-img" />
        </div>
      </div>
    </section>
  );
}
