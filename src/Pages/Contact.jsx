import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!name.trim()) tempErrors.name = "Name is required!";
        if (!email.trim()) {
            tempErrors.email = "Email is required!";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "Please enter a valid email!";
        }
        if (!msg.trim()) tempErrors.msg = "Message cannot be empty!";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${msg}`);
        console.log("Form Data:", { name, email, msg });
        setName("");
        setEmail("");
        setMsg("");
        setErrors({});
    };

    return (
        <>
            {/* Contact Section */}
            <section
                className="py-20 px-6 flex items-center justify-center min-h-screen bg-gray-600"
            >
                <div className="max-w-lg w-full bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30">
                    <h2 className="text-3xl font-extrabold text-white text-center mb-4 drop-shadow-lg">
                        📞 Contact Us
                    </h2>
                    <p className="mb-8 text-white/90 text-center">
                        We’d love to hear from you! Fill out the form below.
                    </p>

                    <form className="grid gap-5" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="text-left">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name"
                                className={`p-3 rounded-lg w-full bg-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.name ? "border border-red-400" : "border border-white/30"
                                    }`}
                            />
                            {errors.name && (
                                <p className="text-red-300 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="text-left">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email"
                                className={`p-3 rounded-lg w-full bg-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.email ? "border border-red-400" : "border border-white/30"
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-red-300 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Message */}
                        <div className="text-left">
                            <textarea
                                placeholder="Your Message"
                                value={msg}
                                onChange={(e) => setMsg(e.target.value)}
                                rows="4"
                                className={`p-3 rounded-lg w-full bg-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.msg ? "border border-red-400" : "border border-white/30"
                                    }`}
                            />
                            {errors.msg && (
                                <p className="text-red-300 text-sm mt-1">{errors.msg}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="px-6 py-3 bg-gradient-to-r from-indigo-400 to-purple-500 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition transform"
                        >
                            Send Message ✉️
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
