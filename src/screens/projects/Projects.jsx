import "./Projects.css";
import EdukidLogo from "../../assets/EdukidLogo.png";
import TimekeeperLogo from "../../assets/TimekeeperLogo.png";

// EduKid Images
import Edukid1 from "../../assets/edukid/Edukid1.png";
import Edukid2 from "../../assets/edukid/Edukid2.png";
import Edukid3 from "../../assets/edukid/Edukid3.png";
import Edukid4 from "../../assets/edukid/Edukid4.png";

// TimeKeeper Images
import Timekeeper1 from "../../assets/timekeeper/Timekeeper1.png";
import Timekeeper2 from "../../assets/timekeeper/Timekeeper2.png";
import Timekeeper3 from "../../assets/timekeeper/Timekeeper3.png";
import Timekeeper4 from "../../assets/timekeeper/Timekeeper4.png";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Our Projects</h2>
        <p className="projects-description">
          Here are some of the innovative projects we&apos;ve developed to solve real-world challenges:
        </p>

        <div className="projects-grid">
          {/* EduKid Project */}
          <div className="project-card">
            {/* Logo */}
            <div className="project-logo">
              <img src={EdukidLogo} alt="EduKid Logo" />
            </div>
            <h3>EduKid</h3>
            <p>
              An educational app for parents to book tutorials, access quizzes, and purchase learning materials. EduKid focuses on:
            </p>
            <ul>
              <li>Streamlined tutorial booking system for parents.</li>
              <li>Interactive quizzes to enhance student engagement.</li>
              <li>E-commerce integration for purchasing educational materials.</li>
            </ul>
            <div className="image-grid">
              <div className="image-item">
                <img src={Edukid1} alt="EduKid Screenshot 1" />
              </div>
              <div className="image-item">
                <img src={Edukid2} alt="EduKid Screenshot 2" />
              </div>
              <div className="image-item">
                <img src={Edukid3} alt="EduKid Screenshot 3" />
              </div>
              <div className="image-item">
                <img src={Edukid4} alt="EduKid Screenshot 4" />
              </div>
            </div>
            <a
              href="https://edukidweb.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>

          {/* TimeKeeper Project */}
          <div className="project-card">
            {/* Logo */}
            <div className="project-logo">
              <img src={TimekeeperLogo} alt="TimeKeeper Logo" />
            </div>
            <h3>Timekeeper</h3>
            <p>
              A powerful HR tool designed to track employee attendance and time management efficiently. Key features include:
            </p>
            <ul>
              <li>Real-time employee time tracking.</li>
              <li>Comprehensive attendance reporting.</li>
              <li>Streamlined management dashboard for HR teams.</li>
            </ul>
            <div className="image-grid">
              <div className="image-item">
                <img src={Timekeeper1} alt="TimeKeeper Screenshot 1" />
              </div>
              <div className="image-item">
                <img src={Timekeeper2} alt="TimeKeeper Screenshot 2" />
              </div>
              <div className="image-item">
                <img src={Timekeeper3} alt="TimeKeeper Screenshot 3" />
              </div>
              <div className="image-item">
                <img src={Timekeeper4} alt="TimeKeeper Screenshot 4" />
              </div>
            </div>
            <a
              href="https://timekeeperbyleos.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
