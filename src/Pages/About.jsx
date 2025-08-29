import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const About = () => {
    return (
        <>
            <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div>
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
                            About <span className="text-blue-600">MyBrand</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            MyBrand is a modern software solutions company that helps startups
                            and enterprises build digital experiences. We specialize in{" "}
                            <span className="font-semibold text-gray-800">
                                web development, UI/UX design, and cloud-based applications
                            </span>
                            . Our team of experts is passionate about creating fast, secure, and
                            user-friendly products that make an impact.
                        </p>

                        {/* Dummy Stats */}
                        <div className="grid grid-cols-3 gap-6 text-center">
                            <div className="p-4 bg-white shadow rounded-lg">
                                <h3 className="text-3xl font-bold text-blue-600">120+</h3>
                                <p className="text-gray-500 text-sm">Projects</p>
                            </div>
                            <div className="p-4 bg-white shadow rounded-lg">
                                <h3 className="text-3xl font-bold text-blue-600">50+</h3>
                                <p className="text-gray-500 text-sm">Clients</p>
                            </div>
                            <div className="p-4 bg-white shadow rounded-lg">
                                <h3 className="text-3xl font-bold text-blue-600">5+</h3>
                                <p className="text-gray-500 text-sm">Years</p>
                            </div>
                        </div>
                    </div>

                    {/* Right image placeholder */}
                    <div className="flex justify-center">
                        <div className="w-full h-72 md:h-96 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
                            <img className="w-full h-full" src="https://picsum.photos/seed/picsum/200/300" alt="" />
                            {/* <span className="text-gray-600">[ Image / Illustration ]</span> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Image */}
                    <div className="relative group">
                        <img
                            src="https://picsum.photos/id/1015/800/600"
                            alt="About Us"
                            className="rounded-2xl shadow-xl transform group-hover:scale-105 transition duration-500"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                            🚀 About Our Journey
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            For over a decade, we’ve been helping startups, enterprises, and
                            businesses embrace digital transformation. Our mission is to
                            craft experiences that not only look stunning but also deliver
                            measurable results.
                        </p>

                        {/* Features List */}
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Innovative and modern design approach
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Fast, scalable, and secure applications
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Tailored solutions for your business goals
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                24/7 support and maintenance services
                            </li>
                        </ul>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            Our team believes in building long-term partnerships. We don’t
                            just deliver projects; we help businesses grow with strategy,
                            creativity, and technology combined.
                        </p>

                        <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition">
                            Read More →
                        </button>
                    </div>
                </div>
            </section>
        </>

    );
};

export default About;
