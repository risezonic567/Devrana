import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={room.img} alt={room.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-bold">{room.name}</h2>
                <p className="text-gray-600">₹{room.price} / night</p>
                <Link
                    to={`/rooms/${room.slug}`}
                    className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}
