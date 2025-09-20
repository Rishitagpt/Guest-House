import React from "react";
import "../styles/Gallery.css";

export default function Gallery() {
  const images = [
    "/images/room1.jpg",
    "/images/room2.jpg",
    "/images/room3.jpg",
    "/images/room4.jpg",
    "/images/room5.jpg",
    "/images/room6.jpg",
  ];

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Gallery
        </h2>
        <p className="section-subtitle" style={{ textAlign: "center" }}>
          A glimpse of our beautiful property
        </p>
        <div className="gallery-grid">
          {images.map((src, i) => (
            <div key={i} className="gallery-item">
              <img src={src} alt={`Gallery ${i + 1}`} className="gallery-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
