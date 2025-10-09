import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

import galleryImg1 from "./../images/Resto/dish1.jpg";
import galleryImg2 from "./../images/Resto/dish2.jpg";
import galleryImg3 from "./../images/Resto/dish3.jpg";
import galleryImg4 from "./../images/Resto/dish4.jpg";
import galleryImg5 from "./../images/Resto/dish5.jpg";
import galleryImg6 from "./../images/Resto/dish6.jpg";

export default function RestroDiscover() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const foodCategories = [
        {
            name: "Chinese Food",
            img: galleryImg1,
            menu: [
                "Veg Hakka Noodles",
                "Chilli Paneer",
                "Spring Rolls",
                "Manchurian Gravy",
                "Fried Rice",
            ],
            slug: "chinese",
        },
        {
            name: "North Indian",
            img: galleryImg2,
            menu: [
                "Paneer Butter Masala",
                "Dal Makhani",
                "Butter Naan",
                "Shahi Paneer",
                "Kadhai Veg",
            ],
            slug: "north-indian",
        },
        {
            name: "Punjabi Special",
            img: galleryImg3,
            menu: [
                "Chole Bhature",
                "Amritsari Kulcha",
                "Rajma Chawal",
                "Lassi",
                "Paratha Platter",
            ],
            slug: "punjabi",
        },
        {
            name: "Beverages",
            img: galleryImg4,
            menu: ["Cold Coffee", "Fresh Lime Soda", "Mocktail", "Mojito", "Iced Tea"],
            slug: "beverages",
        },
        {
            name: "Starters & Snacks",
            img: galleryImg5,
            menu: ["Paneer 65", "Malai Soya Chaap", "Dahi Ke Sholey", "Pakode", "Paneer Papdi"],
            slug: "south-indian",
        },
        {
            name: "Salads & Healthy Bites",
            img: galleryImg6,
            menu: [
                "Greek Salad",
                "Fruit Bowl",
                "Caesar Salad",
                "Green Detox",
                "Sprout Mix",
            ],
            slug: "salads",
        },
    ];

    const closeMenu = () => setSelectedCategory(null);

    return (
        <div>
            {/* Section */}
            <section
                className="py-24 px-8 lg:px-20 bg-[#F47C20] relative"
                style={{
                    backgroundImage:
                        "url('https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-4.png')",
                }}
            >
                <p className="uppercase tracking-widest text-sm text-white font-medium mb-3 text-center">
                    Visual Feast
                </p>
                <h2 className="text-5xl font-serif text-white mb-16 text-center leading-tight">
                    Discover Our Diverse Dining Experiences
                </h2>

                {/* Gallery */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {foodCategories.map((cat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.04 }}
                            onClick={() => setSelectedCategory(cat)}
                            className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer group"
                        >
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-lg font-semibold uppercase tracking-wider">
                                    {cat.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Menu Modal */}
            <AnimatePresence>
                {selectedCategory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={closeMenu}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 40 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 40 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-xl bg-white/90 backdrop-blur-xl border border-orange-200 rounded-2xl shadow-2xl overflow-hidden"
                        >
                            {/* Banner Image */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <img
                                    src={selectedCategory.img}
                                    alt={selectedCategory.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center"

                                >
                                    <h3 className="text-white text-3xl font-serif drop-shadow-lg">
                                        {selectedCategory.name}
                                    </h3>
                                </div>
                                <button
                                    onClick={closeMenu}
                                    className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-700 w-10 h-10 flex items-center justify-center rounded-full text-2xl shadow-md"
                                >
                                    <IoMdClose />
                                </button>
                            </div>

                            {/* Menu List */}
                            <div className="p-6 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('https://i.postimg.cc/wM6xFMtM/pattern-4-1.png')" }}>
                                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                                    Popular Dishes
                                </h4>
                                <ul className="space-y-3 text-gray-700"
                                >
                                    {selectedCategory.menu.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center justify-between border-b border-gray-200 pb-2 text-lg"
                                        >
                                            <span>{item}</span>

                                        </motion.li>
                                    ))}
                                </ul>

                                {/* View Full Menu Button */}
                                <div className="text-center mt-8">
                                    <Link
                                        to="/menu"
                                        className="inline-block px-8 py-3 bg-[#F47C20] text-white rounded-full text-lg font-semibold hover:bg-orange-500 transition-all shadow-md"
                                    >
                                        View Full Menu
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
