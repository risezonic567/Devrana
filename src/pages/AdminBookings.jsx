import { getBookings } from "../utils/storage";

export default function AdminBookings() {
    const bookings = getBookings();

    if (bookings.length === 0) {
        return <h2 className="text-center mt-10">No bookings yet</h2>;
    }

    return (
        <div className="p-6 max-w-5xl mx-auto pt-64">
            <h1 className="text-2xl font-bold mb-6">All Bookings</h1>
            <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border p-2">Booking ID</th>
                        <th className="border p-2">Customer</th>
                        <th className="border p-2">Room</th>
                        <th className="border p-2">Check-In</th>
                        <th className="border p-2">Check-Out</th>
                        <th className="border p-2">Guests</th>
                        <th className="border p-2">Amount</th>
                        <th className="border p-2">Payment ID</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((b) => (
                        <tr key={b.bookingId} className="text-center">
                            <td className="border p-2">{b.bookingId}</td>
                            <td className="border p-2">{b.customer.name}</td>
                            <td className="border p-2">{b.room}</td>
                            <td className="border p-2">{b.checkIn}</td>
                            <td className="border p-2">{b.checkOut}</td>
                            <td className="border p-2">{b.guests}</td>
                            <td className="border p-2">₹{b.amount}</td>
                            <td className="border p-2">{b.razorpayId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
