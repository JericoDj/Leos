import { useState } from "react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! We'll be in touch soon.");
        setSubmitted(true);
        e.target.reset();
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="w-full pt-10 pb-20 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Get in Touch</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        Ready to start your project? Reach out and let&apos;s build something amazing together.
                    </p>
                </div>

                <div className="max-w-xl mx-auto">
                    {/* Contact Form */}
                    <div className="glass-panel p-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                                <input type="text" id="contact-name" name="name" placeholder="Cardo Luna" required className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder-slate-400 text-slate-800 shadow-sm" />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                                <input type="email" id="contact-email" name="email" placeholder="cardoluna@mail.com" required className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder-slate-400 text-slate-800 shadow-sm" />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-1.5">Your Message</label>
                                <textarea id="contact-message" name="message" rows="4" placeholder="Tell us about your project..." required className="w-full px-4 py-3 bg-white/70 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder-slate-400 text-slate-800 resize-none shadow-sm"></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={submitted}
                                className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 tracking-wide disabled:opacity-50"
                            >
                                {submitted ? "Sent! ✓" : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
