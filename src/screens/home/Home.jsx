
import mainVideo from "../../assets/Main.mp4";

function Home() {
  const openPopup = () => {
    // Dispatch custom event to open Services modal
    window.dispatchEvent(new CustomEvent("open-services-popup"));
  };

  return (
    <section id="home" className="relative w-full scroll-mt-20 mt-16">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Section — on top on mobile, left on desktop */}
        <div className="order-1 flex flex-col justify-center text-center lg:text-left py-6 lg:py-12">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-orange-800 bg-orange-100/50 border border-orange-200/60 rounded-full w-max mx-auto lg:mx-0 backdrop-blur-sm">
            Empowering Businesses, One App at a Time
          </div>
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 drop-shadow-sm">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">Leos</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
            Leos is a hub of innovation, offering advanced development and technology solutions to empower your projects.
            Explore our cutting-edge products and comprehensive services tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-base" onClick={openPopup}>
              Inquire Service
            </button>
            <button
              className="glass-button w-full sm:w-auto text-base flex items-center justify-center gap-2 group"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Check Out Projects
            </button>
          </div>
        </div>

        {/* Video Section — below text on mobile, right on desktop */}
        <div className="order-2 relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/10 border-4 border-white/40 group">
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={mainVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

    </section>
  );
}

export default Home;
