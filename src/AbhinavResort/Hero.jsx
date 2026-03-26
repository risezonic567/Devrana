import React from 'react'
import { NavLink } from 'react-router'

export default function Hero() {
  return (
    <>
    <div className='sm:mt-32 mt-[74px]  lg:h-[600px]  xl:h-[600px]  h-screen relative overflow-hidden my-20'>
        <video src="/video/abhiresort.mp4" className='absolute inset-0 w-full h-full object-cover' playsInline loop muted autoPlay preload='auto'></video>
       <div className='absolute inset-0 flex items-center justify-center bg-black/20'>
        <h2 className='text-xl sm:text-2xl md:text-3xl text-white text-center px-3'>Experience premium comfort at Abhinav Resort, New Delhi</h2>
       
       </div>
       <div className='absolute inset-0 flex items-center justify-center top-40'>
         <NavLink className={'bg-red-800 px-8 p-4 text-white rounded-xl'}>Contact Us</NavLink>
       </div>
    </div>
    </>
  )
}
