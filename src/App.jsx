import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import PaymentSuccess from "./pages/PaymentSuccess";
import BookingSuccess from "./pages/BookingSuccess";
import AdminBookings from "./pages/AdminBookings";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Rooms />} /> */}
        {/* <Route path="/rooms/:slug" element={<RoomDetail />} />
        <Route path="/payment-success" element={<PaymentSuccess />} /> */}
        <Route path="/rooms/:id" element={<RoomDetail />} />
        <Route path="/booking-success/:bookingId" element={<BookingSuccess />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
        
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<RoomDetail />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
