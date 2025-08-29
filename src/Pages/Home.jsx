import React from 'react'
import Testimonials from '../Components/Testimonials'
import ParallaxSection from '../Components/ParallaxSection'
import { FaCheckCircle } from "react-icons/fa";
import Features from '../Components/Features';

const highlights = [
    {
        title: "🌐 Modern Web Development",
        desc: "We craft scalable, fast, and secure web applications using the latest technologies to ensure your business stands out online.",
        img: "https://picsum.photos/id/1015/800/600",
        points: [
            "Responsive and mobile-friendly",
            "SEO optimized for better ranking",
            "Built with latest frameworks",
        ],
    },
    {
        title: "📱 Mobile Applications",
        desc: "Our expert team builds sleek and powerful iOS & Android apps with a focus on user experience and performance.",
        img: "https://picsum.photos/id/1016/800/600",
        points: [
            "Cross-platform compatibility",
            "Smooth and fast performance",
            "User-friendly experience",
        ],
    },
    {
        title: "🎨 Creative UI/UX Design",
        desc: "We create interfaces that not only look stunning but are intuitive and user-friendly, keeping your customers engaged.",
        img: "https://picsum.photos/id/1018/800/600",
        points: [
            "Pixel perfect designs",
            "User-centered approach",
            "Engaging & intuitive UI",
        ],
    },
];

const galleryImages = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1024/600/400",
    "https://picsum.photos/id/1025/600/400",
    "https://picsum.photos/id/1033/600/400",
    "https://picsum.photos/id/1035/600/400",
];

const Home = () => {
    return (
        <>


            <Features />
            <ParallaxSection />
            <Testimonials />

            <section className="py-20 px-6 bg-gray-50">
                <h2 className="text-3xl font-bold text-center mb-10">
                    <span className='border-b-2 border-black'>Our Gallery</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {galleryImages.map((img, i) => (
                        <div
                            key={i}
                            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            {/* Image */}
                            <img
                                src={img}
                                alt={`Gallery ${i}`}
                                className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-semibold">View 📷</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto space-y-20">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image Section */}
                            <div className="relative  flex justify-center">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="rounded-2xl shadow-xl transform w-3/4 md:w-2/3   transition duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            </div>

                            {/* Content Section - As Card */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                                <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                                    {item.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>

                                {/* Bullet Points */}
                                <ul className="space-y-3 mb-6">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex items-center text-gray-700">
                                            <FaCheckCircle className="text-green-500 mr-2" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition">
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Home