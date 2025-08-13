'use client';
import styles from './FooterPage.module.css';

export default function FooterPage() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <img src="/PravinLogo_5.png" alt="Ataraxis Logo" className={styles.logo} />
        <p>Driving innovation with intelligent tools to enhance decision-making and shape the future of technology..</p>
        <div className={styles.socialIcons}>🔗🖱️ 💾 ⌨️ 📱 📡 💻 🌐</div>
        <button className={styles.backToTop}>⬆ BACK TO TOP</button>
      </div>

      <div className={styles.linksSection}>
        <div>
          <h4>Site Map</h4>
          <ul>
            <li>Homepage</li>
            <li>Technology</li>
            <li>Certifications</li>
            <li>About</li>
            <li>Blogs</li>
            <li>Contact Us</li>
            <li>Portal</li>
          </ul>
        </div>
        <div>
          <h4>Activities</h4>
          <ul>
            <li>Projects</li>
            <li>Experience</li>
            <li>Album</li>
            <li>Other Activities</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
