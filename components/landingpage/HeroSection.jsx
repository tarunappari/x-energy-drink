import React from "react";
import styles from "@/styles/landingpage/HeroSEction.module.scss";
import { Header } from "../ui/header-2";
import bottle from "@/public/assets/bottle.png";
import logo from "@/public/assets/outline.png";
import Image from "next/image";
import Lightning from "../ui/reactbits/Lightning";
import PillButton from "./pillBtn";

const LandingSection = () => {
  return (
    <div className={styles.heroContainer}>
      <Header />
      <div className={styles.lightingBg}>
        <Lightning
          hue={162}
          xOffset={-1.5}
          speed={0.7}
          intensity={0.1}
          size={0.4}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.pillBtnContainer}>
            <PillButton children="100% Natural" />
          </div>
          <div className={styles.h2Container}>
            <h2>Calm Meets Energy</h2>
            <Image src={logo} alt="bottle" className={styles.logo} />
          </div>
          <h1>Calming Energy For the Overactive Mind.</h1>
          <p>
            X is a 100% natural calming energy drink that relaxes your mind
            while keeping you focused—without sugar or jitters.
          </p>
          <div className={styles.contentEndBtn}>
            <button>See How It Works</button>
            <Image src={bottle} alt="bottle" className={styles.btnImg} />
          </div>
        </div>
        <div className={styles.bottleContainer}>
          <h2>x</h2>
          <Image src={bottle} alt="bottle" className={styles.img1} />
          <Image src={bottle} alt="bottle" className={styles.img2} />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
