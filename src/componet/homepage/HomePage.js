"use client";

import { useState } from "react";
import Link from "next/link";
import React from "react";
import styles from "./homePage.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faMicrosoft,
  faAmazon,
  faAdobe,
} from "@fortawesome/free-brands-svg-icons";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import logo from "../../../public/PravinLogo_5.png";
import image1 from "../../../public/data_flair.png";
import image2 from "../../../public/Simplilearn_Logo1.png";
import image3 from "../../../public/udemy-logo1.png";
import image4 from "../../../public/alison-logo1.png";
import image5 from "../../../public/Great_Learning_Logo1.png";
import image6 from "../../../public/skolar.png";
import myImage from "../../../public/Pravin.png";
import web from "../../../public/web.jpg";
import ui3 from "../../../public/ui3.jpg";
import project from "../../../public/project.jpg";
import ui from "../../../public/ui.jpg";

config.autoAddCss = false;
function HomePage({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // for cv code
  const handleClick_CV = () => {
    // Open the PDF in a new tab
    window.open("/Pravin_s_lokhande_cv.pdf", "_blank"); // new tab
    // window.location.href = '/Pravin_s_lokhande_cv.pdf'; // same tab
  };
  return (
    <div className={styles.pageContainer}>
      {/* Navigation */}
      <div className={styles.nave}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Image src={logo} alt="Logo" width={40} height={30} />
          </div>
          {/* हंबरगर बटन */}
          <div className={styles.navRightHumberger}>
            {/* हंबरगर आयकॉन */}
            {/* <button onClick={toggleMenu} className={styles.hamburgerBtn}>
              &#9776; 
            </button> */}
            <button onClick={toggleMenu} className={styles.hamburgerBtn}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {isOpen && (
            <div className={styles.humberView}>
              <button
                onClick={() => scrollToSection("Home")}
                className={styles.navLinkHumberger}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("Services")}
                className={styles.navLinkHumberger}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("ContactUs")}
                className={styles.navLinkHumberger}
              >
                Contact Us
              </button>
              <button
                onClick={() => scrollToSection("About")}
                className={styles.navLinkHumberger}
              >
                About
              </button>
              {/* <Link href="/Home" className={styles.navLinkHumberger}>Home</Link>
                            <Link href="/Services" className={styles.navLinkHumberger}>Services</Link>
                            <Link href="/ContactUs" className={styles.navLinkHumberger}>Contact Us</Link>
                            <Link href="/About" className={styles.navLinkHumberger}>About</Link> */}
            </div>
          )}
          {/* <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </div> */}
          <div className={styles.navRight}>
            <button
              onClick={() => scrollToSection("Home")}
              className={styles.navItem}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("Services")}
              className={styles.navItem}
            >
              Service
            </button>
            <button
              onClick={() => scrollToSection("ContactUs")}
              className={styles.navItem}
            >
              Contact Us
            </button>
            <button
              onClick={() => scrollToSection("About")}
              className={styles.navItem}
            >
              About
            </button>
            {/* <Link href="/Home" className={styles.navItem}>Home</Link>
                        <Link href="/Services" className={styles.navItem}>Service</Link>
                        <Link href="/ContactUs" className={styles.navItem}>Works</Link>
                        <Link href="/About" className={styles.navItem}>About</Link> */}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className={styles.homeFirstContainer}>
        <div className={styles.firstContainerText}>
          <div className={styles.heroLeft}>
            <h5 className={styles.h5tag}>HEY THERE!</h5>
            <div className={styles.line}></div>
            <h3 className={styles.h3tag}>I&apos;m Mr. Pravin Lokhande</h3>
            <div className={styles.roleTitle}>
              Java Full Stack Developer & UI/UX Designer
            </div>
            <p className={styles.ptag}>
              I&apos;m a graduate with a Bachelor&apos;s degree in Computer
              Science, completed in 2024. I&apos;m certified in Java Full Stack
              Development and have gained 3 months of hands&#45;on experience as
              a Java Full Stack trainee at Disha IT Training and Placement
              Institute in Pune. Currently, I&apos;m working with Vibhuprada
              Services Private Limited in Kharadi, Pune. I specialize in
              developing efficient, scalable applications, and I&apos;m
              passionate about creating innovative solutions to solve
              real&#45;world challenges.
            </p>

            <button className={styles.firstButoon}>See My Work</button>
            <button className={styles.secondeButton} onClick={handleClick_CV}>
              Get CV
            </button>

            <div className={styles.socialIcons}>
              <FaFacebookF className={styles.icon} />
              <FaWhatsapp className={styles.icon} />
              <FaLinkedin className={styles.icon} />
              <FaGithub className={styles.icon} />
              <FaEnvelope className={styles.icon} />
            </div>
          </div>

          <div className={styles.imageContainer}>
            {/* <div className={styles.purpleShape}> */}
            <Image
              src={myImage}
              // src="/Pravin.png"
              alt="My Image"
              width={600}
              height={550}
              className={styles.myImage}
              priority
            />
            {/* </div> */}
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>03+</div>
            <div className={styles.statLabel}>Award</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>01+</div>
            <div className={styles.statLabel}>Experience</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>0+</div>
            <div className={styles.statLabel}>Clients</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>4+</div>
            <div className={styles.statLabel}>Projects</div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className={styles.certifications}>
        <div className={styles.certTitle}>CERTIFIED BY</div>
        <div className={styles.certLogos}>
          <div className={styles.certLogo}>
            {/* <FontAwesomeIcon icon={faGoogle} /> */}
            <Image
              src={image1}
              alt="Logo"
              width={60}
              height={50}
              // style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
          <div className={styles.certLogo}>
            {/* <FontAwesomeIcon icon={faMicrosoft} /> */}
            <Image
              src={image2}
              alt="Logo"
              width={60}
              height={50}
              // style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
          <div className={styles.certLogo}>
            {/* <FontAwesomeIcon icon={faAmazon} /> */}
            <Image
              src={image3}
              alt="Logo"
              width={60}
              height={50}
              // style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
          <div className={styles.certLogo}>
            {/* <FontAwesomeIcon icon={faGoogle} /> */}
            <Image
              src={image4}
              alt="Logo"
              width={60}
              height={50}
              // style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
          <div className={styles.certLogo}>
            {/* <FontAwesomeIcon icon={faMicrosoft} /> */}
            <Image
              src={image5}
              alt="Logo"
              width={60}
              height={50}
              // style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
          <div className={styles.certLogo}>
            {/* <FontAwesomeIcon icon={faAmazon} /> */}
            <Image
              src={image6}
              alt="Logo"
              width={60}
              height={50}
              // style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
          {/* <div className={styles.certLogo}>
                        <FontAwesomeIcon icon={faAdobe} />
                    </div> */}
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.servicesHeader}>
          <div className={styles.servicesSubtitle}>My Services</div>
          <h2 className={styles.servicesTitle}>
            What Service We Offer For You
          </h2>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <Image
                src={web}
                alt="Logo"
                width={60}
                height={50}
                // style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </div>
            <h3 className={styles.serviceTitle}>Web Development</h3>
            <p className={styles.serviceDescription}>
              Full&#45;stack development from start to finish is a must, with
              top&#45;tier frontend development allowing your front&#45;line
              users a smooth web experience.
            </p>
            <a href="#" className={styles.serviceLink}>
              Learn More
            </a>
          </div>

          <div className={`${styles.serviceCard} ${styles.featured}`}>
            <div className={styles.serviceIcon}>
              {/* <i className="fas fa-paint-brush"></i> */}
              <Image
                src={ui}
                alt="Logo"
                width={60}
                height={50}
                // style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </div>
            <h3 className={styles.serviceTitle}>UX/UI Designer</h3>
            <p className={styles.serviceDescription}>
              Full&#45;Stack For Brought Top Start to Finish Are A Must Top
              Front-End Frontend Development Usting Wim Allow. Your Front Line
              User Are Best Rub Dix.
            </p>
            <a href="#" className={styles.serviceLink}>
              Learn More
            </a>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              {/* <i className="fas fa-shopping-cart"></i> */}
              <Image
                src={project}
                alt="Logo"
                width={60}
                height={50}
                // style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </div>
            <h3 className={styles.serviceTitle}>Ecommerce</h3>
            <p className={styles.serviceDescription}>
              Full&#45;Stack For Brought Top Start to Finish Are A Must Top
              Front Frontend Development Coming Then Art &amp; Soe For Brought
              Tab Gerals.
            </p>
            <a href="#" className={styles.serviceLink}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
