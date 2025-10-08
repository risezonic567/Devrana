import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const rooms = [
   
    
    {
        id: 1,
        title: "Luxury Room",
        price: "3500 INR",
        stars: 5,
        description: "Spacious deluxe room with premium facilities.",
        img: "https://i.postimg.cc/R0h50KH4/1.jpg",
    },
    {
        id: 2,
        title: "Family Suite",
        price: "5500 INR",
        stars: 5,
        description: "Top-notch suite with royal comfort.",
        img: "https://i.postimg.cc/fy465PgR/3.jpg",
    },
    {
        id: 3,
        title: "Cottage Room",
        price: "5500 INR",
        stars: 4,
        description: "Cozy cottage experience with nature view.",
        // img: "https://i.postimg.cc/hv9NY0Hb/2.jpg",
        img: "/cottageroom3.jpg",
    },
];

export default function RoomsSlider() {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));
    };

    const visibleRooms = [
        rooms[index],
        rooms[(index + 1) % rooms.length],
        rooms[(index + 2) % rooms.length],
    ];

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6">
                {/* Left Content */}
                <div>
                    <p className="uppercase text-sm tracking-widest text-red-600 mb-2">
                        Discover
                    </p>
                    <h2 className="text-3xl md:text-4xl  text-gray-900 mb-6 font-serif">
                        Our Rooms <br /> & Cottages
                    </h2>
                    <p className="text-gray-600 mb-8 text-sm">
                        Experience traditional village charm with modern comfort at <br />
                        Devrana’s rooms and cottages, just near Delhi NCR.
                    </p>
                    <div className="flex space-x-4">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 shadow-md hover:bg-gray-200 transition"
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 shadow-md hover:bg-gray-200 transition"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                {/* Right Slider */}
                <div className="overflow-hidden relative flex space-x-6">
                    <AnimatePresence initial={false}>
                        {visibleRooms.map((room) => (
                            <motion.div
                                key={room.id}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white shadow-lg rounded-lg overflow-hidden w-80 sm:h-[450px] flex-shrink-0 relative"
                            >
                                {/* Card hover state */}
                                <div className="relative group">
                                    <img
                                        src={room.img}
                                        alt={room.title}
                                        className="w-full h-96 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className=" text-gray-900 font-serif">
                                            {room.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            Start from{" "}
                                            <span className="text-red-500 font-semibold">
                                                {room.price}
                                            </span>
                                            /night
                                        </p>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-70 text-white p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div>
                                            <div className="flex items-center mb-2">
                                                {Array.from({ length: room.stars }).map((_, i) => (
                                                    <FaStar key={i} className="text-yellow-400 mr-1" />
                                                ))}
                                            </div>
                                            <p className="text-sm mb-2">{room.description}</p>
                                            <p className="font-semibold text-lg">{room.price}/night</p>
                                        </div>
                                        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-2">
                                            View all 
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
