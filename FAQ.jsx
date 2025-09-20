import React, { useState } from "react";
import "../styles/FAQ.css";

const QAS = [
  { q: "What are check-in and check-out times?", a: "Check-in is from 12:00 PM, check-out is by 11:00 AM." },
  { q: "Do you offer airport pickup?", a: "Yes, airport pickup is available on request." },
  { q: "Is breakfast included in the stay?", a: "Yes, complimentary breakfast is included." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null); // index or null
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <h2 className="section-title" style={{textAlign:'center'}}>Frequently Asked Questions</h2>
        <div className="faq-list">
          {QAS.map((item, i) => (
            <div className={`card faq-item ${open===i ? "open" : ""}`} key={item.q}>
              <button className="faq-q" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="chev">{open===i ? "–" : "+"}</span>
              </button>
              {open===i && <div className="faq-a">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
