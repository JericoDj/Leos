import "./Projects.css";

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
            <h3>EduKid</h3>
            <p>
              An educational app for parents to book tutorials, access quizzes, and purchase learning materials. EduKid focuses on:
            </p>
            <ul>
              <li>Streamlined tutorial booking system for parents.</li>
              <li>Interactive quizzes to enhance student engagement.</li>
              <li>E-commerce integration for purchasing educational materials.</li>
            </ul>
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
            <h3>TimeKeeper</h3>
            <p>
              A powerful HR tool designed to track employee attendance and time management efficiently. Key features include:
            </p>
            <ul>
              <li>Real-time employee time tracking.</li>
              <li>Comprehensive attendance reporting.</li>
              <li>Streamlined management dashboard for HR teams.</li>
            </ul>
            <a
              href="https://timekeeper.netlify.app"
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
