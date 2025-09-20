import { useParams } from "react-router-dom";
import rooms from "../data/rooms.json";
import { openRazorpay } from "../utils/razorpay";

export default function RoomDetail() {
    const { slug } = useParams();
    const room = rooms.find((r) => r.slug === slug);

    if (!room) return <p className="p-6">Room not found</p>;

    const handleBooking = () => {
        const customer = {
            name: "Test User",
            email: "test@example.com",
            phone: "9876543210",
        };
        openRazorpay(room.price, customer);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <img src={room.img} alt={room.name} className="w-full h-80 object-cover rounded-lg" />
            <h1 className="text-3xl font-bold mt-4">{room.name}</h1>
            <p className="text-gray-700 mt-2">{room.description}</p>
            <ul className="mt-3 text-gray-600 list-disc list-inside">
                {room.amenities.map((a, i) => (
                    <li key={i}>{a}</li>
                ))}
            </ul>
            <p className="text-2xl font-semibold mt-4">₹{room.price} / night</p>
            <button
                onClick={handleBooking}
                className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
                Book & Pay Now
            </button>
        </div>
    );
}
