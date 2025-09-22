import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import PaymentSuccess from "./pages/PaymentSuccess";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Rooms />} /> */}
        <Route path="/rooms/:slug" element={<RoomDetail />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
