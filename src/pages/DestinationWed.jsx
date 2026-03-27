import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import video from "../video/DR WEBSITE VIDEO FINAL.mp4"
import { GiElephant } from "react-icons/gi";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {Grid, Pagination, Navigation, Autoplay } from 'swiper/modules'

const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
};

export default function DestinationWed() {
    let [formdata, setformdata] = useState({
        name: "",
        email: '',
        subject: "",
        message: ""
    })
    let [status, setStatus] = useState("")
    let handleform = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }

    let submitFormdata = (e) => {
        e.preventDefault()
        setStatus("Sending_______")
        emailjs.send("service_h7w9nis",
            "template_r2vakij", {
            form_name: formdata.name,
            form_email: formdata.email,
            subject: formdata.subject,
            message: formdata.subject
        },
            "041QHTwrVzqMNMOBc"
        )
            .then(() => {
                setStatus(" Message sent successfully!");
                setformdata({ name: "", email: "", subject: "", message: "" });
            },
                (error) => {
                    console.error("EmailJS Error:", error);
                    setStatus(" Failed to send message. Please try again.");
                })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    let images = [
        {
            img: "/images/weds/wedding image 1.jpg.jpeg"
        },
        {
            img: "/images/weds/wedding image 2.jpg.jpeg"
        },
        {
            img: "/images/weds/wedding image 3.jpg.jpeg"
        },
        {
            img: "/images/weds/wedding image 4.jpg.jpeg"
        },
        {
            img: "/images/weds/wedding image 5.jpg.jpeg"
        },
        {
            img: "/images/weds/wedding image 6.jpg.jpeg"
        },
        {
            img: "https://i.postimg.cc/zvPcCKB0/Untitled.png"
        },
    ]
    let weddings=[
        {
           img:"/images/weds/weddings images 1.jpg.jpeg"
        },
         {
           img:"/images/weds/weddings images 2.jpg.jpeg"
        },
         {
           img:"/images/weds/weddings images 3.jpg.jpeg"
        },
         {
           img:"/images/weds/weddings images 4.jpg.jpeg"
        },
         {
           img:"/images/weds/weddings images 5.jpg.jpeg"
        },
         {
           img:"/images/weds/weddings images 6.jpg.jpeg"
        }, {
           img:"/images/weds/weddings images 7.jpg.jpeg"
        },

         {
           img:"/images/weds/weddings images 8.jpg.jpeg"
        },
         {
            img: "/images/weds/weddings images 9.jpg.jpeg"
        },
            
       
    ]
    const { scrollYProgress } = useScroll();

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    return (
        <div className="bg-white overflow-hidden">
            <Helmet>
                <title>Destination Wedding Near Delhi | Luxury Wedding Resort – Devrana</title>
                <meta name="keywords" content="destination wedding near Delhi"></meta>
                <link rel="canonical" href="https://www.devrana.in/destination-wedding" />
                <meta name="description" content="Host a luxury destination wedding near Delhi at Devrana Resort with stunning venues, curated wedding packages, elegant décor and premium hospitality." />
            </Helmet>

            {/* HERO */}
            <motion.section
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="relative h-screen flex items-center justify-center "
            >

                <Swiper

                    loop={true}
                    navigation={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}


                    modules={[Pagination, Navigation, Autoplay]}
                >
                    {images.map((item, id) => (
                        <SwiperSlide key={id}>



                            <img
                                src={item.img}
                                alt={item.title}
                                className="h-full w-full object-cover absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-black/40" />





                        </SwiperSlide>
                    ))}
                </Swiper>


                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    transition={{ duration: 1 }}
                    className="absolute flex items-center justify-center inset-0 flex-col mx-auto z-10 text-center px-6 max-w-5xl"
                >
                    <h1 className="text-white font-serif uppercase text-4xl md:text-5xl tracking-widest">
                        An Elegant Wedding Destination in North India
                    </h1>
                    <p className="mt-6 text-white/80 text-lg md:text-xl">
                        At Devrana, couples can create forever wedding memories by experiencing true elegance, comfort, and hospitality in a beautiful destination setting in the Delhi-NCR region.

                    </p>
                </motion.div>
            </motion.section>


            <section className="max-w-7xl mx-auto py-24 px-6">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h2 className="font-serif uppercase text-4xl mb-6">
                        A Destination Wedding Experience Beyond Expectations
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Devrana is located in Muzaffarnagar, one of the most highly sought-after luxury resort wedding destinations near New Delhi. The property is perfectly placed on the Delhi-Haridwar Highway; its gorgeous, tranquil environment and excellent access to the rest of Uttar Pradesh make it a perfect choice for couples looking to have a luxurious wedding.

                    </p>
                </motion.div>
            </section>
      

            <section className='max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='order-1 md:order-2'>
                    <div className='relative group overflow-hidden transition-all  border-l-4  border-red-700 rounded-lg'>
                        <img src="/images/weds/vivah by devrana.jpg.jpeg" className='h-full w-full object-cover group-hover:scale-110' alt="" />

                    </div>

                </div>
                <div className='order-2 md:order-1'>
                    <div className=''>

                        <div className=" max-w-3xl mx-auto flex items-center justify-around">

                            <GiElephant className="text-red-600 -rotate-12" size={100} />
                            <h1 className="text-2xl md:text-4xl text-[#ac0505] tracking-widest text-center"
                                style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                                vivaah by Devrana
                            </h1>

                            <GiElephant className="text-red-600 float-right scale-x-[-1] rotate-12" size={100} />
                        </div>
                        {/* <h2 className='text-xl sm:text-2xl md:text-3xl text-center'>A perfect blend of modern luxury and serene comfort, Abhinav Resort</h2> */}
                        <div className='p-2 sm:p-3 md:p-4'>
                            <p className='text-sm sm:text-base p-1 sm:p-2 md:p-3'>Host your dream destination wedding at  <b className="text-red-800">Abhinav Resort Devrana, located on the Delhi–Haridwar Highway in Mansurpur, Muzaffarnagar</b>, and create memories that last a lifetime. Surrounded by serene landscapes and open natural beauty, the resort offers a perfect blend of elegance and tranquility, welcoming you with a warm and royal ambience from the moment you arrive.</p>
                            <p className='text-sm sm:text-base p-1 sm:p-2 md:p-3'>From your Sangeet and Mehendi ceremonies to your Wedding and Grand Reception, our dedicated team ensures every celebration is seamlessly planned and beautifully executed. Sit back, relax, and enjoy your special moments while we curate unforgettable experiences for you and your loved ones.</p>
                            <p className='text-sm sm:text-base p-1 sm:p-2 md:p-3'>Our expert chefs craft lavish spreads featuring a delightful mix of Indian and international cuisines, making every meal a memorable part of your celebration.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-6 pb-32">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.15 }}
                    className="grid md:grid-cols-3 gap-10"
                >
                    {[
                        {
                            title: "Outdoor Gardens",
                            desc: " Outdoor garden weddings offer a picturesque and natural setting for your special day. Surrounded by lush greenery, blooming flowers, and open skies, these venues provide a romantic and serene atmosphere that is perfect for couples who love nature.",
                            img: "https://i.postimg.cc/vZNGY2d7/Gemini_Generated_Image_r4rwtgr4rwtgr4rw.png",
                        },
                        {
                            title: "Royal Palaces",
                            desc: "For a truly grand and opulent wedding, consider renting a royal palace. These venues often come with stunning architecture, lavish interiors, and expansive grounds that can accommodate large guest lists.",
                            img: "https://i.postimg.cc/Y9ckg404/Gemini_Generated_Image_c0h5cdc0h5cdc0h5.png",
                        },
                        {
                            title: "House of worship",
                            desc: "If you're planning a traditional religious wedding ceremony, this is an affordable option. Keep in mind, not all houses of worship have",
                            img: "https://i.postimg.cc/P5RdXVk6/Gemini_Generated_Image_7z02gu7z02gu7z02.png",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            transition={{ duration: 0.7 }}
                            whileHover={{ y: -12 }}
                            className="group relative rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="h-[480px] w-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Glass overlay */}
                            <div className="absolute bg-black/15 inset-0 flex flex-col justify-end p-8">
                                <h3 className="text-white font-serif text-2xl mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-white/80 text-sm line-clamp-4">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>


            <section className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.img
                        src="https://i.postimg.cc/fR9CJ6hS/wmremove-transformed.png"
                        alt="Ceremony"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl shadow-2xl"
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="font-serif text-4xl mb-6">
                            Designed Around Your Love Story

                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Every Devrana price destination wedding Jubilee near Delhi has been designed to reflect your own particular love story. We plan everything from choosing the wedding venue and selecting the personalized décor theme to planning the rituals, planning the guest experience, and grand celebrations. Every aspect is specifically planned so that your wedding experience is seamless and unforgettable. We provide professionalism, creativity, precision, and friendly hospitality to our clients by using our expertise in wedding planning so that every moment is easy and elegant and you can enjoy your wedding day to the fullest.

                        </p>
                        <br />
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Devrana will provide you a wedding venue near Delhi/NCR to create your own intimate or elaborate, multi-day ceremony that includes an abundance of flexibility in space and service with a personal touch that makes your vision come to life.

                        </p>
                    </motion.div>
                </div>
            </section>


            <motion.section
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative md:h-[560px] h-96 mb-32 overflow-hidden"
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://raw.githubusercontent.com/Ashish-Kaintura/Devrana-Hotel/Static/src/video/DR%20WEBSITE%20VIDEO%20FINAL.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div> <h2 className="text-white font-serif text-4xl md:text-6xl text-center px-6">
                        Timeless Destination Weddings Near Delhi

                    </h2>
                        <p className="text-white md:flex hidden font-serif text-2xl md:text-2xl mt-2 text-center px-6">Beautifully crafted celebrations at Devrana — a luxury destination wedding venue near Delhi, designed for unforgettable moments.</p>
                    </div>
                </div>
            </motion.section>

            <section className="w-full relative py-24 min-h-[500px]">


                <img
                    src="/images/weds/Let’s Create Your Dream Wedding.jpg.jpeg"
                    alt=""
                    className="w-full h-full object-cover absolute inset-0"
                />

                {/* Overlay Content */}
                <div className="text-center px-6 absolute inset-0 top-40 flex items-center justify-center flex-col">

                    <h3 className="font-serif text-4xl text-white mb-8">
                        Let’s Create Your Dream Wedding
                    </h3>

                    <button className="px-12 py-5 bg-red-800 rounded-full uppercase tracking-widest text-sm shadow-xl">
                        <Link to="/contact-us" className="text-white">
                            Start Planning
                        </Link>
                    </button>

                </div>

            </section>
            <section className="max-w-3xl mx-auto pt-20 py-3 px-3">
                <h1 className="text-2xl md:text-4xl text-[#ac0505] tracking-widest text-center"
                    style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    vivaah by Devrana
                </h1>

                <div>
                    <form onSubmit={submitFormdata}>
                        <div className="py-2">
                            <input type="text"
                                name="name"
                                value={formdata.name}
                                onChange={handleform}
                                placeholder="Enter Your Full Name...."
                                required
                                className="w-full border  border-red-600 p-4 rounded"
                            />
                        </div>
                        <div className="py-2">
                            <input type="email"
                                name="email"
                                value={formdata.email}
                                onChange={handleform}
                                placeholder="Enter Your Email...."
                                required
                                className="w-full border  border-red-600 p-4 rounded"
                            />
                        </div>
                        <div className="py-2">
                            <input type="text"
                                name="subject"
                                value={formdata.subject}
                                onChange={handleform}
                                placeholder="Enter Your Subject...."
                                required
                                className="w-full border  border-red-600 p-4 rounded"
                            />
                        </div>
                        <div className="py-2">
                            <textarea type="text"
                                name="message"
                                value={formdata.message}
                                onChange={handleform}
                                placeholder="Enter Your Full Message...."
                                required
                                className="w-full border  border-red-600 p-4 rounded" rows={5} cols={5}></textarea>
                        </div>
                        <div>
                            <button className="py-4 px-8 rounded-xl text-white bg-red-800">Submit</button>
                        </div>
                    </form>
                    {status && (
                        <p className="mt-4 text-sm text-gray-700 font-medium">{status}</p>
                    )}
                </div>
            </section>
            
<section className="max-w-7xl mx-auto py-3 px-3">
  <Swiper
    slidesPerView={3}
    spaceBetween={20}
    
    grid={{
      rows: 2, // 🔥 2 rows
      fill: "row"
    }}

    pagination={{ clickable: true }}
    loop={true}
    autoplay={{ delay: 2500, disableOnInteraction: false }}

    breakpoints={{
      320: { slidesPerView: 1 },
      640: { slidesPerView: 3 },
      1024: { slidesPerView: 6 }
    }}

    modules={[Grid, Autoplay, Pagination]}
    className="mySwiper"
  >
    {weddings.map((item, id) => (
      <SwiperSlide key={id}>
        <div className="relative group overflow-hidden">
          <img
            src={item.img}
            className="h-full  w-full object-cover group-hover:scale-110 rounded-md"
            alt=""
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

        </div>
    );
}
