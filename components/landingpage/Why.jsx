import React from "react";
import styles from "@/styles/landingpage/Why.module.scss";
import RelaxationTimeline from "../ui/timeline";
import RelaxationTestimonial from "../ui/testimonials";
import { Quote } from 'lucide-react';


const Why = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.titleContainer}>
          <h2>How X feels in the next 30 minutes.</h2>
          <p>
            Designed for a gentle landing into focus. No spikes, no crashes—just
            a smooth transition from chaos to clarity.
          </p>
        </div>
        <div className={styles.timelineContainer}>
          <RelaxationTimeline />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.testimonialContainer}>
          <div className={styles.timelineTitle}>
            <h3>Love from the </h3>
            <h3>family</h3>
          </div>
          <div className={styles.timeline}>
            <span className={styles.quote}><Quote className="size-8 text-[#67846c]" /> </span>
            <RelaxationTestimonial />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Why;
