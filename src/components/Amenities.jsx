import React from "react";
import { motion } from "framer-motion";
import { FaWifi, FaCoffee, FaBath, FaParking, FaSwimmingPool } from "react-icons/fa";

const amenities = [
    { id: 1, icon: <FaWifi className=" " />, title: "Fast WiFi" },
    { id: 2, icon: <FaCoffee className="" />, title: "Coffee" },
    { id: 3, icon: <FaBath className="" />, title: "Bath" },
    { id: 4, icon: <FaParking className="" />, title: "Parking Space" },
    { id: 5, icon: <FaSwimmingPool className="" />, title: "Swimming Pool" },
];

export default function Amenities() {
    return (
        <section className="relative py-16 bg-gray-900 overflow-hidden border border-gray-700 rounded-xl">
            {/* Decorative background */}
            <div
                className="absolute inset-0 bg-no-repeat bg-bottom"
                style={{
                    backgroundImage: "url('https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-3.png')",
                }}
            ></div>

            <div className="relative max-w-7xl mx-auto ">
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
                        className="text-3xl md:text-6xl  font-serif text-white mb-4"
                    >
                        Our Best Amenities
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-300 max-w-3xl mx-auto"
                    >
                        At Devrana, we bring together rustic charm and essential comforts to
                        make your stay both peaceful and pleasant. Whether you're here to relax
                        or celebrate, our thoughtfully chosen amenities ensure a wholesome
                        village retreat experience.
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
                            className="bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-all hover:bg-Secondary border border-gray-700 hover:text-white hover:border-white w-[240px]"
                        >
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="mb-4 text-4xl text-white p-2 w-28 border-Secondary  border-[1px]   flex justify-center h-28 rounded-full items-center"
                            >
                                {amenity.icon}
                            </motion.div>
                            <p className="text-white font-semibold uppercase">{amenity.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
