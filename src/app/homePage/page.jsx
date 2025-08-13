'use client'
// import InteractiveMenu from './InteractiveMenu';
import React from 'react'
import HomePage from '@/componet/homepage/HomePage';
import AboutPage from '@/componet/about/AboutPage';
import ContactPage from '@/componet/contactus/ContactPage';
import FooterPage from '@/componet/footer/FooterPage'
import ServicesPage from '@/componet/services/ServicePage';
function page() {
  return (
    <div>
        <HomePage/>
        <AboutPage/>
        <ServicesPage/>
        <ContactPage/>
        <FooterPage/>
    </div>
  )
}

export default page