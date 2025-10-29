import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

export default function DevPortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      {activeSection === "home" && <Home showCursor={showCursor} />}
      {activeSection === "experience" && <Experience />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "contact" && <Contact />}
      <Footer />
    </div>
  );
}
