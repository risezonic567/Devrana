import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<RoomDetail />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
