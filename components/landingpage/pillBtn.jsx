import React from "react";
import styles from "@/styles/landingpage/PillButton.module.scss";

const PillButton = ({ children = "Pill button", ...props }) => {
  return (
    <button className={styles.button} {...props}>
      <div>
        <div>
          <div>{children}</div>
        </div>
      </div>
    </button>
  );
};

export default PillButton;
