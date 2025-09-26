/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
    FaWifi,
    FaCoffee,
    FaBath,
    FaParking,
    FaSwimmingPool,
    FaTshirt,
    FaUtensils,
    FaUsers,
    FaCocktail,
} from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";

const amenities = [
    { id: 1, icon: <FaWifi className="text-4xl" />, title: "Fast wifi" },
    { id: 2, icon: <FaCoffee className="text-4xl" />, title: "Coffee" },
    { id: 3, icon: <FaBath className="text-4xl" />, title: "Bath" },
    { id: 4, icon: <FaParking className="text-4xl" />, title: "Parking Space" },
    { id: 5, icon: <FaSwimmingPool className="text-4xl" />, title: "Swimming pool" },
    { id: 6, icon: <FaTshirt className="text-4xl" />, title: "Laundry service" },
    { id: 7, icon: <FaUtensils className="text-4xl" />, title: "Breakfast" },
    { id: 8, icon: <MdOutlinePets className="text-4xl" />, title: "Pet Friendly" },
    { id: 9, icon: <FaUsers className="text-4xl" />, title: "Meeting Room" },
    { id: 10, icon: <FaCocktail className="text-4xl" />, title: "Welcome Drink" },
];

export default function Amenities() {
    return (
        <section className="relative py-16 bg-[#FAF5F2] overflow-hidden border border-gray-700 rounded-xl">
            {/* Decorative background */}
            <div
                className="absolute inset-0 bg-no-repeat bg-bottom"
                style={{
                    backgroundImage: "url('https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-3.png')",
                }}
            ></div>

            <div className="relative max-w-6xl mx-auto ">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="uppercase text-sm tracking-widest text-red-500"
                    >
                        Discover
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl md:text-6xl  font-serif text-gray-900 mb-4"
                    >
                        Our Best Amenities
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-900 max-w-3xl mx-auto"
                    >
                        Devrana is proud to have a considered offering of amenities that combine comfort with authenticity. We provide properly maintained and stocked accommodations, along with curated activities on site that reflect the character and spirit of the area, honoring the tradition of hospitality while also recognizing the conveniences of modern living. Whether you are on a quiet retreat, gathering the family, or celebrating, we hope our amenities provide a positive experience.

                    </motion.p>
                </div>

                {/* Amenities Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center hover:text-white hover:border-white">
                    {amenities.map((amenity, index) => (
                        <motion.div
                            key={amenity.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="bg-white rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-all hover:bg-Secondary border border-gray-700 hover:text-white hover:border-white w-[200px]"
                        >
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="mb-4 text-4xl text-gray-800 p-2    flex justify-center h-20 rounded-full items-center"
                            >
                                {amenity.icon}
                            </motion.div>
                            <p className="text-gray-800 font-semibold uppercase">{amenity.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
