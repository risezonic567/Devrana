import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../images/about/about1st.jpg"
// import img2 from "../images/home/home2.jpg"
import video from "../../video/aboutsectionvideo.mp4"
export default function AboutSection() {
    const [isOpen, setIsOpen] = useState(false); // for video modal
    const [showMore, setShowMore] = useState(false); // for text toggle

    return (
        <section className="relative bg-white py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12 max-w-8xl mx-auto">
            <div className="flex-1 text-center lg:text-left">
                <p className="uppercase tracking-widest text-sm text-Secondary font-semibold">
                    About Devrana
                </p>
                {/* Elevated Typography with a modern serif (assuming 'font-serif' is configured) */}
                <h2 className={`text-5xl lg:text-6xl font-serif font-light text-gray-900 mt-4 leading-tight`}>
                    A Village Theme<br />
                    <span className={`inline-block border-b-2 border-primary pb-1`}>Retreat in the Heart</span><br />
                    of Western UP
                </h2>

                {/* About Text */}
                <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-xl lg:max-w-none">
                    Devrana is a village-themed resort located in the tranquil rural area of Western Uttar Pradesh, which offers a relaxing break from urban life. The vision of Mr. Harendra Singh, a creative resort near Delhi NCR, Devrana was created to give both Indian and international travelers a true experience of rural India. Surrounded by open fields and classical rural architecture, Devrana promotes local culture, traditional food, and folk art and serves as a great destination for weekend getaways, cultural retreats, or simply for people wanting a real connection to the roots of India.
                    {showMore && (
                        <span className="block mt-3">
                            One of Devrana's unique features is its focus on Kauravi, the indigenous language of Western UP, which staff use from greetings to evening folk shows, passionately celebrating this unique regional culture and tradition. The experience of using Kauravi helps guests engage so deeply into the sense of place and belonging, creating an experience beyond a break that is a true embodiment of Hispanic culture.
                            <br /> <br />
                            Devrana is much more than a resort. It's also a lovely destination wedding venue located near Delhi NCR and is serenity personified for couples wishing for a unique yet traditional celebration. With ample grounds located around a village-style decor site, you will simply not find a better location to host a memorable wedding or event! Whether it's a family stay, a wedding celebration, or a cultural escape, welcome to the heart of rural India, where every detail tells a story.
                        </span>
                    )}
                </p>

                {/* Read More / Read Less button */}
                <button
                    onClick={() => setShowMore((prev) => !prev)}
                    className="mt-8 inline-block bg-primary hover:bg-Secondary text-white px-6 py-3 font-medium transition"
                >
                    {showMore ? "Read Less" : "Read More"}
                </button>
            </div>

            {/* Right side with images + play button */}
            <div className="flex-1 relative flex justify-center items-center">
                <img
                    src={img1}
                    alt="Hotel view"
                    className="rounded-lg shadow-lg w-72 lg:w-[340px] h-[420px] object-cover"
                />

                {/* <img
                    src={img2}
                    alt="Traveler"
                    className="absolute sm:-bottom-24 -bottom-14 sm:-right-24 -right-14 rounded-lg shadow-lg w-40 sm:w-[220px] lg:w-[220px] h-[300px] object-cover"
                /> */}

                {/* Play button for modal */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="absolute right-[60px] bottom-[100px] bg-primary text-white w-28 h-28 sm:w-36 sm:h-36 flex flex-col justify-center items-center rounded-full shadow-lg hover:bg-Secondary transition"
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
                        Watch The
                        <br /> Video
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
