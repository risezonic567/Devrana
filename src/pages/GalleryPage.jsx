import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const galleryImages = [
  { src: "/gallery/lobby.jpg", title: "Luxury Lobby" },
  { src: "/gallery/pool.jpg", title: "Infinity Pool" },
  { src: "/gallery/room.jpg", title: "Premium Suite" },
  { src: "/gallery/dining.jpg", title: "Fine Dining" },
  { src: "/gallery/spa.jpg", title: "Luxury Spa" },
  { src: "/gallery/banquet.jpg", title: "Banquet Hall" },
  { src: "/gallery/lounge.jpg", title: "Cocktail Lounge" },
  { src: "/gallery/heritage.jpg", title: "Heritage View" },
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  const handlePrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-purple-700 text-white py-28 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Devranaa Hotel Gallery
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-100">
            Experience the elegance, luxury, and unforgettable moments captured
            at our hotel.
          </p>
        </motion.div>
      </section>

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
