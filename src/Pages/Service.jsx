import React from "react";
import { FaCode, FaMobileAlt, FaPaintBrush, FaCloud } from "react-icons/fa";

const services = [
    {
        title: "Web Development",
        description:
            "Modern, scalable websites crafted with the latest technologies for speed and security.",
        img: "https://picsum.photos/id/1015/400/300",
        gradient: "from-indigo-500 to-purple-500",
        icon: <FaCode className="text-4xl text-indigo-500" />,
    },
    {
        title: "Mobile Apps",
        description:
            "Custom iOS & Android apps designed for performance and seamless user experience.",
        img: "https://picsum.photos/id/1011/400/300",
        gradient: "from-pink-500 to-orange-500",
        icon: <FaMobileAlt className="text-4xl text-pink-500" />,
    },
    {
        title: "UI/UX Design",
        description:
            "Intuitive and elegant designs that focus on user experience and visual appeal.",
        img: "https://picsum.photos/id/1016/400/300",
        gradient: "from-teal-500 to-green-500",
        icon: <FaPaintBrush className="text-4xl text-green-500" />,
    },
    {
        title: "Cloud Hosting",
        description:
            "Secure, fast, and scalable cloud hosting solutions for your apps & websites.",
        img: "https://picsum.photos/id/1003/400/300",
        gradient: "from-blue-500 to-cyan-500",
        icon: <FaCloud className="text-4xl text-blue-500" />,
    },
];

const Service = () => {
    return (
        <>
            {/* Services Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    💼 Our Services
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative group rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-white/80 backdrop-blur-lg"
                        >
                            {/* Image with Gradient Overlay */}
                            <div className="relative">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="h-44 w-full object-cover"
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-30 group-hover:opacity-50 transition duration-300`}
                                ></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    {service.icon}
                                    <h3 className="text-xl font-bold">{service.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gray-600 text-white text-center">
                <h2 className="text-3xl font-bold mb-6">🚀 Why Choose Us?</h2>
                <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-10">
                    We craft digital experiences with top-notch technology, creative
                    designs, and unmatched performance. Your success is our mission.
                </p>

                {/* Call to Action */}
                <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                    Get Started 🚀
                </button>
            </section>
        </>
    );
};

export default Service;
