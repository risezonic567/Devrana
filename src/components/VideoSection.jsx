import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import video from "../video/room.mp4"
export default function PremiumVideoSection() {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <div className="flex justify-center" >
        <section className="relative sm:h-[700px] w-[1600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://i.postimg.cc/L6ZS1k76/Whats-App-Image-2025-09-23-at-4-06-21-PM.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white text-3xl md:text-5xl font-bold mb-12"
                >
                    Watch The Experience <br /> Before You Feel It
                </motion.h2>

                {/* Play Button */}
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(true)}
                    className="bg-red-500 hover:bg-red-600 text-white p-8 rounded-full shadow-2xl transition-all flex items-center justify-center text-4xl"
                >
                    <FaPlay />
                </motion.button>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-0 right-0 text-white text-4xl p-3 hover:text-red-500 "
                    >
                        &times;
                    </button>
                    <div className="relative w-full max-w-4xl mx-4">
                       
                        <div className="w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                            <video
                                className="w-full h-full"
                                src={video}
                                title="Devrana Video"
                                autoPlay
                                loop
                                muted
                                allowFullScreen
                            ></video>
                        </div>
                    </div>
                </div>
            )}
        </section>
        </div>
    );
}
