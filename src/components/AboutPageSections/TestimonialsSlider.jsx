/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const rooms = [
    {
        id: 1,
        title: "Rohit A",
        price: "Delhi NCR",
        stars: 5,
        description: "“A hidden gem on the Delhi-Haridwar highway! Beautiful ambiance, great food, and the perfect weekend escape. Highly recommended.”",
        img: "https://html.tonatheme.com/2022/royalking/assets/images/resource/room-4.jpg",
    },
    {
        id: 2,
        title: "Simran K",
        price: "Saharanpur",
        stars: 4,
        description: "“We hosted our engagement here, and everything was flawless—from decor to stay to food. Devrana made it truly memorable.”",
        img: "https://html.tonatheme.com/2022/royalking/assets/images/resource/room-4.jpg",
    },
    {
        id: 3,
        title: "Amit S",
        price: "Meerut",
        stars: 5,
        description: "“Spacious venues, clean rooms, and peaceful surroundings. Ideal for family events or just a break from city chaos.”",
        img: "https://html.tonatheme.com/2022/royalking/assets/images/resource/room-4.jpg",
    },

];

export default function TestimonialsSlider() {
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
        <section className="bg-Secondary py-16"
            style={{
                backgroundImage: "url('https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-4.png')",
            }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6">
                {/* Left Content */}
                <div className="bg-Secondary">
                    <p className="uppercase text-sm tracking-widest text-white mb-2">
                        Testimonials
                    </p>
                    <h2 className="text-3xl md:text-4xl  text-white mb-6 font-serif">
                        What they say?  <br /> About us
                    </h2>
                    <p className="text-white mb-8 text-sm">
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
                <div className="overflow-hidden relative flex space-x-6 h-[400px] items-center bg-Secondary ">
                    <AnimatePresence initial={false}>
                        {visibleRooms.map((room) => (
                            <motion.div
                                key={room.id}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white shadow-lg rounded-lg overflow-hidden w-80  flex-shrink-0 relative py-6"
                            >
                                {/* Card hover state */}
                                <div className="relative group">

                                    <div className="p-4 text-center">
                                        <h3 className=" text-gray-900 font-serif">
                                            {room.title}
                                        </h3>
                                        <p className="text-gray-900 pt-2">

                                            <span className="text-red-500 font-semibold ">
                                                {room.price}
                                            </span>

                                            <p className="py-3" >{room.description}</p>
                                        </p>
                                        <div className=" overflow-hidden items-center flex justify-center py-7">
                                            <img className="w-16 h-16 rounded-full" src={room.img} alt="" />
                                        </div>
                                        <div className="flex items-center mb-2 text-center justify-center">
                                            {Array.from({ length: room.stars }).map((_, i) => (
                                                <FaStar key={i} className="text-yellow-400 mr-1" />
                                            ))}
                                        </div>
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
