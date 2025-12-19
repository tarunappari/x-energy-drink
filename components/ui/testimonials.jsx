"use client";
import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const testimonials = [
  {
    quote:
      "It felt like someone turned down the volume in my head but kept the lights on.",
    author: "Ankit Sharma",
    role: "Software Engineer",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&h=400&fit=crop",
  },
  {
    quote:
      "The calm focus from X is perfect for meditation and long yoga sessions.",
    author: "Riya Iyer",
    role: "Yoga & Wellness Instructor",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
  {
    quote:
      "Unlike regular energy drinks, this supports alertness without overstimulation.",
    author: "Dr. Kunal Mehta",
    role: "General Physician",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  },
  {
    quote:
      "Great for workouts that need focus, not aggression. Very balanced energy.",
    author: "Arjun Patel",
    role: "Fitness Coach",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
  },
  {
    quote:
      "I recommend calm energy alternatives like this for people sensitive to caffeine.",
    author: "Dr. Neha Kulkarni",
    role: "Nutrition & Lifestyle Consultant",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    quote: "Perfect for late-night studying. Keeps me sharp without anxiety.",
    author: "Aakash Verma",
    role: "Medical Student",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    quote:
      "X feels more like mindful fuel than an energy drink. That’s what makes it special.",
    author: "Pooja Deshpande",
    role: "Mental Wellness Coach",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
  },
];

function usePreloadImages(images) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);
}

function SplitText({ text }) {
  const words = text.split(" ");

  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function RelaxationTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  usePreloadImages(testimonials.map((t) => t.avatar));

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xl mx-auto py-20 px-8"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNext}
    >
      {/* Floating index indicator */}
      <motion.div
        className="absolute top-8 right-8 flex items-baseline gap-1 font-mono text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          className="text-2xl font-light"
          style={{ color: "#204033" }}
          key={activeIndex}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </motion.span>
        <span style={{ color: "#67846c" }}>/</span>
        <span style={{ color: "#67846c" }}>
          {String(testimonials.length).padStart(2, "0")}
        </span>
      </motion.div>

      {/* Stacked avatar previews */}
      {/* <motion.div
        className="absolute top-8 left-8 flex -space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.6 }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={`w-6 h-6 rounded-full border-2 overflow-hidden transition-all duration-300 ${
              i === activeIndex ? "ring-1 ring-offset-1" : "grayscale opacity-50"
            }`}
            // style={{ 
            //   borderColor: "#f8faf9",
            //   ringColor: i === activeIndex ? "#67846c" : "transparent",
            //   ringOffsetColor: "#f8faf9"
            // }}
            whileHover={{ scale: 1.1, opacity: 1 }}
          >
            <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </motion.div> */}

      {/* Main content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="text-xl md:text-2xl font-light leading-relaxed tracking-tight"
            style={{ color: "#204033" }}
          >
            <SplitText text={currentTestimonial.quote} />
          </motion.blockquote>
        </AnimatePresence>

        {/* Author with reveal line */}
        <motion.div className="mt-8 relative" layout>
          <div className="flex items-center gap-4">
            {/* Avatar container */}
            <div className="relative w-12 h-12">
              <motion.div
                className="absolute -inset-1.5 rounded-full border"
                style={{ borderColor: "rgba(103, 132, 108, 0.4)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              {testimonials.map((t, i) => (
                <motion.img
                  key={t.avatar}
                  src={t.avatar}
                  alt={t.author}
                  className="absolute inset-0 w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                  animate={{
                    opacity: i === activeIndex ? 1 : 0,
                    zIndex: i === activeIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              ))}
            </div>

            {/* Author info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative pl-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-px"
                  // style={{ backgroundColor: "#67846c" }}
                  // initial={{ scaleY: 0 }}
                  // animate={{ scaleY: 1 }}
                  // transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originY: 0 }}
                />
                <span
                  className="block text-sm font-medium tracking-wide"
                  style={{ color: "#204033" }}
                >
                  {currentTestimonial.author}
                </span>
                <span
                  className="block text-xs mt-0.5 font-mono uppercase tracking-widest"
                  style={{ color: "#67846c" }}
                >
                  {currentTestimonial.role}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div
          className="mt-8 h-px relative overflow-hidden"
          style={{ backgroundColor: "rgba(103, 132, 108, 0.2)" }}
        >
          <motion.div
            className="absolute inset-y-0 left-0"
            style={{ backgroundColor: "#67846c" }}
            initial={{ width: "0%" }}
            animate={{
              width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Navigation buttons */}
      <motion.div
        className="absolute bottom-6 left-8 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            borderColor: "#67846c",
            backgroundColor: "transparent",
            color: "#204033",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#67846c";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#204033";
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            borderColor: "#67846c",
            backgroundColor: "transparent",
            color: "#204033",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#67846c";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#204033";
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
}
