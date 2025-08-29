import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
    {
        text: "Amazing experience! Their web app improved our business efficiency.",
        author: "Rohit Kumar",
    },
    {
        text: "Professional and quick delivery. The design looks stunning!",
        author: "Priya Sharma",
    },
    {
        text: "They understood our needs perfectly and delivered beyond expectations.",
        author: "Aman Verma",
    },
    {
        text: "Best team I’ve worked with! Reliable and highly skilled.",
        author: "Neha Singh",
    },
    {
        text: "Excellent service and support throughout the project.",
        author: "Karan Patel",
    },
    {
        text: "Top quality development at affordable prices. Highly recommended!",
        author: "Sneha Gupta",
    },
];

const Testimonials = () => {
    return (
        <section className="py-16 px-6 bg-gray-100 relative">
            <h2 className="text-3xl font-bold text-center mb-10">
                💬 Testimonials
            </h2>

            <div className="relative max-w-6xl mx-auto">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="p-6 bg-white shadow-lg rounded-lg h-full flex flex-col justify-between hover:shadow-xl transition">
                                <p className="text-gray-700 italic">"{t.text}"</p>
                                <h4 className="mt-4 font-semibold text-indigo-600">
                                    - {t.author}
                                </h4>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Arrows (Bahar side) */}
                <div className="swiper-button-prev !text-indigo-600 !left-[-50px] after:!text-3xl"></div>
                <div className="swiper-button-next !text-indigo-600 !right-[-50px] after:!text-3xl"></div>
            </div>
        </section>
    );
};

export default Testimonials;
