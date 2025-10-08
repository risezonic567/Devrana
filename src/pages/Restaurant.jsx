import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUtensils, FaCalendarAlt, FaStar, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';

// --- IMAGES & VIDEO PLACEHOLDERS ---
// Replace these with your actual high-resolution images and videos
import heroimg from '../images/Resto/Restaurant BANNER.jpg'; // Example video for hero
import diningInterior1 from '../images/Resto/wideangle.jpg';
import dish1 from '../images/home/home1.jpg';
import dish2 from '../images/Resto/daalmakhni.jpg';
import chefPortrait from '../images/home/home1.jpg';
import galleryImg1 from './../images/Resto/dish1.jpg';
import galleryImg2 from './../images/Resto/dish2.jpg';
import galleryImg3 from './../images/Resto/dish3.jpg';
import galleryImg4 from './../images/Resto/dish4.jpg';
import galleryImg5 from './../images/Resto/dish5.jpg';
import galleryImg6 from './../images/Resto/dish6.jpg';
// https://postimg.cc/gallery/jP0tswS
// --- Framer Motion Variants ---
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut", delay: 0.3 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } },
    hover: { scale: 1.03, transition: { duration: 0.2 } }
};

const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)", transition: { duration: 0.3 } }
};


export default function Restaurant() {
    const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openReservationModal = () => setIsReservationModalOpen(true);
    const closeReservationModal = () => setIsReservationModalOpen(false);
    const openImageModal = (imageSrc) => setSelectedImage(imageSrc);
    const closeImageModal = () => setSelectedImage(null);

    const galleryImages = [
        galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6
    ];
    useEffect(() => {


        window.scrollTo(0, 0);
    })
    return (
        <div className="antialiased text-white bg-beige-100 pt-32">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={heroimg}

                >

                </img>
                <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col items-center justify-center p-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-6xl lg:text-8xl font-serif text-white mb-6 tracking-wide drop-shadow-lg"
                    >
                        The Devrana Fine Dining
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="text-xl lg:text-2xl text-beige-200 max-w-3xl leading-relaxed font-light drop-shadow-md"
                    >
                        Experience exquisite flavors crafted with local ingredients, served in an ambiance of rustic elegance.
                    </motion.p>
                    <motion.button
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        // onClick={openReservationModal}
                        className="mt-12 px-10 py-4 border-2 border-Secondary text-white bg-transparent hover:bg-gold-600 hover:text-white transition-all duration-300 ease-in-out text-lg font-semibold tracking-wider uppercase rounded-full"
                    >
                        Reserve Your Table
                    </motion.button>
                </div>
            </section>

            {/* About Us Section */}
            <motion.section
                className="py-24 bg-beige-100 text-center text-primary font-serif"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <motion.p variants={textVariants} className="uppercase tracking-widest text-sm  font-medium mb-3 text-Secondary">
                    Restaurant at Devrana
                </motion.p>
                <motion.h2 variants={textVariants} className="text-5xl font-serif text-primary mb-8 leading-tight">
                    Authentic Pure Vegetarian Cuisine with Village Charm

                </motion.h2>
                <div className="xl:max-w-6xl lg:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div variants={imageVariants} className="relative">
                        <img src={diningInterior1} alt="Elegant restaurant interior" className="rounded-tl-3xl rounded-br-3xl shadow-xl border-4 border-white  object-cover w-full h-96" />
                        {/* <div className="absolute -bottom-8 -left-8 bg-deep-green-800 p-6 rounded-br-3xl rounded-tl-3xl text-white shadow-lg z-10 hidden md:block bg-primary">
                            <FaUtensils className="text-white text-4xl mb-2 " />
                            <p className="font-serif text-xl">Since 1998</p>
                        </div> */}
                    </motion.div>
                    <motion.div variants={textVariants} className="text-left space-y-6 text-lg text-gray-700">
                        <p>
                            At Devrana's pure vegetarian restaurant, experience authentic Indian tastes with fresh, locally-sourced ingredients and traditional recipes. Our menu offers a wide range of tasty vegetarian choices, from classic North Indian favorites to creative, seasonal dishes that encapsulate the region's diverse culinary heritage.
                            The tranquil, village-inspired ambiance of the restaurant makes it the perfect setting for family dinners, festive celebrations, or just a casual meal outside the home. Located just off the Delhi–Haridwar highway Devrana is the perfect place to unwind with pure vegetarian cuisine on your terms.
                            At Devrana restaurant, we serve delicious, wholesome meals made with love and authentic flavor.
                        </p>

                        <NavLink to="/contact-us">
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                className="mt-6 px-8 py-3 border-2 border-Secondary text-primary bg-transparent hover:bg-primary hover:text-white transition-all duration-300 ease-in-out text-base  font-serif  "
                            >
                                Contact Us
                            </motion.button>
                        </NavLink>
                    </motion.div>
                </div>
            </motion.section>

            {/* Menu Highlights Section */}
            <motion.section
                className="py-24 px-8 lg:px-20 bg-Secondary relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}

            >
                <div
                    className="absolute inset-0 bg-bottom bg-cover w-full bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://i.postimg.cc/Gtc3ztBn/pattern-1-new-1.png')",
                    }}
                ></div>
                <motion.p variants={textVariants} className="uppercase tracking-widest text-sm text-white font-medium mb-3 text-center">
                    Signature Dishes
                </motion.p>
                <motion.h2 variants={textVariants} className="text-5xl font-serif text-white mb-16 text-center leading-tight">
                    Devrana’s Finest Pure Vegetarian Specialties

                </motion.h2>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
                    {/* Dish Card 1 */}
                    <motion.div variants={cardVariants} whileHover="hover" className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-200 z-10">
                        <img src="https://content.jdmagicbox.com/comp/noida/l1/011pxx11.xx11.191021213919.v4l1/catalogue/maharaja-thali-noida-sector-127-noida-inexpensive-restaurants-below-rs-500--9nel3smiar.jpg" alt="Exquisite Local Platter" className="w-[245px] md:w-2/5 h-64 md:h-auto object-cover" />
                        <div className="p-8 flex-1 flex flex-col justify-center">
                            <h3 className="text-3xl font-serif text-primary mb-3">Devrana Maharaja Thali</h3>
                            <p className="text-Secondary text-lg font-medium mb-4">Traditional Vegetarian Thali Experience
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A royal feast of seasonal vegetarian curries, breads, rice, and desserts made with authentic spices. Enjoy the rich flavors of India’s vegetarian heritage.
                            </p>
                            <div className="flex items-center text-gray-500 text-sm">
                                <FaStar className="text-gold-500 mr-1" /> 5.0 Rating (120 reviews)
                            </div>
                        </div>
                    </motion.div>

                    {/* Dish Card 2 */}
                    <motion.div variants={cardVariants} whileHover="hover" className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-200 z-10">
                        <img src={dish2} alt="Fresh Organic Salad" className="w-full md:w-2/5 h-64 md:h-auto object-cover" />
                        <div className="p-8 flex-1 flex flex-col justify-center">
                            <h3 className="text-3xl font-serif text-primary mb-3">Devrana Special Daal Makhani</h3>
                            <p className="text-Secondary text-lg font-medium mb-4">Signature Vegetarian Delight</p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Savor our chef’s special vegetarian dish made with fresh, local ingredients and bold flavors. This signature creation highlights Devrana’s authentic and wholesome culinary tradition.
                            </p>
                            <div className="flex items-center text-gray-500 text-sm">
                                <FaStar className="text-gold-500 mr-1" /> 4.8 Rating (85 reviews)
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.button
                    variants={buttonVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.5 }}
                    // Replace with actual navigation
                    className="relative mt-20 mx-auto block px-10 py-4 border-2 border-white text-white bg-transparent hover:bg-primary hover:text-white transition-all duration-300 ease-in-out text-lg font-semibold  uppercase rounded-full z-20"
                >
                    <Link to="/menu">  View Our Full Menu </Link>
                </motion.button>
            </motion.section>

            {/* Chef's Message/Team Section */}
            <motion.section
                className="py-24 px-8 lg:px-20 bg-deep-green-800 text-white "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div variants={imageVariants} className="relative bg-">
                        <img src="https://i.postimg.cc/ZRz4fjRj/410-by-410-jpg-image-6.jpg" alt="Executive Chef" className="rounded-tl-[4rem] rounded-br-[4rem] shadow-2xl border-4 border-Secondary object-cover w-full h-[500px]" />
                        <div className="absolute -bottom-10 -right-10 bg-gold-600 p-8 rounded-br-[4rem] rounded-tl-[4rem] bg-primary shadow-xl z-10 hidden md:block">
                            <FaStar className="text-white text-4xl mb-2" />
                            <p className="text-2xl font-semibold font-serif">Executive Chef</p>
                        </div>
                    </motion.div>
                    <motion.div variants={textVariants} className="text-left space-y-6">
                        <p className="uppercase tracking-widest text-sm text-Secondary font-medium mb-3">
                            From Our Kitchen
                        </p>
                        <h2 className="text-5xl font-serif mb-6 leading-tight text-primary">
                            Meet Chef Rajeev
                        </h2>
                        <p className="text-lg text-gray-700">
                            With over a decade of experience in crafting pure vegetarian cuisine, Chef Rajeev brings passion, precision, and tradition to every dish. Specializing in regional Indian flavors, he masterfully blends local ingredients with timeless recipes to deliver unforgettable dining experiences. His signature creations, like the Devrana Maharaja Thali, reflect his commitment to quality, authenticity, and innovation. Under his leadership, our kitchen has become a destination for true food lovers.
                        </p>
                        <p className="text-xl font-serif text-primary italic mt-8">
                            — Chef Rajeev Sharma
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Gallery Section */}
            <motion.section
                className="py-24 px-8 lg:px-20 bg-Lightcolor relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                style={{
                    backgroundImage: "url('https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-4.png')",
                }}
            >

                <motion.p variants={textVariants} className="uppercase tracking-widest text-sm text-white font-medium mb-3 text-center">
                    Visual Feast
                </motion.p>
                <motion.h2 variants={textVariants} className="text-5xl font-serif text-white mb-16 text-center leading-tight">
                    Discover Our Diverse Dining Experiences

                </motion.h2>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            onClick={() => openImageModal(img)}
                            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                        >
                            <img src={img} alt={`Gallery image ${index + 1}`} className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-lg font-semibold uppercase tracking-wider">View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Reservations & Contact Section */}
            <motion.section
                className="py-24 px-8 lg:px-20 bg-deep-green-800 text-white text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <motion.p variants={textVariants} className="uppercase tracking-widest text-sm text-Secondary font-medium mb-3">
                    Your Visit
                </motion.p>
                <motion.h2 variants={textVariants} className="text-5xl font-serif mb-8 leading-tight text-primary">
                    Plan Your Experience
                </motion.h2>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    {/* Contact Info */}
                    <motion.div variants={cardVariants} className="bg-deep-green-700 p-8 rounded-lg shadow-xl border border-Secondary">
                        <h3 className="text-3xl font-serif text-primary mb-6">Contact Us</h3>
                        <div className="space-y-4 text-lg text-beige-200">
                            <p className="flex items-center text-gray-700"><FaPhoneAlt className="mr-3 text-primary" /> 91 78270 02538</p>
                            <p className="flex items-center text-gray-700"><FaEnvelope className="mr-3 text-primary" /> info@devrana.com</p>
                            <p className="flex items-start text-gray-700"><FaMapMarkerAlt className="mr-3 mt-1 text-primary flex-shrink-0" />  Devrana, Delhi-Haridwar Highway, Mansurpur, Muzaffarnagar</p>
                        </div>
                        <div className="mt-8 flex space-x-6">
                            <a href="#" className="text-beige-200 hover:text-primary transition-colors text-gray-700"><FaFacebookF className="text-2xl" /></a>
                            <a href="#" className="text-beige-200 hover:text-primary transition-colors text-gray-700"><FaInstagram className="text-2xl" /></a>
                            <a href="#" className="text-beige-200 hover:text-primary transition-colors text-gray-700"><FaTwitter className="text-2xl" /></a>
                        </div>
                    </motion.div>

                    {/* Reservation Prompt */}
                    <motion.div variants={cardVariants} className="bg-deep-green-700 p-8 rounded-lg shadow-xl border border-Secondary flex flex-col justify-center items-center text-center">
                        <FaCalendarAlt className="text-primary text-6xl mb-6" />
                        <h3 className="text-3xl font-serif text-primary mb-4">Make a Reservation</h3>
                        <p className="text-lg text-beige-200 mb-8 text-gray-700">
                            We look forward to welcoming you. Reserve your table for an unforgettable dining experience.
                        </p>
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            // onClick={openReservationModal}
                            className="px-10 py-4 text-primary border-2 border-Secondary transition-all duration-300 ease-in-out text-lg font-semibold tracking-wider uppercase "
                        >
                            Book Now
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>

            {/* --- Modals --- */}

            {/* Reservation Modal */}
            <AnimatePresence>
                {isReservationModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={closeReservationModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg relative"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        >
                            <button onClick={closeReservationModal} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl">
                                <IoMdClose />
                            </button>
                            <h3 className="text-4xl font-serif text-primary mb-6 text-center">Book Your Table</h3>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                                    <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-600 focus:border-transparent transition-all" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                                    <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-600 focus:border-transparent transition-all" placeholder="Your Email" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="date" className="block text-gray-700 text-sm font-medium mb-2">Date</label>
                                        <input type="date" id="date" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-600 focus:border-transparent transition-all" />
                                    </div>
                                    <div>
                                        <label htmlFor="time" className="block text-gray-700 text-sm font-medium mb-2">Time</label>
                                        <input type="time" id="time" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-600 focus:border-transparent transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="guests" className="block text-gray-700 text-sm font-medium mb-2">Number of Guests</label>
                                    <input type="number" id="guests" min="1" max="10" defaultValue="2" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-600 focus:border-transparent transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Special Request (Optional)</label>
                                    <textarea id="message" rows="3" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-600 focus:border-transparent transition-all" placeholder="Allergies, special occasions, etc."></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02, backgroundColor: '#c8a77d' }}
                                    className="w-full px-6 py-4 bg-gold-600 text-primary font-semibold text-lg rounded-md shadow-lg transition-colors duration-300 uppercase tracking-wide"
                                >
                                    Confirm Reservation
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Image Gallery Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={closeImageModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-4xl h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedImage} alt="Enlarged gallery item" className="w-full h-full object-contain rounded-lg shadow-2xl" />
                            <button onClick={closeImageModal} className="absolute -top-3 -right-3 bg-white text-gray-800 hover:text-gray-900 border border-gray-300 w-10 h-10 flex items-center justify-center rounded-full text-3xl z-20 shadow-lg transition-colors">
                                <IoMdClose />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}