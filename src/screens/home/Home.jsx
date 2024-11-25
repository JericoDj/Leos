import "./Home.css";
import mainVideo from '../../assets/Main.mp4';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Left Column */}
        <div className="home-text">
          <p className="home-badge">Empowering Businesses, One App at a Time</p>
          <h1 className="home-title">Welcome to Leos</h1>
          <p className="home-subtitle">
            Leos is a hub of innovation, offering advanced development and technology solutions to empower your projects.
            Explore our cutting-edge products and comprehensive services tailored to your needs.
          </p>
          <div className="home-buttons">
            <button className="btn-primary">Inquire Service</button>
            <button className="btn-secondary">Check Out Products →</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="home-image">
          <video className="home-video" autoPlay loop muted>
            <source src={mainVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default Home;
