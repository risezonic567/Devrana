import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                "YOUR_PUBLIC_KEY"
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
 useEffect(() => {


        window.scrollTo(0, 0);
    })
    return (
        <>
            {/* 🚀 Hero Banner with Animation */}
            <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center sm:mt-32 mt-[73px] "
                style={{ backgroundImage: "url('https://i.postimg.cc/MpmmjNWq/contact-us-banner-jpg-02.jpg')" }}>
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
