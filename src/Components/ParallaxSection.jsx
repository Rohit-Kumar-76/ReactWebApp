import React from "react";

const ParallaxSection = () => {
    return (
        <section
            className="relative h-[90vh] flex items-center justify-center text-center text-white bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('https://picsum.photos/id/1018/1600/900')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl px-6">
                <h2 className="text-4xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
                    ✨ Rohit World
                </h2>
                <p className="text-lg lg:text-xl mb-6">
                    Smooth scrolling parallax effect with TailwindCSS.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition">
                    Explore More 🚀
                </button>
            </div>
        </section>
    );
};

export default ParallaxSection;
