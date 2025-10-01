/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import img1 from "../images/home/home1.jpg"
import img2 from "../images/home/home2.jpg"
import video from "../video/aboutsectionvideo.mp4"



export default function AboutSection() {
    const [isOpen, setIsOpen] = useState(false);

    // Placeholder classes for premium look
    const textPrimary = "text-[#385d53]"; // Deep Forest Green
    const bgPrimary = "bg-[#385d53]";
    const hoverBgPrimary = "hover:bg-[#4a7368]";
    const borderPrimary = "border-[#385d53]";
    const textSecondary = "text-[#b5946c]"; // Muted Gold/Tan
    const ringSecondary = "ring-[#b5946c]";

    return (
        // Increased padding, sophisticated background, and a subtle drop shadow on the section
        <section className="relative bg-white py-24 px-6 lg:px-20 flex flex-col lg:flex-row items-stretch gap-16 max-w-8xl mx-auto ">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left pt-6 lg:pt-0">
                <p className={`uppercase tracking-[0.3em] text-xs ${textSecondary} font-medium`}>
                    The Retreat
                </p>
                {/* Elevated Typography with a modern serif (assuming 'font-serif' is configured) */}
                <h2 className={`text-5xl lg:text-6xl font-serif font-light text-gray-900 mt-4 leading-tight`}>
                    A Village Theme<br />
                    <span className={`inline-block border-b-2 border-primary pb-1`}>Retreat in the Heart</span><br />
                    of Western UP
                </h2>
                <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-xl lg:max-w-none">
                    Devrana is a multifaceted destination resort, themed on the concept of a village, in western Uttar Pradesh, that features an escape from the city's modern life. We conceptualized Devrana to offer Indian and international travelers a genuine touch of rural India. This is especially evident when visitors enjoy our tranquil setting, open fields, and the classical nature of our architecture. The resort will also promote local culture and cuisine, and our local folk culture is to be promoted as well. We consider our resort to be more than just a resort—it's a lovely venue for destination weddings, offering an entirely different space for traditional weddings, and everything is rooted in our village steeped in history. The village-style architecture and grounds will surely generate a wonderful memory, and the stories woven throughout the building lend a historic element to family stays or an escape to a rural cultural experience.

                </p>

                <NavLink to="/about-us" >
                    {/* Ghost Button with Secondary accent color for premium feel */}
                    <button className={`mt-10 border-2 bg-white border-primary hover:text-white hover:bg-primary hover:border-Secondary px-8 py-3 font-semibold text-base tracking-widest transition-all duration-300 ease-in-out`}>
                        DISCOVER OUR STORY
                    </button>
                </NavLink>
            </div>

            {/* Right Content - Elevated Image Gallery & Video Call to Action */}
            <div className="flex-1 relative flex justify-center lg:justify-end items-start min-h-[550px]">

                {/* Image 1 - Main Image */}
                <img
                    src={img1}
                    alt="Scenic view of Devrana resort architecture"
                    // Larger size, subtle shadow for depth, slight rotation for artistic feel
                    className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 rounded-tl-3xl rounded-br-3xl shadow-2xl w-full max-w-sm lg:max-w-md h-[450px] object-cover border-4 border-white transform "
                    style={{ zIndex: 2 }}
                />

                {/* Image 2 - Accent Image */}
                <img
                    src={img2}
                    alt="Traveler enjoying the resort experience"
                    // Smaller, deliberately offset, strong contrasting border for a curated look
                    className={` sm:flex hidden  absolute bottom-0 right-1/2 translate-x-1/2 lg:right-0 lg:translate-x-0 rounded-br-3xl rounded-tl-3xl shadow-xl w-60 lg:w-72 h-80 object-cover border-4  transform `}
                    style={{ zIndex: 3 }}
                />


                {/* Play Button - Centered in the image composition, more prominent */}
                <button
                    onClick={() => setIsOpen(true)}
                    // Darker background, large size, distinct hover effect
                    className={`absolute top-1/2 sm:left-1/1 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white w-40 h-40 flex flex-col justify-center items-center rounded-full shadow-2xl bg-primary border-Secondary border-4 transition-all duration-300 ease-in-out hover:scale-105`}
                    style={{ zIndex: 4 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 mb-2"
                        fill="currentColor" // Changed to fill for a solid icon look
                        viewBox="0 0 24 24"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    <span className="text-sm font-light uppercase tracking-wider text-center">
                        View Film
                    </span>
                </button>
            </div>

            {/* Video Modal with Framer Motion (Kept mostly the same, ensuring it's sleek) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Dark Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Modal Box */}
                        <motion.div
                            className="relative bg-white rounded-xl shadow-2xl w-full md:w-4/5 lg:w-2/3 z-10 p-2"
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            {/* Close button - Styled for premium look */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute -top-3 -right-3 bg-white text-gray-800 hover:text-gray-900 border border-gray-300 w-8 h-8 flex items-center justify-center rounded-full text-2xl z-20 shadow-lg transition-colors"
                            >
                                &times;
                            </button>

                            {/* Responsive Video */}
                            <div className="aspect-video">
                                <video
                                    className="w-full h-full rounded-lg"
                                    src={video}
                                    title="Exclusive Devrana Resort Video"
                                    autoPlay
                                    loop
                                    muted
                                    controls
                                    allowFullScreen
                                ></video>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}