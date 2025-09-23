import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import PaymentSuccess from "./pages/PaymentSuccess";
import BookingSuccess from "./pages/BookingSuccess";
import AdminBookings from "./pages/AdminBookings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rooms />} />
        {/* <Route path="/rooms/:slug" element={<RoomDetail />} />
        <Route path="/payment-success" element={<PaymentSuccess />} /> */}
        <Route path="/rooms/:id" element={<RoomDetail />} />
        <Route path="/booking-success/:bookingId" element={<BookingSuccess />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
