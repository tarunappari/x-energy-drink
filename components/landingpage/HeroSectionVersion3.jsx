import React from "react";
import styles from "@/styles/landingpage/HeroVersion3.module.scss";
import bottle from "@/public/assets/bottle.png";
import Image from "next/image";
import RotatingText from "../ui/reactbits/RotatingText";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HeroSectionVersion3 = () => {
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
            <Image src={bottle} alt="bottle" className={styles.img2} />
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
