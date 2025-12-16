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
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReservationEmailbooking from "../components/ReservationEmailbooking";
import { Helmet } from "react-helmet";

export default function RoomDetails() {
    const { slug } = useParams();
    const room = rooms.find((r) => r.slug === slug);
    const [showBooking, setShowBooking] = useState(false);
    const [selectedImg, setSelectedImg] = useState(room?.img);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    if (!room) return <h2 className="text-center mt-10">Room not found</h2>;

    // Filter alternative rooms (exclude current one)
    const alternativeRooms = rooms.filter((r) => r.id !== room.id);

    // Generate room summary dynamically
    const getRoomSummary = (price) => {
        if (price <= 4000) {
            return {
                title: "Perfect for Couples or Solo Travelers",
                description:
                    "Enjoy a comfortable stay with essential amenities, cozy interiors, and affordable luxury. Ideal for short vacations or business trips.",
                highlights: [
                    "King-size bed with premium linen",
                    "Complimentary WiFi and breakfast",
                    "Air conditioning and 24x7 room service",
                ],
                bg: "from-blue-50 to-blue-100",
            };
        } else if (price <= 6000) {
            return {
                title: "Ideal for Families or Group Travelers",
                description:
                    "Experience premium comfort with spacious rooms, living area, and all-inclusive facilities. Perfect for long stays or family vacations.",
                highlights: [
                    "Large living space with sofa area",
                    "Balcony view & premium bathroom amenities",
                    "Mini bar and exclusive room service",
                ],
                bg: "from-orange-50 to-orange-100",
            };
        } else {
            return {
                title: "Luxury Experience for Elite Guests",
                description:
                    "A perfect blend of elegance and comfort, our luxury suites redefine hospitality for those seeking the best of everything.",
                highlights: [
                    "Private lounge access & 24x7 concierge",
                    "Jacuzzi and smart room features",
                    "Premium dining & minibar experience",
                ],
                bg: "from-yellow-50 to-yellow-100",
            };
        }
    };

    const summary = getRoomSummary(room.price);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 mt-28 relative">
            <Helmet>
                <title></title>
                <meta name="description" content="" />
            </Helmet>
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row lg:gap-10">
                {/* Left - Image Gallery */}
                <div className="lg:w-2/3">
                    <motion.div
                        key={selectedImg}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden rounded-2xl shadow-lg"
                    >
                        <img
                            src={selectedImg}
                            alt={room.name}
                            className="w-full h-[280px] sm:h-[380px] lg:h-[440px] object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
                        />
                    </motion.div>

                    {/* Thumbnails */}
                    <div className="flex flex-wrap gap-3 mt-5">
                        {room.images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedImg(img)}
                                className={`w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden border-2 transition 
                ${selectedImg === img ? "border-primary" : "border-transparent"}`}
                            >
                                <img
                                    src={img}
                                    alt={`Room thumbnail ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right - Details */}
                <section className="lg:w-1/2 mt-10 lg:mt-0">
                    <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 relative">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            {room.name}
                        </h1>
                        <p className="text-gray-600 mt-3 leading-relaxed text-sm sm:text-base">
                            {room.description}
                        </p>

                        {/* Amenities */}
                        <section className="mt-6">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Amenities</h2>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {room.amenities.map((a, i) => (
                                    <li
                                        key={i}
                                        className="bg-gray-100 px-3 py-2 rounded-xl text-gray-600 text-sm flex items-center gap-2 shadow-sm hover:bg-gray-200 transition"
                                    >
                                        <span>✨</span> {a}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Price */}
                        <p className="text-xl sm:text-2xl font-bold text-primary mt-6">
                            ₹ {room.price.toLocaleString()}/night
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mt-6">
                            <button
                                onClick={() => setShowBooking(true)}
                                className="bg-gradient-to-r from-primary to-Secondary text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all text-sm sm:text-base"
                            >
                                Book Now
                            </button>


                        </div>
                    </div>
                </section>
            </div>

            {/* Room Summary Section */}
            <section className={`max-w-6xl mx-auto mt-16 px-6 py-10 rounded-3xl shadow-md`}>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
                    {summary.title}
                </h2>
                <p className="text-gray-700 mb-5 leading-relaxed">
                    {summary.description}
                </p>
                <ul className="grid sm:grid-cols-3 gap-4">
                    {summary.highlights.map((h, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700 bg-white/70 rounded-xl p-3 shadow-sm"
                        >
                            <span className="text-primary text-lg">✔</span> {h}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Alternative Rooms Section */}
            <div className="max-w-7xl mx-auto mt-20 px-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
                    Explore Alternative Rooms
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {alternativeRooms.map((alt) => (
                        <motion.div
                            key={alt.id}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
                        >
                            <img
                                src={alt.img}
                                alt={alt.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-lg font-semibold">{alt.name}</h3>
                                <p className="text-gray-500 text-sm line-clamp-2 mt-1">
                                    {alt.description}
                                </p>
                                <p className="font-bold text-primary mt-3">
                                    ₹{alt.price}/night
                                </p>
                                <a
                                    href={`/rooms-cottage/${alt.slug}`}
                                    className="inline-block mt-4 text-primary font-medium hover:underline"
                                >
                                    View Details →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Booking Modal */}
            <AnimatePresence>
                {showBooking && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50  "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-3xl shadow-2xl w-full md:max-w-2xl max-w-lg p-6 sm:p-8 relative overflow-hidden m-2"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            {/* Modal header */}
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    Booking - {room.name}
                                </h2>
                                <button
                                    onClick={() => setShowBooking(false)}
                                    className="text-gray-500 hover:text-black text-2xl"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Room Info inside Modal */}
                            {/* <div className="bg-gray-100 p-3 rounded-xl mb-4 text-sm">
                                <p className="font-semibold text-gray-800">{room.name}</p>
                                <p className="text-gray-500">₹{room.price}/night</p>
                            </div> */}

                            {/* Booking Form */}
                            <ReservationEmailbooking selectedRoom={room} />


                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}


