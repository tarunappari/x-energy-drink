"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/styles/landingpage/Ingredients.module.scss";
import gsap from "gsap";

export default function ImageReveal({ leftImage, middleImage, rightImage }) {
  const bottleRef = useRef(null);

  useEffect(() => {
    if (!bottleRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1700px)", () => {
        gsap.to(bottleRef.current, {
          scrollTrigger: {
            trigger: bottleRef.current,
            start: "top top+=60",
            end: "bottom top+=70",
            scrub: 1,
          },
          y: "85vh",
          x: "40vw",
          scale: 2.5,
          rotation: 6.5,
          opacity: 1,
          ease: "none",
        });
      });

      // DESKTOP (>= 1024px)
      mm.add("(min-width: 1024px) and (max-width: 1699px)", () => {
        gsap.to(bottleRef.current, {
          scrollTrigger: {
            trigger: bottleRef.current,
            start: "top top+=60",
            end: "bottom top+=40",
            scrub: 1,
          },
          y: "100vh",
          x: "42vw",
          scale: 1.75,
          rotation: 6,
          opacity: 1,
          ease: "none",
        });
      });

      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        gsap.to(bottleRef.current, {
          scrollTrigger: {
            trigger: bottleRef.current,
            start: "top top+=60",
            end: "bottom top+=70",
            scrub: 1,
          },
          y: "85vh",
          x: "25vw",
          scale: 1.3,
          rotation: -10,
          opacity: 1,
          ease: "none",
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.to(bottleRef.current, {
          scrollTrigger: {
            trigger: bottleRef.current,
            start: "top top+=50",
            end: "bottom top+=60",
            scrub: 1,
          },
          y: "70vh",
          x: "10vw",
          scale: 1.2,
          rotation: -5,
          opacity: 1,
          ease: "none",
        });
      });

      return () => mm.revert();
    });

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const leftImageVariants = {
    initial: { rotate: 0, x: 0, y: 0 },
    animate: {
      rotate: -8,
      x: -150,
      y: 10,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
    hover: {
      rotate: 1,
      x: -160,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const middleImageVariants = {
    initial: { rotate: 0, x: 0, y: 0 },
    animate: {
      rotate: 6,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
    hover: {
      rotate: 0,
      x: 0,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const rightImageVariants = {
    initial: { rotate: 0, x: 0, y: 0 },
    animate: {
      rotate: -6,
      x: 200,
      y: 20,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
    hover: {
      rotate: 3,
      x: 200,
      y: 10,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="relative flex items-center justify-center w-48 h-70 my-8"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Left Image */}
      <motion.div
        className="absolute w-48 h-58 origin-bottom-right overflow-hidden rounded-xl shadow-lg bg-white"
        variants={leftImageVariants}
        whileHover="hover"
        animate="animate"
        style={{ zIndex: 30 }}
      >
        <Image
          src={leftImage}
          alt="Left image"
          fill
          className="object-cover p-2 rounded-xl"
          sizes="192px"
        />
      </motion.div>

      {/* Middle Image */}
      <motion.div
        className="absolute w-42 h-58 origin-bottom-left overflow-hidden rounded-xl shadow-lg bg-white"
        variants={middleImageVariants}
        whileHover="hover"
        animate="animate"
        style={{ zIndex: 20 }}
      >
        <Image
          src={middleImage}
          alt="Middle image"
          fill
          className="object-cover p-2 rounded-2xl"
          sizes="192px"
        />
      </motion.div>

      {/* Right Image */}
      <motion.div
        className={`absolute w-40 h-58 rounded-xl shadow-lg bg-white ${styles.thirdImageContainer}`}
        variants={rightImageVariants}
        // whileHover="hover"
        // animate="animate"
        style={{ zIndex: 10 }}
      >
        <Image
          ref={bottleRef}
          src={rightImage}
          alt="Right image"
          className={styles.bottleImg}
          width={140}
          height={80}
        />
      </motion.div>
    </motion.div>
  );
}
