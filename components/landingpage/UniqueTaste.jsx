"use client";
import React from "react";
import styles from "@/styles/landingpage/UniqueTaste.module.scss";
import { motion } from "framer-motion";

const UniqueTaste = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      // transition: {
      //   staggerChildren: 0.3,
      //   delayChildren: 0.2,
      // },
    },
  };

  const leftVariants = {
    hidden: { x: -80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.8,
      },
    },
  };

  const rightVariants = {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.8,
      },
    },
  };

  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        className={styles.container}
      >
        <div className={styles.titleContainer}>
          <div className={styles.titleContent}>
            <motion.h1
              variants={leftVariants}
              style={{ marginBottom: "-1rem" }}
            >
              Unique taste you should want to{" "}
            </motion.h1>
            <motion.h1 variants={leftVariants} style={{ marginTop: "-1rem" }}>
              experience again and again.
            </motion.h1>
          </div>
          <div className={styles.xText}>
            <h2> ELEVATE</h2>
          </div>
        </div>
        <div className={styles.descContainer}>
          <div className={styles.xText2}>
            <h2> SENSES</h2>
          </div>
          <div className={styles.content}>
            <motion.p variants={rightVariants}>
              This is not just another flavor. It’s a carefully crafted
              experience designed to surprise your palate and leave a lasting
              impression, offering something truly uncommon in every sip.
            </motion.p>
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
        <div className={styles.divider}></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        className={styles.container2}
      >
        <div className={styles.titleContainer}>
          <div className={styles.titleContent}>
            <motion.h1 variants={leftVariants}>
              Unique taste you should want to{" "}
            </motion.h1>
            <motion.h1 variants={leftVariants}>
              experience again and again.
            </motion.h1>
          </div>
        </div>
        <div className={styles.strokeText}>
          <h2 className={styles.xText}> ELEVATE</h2>
          <h2
            className={styles.xText2}
            style={{ alignSelf: "flex-end", marginTop: "-4rem" }}
          >
            {" "}
            SENSES
          </h2>
        </div>
        <div className={styles.descContainer}>
          <div className={styles.content}>
            <motion.p variants={rightVariants}>
              This is not just another flavor. It’s a carefully crafted
              experience designed to surprise your palate and leave a lasting
              impression, offering something truly uncommon in every sip.
            </motion.p>
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
        <div className={styles.divider}></div>
      </motion.div>
    </div>
  );
};

export default UniqueTaste;
