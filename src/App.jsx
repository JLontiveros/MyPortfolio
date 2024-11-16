import React, { useEffect, useRef } from "react";
// Import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const contactRef = useRef(null); // Create a reference for the Contact section

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      {/* Pass the scroll function to Hireme */}
      <Hireme onHireMeClick={scrollToContact} />
      {/* Attach the ref to Contact */}
      <Contact ref={contactRef} />
      <footer className="p-3 text-center">
        <h6 className="mb-3">JANN LOUIS ONTIVEROS</h6>
        <p>codelouis © All CopyRights Reserved 2024</p>
      </footer>
    </div>
  );
};

export default App;
