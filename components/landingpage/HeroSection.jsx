import React from "react";
import styles from "@/styles/landingpage/HeroSEction.module.scss";
import { Header } from "../ui/header-2";
import bottle from "@/public/assets/bottle.png";
import logo from "@/public/assets/outline.png";
import Image from "next/image";
import Lightning from "../ui/reactbits/Lightning";
import PillButton from "./pillBtn";
import GlitchText from "../ui/reactbits/GlitchText";
import AnimatedContent from "../animations/ContentAnimation";

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
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={true}
            duration={0.8}
            ease="bounce.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.5}
          >
            <div className={styles.pillBtnContainer}>
              <PillButton children="100% Natural" />
            </div>
          </AnimatedContent>

          <div className={styles.h2Container}>
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={true}
              duration={0.8}
              ease="bounce.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.75}
            >
              <h2>
                <GlitchText
                  speed={2.7}
                  enableShadows={false}
                  enableOnHover={true}
                  className="custom-class"
                >
                  Stay Chill, Stay Sharp, Stay You.
                </GlitchText>
              </h2>
              <Image src={logo} alt="bottle" className={styles.logo} />
            </AnimatedContent>
          </div>
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={true}
            duration={0.8}
            ease="bounce.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={1}
          >
            <h1>
              Calming Energy For the Overactive Mind.
              <span className={styles.thunder}>⚡</span>
            </h1>
          </AnimatedContent>

          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={true}
            duration={0.8}
            ease="bounce.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={1.25}
          >
            <div className={styles.paraPoints}>
              <p>
                A refreshing natural drink that relaxes your mind,boosts mental
                clarity and keeps your energy steady
              </p>
              <div>
                <span>⚡No Sugar - No Crash</span>
                <span>⚡Calm + Focus Dual Action</span>
                <span>⚡Clean Long-Lasting Energy</span>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={true}
            duration={0.8}
            ease="bounce.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={1.5}
          >
            <div className={styles.contentEndBtn}>
              <button>See How It Works</button>
              <Image src={bottle} alt="bottle" className={styles.btnImg} />
            </div>
          </AnimatedContent>
        </div>
        <div className={styles.bottleContainer}>
          <h2>
            x <span></span>
          </h2>
          <Image src={bottle} alt="bottle" className={styles.img1} />
          <Image src={bottle} alt="bottle" className={styles.img2} />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
