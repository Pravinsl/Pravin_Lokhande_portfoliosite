// 'use client'
// // import InteractiveMenu from './InteractiveMenu';
// import React from 'react'
// import HomePage from '@/componet/homepage/HomePage';
// import AboutPage from '@/componet/about/AboutPage';
// import ContactPage from '@/componet/contactus/ContactPage';
// import FooterPage from '@/componet/footer/FooterPage'
// import ServicesPage from '@/componet/services/ServicePage';
// function page() {
//   return (
//     <div>
//         <HomePage/>
//         <AboutPage/>
//         <ServicesPage/>
//         <ContactPage/>
//         <FooterPage/>
//     </div>
//   )
// }

// export default page
'use client';
import React, { useRef } from 'react';
import HomePage from '@/componet/homepage/HomePage';
import AboutPage from '@/componet/about/AboutPage';
import ContactPage from '@/componet/contactus/ContactPage';
import FooterPage from '@/componet/footer/FooterPage';
import ServicesPage from '@/componet/services/ServicePage';

export default function Page() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (section) => {
        if (section === 'home') homeRef.current.scrollIntoView({ behavior: 'smooth' });
        if (section === 'about') aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        if (section === 'services') servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        if (section === 'contact') contactRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <HomePage scrollToSection={scrollToSection} />

            {/* <div ref={homeRef}>
                <h1>Home Section</h1>
            </div> */}

            <div ref={aboutRef}>
                <AboutPage />
            </div>

            <div ref={servicesRef}>
                <ServicesPage />
            </div>

            <div ref={contactRef}>
                <ContactPage />
            </div>

            <FooterPage />
        </div>
    );
}
