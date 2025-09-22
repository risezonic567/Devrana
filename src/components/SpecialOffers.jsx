import React from "react";
import { motion } from "framer-motion";

const offers = [
    {
        id: 1,
        title: "Couple Special Packages",
        description:
            "Reconnect with nature and culture at Devrana, a peaceful village resort near Delhi NCR. Enjoy a 2-night stay with traditional meals, folk performances, and countryside vibes.",
        img: "https://i.postimg.cc/zGPNqPfS/Whats-App-Image-2025-09-19-at-5-41-42-PM.jpg",
        discount: "15% OFF",
    },
    {
        id: 2,
        title: "Complimentary Breakfast with Every Stay",
        description:
            "Start your morning with a freshly made traditional Indian breakfast featuring local flavors and farm-fresh ingredients. Available on all room and cottage bookings.",
        img: "http://127.0.0.1:5500/assets/images/home/image%202%20%20330by%20220.jpg",
        discount: "15% OFF",
    },
    {
        id: 3,
        title: "Destination Wedding Special Book Early & Save",
        description:
            "Plan your destination wedding near Delhi with Devrana. Get early bird benefits, including free décor consultation and special packages.",
        img: "http://127.0.0.1:5500/assets/images/home/image1%20%20330by%20220.jpg",
        discount: "15% OFF",
    },
];

export default function SpecialOffers() {
    return (
        <section className="bg-[#faf6f2] py-16"
        style={{backgroundImage:"url('http://127.0.0.1:5500/assets/images/shape/pattern-2.png')"}}>
            <div className="text-center mb-12">
                <p className="uppercase text-sm tracking-widest text-Secondary">
                    Exclusive Offers
                </p>
                <h2 className="text-4xl  text-gray-900 font-serif">
                    Featured Special <br /> Offers
                </h2>
            </div>

            <div className=" flex justify-center gap-x-8">
                {offers.map((offer, index) => (
                    <motion.div
                        key={offer.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden relative cursor-pointer w-[330px] "
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={offer.img}
                            alt={offer.title}
                            className="w-full h-56 object-cover"
                        />

                        {/* Badge */}
                        <span className="absolute top-4 right-4 bg-red-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
                            {offer.discount}
                        </span>

                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-serif h-12">
                                {offer.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{offer.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
