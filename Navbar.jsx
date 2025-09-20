import React, { useState } from "react";
import "../styles/Navbar.css";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo">HAPPY HOME STAY</a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {NAV.map(item => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn" href="#contact" onClick={() => setOpen(false)}>Book Now</a>
        </nav>

        <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(v => !v)}>☰</button>
      </div>
    </header>
  );
}
