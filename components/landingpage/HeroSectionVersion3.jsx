"use client";
import React, { useEffect, useRef } from "react";
import styles from "@/styles/landingpage/HeroVersion3.module.scss";
import bottle from "@/public/assets/bottle.png";
import Image from "next/image";
import RotatingText from "../ui/reactbits/RotatingText";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HeroSectionVersion3 = () => {
  const bottleRef = useRef(null);

  useEffect(() => {
    if (!bottleRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bottleRef.current, {
        scrollTrigger: {
          trigger: bottleRef.current,
          start: "top top+=70",
          end: "bottom top+=80",
          scrub: 1,
          markers: false,
        },
        y: "105vh", 
        x:'-7rem',
        rotation: -90,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3>100% Natural</h3>
          <h1>CALMING ENERGY</h1>
        </div>
        <div className={styles.bottleContainer}>
          <div className={styles.bottleContent}>
            <h1>
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
            </h1>
            <h2>Healthy Energy For the Overactive Mind.</h2>
            <p>
              A refreshing natural drink that relaxes your mind,boosts mental
              clarity and keeps your energy steady
            </p>
            <div className={styles.contentEndBtn}>
              <button>See How It Works</button>
              <Image src={bottle} alt="bottle" className={styles.btnImg} />
            </div>
          </div>
          <div className={styles.bottles}>
            <h1>x</h1>
            <Image src={bottle} alt="bottle" className={styles.img1} />
            <Image
              ref={bottleRef}
              src={bottle}
              alt="bottle"
              className={styles.img2}
              id="moving-bottle"
            />
            <span className={styles.shadow}></span>
          </div>
          <div className={styles.ingredientsContent}>
            <span>
              <i>🌿</i> L-Theanine
            </span>
            <span>
              <i>🍃</i> Ashwagandha
            </span>
            <span>
              <i>Mg</i> Magnesium
            </span>
            <span>
              <i>
                <i className={styles.thunder}></i>
              </i>
              Zero Crash
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionVersion3;
