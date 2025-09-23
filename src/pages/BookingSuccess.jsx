import { useLocation, useParams, Link } from "react-router-dom";

export default function BookingSuccess() {
    const { bookingId } = useParams();
    const location = useLocation();
    const booking = location.state?.booking;

    if (!booking) {
        return (
            <div className="p-6 text-center">
                <h2 className="text-xl font-bold">Booking not found</h2>
                <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded">
                    Go Back
                </Link>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
                Booking Confirmed 🎉
            </h2>
            <p className="mb-2">Booking ID: <b>{bookingId}</b></p>
            <p className="mb-2">Room: <b>{booking.room}</b></p>
            <p className="mb-2">Check-in: {booking.checkIn}</p>
            <p className="mb-2">Check-out: {booking.checkOut}</p>
            <p className="mb-2">Guests: {booking.guests}</p>
            <p className="mb-2">Amount Paid: ₹{booking.amount}</p>
            <p className="mb-4">Payment ID: {booking.razorpayId}</p>

            <Link
                to="/"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
                Back to Home
            </Link>
        </div>
    );
}
