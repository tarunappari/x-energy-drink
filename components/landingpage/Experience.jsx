"use client";
import React, { useRef } from "react";
import styles from "@/styles/landingpage/Experience.module.scss";

const Experience = () => {
  const containerRef = useRef(null);
  const bottleTargetRef = useRef(null);

  return (
    <div
      ref={containerRef}
      id="experience-section"
      className={styles.container}
    >
      <div className={styles.content}>
        <div className={styles.leftContainer}>
          <div className={styles.title}>
            <h1>The X Experience</h1>
            <p>“Energy that feels like meditation, not a caffeine punch.”</p>
          </div>
          <div className={styles.points}>
            <div>
              <span>icon</span>
              <p>Smooth focus for work, study, or gaming</p>
            </div>
            <div>
              <span>icon</span>
              <p>Calm, relaxed mood – no anxiety spike</p>
            </div>
            <div>
              <span>icon</span>
              <p>Zero sugar, 100% natural actives</p>
            </div>
          </div>
        </div>
        <div ref={bottleTargetRef} className={styles.rightContainer}>
          <div className={styles.rightContentContainer}>
            <span className={styles.shadow}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
