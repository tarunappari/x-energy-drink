import React from "react";
import styles from "@/styles/landingpage/Ingredients.module.scss";
import { LogoCloud } from "../ui/cloud";
import solo from "@/public/assets/grid/solo.webp";
import drink from "@/public/assets/grid/drinking.webp";
import bottle from "@/public/assets/bottle.png"
import ImageReveal from "./ImageTiles";

const Ingredients = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContent}>
        <h2>100% natural, science-backed ingredients.</h2>
        <p>
          Every sip of X is built from clinically studied botanicals and amino
          acids, chosen to support calm focus without sugar spikes.
        </p>
      </div>
      <LogoCloud />
      <div className={styles.bottomContainer}>
        <div className={styles.bottomContainerContent}>
          <div>
            <p>Guaranteed quality and taste</p>
          </div>
          <h2>
            Crafted with care to deliver superior quality and unforgettable
            taste
          </h2>
        </div>

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
