"use client";
import React from "react";
import styles from "@/styles/landingpage/Ingredients.module.scss";
import { LogoCloud } from "../ui/cloud";
import solo from "@/public/assets/grid/solo.webp";
import drink from "@/public/assets/grid/drinking.webp";
import bottle from "@/public/assets/bottle.png";
import ImageReveal from "./ImageTiles";
import { motion } from "framer-motion";

const Ingredients = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const rightVarient = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={styles.container}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className={styles.titleContent}
      >
        <motion.h2 variants={itemVariants}>
          100% natural, science-backed ingredients.
        </motion.h2>
        <motion.p variants={itemVariants}>
          Every sip of X is built from clinically studied botanicals and amino
          acids, chosen to support calm focus without sugar spikes.
        </motion.p>
      </motion.div>
      <LogoCloud />
      <div className={styles.bottomContainer}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className={styles.bottomContainerContent}
        >
          <div>
            <motion.p variants={rightVarient}>
              Guaranteed quality and taste
            </motion.p>
          </div>
          <motion.h2 variants={rightVarient}>
            Crafted with care to deliver superior quality and unforgettable
            taste
          </motion.h2>
        </motion.div>

        <div className={styles.imgRevealContainer}>
          <ImageReveal
            leftImage={solo.src}
            middleImage={drink.src}
            rightImage={bottle.src}
          />
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
