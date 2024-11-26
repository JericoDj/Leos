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

  const handleMobileProjectClick = (project) => {
    setActiveMobileProject(activeMobileProject === project ? null : project);
  };

  const handleWebProjectClick = (project) => {
    setActiveWebProject(activeWebProject === project ? null : project);
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
              style={{ width: "400px", height: "250px", marginBottom: "25px", marginTop: "25px" }}
            />

            <h3>Mobile App Development</h3>
            <ul className="service-features">
              <li>Cross-platform development using Flutter for a single codebase.</li>
              <li>Backend integration with Firebase for real-time data and cloud services.</li>
              <li>Payment gateway support for PayPal, Visa, MasterCard, and eWallets (GCash, Maya, GrabPay).</li>
              <li>Custom solutions like taxi apps, booking apps, food delivery, eCommerce, and more.</li>
              <li>Admin panel setup for managing users, content, and analytics.</li>
              <li>App Store and Google Play deployment with ongoing support.</li>
            </ul>
            <div className="examples">
              <h4>Examples of mobile apps we can create:</h4>
              <div className="examples-grid">
                {renderExamples(
                  [
                    { icon: <FaTaxi />, label: "Taxi Booking Apps" },
                    { icon: <FaUtensils />, label: "Food Delivery Platforms" },
                    { icon: <FaHeartbeat />, label: "Mental Health Solutions" },
                    { icon: <FaGraduationCap />, label: "Educational Apps" },
                    { icon: <FaShoppingCart />, label: "E-commerce Platforms" },
                    { icon: <FaCogs />, label: "Custom Mobile Solutions" },
                  ],
                  activeMobileProject,
                  handleMobileProjectClick
                )}
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
              style={{ width: "400px", height: "250px", marginBottom: "20px" }}
            />
            <h3>Web Development</h3>
            <ul className="service-features">
              <li>Interactive websites optimized for both desktop and mobile devices.</li>
              <li>Custom web development with modern frameworks (React.js, Angular, or Vue.js).</li>
              <li>Full-stack solutions using Node.js, Express, and MongoDB.</li>
              <li>E-commerce platforms with payment gateway integration and inventory management.</li>
              <li>Domain setup, hosting support, and admin dashboards for content control.</li>
              <li>Custom solutions like educational platforms, booking websites, and more.</li>
            </ul>
            <div className="examples">
              <h4>Examples of web projects we can deliver:</h4>
              <div className="examples-grid">
                {renderExamples(
                  [
                    { icon: <FaBriefcase />, label: "Business Websites" },
                    { icon: <FaShoppingCart />, label: "E-commerce Platforms" },
                    { icon: <FaLaptop />, label: "Educational Portals" },
                    { icon: <FaCalendarCheck />, label: "Booking Systems" },
                    { icon: <FaBuilding />, label: "Real Estate Websites" },
                    { icon: <FaCogs />, label: "Custom Web Solutions" },
                  ],
                  activeWebProject,
                  handleWebProjectClick
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
