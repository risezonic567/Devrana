import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation, Autoplay } from 'swiper/modules'

export default function SpecialOffers() {
  const offers = [
    {
      title: "Weekend Getaway Offer",
      img: "/images/abhinav/Weekend Getaway Offer.jpg.jpeg",
      description: "Enjoy a refreshing weekend at Abhinav Resort with luxury rooms and relaxing ambiance."
    },
    {
      title: "Romantic Escape Package",
      img: "/images/abhinav/Romantic Escape Package.jpg.jpeg",
      description: "Indulge in a romantic getaway with candlelight dinners and peaceful surroundings."
    },
    {
      title: "Family Fun Retreat",
      img: "/images/abhinav/Family Fun Retreat.jpg.jpeg",
      description: "Experience joyful family time with fun activities and comfortable stays."
    },
    {
      title: "Corporate Retreat Deal",
      img: "/images/abhinav/Corporate Retreat Deal.jpg.jpeg",
      description: "Host productive corporate retreats with modern facilities and services."
    },
    {
      title: "Luxury Staycation Offer",
      img: "/images/abhinav/Luxury Staycation Offer.jpg.jpeg",
      description: "Enjoy premium luxury staycation with top-class amenities and comfort."
    },
    // {
    //   title: "Spa & Wellness Package",
    //   img: "/images/abhinav/",
    //   description: "Relax and rejuvenate with spa therapies and wellness experiences."
    // }
  ]

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      
    
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Special Offers</h2>
        <p className="text-gray-500 mt-2">Discover exclusive deals at Abhinav Resort</p>
      </div>

      <Swiper
        spaceBetween={25}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {offers.map((item, id) => (
          <SwiperSlide key={id}>
            
         
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300">
              
            
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover border group-hover:scale-110 transition duration-500"
                />
              </div>

             
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>

            
                <button className="bg-red-700 text-white px-4 py-2 rounded-full text-sm hover:bg-red-800 transition">
                  Book Now
                </button>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}