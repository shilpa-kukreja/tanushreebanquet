import React from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import LuxuryEnquiryForm from './components/LuxuryEnquiryForm'
import AboutLuxury from './components/AboutLuxury'
import OccasionLuxury from './components/OccasionLuxury'
import MarqueeBanner from './components/MarqueeBanner'
import TeamSection from './components/TeamSection'
import GallerySection from './components/GallerySection'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
       <Navbar />
       <HeroBanner />
       <LuxuryEnquiryForm />
       <AboutLuxury />
       <OccasionLuxury />
       <MarqueeBanner />
       <TeamSection/>
       <GallerySection/>
       <TestimonialSection/>
       <Footer />
    </div>
  )
}

export default page
