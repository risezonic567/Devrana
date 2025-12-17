/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import rooms from "../data/rooms.json";
import { motion } from "framer-motion";
import Img from "../images/rooms/Banner.jpg"
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function Rooms() {
    useEffect(() => {


        window.scrollTo(0, 0);
    })
    return (
        <div className=" bg-gradient-to-br from-gray-50 to-gray-100 py-12 pt-32">
            <Helmet>
                <link rel="canonical" href="https://www.devrana.in/rooms-cottage" />
                <meta name="keywords" content="luxury room hotel"></meta>
                <title>Luxury Room Hotel in Muzaffarnagar | Premium Rooms & Cottages – Devrana</title>
                <meta name="description" content="Book a luxury room hotel in Muzaffarnagar at Devrana. Spacious premium rooms and cottages with modern amenities, comfort and warm hospitality." />
                <script type="application/ld+json">
                    {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Devrana",
          "image": "https://www.devrana.in/assets/DR%20LOGO-df167871.png",
          "@id": "https://www.devrana.in",
          "url": "https://www.devrana.in/rooms-cottage",
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
            <div className="flex justify-center w-full ">
                <img src={Img} alt="rooms banner" />
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
