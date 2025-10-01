/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const rooms = [
    {
        id: 1,
        name: "Rohit A.",
        designation: "Guest",
        rating: 5,
        image: "https://bsmedia.business-standard.com/_media/bs/img/article/2020-08/19/full/20200819173632.jpg",
        text: "Devrana Resort exceeded all my expectations. The stay was luxurious, and the service was impeccable!",
    },
    {
        id: 2,
        name: "Simran K.",
        designation: "Visitor",
        rating: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbJY-9UwNKaDX3KyKBbuu6K6W_J8wVfF5EwQ-NnLgELUnaICX_fxZ57wMnQHzxVmmT1I&usqp=CAU",
        text: "“We hosted our engagement here, and everything was flawless—from decor to stay to food. Devrana made it truly memorable.”",
    },
    {
        id: 3,
        name: "Amit S",
        designation: "Traveler",
        rating: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7aH_4QA0EE2c_ZvVrw74903j-4X2BMqvTg&s",
        text: "“Spacious venues, clean rooms, and peaceful surroundings. Ideal for family events or just a break from city chaos.”",
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
                                            {room.name}
                                        </h3>
                                        <p className="text-gray-900 pt-2">

                                            <span className="text-red-500 font-semibold ">
                                                {room.price}
                                            </span>

                                            <p className="py-3" >{room.text}</p>
                                        </p>
                                        <div className=" overflow-hidden items-center flex justify-center py-7">
                                            <img className="w-16 h-16 rounded-full" src={room.image} alt="" />
                                        </div>
                                        <p className="py-3" >{room.designation}</p>
                                        <div className="flex items-center mb-2 text-center justify-center">
                                            {Array.from({ length: room.rating }).map((_, i) => (
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
