import React from "react";
import styles from "@/styles/common/Footer.module.scss";
import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.waveSection}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className={styles.wave}
        >
          <path
            d="M0,80 C150,120 350,40 600,70 C850,100 1050,140 1440,80 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.topSection}>
            {/* Logo & Brand */}
            <div className={styles.brandSection}>
              <div className={styles.brandText}>
                <h3 className={styles.brandName}>X </h3>
                <p className={styles.tagline}>ELEVATE YOUR SENSES</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className={styles.linksSection}>
              <div className={`${styles.linkColumn} ${styles.linkColumnMonileNone}`}>
                <h4>Support</h4>
                <ul>
                  <li>
                    <a href="#contact">Home</a>
                  </li>
                  <li>
                    <a href="#experience">X perience</a>
                  </li>
                  <li>
                    <a href="#ingredients">Ingredients</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                </ul>
              </div>

              <div className={`${styles.linkColumn}`}>
                <h4>Connect</h4>

                <div className={styles.connectDiv}>
                  <span>
                    <a href="#instagram">
                      <IconBrandInstagram stroke={2} />
                    </a>
                  </span>

                  <a href="#facebook">
                    <IconBrandFacebook stroke={2} />
                  </a>

                  <a href="#twitter">
                    <IconBrandX stroke={2} />
                  </a>

                  <a href="#youtube">
                    <IconBrandYoutube stroke={2} />
                  </a>
                  <a href="#youtube">
                    <IconBrandWhatsapp stroke={2} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.divider}></div>

          {/* Bottom Section */}
          <div className={styles.bottomSection}>
            <div className={styles.copyright}>
              <p>© {currentYear}Unit of GVR Beverages · Hyderabad, India</p>
            </div>
            <div className={styles.legalLinks}>
              <a href="#privacy">Privacy Policy</a>
              <span className={styles.separator}>·</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
