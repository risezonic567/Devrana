import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

// Venue Data
const venues = [
    {
        id: 1,
        name: "Theth Gaon – Heritage Wedding Venue near Delhi NCR",
        // img: "https://i.postimg.cc/VkM14KMM/The-Gaon-Heritage.jpg",
        img: "https://i.postimg.cc/nctZ40s6/event-page-night-party-image.jpg",
        capacity: "400 Guests",
        description: "Enter Theth Gaon, a unique heritage wedding venue that provides an authentic village feel to your grand celebrations. With greatly accommodating a guest comprising of over a thousand guests, the space couples rustic architecture with upscale wedding decor options. Embodied in lush greenery, creates the quintessential outdoor wedding venue in Uttar Pradesh. Full customizable lighting and mandap set up allows you to create the ideal traditional or themed wedding. The great venue for authentic, large-scale wedding couple near Delhi.", icon: <FaGlassCheers className="text-pink-500 text-3xl" />,
    },
    {
        id: 2,
        name: "Bagad Open-Air Party Space in Muzaffarnaga",
        // img: "https://i.postimg.cc/vZ9MX09V/Open-Party-Space.jpg",
        img: "https://i.postimg.cc/y6Rs3wdq/Bagad-Open-Air-Party-Space-in-Muzaffarnaga.jpg",
        capacity: "300 Guests",
        description: "Bagad is a beautiful, open-air space for parties or intimate gatherings, cocktail celebrations, birthday evenings, or evening events under the night sky. The natural space and flexibility make it an ideal experience for small parties of anywhere between 30 and 70 guests where outdoor charm and casual enjoyment are key. If you plan to have a party location for a pre-wedding event or a family gathering, Bagad is the space that will provide beauty, concentration by natural landscaping, and easy access to nature!",
        icon: <FaUsers className="text-indigo-500 text-3xl" />,
    },
    {
        id: 3,
        name: "Dining at Devrana – Nature Meets Flavor",
        img: "https://i.postimg.cc/8zWDwZWh/Dining-Space.jpg",
        capacity: "200 Guests",
        description: "Experience soulful dining amidst nature at Devrana, where every meal is crafted with care and authenticity. Whether it's a brunch, high-tea, or intimate dinner, our settings blend rustic charm with culinary excellence. Enjoy farm-fresh ingredients, serene surroundings, and warm hospitality. Perfect for small gatherings, celebrations, or simply savoring the moment.",
        icon: <FaUtensils className="text-yellow-500 text-3xl" />,
    },
    {
        id: 4,
        name: "Utsav – Premium Indoor Banquet Hall in Muzaffarnagar",
        img: "https://i.postimg.cc/g0Wp73q6/Banquet-Hall.jpg",
        capacity: "500 Guests",
        description: "Utsav is a beautiful indoor banquet hall created specifically for hosting wedding receptions, corporate events, engagements, and anniversaries. Utsav holds up to approximately 300 guests and has a perfect balance between spaciousness and intimacy. It has the best-in-industry lighting, audio systems, and decor options available, and it is perfect for events where weather-proof indoor comfort is paramount while not sacrificing beauty or elegance. Utsav is where you should go if you want a banquet hall near Delhi NCR that has modern facilities.",
        icon: <FaHotel className="text-blue-500 text-3xl" />,
    },
    {
        id: 5,
        name: "Theme Hall – Personalized Event Space for Birthdays & More",
        img: "https://i.postimg.cc/DyRnq9W2/Theme-Hall.jpg",
        capacity: "250 Guests",
        description: "Adapted from its former purpose as a church hall, our Theme Hall is a unique and multipurpose indoor facility. It is an ideal space for an intimate birthday party, an anniversary dinner, a themed event, a corporate workshop, or other small gatherings with a maximum of 60 people. With an indoor space, a climate-controlled backdrop, a space to add your own decorations, and a cozy atmosphere, our Theme Hall is the perfect first choice for your event where detail matters. If you are looking for a small event space in the Muzaffarnagar area, The Theme Hall provides an equal balance of flexibility and charm.", icon: <FaTheaterMasks className="text-green-500 text-3xl" />,
    },
    {
        id: 6,
        name: "Devgram – Cottage-Style Stay & Celebration Venue",
        img: "https://i.postimg.cc/t4PyDBPd/Cottage-Style-Stay-amp-Celebration-Venue.jpg",
        capacity: "150 Guests",
        description: "Devgram hosts eight elevated cottages set in lush landscapes that offer accommodation and event space in one place. This is ideal for mehendi, haldi, family dinner, and agents who are looking for some precious time away from home. It gives you the luxury of stay and celebration in one space. If you're searching for a Hudson River Valley style and elevated rustic function space near Delhi, Devgram will give you quiet, privacy, and the outdoors — in one space.", icon: <FaCocktail className="text-red-500 text-3xl" />,
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
// https://postimg.cc/gallery/FmtcDKY
export default function EventsAndPackages() {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [activeVenue, setActiveVenue] = useState(null);
 useEffect(() => {


        window.scrollTo(0, 0);
    })
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 font-serif">
            {/* Hero Section */}
            <section className="relative text-primary py-28 px-6 text-center mt-32 h-[700px] bg-no-repeat bg-center bg-cover" style={{
                backgroundImage: "url('https://i.postimg.cc/bN3yq1J6/Event-banner-jpg-images-chng.jpg')",
            }} >

            </section>

            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Venues Section */}
                <section className="mb-20">

                    <h1 className="text-4xl uppercase text-center  font-serif">
                        Events and Packages at Devrana <br /> Celebrate in Style, Naturally
                    </h1>
                    <p className="max-w-5xl mx-auto  text-sm text-center text-gray-700 py-4 mb-16">At Devrana, we transform your events into memorable occasions. If you're hosting a destination wedding near Delhi, a smaller engagement party, a birthday, a corporate offsite, or a family event, Devrana is located in the scenic and family-village-style adored Muzaffarnagar, the perfect place to host your event!
                        Devrana is located along the Delhi-Haridwar highway with a unique fusion of a traditional village setting and luxury. We have large green lawns with premium banquet halls and warm and welcoming service. We take care of everything for your event, from wedding décor, food, and stay for guests to many event services, so you can enjoy the event and create moments of joy and memories.
                    </p>
                    <div className="space-y-20 ">
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
                                        <h3 className="text-xl  font-serif uppercase ">{venue.name}</h3>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-2">
                                        Capacity: {venue.capacity}
                                    </p>
                                    <p className="text-gray-600 mb-4 font-serif line-clamp-4">{venue.description}</p>
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
                        <div>
                            <a href="tel:+917827002538">  <button className=" bg-primary px-4 py-2 text-white mt-4 transition-all hover:text-lg duration-100  " >Give A Call For Booking</button>
                            </a> </div>

                    </motion.div>
                </div>
            )}

            <div className="text-center justify-center items-center bg-white py-12 px-6">
                <h4 className="text-3xl text-primary mb-4 font-serif uppercase">
                    Customizable Packages Available
                </h4>
                <p className=" text-lg text-gray-600 " >Choose from our flexible event packages tailored to your needs and budget. From small private events to large-scale celebrations, our team ensures a seamless and memorable experience.
                </p>
            </div>
        </div>
    );
}
