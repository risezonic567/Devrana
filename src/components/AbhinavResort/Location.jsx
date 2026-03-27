import { MapPin, Phone } from 'lucide-react'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { NavLink } from 'react-router'

export default function Location() {
  return (
    <>
      <section className='max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='order-2 md:order-1'>
                    <div className='relative group overflow-hidden transition-all border-l-4  border-red-700 rounded-lg'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.3075009276326!2d77.71860117460166!3d29.331982651976684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c11a09508f443%3A0x174f5d1ae683c80!2sDevrana!5e0!3m2!1sen!2sin!4v1774431728059!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>

                </div>
                <div className='order-1 md:order-2'>
                    <div className=''>
                         <h2 className='text-xl sm:text-2xl md:text-3xl text-center'>OUR LOCATIONS</h2>
                         <div className='p-2 sm:p-3 md:p-4'>
                          <p className='text-sm sm:text-base p-1 sm:p-2 md:p-3'>Sunrise at Abhinav Resort Devrana, a peaceful and scenic getaway on the Delhi–Haridwar Highway, is located in Mansurpur, Muzaffarnagar. Surrounded by natural beauty and open landscapes, the resort offers a refreshing escape from city life. It is easily accessible via the highway and provides a perfect setting to enjoy beautiful sunrises, relaxation, and a calm countryside experience just a comfortable drive from nearby cities like Delhi, Meerut, and Haridwar.</p>
                          
                         </div>
                         <div className='p-1 sm:p-2 md:p-3'>
                            <NavLink className={'text-center text-sm sm:text-base md:text-lg hover:text-red-600 flex items-center py-2 gap-3'} to={'https://www.google.com/maps/place/Devrana/@29.3319827,77.7186012,17z/data=!3m1!4b1!4m10!3m9!1s0x390c11a09508f443:0x174f5d1ae683c80!5m3!1s2026-04-05!4m1!1i2!8m2!3d29.331978!4d77.7211761!16s%2Fg%2F11h37s2dx5?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D'}><MapPin className='text-red-900 ' size={32}/>Devrana, Delhi-Haridwar Highway, Mansurpur, Muzaffarnagar</NavLink>
                            <NavLink className={'text-center text-sm sm:text-base md:text-lg hover:text-red-600 flex items-center  gap-3 py-2'} to={'mailto:info@devrana.com'}><FaEnvelope className='text-red-900 text-xl' size={32}/>info@devrana.com</NavLink>
                            <NavLink className={'text-center text-sm sm:text-base md:text-lg hover:text-red-600 flex items-center  gap-3 py-2'} to={'tel:7060301700'}><Phone className='text-red-900 ' size={32}/>7060301700</NavLink>

                         </div>
                    </div>
                </div>
            </section>
    </>
  )
}