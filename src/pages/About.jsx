import React, { useEffect } from 'react'
import AboutSection from '../components/AboutPageSections/AboutSection'
import SpecialOffers from '../components/AboutPageSections/SpecialOffers'
import PremiumVideoSection from '../components/AboutPageSections/VideoSection'
import TestimonialsSlider from '../components/AboutPageSections/TestimonialsSlider'
import Amenities from '../components/AboutPageSections/Amenities'
import ReservationForm from '../components/ReservationForm'
import Team from '../components/AboutPageSections/Team'
import Img from "../images/about/Devrana About us Banner.jpg"
import FAQList from '../components/FAQList'
import { Helmet } from 'react-helmet'
export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <Helmet>
                <title>About Devrana | Resort, Restaurant & Wedding Venue in Western UP</title>
                <link rel="canonical" href="https://www.devrana.in/about-us" />
                <meta name="keywords" content="resorts in Western Uttar Pradesh"></meta>
                <meta name="description" content="Know Devrana – a village-theme resort, pure veg restaurant and wedding venue in Western Uttar Pradesh near Delhi-NCR, offering stays, dining and events." />
            </Helmet>
            <div className='mt-32' >
                <img className="w-full" src={Img} alt="About Banner" />
            </div>
            <AboutSection />
            <SpecialOffers />
            <PremiumVideoSection />
            <TestimonialsSlider />
            <Amenities />
            <ReservationForm />
            <FAQList />
            {/* <Team /> */}
        </div>
    )
}
