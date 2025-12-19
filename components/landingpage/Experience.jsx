"use client";
import React from "react";
import styles from "@/styles/landingpage/Experience.module.scss";
import { Box, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {

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
    <div id="experience-section" className={styles.container}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        className={styles.content}
      >
        <div className={styles.leftContainer}>
          <div className={styles.title}>
            <motion.h2 variants={itemVariants}>The X perience</motion.h2>
            <motion.h1 variants={itemVariants}>
              Energy that feels like meditation, not a caffeine punch.
            </motion.h1>
            <motion.p variants={itemVariants}>
              X is designed for people whose minds never switch off—students,
              founders, gamers, night-shift warriors. A precise blend of
              adaptogens and amino acids helps you stay calm, focused and
              present.
            </motion.p>
          </div>
          <div className={styles.points}>
            <div>
              <motion.div variants={itemVariants}>
                <span>
                  <Box className="size-8 text-[#67846c]" />
                </span>
                <p>100% Natural</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <span>
                  <Leaf className="size-8 text-[#67846c]" />
                </span>
                <div>
                  <p>Calm </p>
                  <p>No anxiety spike</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <span className={styles.thunder}></span>
                <div>
                  <p>Zero sugar,</p>
                  <p> Zero crash</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
