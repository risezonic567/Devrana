import React from 'react'
import { NavLink } from 'react-router'

export default function Events() {
  return (
   <>
   <section className='max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
<div className='order-2 md:order-1 relative overflow-hidden group border'>
    <img src="/images/abhinav/Elegant venues for seamless corporate events.jpg.jpeg" loading={'lazy'} alt="" className='h-full w-full sm:h-54 md:h-full'/>
</div>
{/* 'h-[620px] w-[614px] */}
<div className='order-1 md:order-2 '>
    <h2 className='text-lg sm:text-xl md:text-2xl text-center'>Elegant venues for seamless corporate events, celebrations, and memorable gatherings</h2>
    <div className='p-2 sm:p-3 md:p-4'>
          <p className='max-w-7xl mx-auto text-justify text-sm sm:text-base text-gray-600'>Abhinav Resort, New Delhi offers versatile and luxurious venues ideal for hosting exceptional events and memorable gatherings. From elegant indoor halls to expansive outdoor lawns, the resort provides the perfect setting for weddings, celebrations, and corporate functions. Equipped with modern technology, well-designed boardrooms, and spacious conference facilities, every detail is tailored for comfort and efficiency. A dedicated event management team ensures seamless planning and execution, handling everything from setup to coordination. Whether it’s an intimate get-together or a large-scale event, Abhinav Resort delivers a sophisticated experience with outstanding service, making every occasion successful and truly unforgettable.</p>
          <p className='max-w-7xl mx-auto text-justify text-sm sm:text-base text-gray-600 pt-3'>Abhinav Resort, New Delhi provides an exceptional setting for hosting a wide range of events, from intimate gatherings to grand celebrations. With beautifully designed indoor venues, expansive green lawns, and fully equipped conference halls, the resort caters to weddings, corporate meetings, and social occasions alike. Modern amenities, advanced technology, and customizable event spaces ensure comfort and convenience for every guest. A professional and dedicated event management team works closely with you to plan, organize, and execute every detail flawlessly. Combining elegance, functionality, and warm hospitality, Abhinav Resort ensures that every event is seamless, successful, and truly memorable.</p>
          
    </div>
    <div className='p-2 sm:p-3 md:p-4 m-auto'>
          <NavLink className={'p-4 bg-red-800 text-white rounded-xl px-8'} to={'tel:7060301700'}>
          Call Us
          </NavLink>
          </div>
</div>
   </section>
   </>
  )
}
