import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUtensils, FaCalendarAlt, FaStar, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';

// --- IMAGES & VIDEO PLACEHOLDERS ---
// Replace these with your actual high-resolution images and videos
import heroimg from '../images/Resto/Restaurant BANNER.jpg'; // Example video for hero
import diningInterior1 from '../images/Resto/Restaurant 2 image.jpg';
import dish1 from '../images/home/home1.jpg';
import dish2 from '../images/Resto/daalmakhni.jpg';
import chefPortrait from '../images/home/home1.jpg';
import RestroDiscover from '../components/RestroDiscover';
import { Helmet } from 'react-helmet';
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

    useEffect(() => {


        window.scrollTo(0, 0);
    })
    return (
        <div className="antialiased text-white  sm:pt-32">
            <Helmet>
                <title>Best Restaurants in Muzaffarnagar | Pure Veg Restaurant – Devrana</title>
                <meta name="keywords" content="restaurants in Muzaffarnagar"></meta>
                <link rel="canonical" href="https://www.devrana.in/restaurant" />
                <meta name="description" content="Visit Devrana, one of the best restaurants in Muzaffarnagar offering pure vegetarian food, village-theme ambiance and family dining near NH-58." />
                <script type="application/ld+json">
                    {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Devrana",
          "image": "https://www.devrana.in/assets/DR%20LOGO-df167871.png",
          "@id": "https://www.devrana.in",
          "url": "https://www.devrana.in/restaurant",
          "telephone": "7060301700",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Milestone 103, NH334, Near Mansurpur, Delhi- Haridwar-Dehradun Highway, Meerut Road",
            "addressLocality": "Muzaffarnagar",
            "postalCode": "251203",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 29.3533648,
            "longitude": 77.7126515
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Sunday",
              "Saturday"
            ],
            "opens": "07:00",
            "closes": "23:59"
          },
          "sameAs": [
            "https://www.facebook.com/DevranaOfficial",
            "https://www.instagram.com/devrana_official",
            "https://www.youtube.com/@DevranaOfficial1",
            "https://www.linkedin.com/company/devrana-restaurant-and-resort",
            "https://www.pinterest.com/devranan01"
          ]
        }
        `}
                </script>

            </Helmet>
            {/* Hero Section */}
            <section className="relative  h-screen lg:h-[600px] flex items-center justify-center text-center overflow-hidden">
                <img
                    className="absolute inset-0 w-full min-h-screen object-cover z-0"
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
            <RestroDiscover />

        </div>
    );
}