import React from "react";
import "../styles/Pricing.css";

const TIERS = [
  { name: "Standard Room", price: "₹1,499", features: ["Free Wi-Fi", "Breakfast included", "Air conditioning"] },
  { name: "Deluxe Room", price: "₹2,999", features: ["King-size bed", "Mini fridge", "Balcony view"] },
  { name: "Suite", price: "₹5,999", features: ["Living area", "Luxury bath", "Complimentary dinner"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="section-title" style={{textAlign:'center'}}>Room Rates</h2>
        <p className="section-subtitle" style={{textAlign:'center'}}>Choose from our flexible stay packages</p>
        <div className="pricing-grid">
          {TIERS.map(t => (
            <div className="card price-card" key={t.name}>
              <div className="price-head">
                <h3>{t.name}</h3>
                <div className="price">
                  {t.price} <span className="per">/night</span>
                </div>
              </div>
              <ul className="features">
                {t.features.map(f => <li key={f}>✓ {f}</li>)}
              </ul>
              <a className="btn" href="#contact">Book {t.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
