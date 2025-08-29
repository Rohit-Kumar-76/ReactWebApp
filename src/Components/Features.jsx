import { FaBolt, FaMobileAlt, FaLock, FaRocket, FaCloud, FaPaintBrush } from "react-icons/fa";

const Features = () => {
    const features = [
        {
            title: "⚡ Fast Performance",
            desc: "Experience blazing fast speed and optimized performance for all devices.",
            icon: <FaBolt className="text-yellow-500 text-3xl" />,
            border: "from-yellow-400 to-orange-500",
        },
        {
            title: "📱 Responsive Design",
            desc: "Looks perfect on mobile, tablet, and desktop with our adaptive layouts.",
            icon: <FaMobileAlt className="text-blue-500 text-3xl" />,
            border: "from-blue-400 to-indigo-500",
        },
        {
            title: "🔒 Secure",
            desc: "Your data is protected with modern authentication and encryption methods.",
            icon: <FaLock className="text-green-500 text-3xl" />,
            border: "from-green-400 to-emerald-500",
        },
        {
            title: "🚀 Scalable",
            desc: "Grow your business seamlessly with our highly scalable architecture.",
            icon: <FaRocket className="text-purple-500 text-3xl" />,
            border: "from-purple-400 to-pink-500",
        },
        {
            title: "☁️ Cloud Ready",
            desc: "Easily deploy and manage your apps on modern cloud infrastructure.",
            icon: <FaCloud className="text-cyan-500 text-3xl" />,
            border: "from-cyan-400 to-sky-500",
        },
        {
            title: "🎨 Customizable",
            desc: "Tailor the design and features to perfectly match your brand’s identity.",
            icon: <FaPaintBrush className="text-pink-500 text-3xl" />,
            border: "from-pink-400 to-red-500",
        },
    ];

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center mb-14 ">
                ✨ Features
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`relative rounded-2xl p-[2px] bg-gradient-to-r ${feature.border} hover:scale-105 transition-transform`}
                    >
                        <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-md">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
