import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs
            .send(
                "service_h7w9nis",
                "template_r2vakij",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                "041QHTwrVzqMNMOBc"
            )
            .then(
                () => {
                    setStatus("✅ Message sent successfully!");
                    setFormData({ name: "", email: "", subject: "", message: "" });
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    setStatus("❌ Failed to send message. Please try again.");
                }
            );
    };

    return (
        <>
            <Helmet>
                <title>Contact Devrana | Best Hotel & Event Venue in Muzaffarnagar.</title>
                <meta name="keywords" content=""></meta>
                <link rel="canonical" href="https://www.devrana.in/contact-us" />
                <meta name="description" content="Contact Devrana, a leading hotel in Muzaffarnagar, for room bookings, weddings, events and restaurant inquiries. Call or visit us today." />
                <script type="application/ld+json">
                    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Devrana",
        "image": "https://www.devrana.in/assets/DR%20LOGO-df167871.png",
        "@id": "https://www.devrana.in",
        "url": "https://www.devrana.in/contact-us",
        "telephone": "7060301700",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Milestone 103, NH334, Near Mansurpur, Delhi- Haridwar-Dehradun Highway, Meerut Road",
          "addressLocality": "Muzaffarnagar",
          "postalCode": "251203",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 29.3533648,
          "longitude": 77.7126515
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "07:00",
          "closes": "23:59"
        },
        "sameAs": [
          "https://www.facebook.com/DevranaOfficial",
          "https://www.instagram.com/devrana_official",
          "https://www.youtube.com/@DevranaOfficial1",
          "https://www.linkedin.com/company/devrana-restaurant-and-resort",
          "https://www.pinterest.com/devranan01"
        ]
      }
    `}
                </script>
            </Helmet>
            {/* 🚀 Hero Banner with Animation */}
            <section className="relative h-[570px] bg-cover bg-center flex items-center justify-center sm:mt-32 mt-[73px] "
                style={{ backgroundImage: "url('https://i.postimg.cc/4dfb4bbz/contact-us-bannner.jpg')" }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10 text-center text-white px-6"
                >
                    <motion.h1
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-4xl lg:text-6xl font-bold font-serif"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-4 text-lg lg:text-xl max-w-2xl mx-auto"
                    >
                        Reach out for bookings, queries, or special requests. We’re here to help you.
                    </motion.p>
                </motion.div>
            </section>

            {/* Contact Form & Map */}
            <section className="relative bg-Secondary py-20 mb-10 rounded-t-lg px-6 lg:px-20 max-w-7xl mx-auto -mt-12 "
                style={{
                    backgroundImage: "url('https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-4.png')",
                }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white shadow-lg rounded-2xl p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 focus:border-primary outline-none py-2"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 focus:border-primary outline-none py-2"
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 focus:border-primary outline-none py-2"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 resize-none"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-primary hover:bg-Secondary text-white font-medium px-6 py-3 rounded-lg shadow-lg transition"
                            >
                                Submit Now
                            </button>
                        </form>

                        {status && (
                            <p className="mt-4 text-sm text-gray-700 font-medium">{status}</p>
                        )}
                    </motion.div>

                    {/* Google Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-lg"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.307659617096!2d77.7211761!3d29.331978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c11a09508f443%3A0x174f5d1ae683c80!2sDevrana!5e0!3m2!1sen!2sin!4v1758696466957!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Devrana Hotel Location"
                        ></iframe>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
