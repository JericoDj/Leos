import "./Services.css";

function Services() {
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
            <img
              src="https://via.placeholder.com/400x200"
              alt="Mobile App Development"
              className="service-image"
            />
            <h3>Mobile App Development</h3>
            <p>
              Delivering seamless and engaging mobile experiences for Android and iOS platforms. We focus on:
            </p>
            <ul>
              <li>Native app development for iOS and Android.</li>
              <li>Cross-platform development using Flutter or React Native.</li>
              <li>Integration with APIs, third-party tools, and cloud services.</li>
              <li>App Store and Google Play deployment support.</li>
            </ul>
          </div>

          {/* Web Development */}
          <div className="service-card">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Web Development"
              className="service-image"
            />
            <h3>Web Development</h3>
            <p>
              Crafting scalable, responsive, and user-friendly websites and web applications. Our expertise includes:
            </p>
            <ul>
              <li>Custom front-end and back-end development.</li>
              <li>Frameworks like React.js, Angular, and Vue.js.</li>
              <li>Full-stack development using Node.js, Express, and MongoDB.</li>
              <li>eCommerce, CMS, and progressive web applications (PWAs).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
