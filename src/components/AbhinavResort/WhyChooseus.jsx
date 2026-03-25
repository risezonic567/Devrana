import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/css/navigation'

import { Pagination, Autoplay } from 'swiper/modules'
export default function WhyChooseus() {
  const whychoose = [
  {
    title: "Luxury Rooms",
    img: "https://picsum.photos/seed/room/600/400",
    description: "Experience premium comfort in our well-designed luxury rooms featuring modern amenities, elegant interiors, and a peaceful ambiance for a relaxing and memorable stay."
  },
  {
    title: "Fine Restaurant",
    img: "https://picsum.photos/seed/restaurant/600/400",
    description: "Enjoy delicious cuisines at our fine dining restaurant offering a variety of flavors, exceptional service, and a warm ambiance perfect for every dining experience."
  },
  {
    title: "Beautiful Garden",
    img: "https://picsum.photos/seed/garden/600/400",
    description: "Relax in our lush green gardens with serene surroundings, fresh air, and scenic beauty, creating the perfect environment for leisure, walks, and peaceful moments."
  },
  {
    title: "Private Theater",
    img: "https://picsum.photos/seed/theater/600/400",
    description: "Enjoy entertainment like  our private theater with comfortable seating, advanced sound systems, and a cozy setting for movies and special screenings."
  },
  {
    title: "Luxury Bar",
    img: "https://picsum.photos/seed/bar/600/400",
    description: "Unwind at our stylish bar offering premium drinks, signature cocktails, and a vibrant atmosphere, perfect for relaxing evenings and social gatherings."
  },
  {
    title: "Private Dining",
    img: "https://picsum.photos/seed/dining/600/400",
    description: "Enjoy exclusive dining experiences with personalized service, elegant setups, and a private ambiance, ideal for romantic dinners, celebrations, and special occasions."
  },
  {
    title: "Chef Special Experience",
    img: "https://picsum.photos/seed/chef/600/400",
    description: "Delight in curated dishes prepared by our expert chefs, offering unique flavors, fresh ingredients, and a memorable culinary journey crafted specially for you."
  }
];
  return (
   <>
   <section className='max-w-5xl mx-auto px-3 py-10'>
    <h2 className='text-xl sm:text-2xl md:text-3xl text-center'>WHAT'S HOT AND WHY CHOOSE US ABHINAV RESORT? </h2>
    <div className='p-2 sm:p-3 md:p-4'>
        <p className='text-sm sm:text-base text-gray-600 text-center max-w-4xl mx-auto'>Abhinav Resort, New Delhi stands out for its perfect blend of modern luxury, serene surroundings, and exceptional hospitality. With stylish accommodations, premium amenities, versatile event spaces, and personalized services, it offers an ideal destination for relaxation, celebrations, and unforgettable experiences.</p>
    </div>
      <Swiper
            spaceBetween={25}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
       
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            modules={[Pagination, Autoplay]}
            className='py-20'
          >
            {whychoose.map((item, id) => (
              <SwiperSlide key={id}>
                
             
                <div className="max-w-5xl max-auto  bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300">
                  
                
                  <div className="overflow-hidden">
                    <img
                      src={''}
                      alt={item.title}
                      className="w-[315px] h-[230px] object-cover border group-hover:scale-110 transition duration-500"
                    />
                  </div>
    
                 
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
    
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>
    
                
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition">
                      Book Now
                    </button>
                  </div>
    
                </div>
    
              </SwiperSlide>
            ))}
          </Swiper>
   </section>
   </>
  )
}
