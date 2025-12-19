"use client";
import React, { useRef } from "react";
import styles from "@/styles/landingpage/Experience.module.scss";
import { Box, Leaf } from "lucide-react";

const Experience = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      id="experience-section"
      className={styles.container}
    >
      <div className={styles.content}>
        <div className={styles.leftContainer}>
          <div className={styles.title}>
            <h2>The X perience</h2>
            <h1>Energy that feels like meditation, not a caffeine punch.</h1>
            <p>
              X is designed for people whose minds never switch off—students,
              founders, gamers, night-shift warriors. A precise blend of
              adaptogens and amino acids helps you stay calm, focused and
              present.
            </p>
          </div>
          <div className={styles.points}>
            <div>
              <div>
                <span>
                  <Box className="size-8 text-[#67846c]" />
                </span>
                <p>100% Natural</p>
              </div>
              <div>
                <span>
                  <Leaf className="size-8 text-[#67846c]" />
                </span>
                <div>
                  <p>Calm </p>
                  <p>No anxiety spike</p>
                </div>
              </div>
              <div>
                <span className={styles.thunder}></span>
                <div>
                  <p>Zero sugar,</p>
                  <p> Zero crash</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
