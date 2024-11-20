import "./Home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Left Column */}
        <div className="home-text">
          <p className="home-badge">THIS IS A BADGE</p>
          <h1 className="home-title">Unblock your team, boost your time to production</h1>
          <p className="home-subtitle">Subtitle goes here</p>
          <div className="home-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">See Tutorials →</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="home-image">
          <img
            src="https://via.placeholder.com/1000x600" /* Replace with your image URL */
            alt="Illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
