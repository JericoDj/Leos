
import { Player } from "@lottiefiles/react-lottie-player"; // Import Lottie player
import innovationAnimation from "../../assets/Innovate.json";
import qualityAnimation from "../../assets/Quality.json";
import relationshipAnimation from "../../assets/Relationship.json";
import "./About.css";

const values = [
  {
    title: "Innovation",
    animation: innovationAnimation,
    description:
      "Embracing cutting-edge technology to deliver the best solutions. We utilize AI, cloud computing, and automation to create groundbreaking solutions for our clients.",
  },
  {
    title: "Quality",
    animation: qualityAnimation,
    description:
      "Dedicated to maintaining excellence in everything we do. Our quality assurance team ensures every project exceeds industry standards and client expectations.",
  },
  {
    title: "Relationships",
    animation: relationshipAnimation,
    description:
      "Building lasting connections with clients and partners. We believe in transparent communication and trust, making us a partner you can rely on.",
  },
];

function About() {
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
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <Player
                autoplay
                loop
                src={value.animation} // Load the JSON animation
                className="value-animation"
              />
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

export default About;
