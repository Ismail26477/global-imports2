'use client';

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2008–2018",
    title: "Foundation & Specialization",
    description:
      "Started in import business focusing on woodworking machinery and plywood raw materials. Built deep expertise in specific product categories.",
  },
  {
    year: "2018–2024",
    title: "Evolution to E-Commerce",
    description:
      "Adapted to rapid e-commerce growth, expanding to multi-category sourcing. Partnered with Amazon sellers and D2C brands.",
  },
  {
    year: "2024+",
    title: "Global Trade Partnership",
    description:
      "Established Global Imports Nagpur as a dedicated company for comprehensive trade solutions. Now serving 500+ businesses across 50+ countries.",
  },
];

// Infinite Slides
const slides = [
  timelineItems[timelineItems.length - 1],
  ...timelineItems,
  timelineItems[0],
];


// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

export function JourneySection() {
  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Infinite Reset Logic
  useEffect(() => {
    if (current === slides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 700);
    }

    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(slides.length - 2);
      }, 700);
    }

    setTimeout(() => setTransition(true), 50);
  }, [current]);

  return (
    <section className="py-24 bg-navy-dark text-white">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >

        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-sm">
            Our Story
          </span>

          <h2 className="font-heading text-3xl md:text-5xl mt-3">
            Our Journey
          </h2>

          <p className="text-white/60 mt-3">
            From specialized expertise to global trade partnership
          </p>
        </motion.div>


        {/* Desktop Timeline */}
        <motion.div
          variants={staggerContainer}
          className="hidden md:block relative max-w-6xl mx-auto"
        >
          <div className="absolute top-7 left-0 right-0 h-[1px] bg-gold/30" />

          <div className="grid md:grid-cols-3 gap-14 relative">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="text-center relative"
              >
                <div className="w-4 h-4 bg-gold rounded-full mx-auto mb-6 shadow-gold" />

                <div className="text-gold text-sm font-semibold mb-3 tracking-wider">
                  {item.year}
                </div>

                <h3 className="font-heading text-xl mb-3">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Mobile Infinite Carousel */}
        <motion.div
          variants={fadeUp}
          className="md:hidden relative max-w-sm mx-auto overflow-hidden"
        >
          <div
            ref={sliderRef}
            className="flex"
            style={{
              transform: `translateX(-${current * 100}%)`,
              transition: transition ? "transform 0.7s ease-in-out" : "none",
            }}
          >
            {slides.map((item, index) => (
              <div key={index} className="min-w-full px-4">
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
                  <div className="w-3 h-3 bg-gold rounded-full mb-6" />

                  <div className="text-gold text-sm font-semibold mb-3 tracking-wider">
                    {item.year}
                  </div>

                  <h3 className="font-heading text-xl mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {timelineItems.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === (current - 1 + timelineItems.length) % timelineItems.length
                    ? "bg-gold w-6"
                    : "bg-white/30 w-2"
                }`}
              />
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