// import React from 'react';
// import styles from './homePage.module.css';
// import 'font-awesome/css/font-awesome.min.css';

// // import Image from '../../../public/myPic.png'; // Replace with actual image path later

// function HomePage() {
//     return (
//         <div className={styles.pageContainer}>
//             <div className={styles.nave}>
//                 <div className={styles.logo}>Logo</div>
//                 <div className={styles.navItem}>Home</div>
//                 <div className={styles.navItem}>About</div>
//                 <div className={styles.navItem}>Contact</div>
//                 <div className={styles.navItem}>Skills</div>
//                 <div className={styles.navItem}>Project</div>
//                 <div className={styles.navItem}>My Blogs</div>
//             </div>
//             <div className={styles.homeFirstContainer}>
//                 <div className={styles.firstContainerText}>
//                     <h5 className={styles.h5tag}>HELLO</h5>
//                     <div className={styles.line}>____________________</div>
//                     <h3 className={styles.h3tag}>I'm Pravin Lokhande</h3>
//                     {/* <p className={styles.ptag}>
//                         I’m a graduate with a Bachelor's degree in Computer Science,
//                         completed in 2024. I’m certified in Java Full Stack Development
//                         and have gained 3 months of hands-on experience as a Java Full
//                         Stack trainee at Disha IT Training and Placement Institute in Pune.
//                         Currently, I’m working with Vibhuprada Services Private Limited in Kharadi, Pune.
//                         I specialize in developing efficient, scalable applications, and I’m passionate
//                         about creating innovative solutions to solve real-world challenges.
//                     </p> */}
//                     <p className={styles.ptag}>
//                         I&rsquo;m a graduate with a Bachelor&rsquo;s degree in Computer Science,
//                          completed in 2024. I&rsquo;m certified in Java Full Stack
//                          Development and have gained 3 months of hands-on experience as a
//                          Java Full Stack trainee at Disha IT Training and Placement Institute in Pune.
//                         Currently, I&rsquo;m working with Vibhuprada Services Private
//                          Limited in Kharadi, Pune. I specialize in developing efficient,
//                           scalable applications, and I&rsquo;m passionate about creating innovative
//                           solutions to solve real-world challenges.
//                     </p>

//                     <button className={styles.firstButoon}>Hire Me</button>
//                     <button className={styles.secondeButton}>View CV</button>

//                     <div className={styles.imageContainer}>
//                         {/* Image Placeholder */}
//                         <div className={styles.imagePlaceholder}></div>
//                     </div>

//                     <div className={styles.socialIcons}>
//                         <i className={`fab fa-linkedin ${styles.icon}`}></i>
//                         <i className={`fab fa-github ${styles.icon}`}></i>
//                         <i className={`fab fa-facebook ${styles.icon}`}></i>
//                         <i className={`fab fa-instagram ${styles.icon}`}></i>
//                         <i className={`fab fa-twitter ${styles.icon}`}></i>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HomePage;
