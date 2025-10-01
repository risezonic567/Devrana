// src/components/ReservationForm.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ReservationForm() {
    const [form, setForm] = useState({
        checkIn: "",
        checkOut: "",
        rooms: "1 Room",
        adults: "2 Adults",
        children: "1 Child",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Replace SERVICE_ID, TEMPLATE_ID and PUBLIC_KEY with your EmailJS values
            await emailjs.send(
                "SERVICE_ID",
                "TEMPLATE_ID",
                {
                    checkIn: form.checkIn,
                    checkOut: form.checkOut,
                    rooms: form.rooms,
                    adults: form.adults,
                    children: form.children,
                },
                "PUBLIC_KEY"
            );

            alert("Reservation sent!");
            setForm({
                checkIn: "",
                checkOut: "",
                rooms: "1 Room",
                adults: "2 Adults",
                children: "1 Child",
            });
        } catch (err) {
            console.error("EmailJS error:", err);
            alert("Failed to send reservation. Please try again.");
        }
    };

    return (
        <div
            className="bg-[#C6765C] text-white py-10 px-6  shadow-lg max-w-8xl mx-auto"
            style={{
                backgroundImage:
                    "url('https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-4.png')",
            }}
        >
            <h2 className="text-3xl font-serif mb-6 text-center">Make Reservation</h2>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-5 gap-6 items-end">
                {/* Check-In */}
                <div>
                    <label className="block text-sm mb-2">Check - In</label>
                    <input
                        type="date"
                        name="checkIn"
                        value={form.checkIn}
                        onChange={handleChange}
                        className="w-full border-b border-white bg-transparent focus:outline-none text-white placeholder-white"
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
                        <option className="text-black">1 Room</option>
                        <option className="text-black">2 Rooms</option>
                        <option className="text-black">3 Rooms</option>
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
                        <option className="text-black">1 Adult</option>
                        <option className="text-black">2 Adults</option>
                        <option className="text-black">3 Adults</option>
                        <option className="text-black">4 Adults</option>
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
                        <option className="text-black">0 Child</option>
                        <option className="text-black">1 Child</option>
                        <option className="text-black">2 Children</option>
                        <option className="text-black">3 Children</option>
                    </select>
                </div>

                {/* Button */}
                <div className="md:col-span-5 flex justify-center mt-6">
                    <button
                        type="submit"
                        className="bg-white text-black font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
                    >
                        Check Availability
                    </button>
                </div>
            </form>
        </div>
    );
}
