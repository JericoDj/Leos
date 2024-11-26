import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "./Home.css";
import mainVideo from "../../assets/Main.mp4";

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0c8vaah", // Replace with your Service ID
        "template_xyz123", // Replace with your Template ID
        e.target,          // Form element
        "F_wHWnTjUYM61qNdV" // Replace with your Public Key
      )
      .then(
        (result) => {
          alert("Your inquiry has been sent!");
          console.log("Email successfully sent:", result.text);
          setShowPopup(false); // Close popup after submission
        },
        (error) => {
          alert("An error occurred. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );

    e.target.reset(); // Clear form fields
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-text">
          <p className="home-badge">Empowering Businesses, One App at a Time</p>
          <h1 className="home-title">Welcome to Leos</h1>
          <p className="home-subtitle">
            Leos is a hub of innovation, offering advanced development and technology solutions to empower your projects.
            Explore our cutting-edge products and comprehensive services tailored to your needs.
          </p>
          <div className="home-buttons">
            <button className="btn-primary" onClick={openPopup}>
              Inquire Service
            </button>
            <button className="btn-secondary" onClick={() => window.location.href = "#projects"}>
              Check Out Projects →
            </button>
          </div>
        </div>

        <div className="home-image">
          <video className="home-video" autoPlay loop muted>
            <source src={mainVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content" ref={popupRef}>
            <button className="popup-close" onClick={closePopup}>
              ×
            </button>
            <h2>Inquire Service</h2>
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
    </section>
  );
}

export default Home;
