import { Player } from "@lottiefiles/react-lottie-player"; // Import Lottie player
import innovationAnimation from "../../assets/Innovate.json";
import qualityAnimation from "../../assets/Quality.json";
import relationshipAnimation from "../../assets/Relationship.json";

const values = [
  {
    title: "Innovation",
    animation: innovationAnimation,
    description:
      "Embracing cutting-edge technology to deliver the best solutions. We utilize AI, cloud computing, and automation to create groundbreaking solutions for our clients.",
  },
  {
    title: "Quality",
    animation: qualityAnimation,
    description:
      "Dedicated to maintaining excellence in everything we do. Our quality assurance team ensures every project exceeds industry standards and client expectations.",
  },
  {
    title: "Relationships",
    animation: relationshipAnimation,
    description:
      "Building lasting connections with clients and partners. We believe in transparent communication and trust, making us a partner you can rely on.",
  },
];

function About() {
  return (
    <section id="about" className="w-full py-0 scroll-mt-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-800 to-amber-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            At Leos Group, we specialize in delivering exceptional services tailored to your unique needs.
            With a strong focus on quality, innovation, and building meaningful relationships, we strive to
            provide solutions that empower your projects and bring your vision to life.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="glass-panel p-8 text-center flex flex-col items-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div className="w-48 h-48 mb-6 relative">
                <div className="absolute inset-0 bg-amber-100 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <Player
                  autoplay
                  loop
                  src={value.animation} // Load the JSON animation
                  className="w-full h-full relative z-10"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
