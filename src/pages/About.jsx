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
                <title>About Devrana</title>
                <meta name="description" content="" />
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
