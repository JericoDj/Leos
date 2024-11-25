import "./About.css";

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
          <div className="value-card">
            <div className="value-image innovation-image"></div> {/* Innovation Background */}
            <h3>Innovation</h3>
            <p>
              Embracing cutting-edge technology to deliver the best solutions. We utilize AI, cloud computing, 
              and automation to create groundbreaking solutions for our clients.
            </p>
          </div>

          <div className="value-card">
            <div className="value-image quality-image"></div> {/* Quality Background */}
            <h3>Quality</h3>
            <p>
              Dedicated to maintaining excellence in everything we do. Our quality assurance team ensures every project 
              exceeds industry standards and client expectations.
            </p>
          </div>

          <div className="value-card">
            <div className="value-image relationships-image"></div> {/* Relationships Background */}
            <h3>Relationships</h3>
            <p>
              Building lasting connections with clients and partners. We believe in transparent communication 
              and trust, making us a partner you can rely on.
            </p>
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
