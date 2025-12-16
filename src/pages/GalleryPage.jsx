/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img from "../images/gallery/gallery-images.jpg02.jpg"
import img2 from "../images/gallery/gallery-images.jpg03.jpg"
import img3 from "../images/gallery/gallery-images.jpg04.jpg"
import img4 from "../images/gallery/gallery-images.jpg05.jpg"
import img5 from "../images/gallery/gallery-images.jpg06.jpg"
import img6 from "../images/gallery/gallery-images.jpg-01.jpg"
import img7 from "../images/gallery/gallery-images.jpg07.jpg"
import img8 from "../images/gallery/gallery-images.jpg08.jpg"
import banner from '../images/gallery/gallery-banner.jpg'
import { Helmet } from "react-helmet";
const galleryImages = [
  { src: img, title: "Fine Dining" },
  { src: img2, title: "Baar Area" },
  { src: img3, title: "Cocktail Lounge" },
  { src: img4, title: "lawn Area" },
  { src: img5, title: "Lawn dining Area" },
  { src: img6, title: "Banquet Hall" },
  { src: img7, title: "Dining" },
  { src: img8, title: "Bed Room" },
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  const handlePrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  useEffect(() => {


    window.scrollTo(0, 0);
  })
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <Helmet>
        <title>Resort Photos in Muzaffarnagar | Devrana Wedding & Event Gallery</title>
        <link rel="canonical" href="https://www.devrana.in/gallery" />
        <meta name="description" content="Explore Devrana’s photo gallery showcasing luxury resort rooms, wedding events, banquet lawns and pure vegetarian dining in Muzaffarnagar." />
      </Helmet>
      {/* Hero Section */}
      <div className="mt-32">
        <img className="w-full" src={banner} alt="Devrana Event Gallery" />
      </div>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].title}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />

              {/* Title */}
              <p className="text-center text-white mt-4 text-lg">
                {galleryImages[activeIndex].title}
              </p>

              {/* Close Button */}
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-4 right-4 text-white hover:text-red-400"
              >
                <FaTimes size={26} />
              </button>

              {/* Navigation */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <FaChevronLeft size={32} />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <FaChevronRight size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
