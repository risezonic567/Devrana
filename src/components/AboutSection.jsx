import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../images/home/Untitled-3.jpg"
import img2 from "../images/home/Untitled-2.jpg"
import video from "../video/Home Page.mp4"
export default function AboutSection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="relative bg-white py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
                <p className="uppercase tracking-widest text-sm text-Secondary font-semibold">
                    About Devrana
                </p>
                <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-900 mt-2 leading-snug ">
                    A Village <br /> <span className="py-4"> Themed Retreat in the Heart </span> <br /> of Western UP
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                    Devrana is a village-themed resort located in the tranquil rural
                    area of Western Uttar Pradesh, which offers a relaxing break from urban life. The vision of
                    Mr. Harendra Singh, a creative resort near Delhi NCR, Devrana was created to give both
                    Indian and international travelers a true experience of rural India. Surrounded by open
                    fields and classical rural architecture, Devrana promotes local culture, traditional food,
                    and folk art and serves as a great destination for weekend getaways, cultural retreats, or
                    simply for people wanting a real connection to the roots of India.
                </p>
                <button className="mt-8 bg-primary hover:bg-Secondary text-white px-6 py-3 font-medium transition">
                    Discover More
                </button>
            </div>

            {/* Right Content */}
            <div className="flex-1 relative flex justify-center items-center">
                {/* Image 1 */}
                <img
                    src={img1}
                    alt="Hotel view"
                    className="rounded-lg shadow-lg w-72 lg:w-[340px] h-[420px] object-cover"
                />

                <img
                    src={img2}
                    alt="Traveler"
                    className="absolute sm:-bottom-24 -bottom-14 sm:-right-24 -right-14 rounded-lg shadow-lg w-40 sm:w-[220px] lg:w-[220px] h-[300px] object-cover"
                />


                {/* Play Button */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="absolute right-[60px] bottom-[100px] bg-primary text-white w-28 h-28 sm:w-36 sm:h-36 flex flex-col justify-center items-center rounded-md shadow-lg hover:bg-Secondary transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 sm:h-10 sm:w-10 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.752 11.168l-4.586-2.67A1 1 0 009 9.37v5.26a1 1 0 001.166.872l4.586-2.67a1 1 0 000-1.664z"
                        />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium text-center">
                        Watch Exclusive Video
                    </span>
                </button>
            </div>

            {/* Video Modal with Framer Motion */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Dark Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-black bg-opacity-70"
                            onClick={() => setIsOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Modal Box */}
                        <motion.div
                            className="relative bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 z-10 p-4"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-2 text-gray-700 hover:text-red-600 text-2xl z-20"
                            >
                                &times;
                            </button>

                            {/* Responsive Video */}
                            <div className="aspect-video">
                                <video
                                    className="w-full h-full rounded-lg"
                                    src={video}
                                    title="Exclusive Video"
                                    frameBorder="0"
                                    autoPlay
                                    loop
                                    muted
                                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
