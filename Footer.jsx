import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <p>© {new Date().getFullYear()} HAPPY HOME STAY. All rights reserved.</p>
        <nav className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </nav>
      </div>
    </footer>
  );
}
