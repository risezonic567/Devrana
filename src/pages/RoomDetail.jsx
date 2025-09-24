/* eslint-disable no-unused-vars */
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
//             phone: "9876542410",
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
// import { useParams } from "react-router-dom";
// import rooms from "../data/rooms.json";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Img from "../images/rooms/Banner.jpg"
// import BookinForm from "../components/BookingForm"
// export default function RoomDetails() {
//     const { id } = useParams();
//     const room = rooms.find((r) => r.id === parseInt(id));
//     const [showBooking, setShowBooking] = useState(false);

//     if (!room) return <p className="text-center text-gray-500">Room not found</p>;

//     return (
//         <div className="relative">
//             {/* Hero Banner */}
//             <div className="relative h-[60vh] mt-24">
//                 <img
//                     src={Img}
//                     alt={room.name}
//                     className="w-full h-full object-cover rounded-b-3xl"
//                 />
//                 <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
//                     <h1 className="text-5xl font-bold">{room.name}</h1>
//                     <p className="mt-3 text-lg">{room.price} / night</p>
//                 </div>
//             </div>

//             {/* Room Content */}
//             <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
//                 <div>
//                     <img src={room.img} alt="" />
//                 </div>
//                 <section>
//                     <h2 className="text-2xl font-semibold mb-3">Overview</h2>
//                     <p className="text-gray-700 leading-relaxed">{room.description}</p>
//                 </section>

//                 <section>
//                     <h2 className="text-2xl font-semibold mb-3">Amenities</h2>
//                     <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                         {room.amenities.map((a, i) => (
//                             <li
//                                 key={i}
//                                 className="bg-gray-100 px-4 py-2 rounded-xl text-gray-600"
//                             >
//                                 {a}
//                             </li>
//                         ))}
//                     </ul>
//                     <div className="pt-10">
//                         <button
//                             onClick={() => setShowBooking(true)}
//                             className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
//                         >
//                             Book Now
//                         </button>
//                     </div>
//                 </section>


//             </div>

//             {/* Booking Modal */}
//             <AnimatePresence>
//                 {showBooking && (
//                     <motion.div
//                         className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                     >
//                         <motion.div
//                             className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 relative"
//                             initial={{ y: 100, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             exit={{ y: 100, opacity: 0 }}
//                             transition={{ type: "spring", stiffness: 100 }}
//                         >
//                             {/* Close button */}
//                             <button
//                                 onClick={() => setShowBooking(false)}
//                                 className="absolute top-4 right-4 text-gray-500 hover:text-black"
//                             >
//                                 ✕
//                             </button>

//                           <BookinForm/>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// }



import { useParams } from "react-router-dom";
import rooms from "../data/rooms.json";
import BookingForm from "../components/BookingForm";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function RoomDetails() {
    const { id } = useParams();
    const room = rooms.find((r) => r.id === parseInt(id));
    const [showBooking, setShowBooking] = useState(false)
    if (!room) return <h2 className="text-center mt-10">Room not found</h2>;
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 mt-36 items-center "
            style={{
                backgroundImage: "url('https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-4.png')",
            }}>
            <div className="max-w-7xl mx-auto px-6 flex  justify-evenly gap-x-4">
                <div className="w-2/3">
                    <motion.img
                        src={room.img}
                        alt={room.name}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className=" sm:w-[600px] sm:h-[400px] object-cover rounded-2xl shadow-lg"
                    />

                    <div className="flex justify-start gap-x-6 mt-4">
                        <div className="w-24 bg-black rounded-lg overflow-hidden">
                            <img src={room.img} alt="" />
                        </div>
                        <div className="w-24 bg-black rounded-lg overflow-hidden">
                            <img src={room.img} alt="" />
                        </div>
                        <div className="w-24 bg-black rounded-lg overflow-hidden">
                            <img src={room.img} alt="" />
                        </div>
                        <div className="w-24 bg-black rounded-lg overflow-hidden">
                            <img src={room.img} alt="" />
                        </div>
                        <div className="w-24 bg-black rounded-lg overflow-hidden">
                            <img src={room.img} alt="" />
                        </div>

                    </div>
                </div>
                <section className="w-1/2">
                    <div className="mt-8 grid md:grid-cols-2 gap-8 ">
                        {/* Room Info */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{room.name}</h1>
                            <p className="text-gray-600 mt-3 leading-relaxed ">
                                {room.description}
                            </p>
                            <section className="mt-4">
                                <h2 className="text-2xl font-semibold mb-3">Amenities</h2>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 ">
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
                            <p className=" text-gray-800 mt-4 text-normal flex border-2 w-36 p-3 shadow-inner hover:bg-Secondary hover:text-white">
                                ₹ {room.price}/night
                            </p>
                        </div>

                        {/* Booking Form */}
                        {/* <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white shadow-xl rounded-2xl p-6"
                    >
                        <BookingForm selectedRoom={room} />
                    </motion.div> */}

                    </div>
                    <button
                        onClick={() => setShowBooking(true)}
                        className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition mt-8"
                    >
                        Book Now
                    </button>
                </section>
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

                            <BookingForm selectedRoom={room} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
