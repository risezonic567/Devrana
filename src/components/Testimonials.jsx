import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const testimonials = [
    {
        id: 1,
        name: "Amit Sharma",
        designation: "Guest",
        rating: 5,
        image: "https://html.tonatheme.com/2022/royalking/assets/images/resource/testimonial-2.jpg",
        text: "Devrana Resort exceeded all my expectations. The stay was luxurious, and the service was impeccable!",
    },
    {
        id: 2,
        name: "Neha Singh",
        designation: "Visitor",
        rating: 4,
        image: "https://html.tonatheme.com/2022/royalking/assets/images/resource/testimonial-2.jpg",
        text: "A perfect blend of comfort and culture. Highly recommend for family vacations or weddings.",
    },
    {
        id: 3,
        name: "Rohan Verma",
        designation: "Traveler",
        rating: 5,
        image: "https://html.tonatheme.com/2022/royalking/assets/images/resource/testimonial-1.jpg",
        text: "Absolutely loved the experience! From rooms to dining, everything was top-notch.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-50"
            style={{
                backgroundImage: "url('https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-3.png')",
            }}>
            <div className="max-w-7xl mx-auto px-6 text-center text-gray-700">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">What They’re Saying</h2>
                <p className=" mb-12 font-serif">
                    About Us? See what our guests are saying about their experience at Devrana Resort.
                </p>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 mx-auto max-w-2xl flex flex-col items-center transition-transform hover:scale-105">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full mb-4 border-4 border-red-500"
                                />
                                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                <p className="text-red-500 font-medium mb-2">{testimonial.designation}</p>
                                <div className="flex items-center mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400 mr-1" />
                                    ))}
                                </div>
                                <p className="text-gray-700 text-center">{testimonial.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
