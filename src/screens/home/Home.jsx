import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import mainVideo from "../../assets/Main.mp4";

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0c8vaah", // Replace with your Service ID
        "template_xyz123", // Replace with your Template ID
        e.target,          // Form element
        "F_wHWnTjUYM61qNdV" // Replace with your Public Key
      )
      .then(
        (result) => {
          alert("Your inquiry has been sent!");
          console.log("Email successfully sent:", result.text);
          setShowPopup(false); // Close popup after submission
        },
        (error) => {
          alert("An error occurred. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );

    e.target.reset(); // Clear form fields
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

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

      {/* Premium Popup Dialog */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-dialog-backdrop" onClick={closePopup}>
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-md"></div>
          <div
            className="relative w-full max-w-lg bg-white/80 backdrop-blur-2xl border border-white/70 shadow-2xl shadow-amber-500/10 rounded-3xl overflow-hidden animate-dialog-panel"
            ref={popupRef}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient Header */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-500 px-8 py-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">Get in Touch</h2>
              <p className="text-amber-100 text-sm mt-1">We&apos;d love to hear about your project.</p>
            </div>

            <button
              className="absolute top-4 right-5 text-white/80 hover:text-white text-2xl leading-none transition-colors"
              onClick={closePopup}
            >
              &times;
            </button>

            <form onSubmit={handleFormSubmit} className="p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Cardo Luna"
                  required
                  className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder-slate-400 text-slate-800 shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder-slate-400 text-slate-800 shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder-slate-400 text-slate-800 resize-none shadow-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
