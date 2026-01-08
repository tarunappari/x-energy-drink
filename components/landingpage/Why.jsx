"use client";
import React from "react";
import styles from "@/styles/landingpage/Why.module.scss";
import RelaxationTimeline from "../ui/timeline";
import RelaxationTestimonial from "../ui/testimonials";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const Why = () => {
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
      id="why"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={styles.container}
    >
      <div>
        <div className={styles.titleContainer}>
          <motion.h2 variants={itemVariants}>
            How X feels in the next 30 minutes.
          </motion.h2>
          <motion.p variants={itemVariants}>
            Designed for a gentle landing into focus. No spikes, no crashes—just
            a smooth transition from chaos to clarity.
          </motion.p>
        </div>
        <motion.div  variants={itemVariants} className={styles.timelineContainer}>
          <RelaxationTimeline />
        </motion.div>
        <div className={styles.divider}></div>
        <div className={styles.testimonialContainer}>
          <div className={styles.timelineTitle}>
            <motion.h3 variants={itemVariants} >Love from the </motion.h3>
            <motion.h3 variants={itemVariants} >family</motion.h3>
          </div>
          <motion.div variants={itemVariants}  className={styles.timeline}>
            <span className={styles.quote}>
              <Quote className="size-8 text-[#67846c]" />{" "}
            </span>
            <RelaxationTestimonial />
          </motion.div>
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Why;
