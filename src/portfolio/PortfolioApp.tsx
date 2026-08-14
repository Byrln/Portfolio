"use client";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectShowcase from "./components/ProjectShowcase";

export default function PortfolioApp() {
  return (
    <main className="site-shell" data-od-id="portfolio-page">
      <Header />
      <Hero />
      <About />
      <ProjectShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
