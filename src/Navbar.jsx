import { useEffect, useState } from "react";


function Navbar() {
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
    // Dispatch custom event to open Services modal
    window.dispatchEvent(new CustomEvent("open-services-popup"));
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

    </>
  );
}

export default Navbar;
