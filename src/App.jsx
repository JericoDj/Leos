import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar"; // Import the desktop Navbar component
import MobileNavbar from "./MobileNavbar"; // Import the mobile Navbar component
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Services from "./screens/services/Services";
import Projects from "./screens/projects/Projects";
import footerLogo from "./assets/LogoLighterGrey.png";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900); // Adjusted threshold to 900px

  useEffect(() => {
    // Function to update the isMobile state when the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900); // Adjusted threshold to 900px
    };

    // Attach the resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      {/* Render MobileNavbar if isMobile is true, otherwise render Navbar */}
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <div className="body-content">
        <Home />
        <About />
        <Services />
        <Projects />
      </div>
      <footer className="footer">
  <div className="footer-container">
    {/* Footer Logo */}
    <div className="footer-logo">
      <a href="#home">
        <img src={footerLogo} alt="Leos Group Logo" className="logo-image" />
      </a>
    </div>

    {/* Footer Contact */}
    <div className="footer-contact">
      <p>Contact us:</p>
      <a href="mailto:dejesusjerico528@gmail.com" className="footer-email">dejesusjerico528@gmail.com</a>
      <p className="footer-phone">09760143260</p>
    </div>
  </div>

  {/* Footer Copyright */}
  <p className="footer-copyright">
    © {new Date().getFullYear()} Leos Group. All rights reserved.
  </p>
</footer>


    </>
  );
}

export default App;
