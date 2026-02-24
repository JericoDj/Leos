import { useEffect, useState } from "react";


function Navbar() {
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setShowPopup(false); // Close the popup after submission
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <>
      <div className="fixed w-full top-0 z-[49] h-32 bg-white/40 backdrop-blur-xl pointer-events-none [mask-image:linear-gradient(to_bottom,white_70%,transparent)]"></div>
      <div className="fixed w-full top-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none mt-3">
        <nav className="max-w-6xl mx-auto bg-white/70 backdrop-blur-xl border border-white/60 shadow-lg shadow-slate-200/50 rounded-full px-6 lg:px-8 pointer-events-auto transition-all duration-300">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#home" className="text-2xl font-extrabold tracking-tight transition-transform hover:scale-105">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">LeosGroup</span>
              </a>
            </div>

            {/* Menu Links */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${isActive ? "text-amber-600" : "text-slate-600 hover:text-amber-500"
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Contact Button */}
            <div className="hidden md:flex items-center">
              <button
                className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                onClick={openPopup}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-dialog-backdrop" onClick={closePopup}>
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-md"></div>
          <div
            className="relative w-full max-w-lg bg-white/80 backdrop-blur-2xl border border-white/70 shadow-2xl shadow-amber-500/10 rounded-3xl overflow-hidden animate-dialog-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-amber-600 to-orange-500 px-8 py-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">Get in Touch</h2>
              <p className="text-amber-100 text-sm mt-1">We&apos;d love to hear about your project.</p>
            </div>
            <button className="absolute top-4 right-5 text-white/80 hover:text-white text-2xl leading-none transition-colors" onClick={closePopup}>&times;</button>
            <form onSubmit={handleFormSubmit} className="p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Cardo Luna" required className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder-slate-400 text-slate-800 shadow-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                <input type="email" id="email" name="email" placeholder="cardoluna@mail.com" required className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder-slate-400 text-slate-800 shadow-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">Your Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us about your project..." required className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder-slate-400 text-slate-800 resize-none shadow-sm"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 tracking-wide">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
