import React from 'react'

export default function About() {
    return (
        <>
            <section className='max-w-full mx-auto px-3'>
                <div>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-black text-center py-1 md:py-2'>Welcome</h2>
                   
                    <h4 className='max-w-3xl text-lg sm:text-xl md:text-2xl text-center mx-auto text-primary'>Experience premium comfort at Abhinav Resort, New Delhi</h4>
                    <div className='p-2 sm:p-3 md:p-4'>
                        <p className='text-sm sm:text-base text-center max-w-6xl mx-auto'>Abhinav Resort, New Delhi offers a refined escape designed for modern travelers seeking comfort, elegance, and relaxation. Perfect for family vacations, romantic getaways, weekend breaks, destination celebrations, and corporate retreats, the resort blends contemporary interiors with warm hospitality. Guests can enjoy well-appointed accommodations, engaging recreational activities, and serene surroundings that promote rejuvenation. Every detail is thoughtfully curated to ensure a seamless and memorable experience. Whether you’re unwinding with loved ones or hosting special events, Abhinav Resort delivers a balanced mix of luxury and convenience, making it an ideal choice for both leisure and business stays in the heart of New Delhi.</p>
                    </div>
                </div>
            </section>
            <section className='max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='order-2 md:order-1'>
                    <div className='relative group overflow-hidden transition-all border-l-4  border-red-700 rounded-lg'>
                        <img src="/images/abhinav/Abhinav Resort.jpg.jpeg" className='h-full w-full '  alt="" />

                    </div>

                </div>
                <div className='order-1 md:order-2'>
                    <div className=''>
                         <h2 className='text-xl sm:text-2xl md:text-3xl text-center'>A perfect blend of modern luxury and serene comfort, Abhinav Resort</h2>
                         <div className='p-2 sm:p-3 md:p-4'>
                          <p className='text-sm sm:text-base p-1 sm:p-2 md:p-3'>Abhinav Resort, New Delhi offers a refined blend of comfort and modern elegance, creating a peaceful escape for travelers seeking relaxation, luxury, and memorable experiences in a serene, well-designed environment.</p>
                          <p className='text-sm sm:text-base p-1 sm:p-2 md:p-3'>Perfect for family vacations, romantic getaways, weekend stays, and corporate retreats, the resort features stylish accommodations, warm hospitality, and engaging amenities that ensure every guest enjoys a seamless, comfortable stay.</p>
                          <p className='text-sm sm:text-base p-1 sm:p-2 md:p-3'>With thoughtfully curated spaces, excellent service, and a relaxing ambiance, Abhinav Resort provides the ideal setting for rejuvenation, celebrations, and business gatherings, making every visit truly special and unforgettable.</p>
                         </div>
                    </div>
                </div>
            </section>
        </>
    )
}
