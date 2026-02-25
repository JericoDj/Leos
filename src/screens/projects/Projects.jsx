import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mobileProjects, webProjects } from "../../data/projectsData";

/* ─────────────────────────────────────────────
   Flip Card (Mobile Projects – 4:3 cover)
   ───────────────────────────────────────────── */
const FlipCard = ({ project, isFlipped, onFlip, onClose, onViewProject }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="relative"
    style={{ perspective: 1200 }}
  >
    <motion.div
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d", position: "relative" }}
      className="rounded-2xl shadow-md"
    >
      {/* FRONT */}
      <div
        style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        className="rounded-2xl overflow-hidden cursor-pointer"
        onClick={onFlip}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
              {project.category}
            </p>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <div className="w-10 h-0.5 bg-white/40 rounded-full mt-2" />
          </div>
          <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
            Tap to flip
          </div>
        </div>
      </div>

      {/* BACK */}
      <div
        style={{
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          position: "absolute",
          inset: 0,
        }}
        className="rounded-2xl bg-white border border-gray-100 flex flex-col items-center justify-center p-6 text-center gap-4 shadow-md"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors border-none cursor-pointer text-lg leading-none"
        >
          ✕
        </button>
        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
        <div className="w-10 h-0.5 bg-slate-300 rounded-full" />
        <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
        <button
          onClick={() => onViewProject(project)}
          className="mt-2 bg-gray-900 text-white text-sm font-semibold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-amber-500 hover:text-gray-900 transition-colors cursor-pointer border-none"
        >
          View Project
        </button>
      </div>
    </motion.div>
  </motion.div>
);

/* ─────────────────────────────────────────────
   Web Flip Card (16:9 cover + Visit Site)
   ───────────────────────────────────────────── */
const WebFlipCard = ({ project, isFlipped, onFlip, onClose, onViewProject }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="relative"
    style={{ perspective: 1200 }}
  >
    <motion.div
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d", position: "relative" }}
      className="rounded-2xl shadow-md"
    >
      {/* FRONT */}
      <div
        style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        className="rounded-2xl overflow-hidden cursor-pointer"
        onClick={onFlip}
      >
        <div className="relative w-full aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
              {project.category}
            </p>
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            <div className="w-10 h-0.5 bg-white/40 rounded-full mt-2" />
          </div>
          <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
            Tap to flip
          </div>
        </div>
      </div>

      {/* BACK */}
      <div
        style={{
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          position: "absolute",
          inset: 0,
        }}
        className="rounded-2xl bg-white border border-gray-100 flex flex-col items-center justify-center p-6 text-center gap-3 shadow-md"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors border-none cursor-pointer text-lg leading-none"
        >
          ✕
        </button>
        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
        <div className="w-10 h-0.5 bg-slate-300 rounded-full" />
        <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
        <div className="flex gap-3 mt-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 text-gray-900 text-sm font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-amber-400 transition-colors no-underline"
          >
            Visit Site
          </a>
          <button
            onClick={() => onViewProject(project)}
            className="bg-gray-900 text-white text-sm font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors cursor-pointer border-none"
          >
            View Project
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

/* ─────────────────────────────────────────────
   Gallery Modal (phone or widescreen frame)
   ───────────────────────────────────────────── */
const GalleryModal = ({ project, onClose }) => {
  const [idx, setIdx] = useState(0);
  if (!project) return null;

  const prev = (e) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + project.gallery.length) % project.gallery.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % project.gallery.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-slate-800 rounded-2xl max-w-2xl w-full p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-white font-bold text-lg">{project.title}</h3>
              <p className="text-amber-400 text-xs uppercase tracking-widest">
                {project.category}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white text-2xl leading-none bg-transparent border-none cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Image frame */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors text-lg border-none cursor-pointer flex-shrink-0"
            >
              ←
            </button>

            {project.widescreen ? (
              <div
                className="relative flex-1 rounded-xl overflow-hidden bg-black shadow-2xl"
                style={{ aspectRatio: "16/9" }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={idx}
                    src={project.gallery[idx]}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                  />
                </AnimatePresence>
              </div>
            ) : (
              <div className="relative flex-1 max-w-[260px] mx-auto">
                <div className="relative bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl border-4 border-gray-700">
                  <div className="rounded-[2rem] overflow-hidden aspect-[9/19.5] bg-black">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={idx}
                        src={project.gallery[idx]}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full h-full object-contain"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.25 }}
                      />
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={next}
              className="bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors text-lg border-none cursor-pointer flex-shrink-0"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {project.gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-all border-none cursor-pointer ${i === idx ? "bg-amber-400 w-5" : "bg-white/30"
                  }`}
              />
            ))}
          </div>

          <p className="text-center text-white/40 text-xs mt-3">
            Premium digital solutions crafted for excellence.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─────────────────────────────────────────────
   Web Image Modal (single cover preview)
   ───────────────────────────────────────────── */
const WebImageModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-slate-800 rounded-2xl max-w-3xl w-full p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-white font-bold text-lg">{project.title}</h3>
              <p className="text-amber-400 text-xs uppercase tracking-widest">
                {project.category}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white text-2xl leading-none bg-transparent border-none cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div
            className="rounded-xl overflow-hidden bg-black shadow-2xl"
            style={{ aspectRatio: "16/9" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex justify-center mt-5">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-gray-900 text-sm font-semibold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-amber-400 transition-colors no-underline"
            >
              Visit Site
            </a>
          </div>

          <p className="text-center text-white/40 text-xs mt-3">
            Premium digital solutions crafted for excellence.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─────────────────────────────────────────────
   Main Projects Section
   ───────────────────────────────────────────── */
function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeWebProject, setActiveWebProject] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);

  // Close modals on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveProject(null);
        setActiveWebProject(null);
        setFlippedCard(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="scroll-mt-20 py-10 md:py-16 relative">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            <span className="text-slate-900">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto rounded-full mb-6" />
          <p className="max-w-[600px] mx-auto text-slate-600 text-lg">
            A selection of our recent work — tap any card to see details.
          </p>
        </motion.div>

        {/* ─── Mobile Apps ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-3"
        >
          <div className="w-1 h-8 bg-amber-500 rounded-full" />
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            Mobile Application Portfolio
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {mobileProjects.map((project) => (
            <div
              key={project.id}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <FlipCard
                project={project}
                isFlipped={flippedCard === project.id}
                onFlip={() => setFlippedCard(project.id)}
                onClose={() => setFlippedCard(null)}
                onViewProject={setActiveProject}
              />
            </div>
          ))}
        </div>

        {/* ─── Web Apps ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 mb-8 flex items-center gap-3"
        >
          <div className="w-1 h-8 bg-orange-500 rounded-full" />
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            Web Application Portfolio
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {webProjects.map((project) => (
            <div
              key={project.id}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <WebFlipCard
                project={project}
                isFlipped={flippedCard === project.id}
                onFlip={() => setFlippedCard(project.id)}
                onClose={() => setFlippedCard(null)}
                onViewProject={setActiveWebProject}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {activeProject && (
        <GalleryModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
      {activeWebProject && (
        <WebImageModal
          project={activeWebProject}
          onClose={() => setActiveWebProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
