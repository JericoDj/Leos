import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";// Video Assets
import MobileVid from "../../assets/Mobiile_Animation.mp4";
import WebVid from "../../assets/web_animation.mp4";
import BackendVid from "../../assets/Backend_Development.mp4";
import AiVid from "../../assets/Ai_Animation.mp4";

const capabilities = [
    {
        title: "Mobile App Development",
        description: "Build high-performance, cross-platform mobile applications using Flutter and Firebase. We focus on seamless user experiences and robust backend scaling.",
        tags: ["Flutter", "iOS & Android", "Firebase", "Offline Support"],
        video: MobileVid
    },
    {
        title: "Web Development",
        description: "Modern, responsive websites and complex SaaS platforms built with the latest frameworks. We prioritize speed, SEO, and scalability for your business.",
        tags: ["React", "Next.js", "Tailwind CSS", "Cloud Hosting"],
        video: WebVid
    },
    {
        title: "Back-end Development",
        description: "Robust and scalable server-side solutions. We build secure APIs, manage databases, and ensure your application's logic is fast and reliable.",
        tags: ["Node.js", "PostgreSQL", "API Design", "Server Security"],
        video: BackendVid
    },
    {
        title: "AI & Cloud Integration",
        description: "Leverage the power of Artificial Intelligence and Cloud computing to automate workflows and gain data-driven insights for your organization.",
        tags: ["OpenAI", "Google Cloud", "Automation", "Data Analytics"],
        video: AiVid
    }
];

function Services() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const handleOpenPopup = () => setShowPopup(true);
        window.addEventListener("open-services-popup", handleOpenPopup);
        return () => window.removeEventListener("open-services-popup", handleOpenPopup);
    }, []);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Your inquiry has been sent!");
                setShowPopup(false);
                e.target.reset();
            } else {
                toast.error("Something went wrong. " + data.message);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="services" className="w-full pt-10 pb-10 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Our Services</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        We provide end-to-end digital solutions to help your business thrive in the modern tech landscape. From concept to deployment, we&apos;ve got you covered.
                    </p>
                </div>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {capabilities.map((service, index) => (
                        <div
                            key={index}
                            className="glass-panel overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col"
                        >
                            {/* Video Container (16:9) */}
                            <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
                                <video
                                    src={service.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="px-3 py-1 bg-slate-100/80 text-slate-600 text-xs font-semibold rounded-full border border-slate-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button
                        onClick={openPopup}
                        className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 tracking-wide"
                    >
                        Inquire About a Service
                    </button>
                </div>
            </div>

            {/* Premium Popup Dialog */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center px-4"
                        onClick={closePopup}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        key="services-modal"
                    >
                        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-md"></div>
                        <motion.div
                            className="relative w-full max-w-lg bg-white/80 backdrop-blur-2xl border border-white/70 shadow-2xl shadow-amber-500/10 rounded-3xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.9, y: 30, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 30, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <div className="bg-gradient-to-r from-amber-600 to-orange-500 px-8 py-6">
                                <h2 className="text-2xl font-bold text-white tracking-tight">Inquire Service</h2>
                                <p className="text-amber-100 text-sm mt-1">Tell us what you need and we&apos;ll get back to you.</p>
                            </div>
                            <button className="absolute top-4 right-5 text-white/80 hover:text-white text-2xl leading-none transition-colors" onClick={closePopup}>&times;</button>
                            <form onSubmit={handleFormSubmit} className="p-8 space-y-5">
                                <div>
                                    <label htmlFor="name-service" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                                    <input type="text" id="name-service" name="name" placeholder="Cardo Luna" required className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder-slate-400 text-slate-800 shadow-sm" />
                                </div>
                                <div>
                                    <label htmlFor="email-service" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                                    <input type="email" id="email-service" name="email" placeholder="cardoluna@mail.com" required className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder-slate-400 text-slate-800 shadow-sm" />
                                </div>
                                <div>
                                    <label htmlFor="message-service" className="block text-sm font-semibold text-slate-700 mb-1.5">Your Message</label>
                                    <textarea id="message-service" name="message" rows="4" placeholder="Tell us about your project..." required className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder-slate-400 text-slate-800 resize-none shadow-sm"></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 tracking-wide disabled:opacity-50"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default Services;
