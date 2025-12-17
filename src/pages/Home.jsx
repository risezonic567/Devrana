import React, { useEffect } from 'react'
import Herosection from '../components/Herosection'
import AboutSection from '../components/AboutSection'
import SpecialOffers from '../components/SpecialOffers'
import RoomsSlider from '../components/RoomsSlider'
import Amenities from '../components/Amenities'
import FunFacts from '../components/FunFacts'
import OffersSection from '../components/OffersSection'
import VideoSection from '../components/VideoSection'
import Testimonials from '../components/Testimonials'
import ReservationForm from '../components/ReservationForm'
import BlogSection from '../components/sections/BlogSection'
import WhatsAppSticky from '../components/WhatsAppSticky'
import CallSticky from '../components/CallSticky'
import Franchise from '../components/Franchise'
import HomeResto from '../components/HomeResto'
import { Helmet } from 'react-helmet'


export default function Home() {
  useEffect(() => {
  
  
          window.scrollTo(0, 0);
      })
  return (
    <div>
      <Helmet>
        <title>Hotel in Muzaffarnagar | Devrana Resort, Restaurant & Event Venue</title>
        <link rel="canonical" href="https://www.devrana.in/" />
        <meta name="keywords" content="hotel in Muzaffarnagar"></meta>
        <meta name="description" content="Looking for a hotel in Muzaffarnagar? Devrana offers luxury stays, pure veg dining, wedding & event venues near Delhi–Haridwar Highway. Book now." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Devrana",
              "url": "https://www.devrana.in/",
              "logo": "https://www.devrana.in/assets/DR%20LOGO-df167871.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+917060301700",
                "contactType": "sales",
                "areaServed": "IN",
                "availableLanguage": ["en","Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/DevranaOfficial",
                "https://www.instagram.com/devrana_official",
                "https://www.linkedin.com/company/devrana-restaurant-and-resort",
                "https://www.youtube.com/@DevranaOfficial1",
                "https://www.pinterest.com/devranan01"
              ]
            }
          `}
        </script>
      </Helmet>
      <Herosection  />
      <AboutSection/>
      <SpecialOffers/>
      <RoomsSlider/>
      <HomeResto/>
      {/* <Amenities/> */}
      <FunFacts/>
      <OffersSection/>
      <VideoSection/>
      <Testimonials/>
      <ReservationForm/>
      <BlogSection/>
      <WhatsAppSticky/>
      <CallSticky />
      <Franchise/>
    </div>
  )
}
