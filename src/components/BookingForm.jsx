import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { openRazorpay } from "../utils/razorpay";

export default function BookingForm({ selectedRoom }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePayment = () => {
        openRazorpay(selectedRoom.price, formData, selectedRoom, (newBooking) => {
            navigate(`/booking-success/${newBooking.bookingId}`, {
                state: { booking: newBooking },
            });
        });
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4 text-gray-900">
                Book Your Stay
            </h2>
            <div className="space-y-3">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <div className="flex gap-3">
                    <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>
                <input
                    type="number"
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>
            <button
                onClick={handlePayment}
                className="w-full mt-5 bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
                Pay ₹{selectedRoom.price}
            </button>
        </div>
    );
}
