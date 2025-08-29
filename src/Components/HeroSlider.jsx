import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const slides = [
    {
        title: "🚀 Build Stunning Websites",
        desc: "We create modern, scalable and fast websites for your business growth.",
        img: "https://picsum.photos/id/1018/1600/600",
        btn: "Get Started",
    },
    {
        title: "📱 Mobile Apps Development",
        desc: "Custom iOS & Android apps designed with sleek UI and top performance.",
        img: "https://picsum.photos/id/1025/1600/600",
        btn: "Explore Apps",
    },
    {
        title: "🎨 Creative UI/UX Design",
        desc: "Intuitive designs that blend creativity and user experience perfectly.",
        img: "https://picsum.photos/id/1005/1600/600",
        btn: "View Designs",
    },
];

const HeroSlider = () => {
    return (
        <section className="relative w-full h-[80vh]">
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="h-full"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full h-[80vh]">
                            {/* Background Image */}
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                                <h2 className="text-4xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
                                    {slide.title}
                                </h2>
                                <p className="max-w-2xl text-lg lg:text-xl mb-6">{slide.desc}</p>
                                <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition">
                                    {slide.btn}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSlider;
