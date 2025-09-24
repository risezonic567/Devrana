import React from "react";
import { motion } from "framer-motion";

const offers = [
    {
        id: 1,
        title: "Escape to the Village—Weekend Getaway Offer",
        description:
            "Reconnect with nature and culture at Devrana, a peaceful village resort near Delhi NCR. Enjoy a 2-night stay with traditional meals, folk performances, and countryside vibes.",
        img: "https://i.postimg.cc/FsXrx2vP/Escape-to-the-Village-Weekend-Getaway.jpg",
        discount: "15% OFF",
    },
    {
        id: 2,
        title: "Complimentary Breakfast with Every Stay",
        description:
            "Start your morning with a freshly made traditional Indian breakfast featuring local flavors and farm-fresh ingredients. Available on all room and cottage bookings.",
        // img: "https://i.postimg.cc/3RspfjTB/330-by-220-jpg-image-2.jpg",
        img: "https://i.postimg.cc/bvwNtkPp/Complimentary-Breakfast-with-Every.jpg",
        discount: "15% OFF",
    },
    {
        id: 3,
        title: "Destination Wedding Special Book Early & Save",
        description:
            "Plan your destination wedding near Delhi with Devrana. Get early bird benefits, including free décor consultation and special packages.",
        img: "https://i.postimg.cc/8Pd1XtPT/Destination-Wedding-Special-Book-Early-amp-Save.jpg",
        discount: "15% OFF",
    },
];

export default function SpecialOffers() {
    return (
        <section className="bg-[#faf6f2] py-24 sm:h-[570px]"
        style={{backgroundImage:"url('http://127.0.0.1:5500/assets/images/shape/pattern-2.png')"}}>
           

            <div className=" flex justify-center flex-wrap gap-y-20 gap-x-8 mt-4 pt-8">
                {offers.map((offer, index) => (
                    <motion.div
                        key={offer.id}
                        className="  bg-white shadow-lg rounded-lg  relative cursor-pointer w-[330px] h-[220px] pb-20 "
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
                        <span className="absolute w-16 h-16 items-center text-center top-4 right-4 bg-primary text-white text-sm px-3 py-2 rounded-full shadow-md">
                            {offer.discount}
                        </span>

                        <div className=" absolute -bottom-20 bg-white right-8 w-64 p-6 h-32">
                            <h3 className="text-2xl text-center  text-gray-900 mb-3 font-serif h-12">
                                {offer.title}
                            </h3>

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
