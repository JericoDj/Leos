import { useEffect, useState } from "react";
import logo from "./assets/logo.png"; // Update the path if needed
import "./Navbar.css"; // Separate CSS file for the Navbar styles

function Navbar() {
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

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

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setShowPopup(false); // Close the popup after submission
  };

  return (
    <>
      <nav className="app-bar">
        <div className="logo-container">
          <a href="#home">
            <img src={logo} alt="Leos Group Logo" className="logo-image" />
          </a>
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
          <button className="contact-button" onClick={openPopup}>
            Send us a message
          </button>
        </div>
      </nav>

      {/* Popup Form */}
      {showPopup && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              ×
            </button>
            <h2>Send Us a Message</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
