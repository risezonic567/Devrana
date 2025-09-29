import { motion } from "framer-motion";
import { useState } from "react";
import {
    FaGlassCheers,
    FaUsers,
    FaUtensils,
    FaHotel,
    FaTheaterMasks,
    FaCocktail,
    FaCheckCircle,
    FaTimes,
} from "react-icons/fa";

// Venue Data
const venues = [
    {
        id: 1,
        name: "The Gaon Heritage",
        img: "https://devrana.in/wp-content/uploads/2025/04/TG8.jpeg",
        capacity: "400 Guests",
        description: "A royal heritage wedding venue with traditional architecture and premium service. Perfect for grand weddings and receptions.",
        icon: <FaGlassCheers className="text-pink-500 text-3xl" />,
    },
    {
        id: 2,
        name: "Open Party Space",
        img: "https://devrana.in/wp-content/uploads/2025/04/open-party-5.png",
        capacity: "300 Guests",
        description: "Spacious open-air party ground, ideal for celebrations under the stars with music, lights, and unlimited fun.",
        icon: <FaUsers className="text-indigo-500 text-3xl" />,
    },
    {
        id: 3,
        name: "Dining Space",
        img: "https://devrana.in/wp-content/uploads/2025/04/Dining-space-1.png",
        capacity: "200 Guests",
        description: "Elegant dining hall with curated menus, top-class service, and luxurious ambiance for fine dining.",
        icon: <FaUtensils className="text-yellow-500 text-3xl" />,
    },
    {
        id: 4,
        name: "Banquet Hall",
        img: "https://devrana.in/wp-content/uploads/2025/04/UH8-1.jpeg",
        capacity: "500 Guests",
        description: "Premium banquet hall suitable for weddings, receptions, and conferences with customizable layouts.",
        icon: <FaHotel className="text-blue-500 text-3xl" />,
    },
    {
        id: 5,
        name: "Theme Hall",
        img: "https://devrana.in/wp-content/uploads/2025/04/theme-hall-3.png",
        capacity: "250 Guests",
        description: "Customizable theme hall with modern decor and mood lighting, perfect for birthdays and special occasions.",
        icon: <FaTheaterMasks className="text-green-500 text-3xl" />,
    },
    {
        id: 6,
        name: "Ek Bar",
        img: "https://devrana.in/wp-content/uploads/2025/04/BAR2.jpeg",
        capacity: "150 Guests",
        description: "Trendy bar with happy hours, cocktails, and live entertainment. Best suited for casual parties & nightlife events.",
        icon: <FaCocktail className="text-red-500 text-3xl" />,
    },
];

// Package Data
const packages = [
    {
        id: 1,
        title: "Silver Package",
        price: 25000,
        features: ["Venue Access", "Basic Decoration", "Buffet (Veg)", "DJ Night"],
        highlight: false,
    },
    {
        id: 2,
        title: "Gold Package",
        price: 50000,
        features: [
            "Venue Access",
            "Premium Decoration",
            "Buffet (Veg + Non-Veg)",
            "DJ + Live Music",
            "Photography",
        ],
        highlight: true,
    },
    {
        id: 3,
        title: "Platinum Package",
        price: 85000,
        features: [
            "Luxury Venue",
            "Theme Decoration",
            "Full-course Buffet",
            "Live Band",
            "Photography + Videography",
            "Luxury Stay for Guests",
        ],
        highlight: false,
    },
];

export default function EventsAndPackages() {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [activeVenue, setActiveVenue] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 font-serif">
            {/* Hero Section */}
            <section className="relative text-primary py-28 px-6 text-center mt-32 h-[700px] bg-no-repeat bg-center bg-cover" style={{
                backgroundImage: "url('https://devrana.in/wp-content/uploads/2025/04/T6-1.jpeg')",
            }} >

            </section>

            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Venues Section */}
                <section className="mb-20">
                    <h2 className="text-4xl uppercase text-center  font-serif">
                        Our Venues
                    </h2>
                    <p className="max-w-5xl mx-auto text-center text-gray-700 py-4 mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto id iure esse ullam omnis laborum. Iste unde delectus architecto quae veniam corporis provident incidunt molestias quas enim, nesciunt ex impedit ut, odit praesentium dolorem magni.</p>
                    <div className="space-y-20">
                        {venues.map((venue, i) => (
                            <motion.div
                                key={venue.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col lg:flex-row items-center gap-10 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Image */}
                                <div className="lg:w-1/2 w-full overflow-hidden rounded-2xl shadow-xl">
                                    <img
                                        src={venue.img}
                                        alt={venue.name}
                                        className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                {/* Text */}
                                <div className="lg:w-1/2 w-full">
                                    <div className="flex items-center gap-3 mb-3">
                                        {venue.icon}
                                        <h3 className="text-2xl  font-serif uppercase">{venue.name}</h3>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-2">
                                        Capacity: {venue.capacity}
                                    </p>
                                    <p className="text-gray-600 mb-4 font-serif">{venue.description}</p>
                                    <button
                                        onClick={() => setActiveVenue(venue)}
                                        className="bg-primary text-white px-6 py-2 rounded-full shadow hover:scale-105 transition"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>


            </div>
            {/* Packages Section */}
            <section className="bg-Lightcolor py-12 px-8">
                <h3 className="text-normal uppercase text-center text-white mb-2">
                    Best Deals
                </h3>
                <h2 className="text-5xl text-center text-white mb-12">
                    Event Packages
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            className={`rounded-2xl p-8 shadow-xl transition transform hover:scale-105 border 
                ${pkg.highlight
                                    ? "bg-Secondary text-white border-none"
                                    : "bg-white border-gray-200"
                                }`}
                        >
                            <h3 className="text-2xl uppercase mb-4">{pkg.title}</h3>
                            <p
                                className={`text-3xl font-bold mb-6 ${pkg.highlight ? "text-white" : "text-primary"
                                    }`}
                            >
                                ₹ {pkg.price.toLocaleString()}
                            </p>
                            <ul className="space-y-3">
                                {pkg.features.map((f, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-2 text-sm sm:text-base"
                                    >
                                        <FaCheckCircle
                                            className={`${pkg.highlight ? "text-white" : "text-primary"
                                                }`}
                                        />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => setSelectedPackage(pkg.id)}
                                className={`mt-8 w-full py-3 rounded-full shadow-lg hover:scale-105 transition font-semibold ${pkg.highlight
                                    ? "bg-white text-primary"
                                    : "bg-primary text-white"
                                    }`}
                            >
                                {selectedPackage === pkg.id ? "Selected" : "Choose Package"}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* Venue Modal */}
            {activeVenue && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative"
                    >
                        <button
                            onClick={() => setActiveVenue(null)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
                        >
                            <FaTimes size={22} />
                        </button>
                        <img
                            src={activeVenue.img}
                            alt={activeVenue.name}
                            className="w-full h-64 object-cover rounded-xl mb-6"
                        />
                        <div className="flex items-center gap-3 mb-4">
                            {activeVenue.icon}
                            <h3 className="text-2xl font-bold">{activeVenue.name}</h3>
                        </div>
                        <p className="text-gray-500 mb-2">Capacity: {activeVenue.capacity}</p>
                        <p className="text-gray-700">{activeVenue.description}</p>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
