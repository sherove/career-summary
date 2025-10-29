import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import Career from "@/pages/Career";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import { useState, useEffect } from "react";

function App() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home showCursor={showCursor} />} />
          <Route path="/career" element={<Career />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
