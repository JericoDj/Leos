import  { useEffect } from "react";
import "./App.css";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Services from "./screens/services/Services";
import Projects from "./screens/projects/Projects";
// Import your logo image
import logo from "./assets/logo.png"; // Update the path and filename as needed

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu a");

    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="app-bar">
        <div className="logo-container">
          {/* Replace text with the logo image */}
          <img src={logo} alt="Leos Group Logo" className="logo-image" />
        </div>
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <div className="contact-container">
          <a href="#contact" className="contact-button">
            Contact us
          </a>
        </div>
      </nav>
      <div className="body-content">
        <Home />
        <About />
        <Services />
        <Projects />
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            {/* Replace text with the logo image */}
            <img src={logo} alt="Leos Group Logo" className="logo-image" />
          </div>
          <div className="footer-links">
            <a href="#home" className="footer-link">
              Home
            </a>
            <a href="#about" className="footer-link">
              About
            </a>
            <a href="#services" className="footer-link">
              Services
            </a>
            <a href="#projects" className="footer-link">
              Projects
            </a>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Leos Group. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
