import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Website() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
