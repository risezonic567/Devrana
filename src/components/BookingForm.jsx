import { useState } from "react";
import { openRazorpay } from "../utils/razorpay";
import rooms from "../data/rooms.json";

export default function BookingForm({ selectedRoom }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePayment = () => {
        openRazorpay(selectedRoom.price, formData);

        // Simulate saving booking in JSON (later replace with backend API)
        const newBooking = {
            bookingId: `BKG${Date.now()}`,
            customer: formData,
            room: selectedRoom.name,
            checkIn: formData.checkIn,
            checkOut: formData.checkOut,
            guests: formData.guests,
            amount: selectedRoom.price,
            paymentStatus: "Success",
            razorpayId: "simulated_id_123",
        };

        console.log("Booking saved:", newBooking);
        alert("Booking successful! (Stored in console for now)");
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">
                Book {selectedRoom.name}
            </h2>
            <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
            />
            <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
            />
            <div className="flex gap-3">
                <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-1/2 mb-3 p-2 border rounded"
                />
                <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-1/2 mb-3 p-2 border rounded"
                />
            </div>
            <input
                type="number"
                name="guests"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
            />
            <button
                onClick={handlePayment}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
                Pay ₹{selectedRoom.price}
            </button>
        </div>
    );
}
