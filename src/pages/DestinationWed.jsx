import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import video from "../video/Video1.mp4"
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
                    className="relative z-10 text-center px-6 max-w-4xl"
                >
                    <h1 className="text-white font-serif uppercase text-5xl md:text-7xl tracking-widest">
                        Destination Wedding
                    </h1>
                    <p className="mt-6 text-white/80 text-lg md:text-xl">
                        A celebration crafted in the world’s most beautiful places
                    </p>
                </motion.div>
            </motion.section>

            {/* INTRO */}
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
                        Beyond a Wedding
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Destination weddings blend luxury, travel, and love into an
                        unforgettable experience for couples and guests alike.
                    </p>
                </motion.div>
            </section>

            {/* ANIMATED DESTINATION CARDS */}
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
                            title: "Beachside Bliss",
                            desc: "Barefoot vows by the sea",
                            img: "https://i.postimg.cc/vZNGY2d7/Gemini_Generated_Image_r4rwtgr4rwtgr4rw.png",
                        },
                        {
                            title: "Royal Palaces",
                            desc: "A regal celebration",
                            img: "https://i.postimg.cc/Y9ckg404/Gemini_Generated_Image_c0h5cdc0h5cdc0h5.png",
                        },
                        {
                            title: "European Romance",
                            desc: "Old-world charm & elegance",
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
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <h3 className="text-white font-serif text-2xl mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-white/80 text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* STORY SPLIT */}
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
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Every destination wedding we create is deeply personal — from
                            venue selection and décor to guest experiences and rituals,
                            ensuring elegance in every moment.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CINEMATIC VIDEO */}
            <motion.section
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative h-[720px] mb-32 overflow-hidden"
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h2 className="text-white font-serif text-4xl md:text-6xl text-center px-6">
                        Timeless Moments, Beautifully Crafted
                    </h2>
                </div>
            </motion.section>
            {/* CTA */}
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
