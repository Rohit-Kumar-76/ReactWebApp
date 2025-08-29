import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaHome,
    FaInfoCircle,
    FaServicestack,
    FaEnvelope,
    FaSearch,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState("");

    const handleText = (e) => {
        e.preventDefault();
        alert("Your Searched: " + text);
    };

    return (
        <nav className="bg-white shadow-md px-4 py-3 fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left - Branding */}
                <div className="text-2xl font-bold text-blue-600">Rohit Mehta</div>

                {/* Center - Menu (Desktop) */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                        <FaHome /> Home
                    </Link>
                    <Link to="/about" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                        <FaInfoCircle /> About
                    </Link>
                    <Link to="/service" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                        <FaServicestack /> Services
                    </Link>
                    <Link to="/contact" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                        <FaEnvelope /> Contact
                    </Link>
                </div>

                {/* Right - Search + Button (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Search..."
                        className="px-3 py-1 border rounded-lg focus:outline-none"
                    />
                    <button
                        onClick={handleText}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        <FaSearch /> Search
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-gray-700 focus:outline-none text-2xl"
                    >
                        <FaBars />
                    </button>
                </div>
            </div>

            {/* Sidebar Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Header with Close Button */}
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <h2 className="text-xl font-bold text-blue-600">Menu</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-600 text-2xl"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Menu Links */}
                <div className="flex flex-col space-y-4 px-6 py-6">
                    <Link
                        to="/"
                        className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaHome /> Home
                    </Link>
                    <Link
                        to="/about"
                        className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaInfoCircle /> About
                    </Link>
                    <Link
                        to="/service"
                        className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaServicestack /> Services
                    </Link>
                    <Link
                        to="/contact"
                        className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaEnvelope /> Contact
                    </Link>

                    {/* Search Input */}
                    <div className="flex items-center border rounded-lg overflow-hidden">
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Search..."
                            className="w-full px-3 py-2 focus:outline-none"
                        />
                        <button
                            onClick={handleText}
                            className="px-3 p-2 bg-blue-600 text-white hover:bg-blue-700"
                        >
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay (click to close) */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
