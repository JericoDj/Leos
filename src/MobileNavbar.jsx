import { useState, useEffect } from "react";

import { FiMenu, FiX } from "react-icons/fi"; // Adding some basic icons if possible, or just text

function MobileNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Track selected menu item

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const openPopup = () => {
    setShowPopup(true);
    setDrawerOpen(false); // Close drawer if it was open
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setShowPopup(false);
    e.target.reset();
  };

  const handleMenuClick = (event, item) => {
    event.preventDefault();
    setDrawerOpen(false); // Close drawer immediately
    window.location.href = `#${item.toLowerCase()}`;
  };

  // Track scroll position to highlight the active menu item
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });

      setSelectedItem(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Services", "Projects"];

  return (
    <>
      <div className="fixed w-full top-0 z-[49] h-24 bg-white/40 backdrop-blur-xl pointer-events-none [mask-image:linear-gradient(to_bottom,white_70%,transparent)]"></div>
      <div className="fixed w-full top-0 z-50 px-4 pt-8 pointer-events-none">
        <nav className="max-w-lg mx-auto bg-white/70 backdrop-blur-xl border border-white/60 shadow-lg shadow-slate-200/50 rounded-full px-4 pointer-events-auto transition-all duration-300">
          <div className="flex justify-between items-center h-14">
            <button
              className="text-slate-700 hover:text-amber-600 focus:outline-none p-2"
              onClick={toggleDrawer}
              aria-label="Toggle menu"
            >
              {drawerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <div className="flex-shrink-0 flex items-center justify-center">
              <a href="#home" className="text-xl font-extrabold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">LeosGroup</span>
              </a>
            </div>

            <button
              className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md transition-all duration-300"
              onClick={openPopup}
            >
              Get a Quote
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 ${drawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleDrawer}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-4/5 max-w-xs bg-white/90 backdrop-blur-2xl border-r border-white/60 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="px-6 pt-12 pb-6 border-b border-slate-100">
          <p className="text-2xl font-extrabold tracking-tight mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">LeosGroup</span>
          </p>
          <p className="text-slate-500 text-xs leading-relaxed">Empowering Businesses,<br />One App at a Time.</p>
        </div>

        {/* Nav Links */}
        <nav className="flex-grow px-4 py-6 space-y-1 overflow-y-auto">
          {[
            { label: "Home", href: "home" },
            { label: "About", href: "about" },
            { label: "Services", href: "services" },
            { label: "Projects", href: "projects" },
            { label: "Contact", href: "contact" },
          ].map((item) => {
            const isActive = selectedItem === item.href;
            return (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => handleMenuClick(e, item.href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive
                  ? "bg-amber-50 text-amber-600 border border-amber-200"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
              >
                {item.label}
                {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-500"></span>}
              </a>
            );
          })}
        </nav>

        <div className="px-6 py-4 border-t border-slate-100 space-y-2">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">Email us at:</p>
          <p className="text-slate-600 text-xs">Cardo&Luna@mail.com</p>
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mt-2 mb-1">Contact:</p>
          <p className="text-slate-600 text-xs">09760143260</p>
        </div>

        {/* CTA */}
        <div className="px-4 pb-8">
          <button
            className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 text-sm tracking-wide"
            onClick={openPopup}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Premium Popup Dialog */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-dialog-backdrop" onClick={closePopup}>
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-md"></div>
          <div
            className="relative w-full max-w-md bg-white/80 backdrop-blur-2xl border border-white/70 shadow-2xl shadow-amber-500/10 rounded-3xl overflow-hidden animate-dialog-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-amber-600 to-orange-500 px-6 py-5">
              <h2 className="text-xl font-bold text-white tracking-tight">Get in Touch</h2>
              <p className="text-amber-100 text-xs mt-1">We&apos;d love to hear about your project.</p>
            </div>
            <button className="absolute top-3 right-4 text-white/80 hover:text-white text-2xl leading-none transition-colors" onClick={closePopup}>&times;</button>
            <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="name-mobile" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                <input type="text" id="name-mobile" name="name" placeholder="Cardo Luna" required className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder-slate-400 text-slate-800 shadow-sm" />
              </div>
              <div>
                <label htmlFor="email-mobile" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                <input type="email" id="email-mobile" name="email" placeholder="cardoluna@mail.com" required className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder-slate-400 text-slate-800 shadow-sm" />
              </div>
              <div>
                <label htmlFor="message-mobile" className="block text-sm font-semibold text-slate-700 mb-1.5">Your Message</label>
                <textarea id="message-mobile" name="message" rows="3" placeholder="Tell us about your project..." required className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder-slate-400 text-slate-800 resize-none shadow-sm"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 tracking-wide">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileNavbar;
