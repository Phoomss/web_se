"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
];

const ImageHero = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // เปลี่ยนภาพทุก 5 วินาที
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[467px] overflow-hidden rounded-lg shadow-lg">
            <AnimatePresence>
                <motion.img
                    key={current}
                    src={images[current]}
                    className="absolute w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                />
            </AnimatePresence>

            {/* ปุ่มควบคุม */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
                <button onClick={prevSlide} className="bg-black/40 p-3 rounded-full text-white hover:bg-black/60 transition">
                    ❮
                </button>
                <button onClick={nextSlide} className="bg-black/40 p-3 rounded-full text-white hover:bg-black/60 transition">
                    ❯
                </button>
            </div>

            {/* Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition ${index === current ? "bg-white" : "bg-gray-500/60"}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageHero;
