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
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "LocalBusiness",
                      "name": "Devrana",
                      "image": "https://www.devrana.in/assets/DR%20LOGO-df167871.png",
                      "@id": "https://www.devrana.in/",
                      "url": "https://www.devrana.in/about-us",
                      "telephone": "+917060301700",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Milestone 103, NH334, Near Mansurpur, Delhi- Haridwar-Dehradun Highway, Meerut Road",
                        "addressLocality": "Muzaffarnagar",
                        "postalCode": "251203",
                        "addressCountry": "IN"
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 29.3533648,
                        "longitude": 77.7126515
                      },
                      "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                          "Friday",
                          "Sunday",
                          "Saturday"
                        ],
                        "opens": "07:00",
                        "closes": "23:59"
                      },
                      "sameAs": [
                        "https://www.facebook.com/DevranaOfficial",
                        "https://www.instagram.com/devrana_official",
                        "https://www.youtube.com/@DevranaOfficial1",
                        "https://www.linkedin.com/company/devrana-restaurant-and-resort",
                        "https://www.pinterest.com/devranan01"
                      ] 
                    }
                    `}
                </script>
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
