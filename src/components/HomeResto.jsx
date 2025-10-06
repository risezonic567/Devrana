import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import img1 from "../images/home/1.png"
import img2 from "../images/home/2.png"
import img3 from "../images/home/3.png"
import img4 from "../images/home/4.png"
import img5 from "../images/home/5.png"
import img6 from "../images/home/6.png"
export default function HomeResto() {
    return (
        <div className=' relative bg-Lightcolor'>
            <div
                className="absolute inset-0 bg-no-repeat bg-bottom animate-pulse "
                style={{
                    backgroundImage: "url('https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-3.png')",
                }}
            ></div>
            <div className=' flex justify-evenly items-center mt-20 mb-20 max-w-7xl mx-auto gap-10  text-white py-12' >

                <div className=' w-1/2 h-80 rounded-lg overflow-hidden  p-6 bg-Lightcolor'>
                    <div>
                        <h3 className='uppercase font-serif tracking-wider text-lg mt-3 '>Devrana</h3>
                        <h3 className='font-serif tracking-wider text-6xl mt-3 '>Restaurant</h3>
                        <p className='text-gray-50 mt-3'> Experience exquisite flavors crafted with local ingredients, served in an ambiance of rustic elegance. Authentic Pure Vegetarian Cuisine with Village Charm
</p>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 mt-4" >Discover More</button>
                </div>
                <div className=' w-1/2 relative h-80 rounded-lg overflow-hidden'>
                    <Swiper
                        direction={'vertical'}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,

                        }}
                        loop={true}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='swiper-slide-menu relative' ><img src={img1} alt="" /></SwiperSlide>7
                        <SwiperSlide className='swiper-slide-menu relative' ><img src={img2} alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-slide-menu relative' ><img src={img3} alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-slide-menu relative' ><img src={img4} alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-slide-menu relative' ><img src={img5} alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-slide-menu relative' ><img src={img6} alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-slide-menu relative' ><img src={img1} alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-slide-menu relative' ><img src={img2} alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-slide-menu relative' ><img src={img3} alt="" /></SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </div>
    )
}
