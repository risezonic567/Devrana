import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Rooms from "./pages/Rooms";
// import RoomDetail from "./pages/RoomDetail";
// import PaymentSuccess from "./pages/PaymentSuccess";
// import BookingSuccess from "./pages/BookingSuccess";
// import AdminBookings from "./pages/AdminBookings";
import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home";
import Footer from "./components/Footer";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Restaurant from "./pages/Restaurant";
// import Menu from "./pages/Menu";
// import EventsAndPackages from "./pages/EventsAndPackages";
// import GalleryPage from "./pages/GalleryPage";
// import DestinationWed from "./pages/DestinationWed";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsAndCondition from "./pages/TermsAndCondition";
// import Blogs from "./pages/Blogs";
// import PostDetail from "./pages/PostDetail";
// import NotFound from "./pages/NotFound";
import { lazy } from "react";


let Rooms = lazy(() => import('./pages/Rooms'))
let Home = lazy(() => import('./pages/Home'))
let RoomDetail = lazy(() => import('./pages/RoomDetail'))
let PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'))
let BookingSuccess = lazy(() => import('./pages/BookingSuccess'))
let AdminBookings = lazy(() => import('./pages/AdminBookings'))
let About = lazy(() => import('./pages/About'))
let Menu = lazy(() => import('./pages/Menu'))
let Contact = lazy(() => import('./pages/Contact'))
let Restaurant = lazy(() => import('./pages/Restaurant'))
let EventsAndPackages = lazy(() => import('./pages/EventsAndPackages'))
let GalleryPage = lazy(() => import('./pages/GalleryPage'))
let DestinationWed = lazy(() => import('./pages/DestinationWed'))
let PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
let TermsAndCondition = lazy(() => import('./pages/TermsAndCondition'))
let Blogs = lazy(() => import('./pages/Blogs'))
let PostDetail = lazy(() => import('./pages/PostDetail'))
let AbhinavResort = lazy(() => import('./pages/AbhinavResort'))
let NotFound = lazy(() => import('./pages/NotFound'))


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Rooms />} /> */}
        {/* <Route path="/rooms/:slug" element={<RoomDetail />} />
        <Route path="/payment-success" element={<PaymentSuccess />} /> */}
        <Route path="/booking-success/:bookingId" element={<BookingSuccess />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />

        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/rooms-cottage" element={<Rooms />} />
        <Route path="/rooms-cottage/:slug" element={<RoomDetail />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/event-and-packages" element={<EventsAndPackages />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/destination-wedding" element={<DestinationWed />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:slug" element={<PostDetail />} />
        <Route path="/privacy-policy" element={< PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
         <Route path="/abhinav-resort" element={<AbhinavResort />} />
        <Route path="*" element={<NotFound />} />
        <Route path="https://devrana.in/wp-content/themes/devrana/js/appear.js" element={<Navigate to="/" replace />} />
        <Route path="https://www.devrana.in/?referral_url=https://in.iappscreator.com/dir/v/devrana-muzaffarnagar/beac8cc5df104808972d9ac4198ed3e4" element={<Navigate to="/" replace />} />
        <Route path="https://www.devrana.in/?referral_url=https://in.iappscreator.com/dir/v/devrana-muzaffarnagar/beac8cc5df104808972d9ac4198ed3e4" element={<Navigate to="/" replace />} />
        <Route path="https://www.devrana.in/devrana-express-meerut.html" element={<Navigate to="/" replace />} />
        <Route path="https://www.devrana.in/devrana-express-dehradun.html" element={<Navigate to="/" replace />} />
        <Route path="https://www.devrana.in/?referral_url=https://in.iappscreator.com/dir/v/devrana-muzaffarnagar/beac8cc5df104808972d9ac4198ed3e4" element={<Navigate to="/" replace />} />
        <Route path="https://www.devrana.in/?referral_url=https://in.iappscreator.com/dir/v/devrana-muzaffarnagar/beac8cc5df104808972d9ac4198ed3e4" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
