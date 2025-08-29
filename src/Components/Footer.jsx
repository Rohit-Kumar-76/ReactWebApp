import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-2 ">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Branding */}
                <div>
                    <h2 className="text-2xl font-bold text-white">MyBrand</h2>
                    <p className="mt-3 text-gray-400">
                        Building modern web applications with React & Tailwind.
                        We provide reliable and scalable solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                        <li><Link to="/service" className="hover:text-white">Services</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
                    <ul className="space-y-2">
                        <li>Web Development</li>
                        <li>UI/UX Design</li>
                        <li>SEO Optimization</li>
                        <li>Cloud Hosting</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
                    <p>Email: support@mybrand.com</p>
                    <p>Phone: +91 98765 43210</p>
                    <p>Address: Patna, Bihar, India</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} MyBrand. All rights reserved.
            </div>
        </footer>
    );
}
