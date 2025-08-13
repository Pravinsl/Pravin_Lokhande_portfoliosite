// pages/contact.js
import styles from './contact.module.css';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className={styles.wrapper}>
      {/* <h4 className={styles.subtitle}>My Skills</h4> */}
      <h1 className={styles.title}>Get In Touch</h1>

      {/* Contact Boxes */}
      <div className={styles.contactBoxes}>
        <div className={styles.box}>
          <div className={styles.icon}>📍</div>
          <h3>Address</h3>
          <p>Shivane-Uttam Nager,<br /> Pune, 411023</p>
        </div>
        <div className={styles.box}>
          <div className={styles.icon}>📞</div>
          <h3>Contact Number</h3>
          <p>+91 9021636085</p>
        </div>
        <div className={styles.box}>
          <div className={styles.icon}>📧</div>
          <h3>Email Address</h3>
          <p>lokhandepravin500
            <br />@gmail.com</p>
        </div>
        <div className={styles.box}>
          <div className={styles.icon}>🌐</div>
          <h3>Website</h3>
          <p>https://www.linkedin<br />.com/in/pravin-lokhande-53736821b/</p>
        </div>
      </div>

      {/* Form and Image */}
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className={styles.imageArea}>
          {/* <div className={styles.contactCard}>
            <h3>Contact Us</h3>
            <form className={styles.form}>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone Number" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div> */}
          <Image
            src="/Email.png"
            alt="contact illustration"
            width={260}
            height={270}
            className={styles.image1}
          />
        </div>
      </div>

      {/* Footer */}
      {/* <div className={styles.footer}>
        <h2 className={styles.logo}>NiamatK</h2>
        <p className={styles.follow}>Follow Me</p>
        <p className={styles.copy}>
          Copyright ©2022 All rights reserved. | This template is made with ♥ by
          <span> Saif Designer</span>
        </p>
      </div> */}
    </div>
  );
}
