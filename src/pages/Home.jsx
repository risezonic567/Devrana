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
