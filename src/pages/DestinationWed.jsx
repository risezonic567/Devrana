import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import video from "../video/DR WEBSITE VIDEO FINAL.mp4"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
};

export default function DestinationWed() {
    const { scrollYProgress } = useScroll();

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    return (
        <div className="bg-white overflow-hidden">
            <Helmet>
                <title></title>
                <meta name="description" content="" />
            </Helmet>

            {/* HERO */}
            <motion.section
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="relative h-screen flex items-center justify-center"
            >
                <img
                    src="https://i.postimg.cc/zvPcCKB0/Untitled.png"
                    //   src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Destination Wedding"
                />
                <div className="absolute inset-0 bg-black/50" />

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center px-6 max-w-5xl"
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
                    <source src="https://raw.githubusercontent.com/Ashish-Kaintura/Devrana-Hotel/main/src/video/DR%20WEBSITE%20VIDEO%20FINAL.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div> <h2 className="text-white font-serif text-4xl md:text-6xl text-center px-6">
                        Timeless Destination Weddings Near Delhi

                    </h2>
                        <p className="text-white md:flex hidden font-serif text-2xl md:text-2xl mt-2 text-center px-6">Beautifully crafted celebrations at Devrana — a luxury destination wedding venue near Delhi, designed for unforgettable moments.</p>
                    </div>
                </div>
            </motion.section>


            <section className="bg-neutral-900 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto text-center px-6"
                >
                    <h3 className="font-serif text-4xl text-white mb-8">
                        Let’s Create Your Dream Wedding
                    </h3>

                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 bg-white text-black rounded-full uppercase tracking-widest text-sm shadow-xl"
                    >
                        <Link to="/contact-us" >Start Planning</Link>
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
}
