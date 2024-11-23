import  { useState } from "react";
import "./About.css";
import { FaLightbulb, FaCheckCircle, FaHandshake } from "react-icons/fa";

function About() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (card) => {
    setActiveCard(activeCard === card ? null : card); // Toggle card expansion
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          At Leos Group, we specialize in delivering exceptional services tailored to your unique needs. 
          With a strong focus on quality, innovation, and building meaningful relationships, we strive to 
          provide solutions that empower your projects and bring your vision to life.
        </p>

        {/* Values Section */}
        <div className="about-values">
          <div
            className={`value-card ${activeCard === "innovation" ? "active" : ""}`}
            onClick={() => handleCardClick("innovation")}
          >
            <FaLightbulb className="icon lightbulb" title="Innovation" />
            <h3>Innovation</h3>
            <p>
              Embracing cutting-edge technology to deliver the best solutions.
            </p>
            {activeCard === "innovation" && (
              <div className="extra-content">
                <p>We utilize AI, cloud computing, and automation to create groundbreaking solutions for our clients.</p>
              </div>
            )}
          </div>
          <div
            className={`value-card ${activeCard === "quality" ? "active" : ""}`}
            onClick={() => handleCardClick("quality")}
          >
            <FaCheckCircle className="icon check-circle" title="Quality" />
            <h3>Quality</h3>
            <p>
              Dedicated to maintaining excellence in everything we do.
            </p>
            {activeCard === "quality" && (
              <div className="extra-content">
                <p>Our quality assurance team ensures every project exceeds industry standards and client expectations.</p>
              </div>
            )}
          </div>
          <div
            className={`value-card ${activeCard === "relationships" ? "active" : ""}`}
            onClick={() => handleCardClick("relationships")}
          >
            <FaHandshake className="icon handshake" title="Relationships" />
            <h3>Relationships</h3>
            <p>
              Building lasting connections with clients and partners.
            </p>
            {activeCard === "relationships" && (
              <div className="extra-content">
                <p>We believe in transparent communication and trust, making us a partner you can rely on.</p>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <p>Interested in working with us? Let&apos;s collaborate and bring your vision to life!</p>
          <a href="#contact" className="btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

export default About;
