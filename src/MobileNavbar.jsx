import { useState } from "react";
import logo from "./assets/logo.png"; // Update the path as needed
import "./MobileNavbar.css"; // CSS file for the mobile navbar styles

function MobileNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

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
    e.target.reset(); // Reset form fields
  };

  return (
    <>
      <nav className="mobile-navbar">
        <button className="drawer-button" onClick={toggleDrawer}>
          ☰
        </button>
        <div className="mobile-logo-container">
          <img src={logo} alt="Leos Group Logo" className="mobile-logo-image" />
        </div>
        <button className="mobile-contact-button" onClick={openPopup}>
          Message Us
        </button>
      </nav>

      {drawerOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-drawer-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
      )}

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

export default MobileNavbar;
