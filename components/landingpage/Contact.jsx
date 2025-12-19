'use client'
import React from "react";
import styles from "@/styles/landingpage/Contact.module.scss";
import { LetsWorkTogether } from "../ui/letsWork";

const Contact = () => {
  return (
    <div className={styles.container}>
      <LetsWorkTogether />
      <div className={styles.decor}>

      </div>
    </div>
  );
};

export default Contact;
