function TechStack() {
    const stacks = [
        { name: "Flutter", desc: "Cross-platform mobile framework", icon: "📱" },
        { name: "React", desc: "Modern web UI library", icon: "⚛️" },
        { name: "Firebase", desc: "Backend & real-time database", icon: "🔥" },
        { name: "Node.js", desc: "Server-side JavaScript runtime", icon: "🟢" },
        { name: "Supabase", desc: "Open-source backend platform", icon: "⚡" },
        { name: "Tailwind CSS", desc: "Utility-first CSS framework", icon: "🎨" },
    ];

    return (
        <section id="techstack" className="w-full py-20 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Our Tech Stack</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-800 to-amber-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        We leverage the most powerful and modern technologies to deliver exceptional results.
                    </p>
                </div>

                {/* Stack Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
                    {stacks.map((tech) => (
                        <div
                            key={tech.name}
                            className="glass-panel p-6 text-center hover:scale-105 transition-transform duration-300 group cursor-default"
                        >
                            <div className="text-4xl mb-3">{tech.icon}</div>
                            <h3 className="font-bold text-slate-900 text-lg mb-1">{tech.name}</h3>
                            <p className="text-slate-500 text-xs font-medium">{tech.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Why Choose Us */}
                <div className="mt-20 glass-panel p-8 md:p-12 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Why Choose Leos?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg">01</div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">End-to-End Development</h4>
                                <p className="text-slate-500 text-sm">From concept to deployment, we handle every stage of the product lifecycle.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg">02</div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Modern & Scalable</h4>
                                <p className="text-slate-500 text-sm">Built with the latest tech to ensure your product grows with your business.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg">03</div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Pixel-Perfect Design</h4>
                                <p className="text-slate-500 text-sm">We obsess over UI/UX to deliver premium, polished experiences.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg">04</div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Dedicated Support</h4>
                                <p className="text-slate-500 text-sm">Ongoing maintenance and support to keep your product running flawlessly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechStack;
