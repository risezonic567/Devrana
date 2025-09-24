// import { useParams } from "react-router-dom";
// import rooms from "../data/rooms.json";
// import { openRazorpay } from "../utils/razorpay";

// export default function RoomDetail() {
//     const { slug } = useParams();
//     const room = rooms.find((r) => r.slug === slug);

//     if (!room) return <p className="p-6">Room not found</p>;

//     const handleBooking = () => {
//         const customer = {
//             name: "Test User",
//             email: "test@example.com",
//             phone: "9876543210",
//         };
//         openRazorpay(room.price, customer);
//     };

//     return (
//         <div className="max-w-4xl mx-auto p-6">
//             <img src={room.img} alt={room.name} className="w-full h-80 object-cover rounded-lg" />
//             <h1 className="text-3xl font-bold mt-4">{room.name}</h1>
//             <p className="text-gray-700 mt-2">{room.description}</p>
//             <ul className="mt-3 text-gray-600 list-disc list-inside">
//                 {room.amenities.map((a, i) => (
//                     <li key={i}>{a}</li>
//                 ))}
//             </ul>
//             <p className="text-2xl font-semibold mt-4">₹{room.price} / night</p>
//             <button
//                 onClick={handleBooking}
//                 className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
//             >
//                 Book & Pay Now
//             </button>
//         </div>
//     );
// }
import { useParams } from "react-router-dom";
import rooms from "../data/rooms.json";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img from "../images/rooms/Banner.jpg"
export default function RoomDetails() {
    const { id } = useParams();
    const room = rooms.find((r) => r.id === parseInt(id));
    const [showBooking, setShowBooking] = useState(false);

    if (!room) return <p className="text-center text-gray-500">Room not found</p>;

    return (
        <div className="relative">
            {/* Hero Banner */}
            <div className="relative h-[60vh] mt-32">
                <img
                    src={Img}
                    alt={room.name}
                    className="w-full h-full object-cover rounded-b-3xl"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
                    <h1 className="text-5xl font-bold">{room.name}</h1>
                    <p className="mt-3 text-lg">{room.price} / night</p>
                </div>
            </div>

            {/* Room Content */}
            <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
                <div>
                    <img src={room.img} alt="" />
                </div>
                <section>
                    <h2 className="text-2xl font-semibold mb-3">Overview</h2>
                    <p className="text-gray-700 leading-relaxed">{room.description}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">Amenities</h2>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {room.amenities.map((a, i) => (
                            <li
                                key={i}
                                className="bg-gray-100 px-4 py-2 rounded-xl text-gray-600"
                            >
                                {a}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Floating Book Now Button */}
                {/* <div className="fixed bottom-6 right-6">
                    <button
                        onClick={() => setShowBooking(true)}
                        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
                    >
                        Book Now
                    </button>
                </div> */}
            </div>

            {/* Booking Modal */}
            <AnimatePresence>
                {showBooking && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 relative"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setShowBooking(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-black"
                            >
                                ✕
                            </button>

                            <h2 className="text-2xl font-bold mb-6">Book {room.name}</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-600">Name</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-pink-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600">Email</label>
                                    <input
                                        type="email"
                                        className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-pink-300"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-600">Check-in</label>
                                        <input
                                            type="date"
                                            className="w-full border rounded-lg px-4 py-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-600">Check-out</label>
                                        <input
                                            type="date"
                                            className="w-full border rounded-lg px-4 py-2"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-600">Guests</label>
                                    <select className="w-full border rounded-lg px-4 py-2">
                                        <option>1 Guest</option>
                                        <option>2 Guests</option>
                                        <option>3 Guests</option>
                                        <option>4+ Guests</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
                                >
                                    Confirm Booking
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
