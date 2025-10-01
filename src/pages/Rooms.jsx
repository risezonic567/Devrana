/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import rooms from "../data/rooms.json";
import { motion } from "framer-motion";
import Img from "../images/rooms/Banner.jpg"
import { useEffect } from "react";
export default function Rooms() {
    useEffect(() => {
    
    
            window.scrollTo(0, 0);
        })
    return (
        <div className=" bg-gradient-to-br from-gray-50 to-gray-100 py-12 pt-32">

            <div className="flex justify-center">
                <img src={Img} alt="" />
            </div>

            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 py-7 pt-20 font-serif">
                    Explore Our Rooms & Cotages
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                        >
                            <img
                                src={room.img}
                                alt={room.name}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-5">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {room.name}
                                </h2>
                                <p className="text-gray-600 mt-2 line-clamp-2">
                                    {room.description}
                                </p>
                                <p className="text-lg font-bold text-primary mt-3">
                                    ₹{room.price}/night
                                </p>
                                <Link
                                    to={`/rooms-cottage/${room.slug}`}
                                    className="inline-block mt-4 bg-gradient-to-r from-Secondary to-Secondary text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
                                >
                                    View Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* <BookingForm /> */}
        </div>
    );
}
