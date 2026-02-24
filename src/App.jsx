import { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Import the desktop Navbar component
import MobileNavbar from "./MobileNavbar"; // Import the mobile Navbar component
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Services from "./screens/services/Services";
import Projects from "./screens/projects/Projects";
import Contact from "./screens/contact/Contact";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Function to update the isMobile state when the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900); // Adjusted threshold to 900px
    };

    // Attach the resize listener
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-20 overflow-x-hidden">
      {/* Render MobileNavbar if isMobile is true, otherwise render Navbar */}
      {isMobile ? <MobileNavbar /> : <Navbar />}

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>

      {/* Professional Footer */}
      <footer className="w-full bg-slate-900 text-white pt-16 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <a href="#home" className="block mb-4 text-2xl font-extrabold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">LeosGroup</span>
              </a>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering businesses with cutting-edge mobile and web solutions. We turn ideas into premium digital products.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                <li><a href="#home" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Home</a></li>
                <li><a href="#about" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">About Us</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Services</a></li>
                <li><a href="#projects" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Projects</a></li>

                <li><a href="#contact" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Services</h4>
              <ul className="space-y-2.5">
                <li className="text-slate-400 text-sm">Mobile App Development</li>
                <li className="text-slate-400 text-sm">Web Development</li>
                <li className="text-slate-400 text-sm">UI/UX Design</li>
                <li className="text-slate-400 text-sm">E-commerce Solutions</li>
                <li className="text-slate-400 text-sm">SaaS Platforms</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Contact</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="mailto:Cardo&Luna@mail.com" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                    Cardo&Luna@mail.com
                  </a>
                </li>
                <li className="text-slate-400 text-sm">09760143260</li>
                <li className="text-slate-400 text-sm">Philippines</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 flex justify-center items-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Leos Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-xl animate-fade-in-up"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
