'use client'
import React from "react";
import logo from "@/public/assets/outline.png";
import styles from "@/styles/common/Logo.module.scss";
import Image from "next/image";

const Logo = () => {
  return (
    <div
      
      className={styles.logoWrap}
    >
      <div className={styles.container}>
        <div className={styles.logoBox}>
          <Image src={logo} alt="X Energy" />
        </div>
        <div className={styles.logoText}>
          <span className={styles.edge}></span>
          <span className={styles.brandName}>X</span>
          <span className={styles.tagline}>CALMING ENERGY</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
