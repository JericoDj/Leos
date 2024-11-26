import { useState } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  FaTaxi,
  FaUtensils,
  FaHeartbeat,
  FaGraduationCap,
  FaShoppingCart,
  FaCogs,
  FaBriefcase,
  FaLaptop,
  FaCalendarCheck,
  FaBuilding,
} from "react-icons/fa";

import "./Services.css";
import MobileAppAnimation from "../../assets/MobileApp.json";
import WebsiteAnimation from "../../assets/Website.json";

function Services() {
  const [activeMobileProject, setActiveMobileProject] = useState(null);
  const [activeWebProject, setActiveWebProject] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const toggleMobileProject = (project) => {
    // Toggle the project: if clicked again, set to null
    setActiveMobileProject((prev) => (prev === project ? null : project));
  };

  const toggleWebProject = (project) => {
    // Toggle the project: if clicked again, set to null
    setActiveWebProject((prev) => (prev === project ? null : project));
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Your inquiry has been sent!");
    setShowPopup(false);
    e.target.reset();
  };

  const renderExamples = (examples, activeProject, handleClick) =>
    examples.map((item, index) => (
      <motion.div
        key={index}
        className={`example-item ${activeProject === item.label ? "flipped" : ""}`}
        onClick={() => handleClick(item.label)}
        initial={{ transform: "rotateY(0deg)" }}
        animate={{
          transform: activeProject === item.label ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="example-front">
          <div className="example-icon-container">
            <div className="example-icon">{item.icon}</div>
          </div>
          <p>{item.label}</p>
        </div>
        <div className="example-back">
          <p>Details about {item.label}</p>
        </div>
      </motion.div>
    ));

  const mobileExamples = [
    { icon: <FaTaxi />, label: "Taxi Booking Apps" },
    { icon: <FaUtensils />, label: "Food Delivery Platforms" },
    { icon: <FaHeartbeat />, label: "Mental Health Solutions" },
    { icon: <FaGraduationCap />, label: "Educational Apps" },
    { icon: <FaShoppingCart />, label: "E-commerce Platforms" },
    { icon: <FaCogs />, label: "Custom Mobile Solutions" },
  ];

  const webExamples = [
    { icon: <FaBriefcase />, label: "Business Websites" },
    { icon: <FaShoppingCart />, label: "E-commerce Platforms" },
    { icon: <FaLaptop />, label: "Educational Portals" },
    { icon: <FaCalendarCheck />, label: "Booking Systems" },
    { icon: <FaBuilding />, label: "Real Estate Websites" },
    { icon: <FaCogs />, label: "Custom Web Solutions" },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-description">
          We specialize in building cutting-edge solutions tailored to your business needs. Explore our core services:
        </p>

        <div className="services-grid">
          {/* Mobile App Development */}
          <div className="service-card">
            <Player
              autoplay
              loop
              src={MobileAppAnimation}
              className="service-animation mobile-animation"
              style={{ width: "400px", height: "250px", margin: "25px 0" }}
            />
            <h3>Mobile App Development</h3>
            <ul className="service-features">
              <li>Cross-platform development using Flutter for a single codebase.</li>
              <li>Backend integration with Firebase for real-time data and cloud services.</li>
              <li>Payment gateway support for PayPal, Visa, MasterCard, and eWallets.</li>
              <li>Custom solutions like taxi apps, booking apps, food delivery, eCommerce, and more.</li>
            </ul>
            <div className="examples">
              <h4>Examples:</h4>
              <div className="examples-grid">
                {renderExamples(mobileExamples, activeMobileProject, toggleMobileProject)}
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className="service-card">
            <Player
              autoplay
              loop
              src={WebsiteAnimation}
              className="service-animation"
              style={{ width: "400px", height: "250px", margin: "20px 0" }}
            />
            <h3>Web Development</h3>
            <ul className="service-features">
              <li>Interactive websites optimized for both desktop and mobile devices.</li>
              <li>Custom web development with modern frameworks.</li>
              <li>E-commerce platforms with payment gateway integration and inventory management.</li>
            </ul>
            <div className="examples">
              <h4>Examples:</h4>
              <div className="examples-grid">
                {renderExamples(webExamples, activeWebProject, toggleWebProject)}
              </div>
            </div>
          </div>
        </div>

        <button className="inquire-button" onClick={openPopup}>
          Inquire Service
        </button>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
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

export default Services;
