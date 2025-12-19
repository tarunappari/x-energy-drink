"use client";
import React from "react";
import styles from "@/styles/landingpage/UniqueTaste.module.scss";
import bottle from "@/public/assets/bottle.png";
import Image from "next/image";

const UniqueTaste = () => {
 
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.titleContent}>
          <h1 style={{ marginBottom: "-1rem" }}>
            Unique taste you should want to{" "}
          </h1>
          <h1 style={{ marginTop: "-1rem" }}>experience again and again.</h1>
        </div>
        <div className={styles.xText}>
          <h2>ELEVATE</h2>
        </div>
      </div>
      <div className={styles.descContainer}>
        <div className={styles.xText2}>
          <h2>SENSES</h2>
        </div>
        <div className={styles.content}>
          <p>
            This is not just another flavor. It’s a carefully crafted experience
            designed to surprise your palate and leave a lasting impression,
            offering something truly uncommon in every sip.
          </p>
        </div>
      </div>

      <div className={styles.thunderContainer}>
        <svg
          className={styles.thunder}
          viewBox="0 0 100 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="100,0 23,46 46,44 15,69 38,67 0,100 76,57 53,58 88,33 60,37"
            stroke="#e5e5e5"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default UniqueTaste;
