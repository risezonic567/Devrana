import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ReservationForm() {
    const [form, setForm] = useState({
        checkIn: "",
        checkOut: "",
        rooms: "1 Room",
        adults: "2 Adults",
        children: "1 Child",
        fullname: "",
        mail: "",
        number: "",
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation
        if (
            !form.checkIn ||
            !form.checkOut ||
            !form.fullname ||
            !form.mail ||
            !form.number
        ) {
            toast.error("Please fill in all required fields.");
            return;
        }

        try {
            setLoading(true); // start loader
            await emailjs.send(
                "service_h7w9nis", // replace with your EmailJS service ID
                "template_cj0p8en",  // replace with your EmailJS template ID
                {
                    checkIn: form.checkIn,
                    checkOut: form.checkOut,
                    rooms: form.rooms,
                    adults: form.adults,
                    children: form.children,
                    fullname: form.fullname,
                    mail: form.mail,
                    number: form.number,
                },
                "041QHTwrVzqMNMOBc" // replace with your EmailJS public key
            );

            toast.success("🎉 Query sent successfully!");

            // Reset all fields
            setForm({
                checkIn: "",
                checkOut: "",
                rooms: "1 Room",
                adults: "2 Adults",
                children: "1 Child",
                fullname: "",
                mail: "",
                number: "",
            });
        } catch (err) {
            console.error("EmailJS error:", err);
            toast.error("❌ Failed to send reservation. Please try again.");
        }
        finally {
            setLoading(false); // stop loader
        }
    };

    return (
        <div
            className="bg-[#C6765C] text-white py-10 px-6 shadow-lg max-w-8xl mx-auto"
            style={{
                backgroundImage:
                    "url('https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-4.png')",
            }}
        >
            <ToastContainer position="top-center" autoClose={3000} />

            <h2 className="text-3xl font-serif mb-6 text-center">Make Reservation</h2>

            <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-5 gap-6 items-end"
            >
                {/* Check-In */}
                <div>
                    <label className="block text-sm mb-2">Check - In</label>
                    <input
                        type="date"
                        name="checkIn"
                        value={form.checkIn}
                        onChange={handleChange}
                        className="w-full border-b border-white bg-transparent focus:outline-none text-white"
                    />
                </div>

                {/* Check-Out */}
                <div>
                    <label className="block text-sm mb-2">Check - Out</label>
                    <input
                        type="date"
                        name="checkOut"
                        value={form.checkOut}
                        onChange={handleChange}
                        className="w-full border-b border-white bg-transparent focus:outline-none text-white"
                    />
                </div>

                {/* Rooms */}
                <div>
                    <label className="block text-sm mb-2">Rooms</label>
                    <select
                        name="rooms"
                        value={form.rooms}
                        onChange={handleChange}
                        className="w-full border-b border-white bg-transparent focus:outline-none text-white"
                    >
                        <option className="text-black" value="1 Room">
                            1 Room
                        </option>
                        <option className="text-black" value="2 Rooms">
                            2 Rooms
                        </option>
                        <option className="text-black" value="3 Rooms">
                            3 Rooms
                        </option>
                    </select>
                </div>

                {/* Adults */}
                <div>
                    <label className="block text-sm mb-2">Adults</label>
                    <select
                        name="adults"
                        value={form.adults}
                        onChange={handleChange}
                        className="w-full border-b border-white bg-transparent focus:outline-none text-white"
                    >
                        <option className="text-black" value="1 Adult">
                            1 Adult
                        </option>
                        <option className="text-black" value="2 Adults">
                            2 Adults
                        </option>
                        <option className="text-black" value="3 Adults">
                            3 Adults
                        </option>
                        <option className="text-black" value="4 Adults">
                            4 Adults
                        </option>
                    </select>
                </div>

                {/* Children */}
                <div>
                    <label className="block text-sm mb-2">Children</label>
                    <select
                        name="children"
                        value={form.children}
                        onChange={handleChange}
                        className="w-full border-b border-white bg-transparent focus:outline-none text-white"
                    >
                        <option className="text-black" value="0 Child">
                            0 Child
                        </option>
                        <option className="text-black" value="1 Child">
                            1 Child
                        </option>
                        <option className="text-black" value="2 Children">
                            2 Children
                        </option>
                        <option className="text-black" value="3 Children">
                            3 Children
                        </option>
                    </select>
                </div>

                {/* Full Name */}
                <div>
                    <label className="block text-sm mb-2">Full Name</label>
                    <input
                        type="text"
                        name="fullname"
                        value={form.fullname}
                        onChange={handleChange}
                        className="w-full border-b border-white bg-transparent focus:outline-none text-white"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm mb-2">Mail</label>
                    <input
                        type="email"
                        name="mail"
                        value={form.mail}
                        onChange={handleChange}
                        className="w-full border-b border-white bg-transparent focus:outline-none text-white"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm mb-2">Phone Number</label>
                    <input
                        type="tel"
                        name="number"
                        value={form.number}
                        onChange={handleChange}
                        className="w-full border-b border-white bg-transparent focus:outline-none text-white"
                    />
                </div>

                {/* Button */}
                <div className="md:col-span-5 flex justify-center mt-6">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-white text-black font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition flex items-center justify-center ${loading ? "opacity-70 cursor-not-allowed" : ""
                            }`}
                    >
                        {loading ? (
                            <>
                                <span className="loader mr-2"></span>
                                Sending...
                            </>
                        ) : (
                            "Check Availability"
                        )}
                    </button>
                </div>
            </form>
            <style jsx>{`
        .loader {
          border: 3px solid #f3f3f3;
          border-top: 3px solid #000;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </div>
    );
}
