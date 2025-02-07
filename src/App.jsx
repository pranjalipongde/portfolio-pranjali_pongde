import React, { useRef } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Navbar
        onNavigate={scrollToSection}
        aboutRef={aboutRef}
        workRef={workRef}
        contactRef={contactRef}
      />

      <main className="pt-20">
        <section ref={aboutRef}>
          <About />
        </section>

        <section ref={workRef}>
          <Work />
        </section>
      </main>

      <Footer contactRef={contactRef} />
    </div>
  );
}

export default App;
