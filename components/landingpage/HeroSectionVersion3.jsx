"use client";
import React, { useEffect, useRef } from "react";
import styles from "@/styles/landingpage/HeroVersion3.module.scss";
import bottle from "@/public/assets/bottle.png";
import Image from "next/image";
import RotatingText from "../ui/reactbits/RotatingText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const HeroSectionVersion3 = () => {
  const bottleRef = useRef(null);

  useEffect(() => {
    if (!bottleRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bottleRef.current, {
        scrollTrigger: {
          trigger: bottleRef.current,
          start: "top top+=70",
          end: "bottom top+=30",
          scrub: 1,
          markers: false,
        },
        y: "105vh",
        x: "-7rem",
        rotation: -90,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.container}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.contentContainer}
      >
        <div className={styles.content}>
          <motion.h3 variants={itemVariants}>100% Natural</motion.h3>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 0.3,
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            }}
          >
            CALMING ENERGY
          </motion.h1>
        </div>
        <div className={styles.bottleContainer}>
          <div className={styles.bottleContent}>
            <motion.h1 variants={itemVariants}>
              Stay
              <RotatingText
                texts={["Chill", "Sharp", "You!"]}
                mainClassName="px-2 sm:px-2 md:px-4 bg-[#67846c]/15 hover:bg-white/10 backdrop-blur-sm  overflow-hidden py-0 sm:py-0 md:py-0 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </motion.h1>
            <motion.h2 variants={itemVariants}>
              Healthy Energy For the Vibrant Mind.
            </motion.h2>
            <motion.p variants={itemVariants}>
              A refreshing natural drink that relaxes your mind,boosts mental
              clarity and keeps your energy steady
            </motion.p>
            <motion.div
              variants={itemVariants}
              className={styles.contentEndBtn}
            >
              <button>See How It Works</button>
              <Image src={bottle} alt="bottle" className={styles.btnImg} />
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay:0.15,
                duration: 0.5,
                ease: "easeOut",
              },
            }}
            className={styles.bottles}
          >
            <h1>x</h1>
            <img src={bottle.src} alt="bottle" className={styles.img1} />
            <img
              ref={bottleRef}
              src={bottle.src}
              alt="bottle"
              className={styles.img2}
              id="moving-bottle"
            />
            <span className={styles.shadow}></span>
          </motion.div>
          <div className={styles.ingredientsContent}>
            <motion.span variants={itemVariants}>
              <i>🌿</i> L-Theanine
            </motion.span>
            <motion.span variants={itemVariants}>
              <i>🍃</i> Ashwagandha
            </motion.span>
            <motion.span variants={itemVariants}>
              <i>Mg</i> Magnesium
            </motion.span>
            <motion.span variants={itemVariants}>
              <i>
                <i className={styles.thunder}></i>
              </i>
              Zero Crash
            </motion.span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSectionVersion3;
