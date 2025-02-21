import React, { useRef } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const experienceRef = useRef(null);
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
        skillsRef={skillsRef}
        workRef={workRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
      />

      <main className="pt-20">
        <section ref={aboutRef}>
          <About />
        </section>

        <section ref={skillsRef} className="mt-12">
          <Skills />
        </section>

        <section ref={workRef} className="mt-12">
          <Work />
        </section>

        <section ref={experienceRef} className="mt-12">
          <Experience />
        </section>

        <section ref={contactRef} className="mt-12">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
