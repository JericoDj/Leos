import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mobileProjects, webProjects } from "../../data/projectsData";

function Projects() {
  const [flippedCardId, setFlippedCardId] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedGallery) {
        closeGallery();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGallery]);

  const toggleFlip = (id) => {
    setFlippedCardId((prev) => (prev === id ? null : id));
  };

  const openGallery = (e, project) => {
    e.stopPropagation(); // Prevent card from flipping back
    setSelectedGallery(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setFlippedCardId(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedGallery?.gallery) {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % selectedGallery.gallery.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedGallery?.gallery) {
      setDirection(-1);
      setCurrentImageIndex((prev) => (prev === 0 ? selectedGallery.gallery.length - 1 : prev - 1));
    }
  };

  const ProjectCard = ({ project, type }) => {
    const isFlipped = flippedCardId === project.id;

    return (
      <div
        className="relative w-full h-72 cursor-pointer group"
        onClick={() => {
          if (!isFlipped) setFlippedCardId(project.id);
        }}
        style={{ perspective: 1200 }}
      >
        <motion.div
          className="w-full h-full relative"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front: Image */}
          <div
            className="absolute inset-0 glass-panel overflow-hidden border-2 border-transparent group-hover:border-white/80 transition-all duration-300"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">{project.category}</span>
              <h4 className="text-lg font-bold text-white leading-tight drop-shadow-md">{project.title}</h4>
            </div>
          </div>

          {/* Back: Info */}
          <div
            className="absolute inset-0 glass-panel bg-white/80 backdrop-blur-2xl flex flex-col items-center justify-center p-6 text-center shadow-2xl border border-white/90"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            {/* Un-flip Button */}
            <button
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors z-20 shadow-sm"
              onClick={(e) => {
                e.stopPropagation();
                toggleFlip(project.id);
              }}
              aria-label="Close details"
            >
              &times;
            </button>

            <h4 className="text-xl font-bold text-slate-900 mb-3 px-4">{project.title}</h4>
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4"></div>
            <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="mt-auto flex flex-col gap-2 w-full px-4">
              {type === 'mobile' ? (
                <button
                  onClick={(e) => openGallery(e, project)}
                  className="w-full bg-slate-900 text-white text-[10px] font-bold py-2.5 rounded-full hover:bg-amber-600 transition-colors shadow-md uppercase tracking-wider translate-z-10"
                >
                  View Project
                </button>
              ) : (
                <>
                  <button
                    onClick={(e) => openGallery(e, { ...project, gallery: [project.image] })}
                    className="w-full bg-slate-100 text-slate-900 border border-slate-200 text-[10px] font-bold py-2 rounded-full hover:bg-white transition-colors shadow-sm uppercase tracking-wider"
                  >
                    View Image
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full bg-slate-900 text-white text-[10px] font-bold py-2 rounded-full hover:bg-amber-600 transition-colors shadow-md uppercase tracking-wider translate-z-10"
                  >
                    Visit Project
                  </a>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <section id="projects" className="w-full pt-10 pb-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Our Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Explore our portfolio of high-performance mobile apps and creative web solutions tailored for business success.
          </p>
        </div>

        {/* ─── Mobile Apps ─── */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-slate-900">Mobile App Portfolio</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileProjects.map((project) => (
              <ProjectCard key={project.id} project={project} type="mobile" />
            ))}
          </div>
        </div>

        {/* ─── Web Apps ─── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-slate-900">Web Application Portfolio</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project) => (
              <ProjectCard key={project.id} project={project} type="web" />
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={closeGallery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl"></div>

            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="w-full flex justify-between items-center mb-6 text-white px-2">
                <div>
                  <h4 className="text-2xl font-bold">{selectedGallery.title}</h4>
                  <p className="text-amber-400 text-sm font-medium">{selectedGallery.category}</p>
                </div>
                <button
                  onClick={closeGallery}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-3xl leading-none"
                >
                  &times;
                </button>
              </div>

              {/* Gallery View (Carousel for all devices) */}
              <div className="w-full flex-grow overflow-y-auto pr-2 custom-scrollbar relative">

                <div className="flex w-full h-full relative items-center justify-center overflow-hidden rounded-2xl">
                  {selectedGallery.gallery?.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 md:left-4 z-10 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-slate-900/80 text-white backdrop-blur-sm border border-white/20 text-lg md:text-2xl hover:bg-slate-800 transition-colors"
                      >
                        &#8592;
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 md:right-4 z-10 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-slate-900/80 text-white backdrop-blur-sm border border-white/20 text-lg md:text-2xl hover:bg-slate-800 transition-colors"
                      >
                        &#8594;
                      </button>
                    </>
                  )}

                  <div className={`w-full max-h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-800 flex items-center justify-center ${selectedGallery.title === "Leos POS" ? 'aspect-video' : (selectedGallery.gallery?.length === 1 ? 'aspect-video md:aspect-[16/9]' : 'aspect-[9/16] md:aspect-[9/18]')}`}>
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.img
                        key={currentImageIndex}
                        custom={direction}
                        initial={(d) => ({ opacity: 0, x: d > 0 ? 50 : -50, filter: "blur(4px)" })}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        exit={(d) => ({ opacity: 0, x: d > 0 ? -50 : 50, filter: "blur(4px)" })}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        src={selectedGallery.gallery?.[currentImageIndex] || selectedGallery.image}
                        alt={`${selectedGallery.title} screenshot`}
                        className="w-full h-full object-contain"
                      />
                    </AnimatePresence>
                  </div>

                  {/* Pagination Indicators */}
                  {selectedGallery.gallery?.length > 1 && (
                    <div className="absolute bottom-4 flex gap-2 z-10 bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                      {selectedGallery.gallery.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-amber-500' : 'bg-white/50'}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Footer Tip */}
              <p className="mt-8 text-white/50 text-sm font-medium hidden md:block">
                Premium digital solutions crafted for excellence.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
