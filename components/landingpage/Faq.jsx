"use client";
import React from "react";
import view from "@/public/assets/grid/view.webp";
import Image from "next/image";
import styles from "@/styles/landingpage/Faq.module.scss";
import { motion } from "framer-motion";

const Faq = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      id: "item-1",
      question: "Is it safe to drink every day?",
      answer:
        "For most healthy adults above 12, daily consumption is fine. Always consult your doctor if in doubt.",
    },
    {
      id: "item-2",
      question: "Does it contain caffeine?",
      answer:
        "X focuses on adaptogens and amino acids. Caffeine, if used, is kept within responsible limits (update with exact info).",
    },
    {
      id: "item-3",
      question: "Who is X for?",
      answer:
        "Students, professionals, gamers—anyone who wants calm focus instead of anxious energy.",
    },
    {
      id: "item-4",
      question: "Will X make me sleepy?",
      answer:
        "No. X is formulated to create a calm, alert state—relaxed but not drowsy.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      // transition: {
      //   staggerChildren: 0.3,
      //   delayChildren: 0.2,
      // },
    },
  };

  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.8,
      },
    },
  };

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      className={` ${styles.container} mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0`}
    >
      <motion.div variants={leftVariants} className={styles.imgContainer}>
        <Image src={view} alt="vw" />
      </motion.div>
      <motion.div variants={rightVariants} className={styles.contentContainer}>
        <p className="text-indigo-600 text-sm font-medium">FAQ's</p>
        <h1 className="text-3xl mb-2 font-semibold">Looking for answer?</h1>
        {faqs.map((faq, index) => (
          <div
            className="border-b border-slate-200 py-4 cursor-pointer"
            key={index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div
              className="flex items-center justify-between"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-base cursor-pointer font-medium">
                {faq.question}
              </h3>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  openIndex === index ? "rotate-180" : ""
                } transition-all duration-500 ease-in-out`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${
                openIndex === index
                  ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                  : "opacity-0 max-h-0 -translate-y-2"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Faq;
