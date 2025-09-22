import rooms from "../data/rooms.json";
import RoomCard from "../components/RoomCard";
import BookingForm from "../components/BookingForm";

export default function Rooms() {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Our Rooms</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
            {/* <BookingForm /> */}
        </div>
      
    );
}
