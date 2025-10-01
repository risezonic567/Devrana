import React from "react";
import Img from "../images/home/630-by-420.jpg-new.jpg"
import Img1 from "../images/home/810-by-500-Recovered.jpg-2.jpg"
import { Link } from "react-router-dom";
export default function OffersSection() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 space-y-20">
                {/* First Row */}
                <div className="flex flex-col lg:flex-row items-center lg:gap-12">
                    <div className="relative lg:w-1/2 mb-8 lg:mb-0">
                        {/* Decorative shape */}
                        <img
                            src="https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-1.png"
                            alt=""
                            className="absolute top-0 left-0 w-32 h-32"
                        />
                        <img
                            src={Img}
                            alt="Finest Resort"
                            className="rounded-lg shadow-lg transform transition duration-500 hover:scale-105 sm:w-[630px] sm:h-[420px]"
                        />
                    </div>

                    <div className="lg:w-5/12 lg:ml-auto text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl  mb-5 font-serif ">

                            Luxury Resort Near Delhi on Haridwar Highway – Stay, Dine & Celebrate

                        </h2>
                        <p className="text-gray-700 mb-6">
                            Experience the perfect blend of elegance, culture, and comfort at Devrana—the finest resort and destination wedding venue in Muzaffarnagar. Nestled along the Delhi–Haridwar Highway, our property offers premium stays, lush green lawns, banquet spaces, and authentic local cuisine—ideal for staycations, celebrations, or weekend getaways.

                        </p>
                        <Link to="/about-us"
                            href="#discover"
                            className="inline-block bg-primary  hover:bg-Secondary text-white font-semibold py-3 px-6  shadow-md transition"
                        >
                            Discover More
                        </Link>
                    </div>
                </div>

                {/* Second Row */}
                <div className="flex flex-col lg:flex-row-reverse items-center lg:gap-12">
                    <div className="relative lg:w-2/3 mb-8 lg:mb-0">
                        {/* Decorative shape */}
                        <img
                            src="https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-1.png"
                            alt=""
                            className="absolute top-0 right-0 w-32 h-32"
                        />
                        <img
                            src={Img1}
                            alt="Versatile Venues"
                            className="rounded-lg shadow-lg transform transition duration-500 hover:scale-105 sm:w-[810px] sm:h-[500px]"
                        />
                    </div>

                    <div className="lg:w-1/3 text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl  mb-5 font-serif ">
                            Explore Event Packages at Devrana – A Premier Venue on Delhi–Haridwar Highway
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Explore our event packages at Devrana Resort! Plan your upcoming wedding, party, or corporate event near Delhi and Haridwar at Devrana Resort.  Located along the beautiful Delhi–Haridwar highway, your event will be celebrated with the taste of village charm <br />  <br />experienced with modern amenities. No matter if it is a destination wedding, business conference, or family gathering, our resort offers everything you may require - event spaces, catering, décor, and accommodation. As one of the best venues for events in the region of Uttar Pradesh, plan your special event now.
                        </p>

                        {/* <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                            <li>Powerful Admin Panel</li>
                            <li>Multi-Language Support</li>
                        </ul> */}
                        <Link to="/rooms-cottage"
                            href="#book"
                            className="inline-block bg-primary  hover:bg-Secondary text-white font-semibold py-3 px-6  shadow-md transition"
                        >
                            Book A Stay
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
