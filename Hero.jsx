import React from "react";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>
            Welcome to <span className="highlight">HAPPY HOME STAY</span>
          </h1>
          <p className="hero-sub">
            Experience comfort, luxury, and a playful modern vibe. Your home away from home.
          </p>
          <div className="hero-actions">
            <a className="btn yellow" href="#contact">Book Your Stay</a>
            <a className="btn outline" href="#gallery">View Gallery</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero.jpg" alt="Hotel View" className="hero-img" />
        </div>
      </div>
    </section>
  );
}
