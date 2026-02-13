'use client';

import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const highlights = [
  "Direct partnerships with verified manufacturers",
  "Access to competitive pricing & exclusive products",
  "Fast sourcing & production timelines",
];

const evolution = [
  { label: "Before", text: "Limited product categories" },
  { label: "Now", text: "Multi-category sourcing expertise" },
  { label: "Focus", text: "E-commerce & global marketplace sellers" },
];

const stats = [
  { value: "16+", label: "Years in Global Trade" },
  { value: "Expert", label: "Professional Management" },
  { value: "Global", label: "China & 50+ Countries" },
  { value: "Multi", label: "Diverse Solutions" },
];


// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};


export function AboutSection() {

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative section-padding bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/services/end-to-end-procurement.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div variants={fadeUp}>

            <motion.span
              variants={fadeUp}
              className="block text-center md:text-left text-white font-bold uppercase tracking-wider text-sm sm:text-base"
            >
              About Us
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-3 mb-6 leading-tight"
            >
              Your Trusted{" "}
              <span className="text-gradient-gold">
                Global Trade Partner
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white font-semibold mb-4"
            >
              Hassle-free Import & Global E-Commerce Sourcing
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base text-white/90 font-medium mb-8 leading-relaxed"
            >
              We bridge the gap between Indian businesses and global manufacturers,
              making international trade simple and profitable. With over 16 years
              of experience, we've helped hundreds of businesses source quality
              products from trusted suppliers worldwide.
            </motion.p>


            {/* Highlights */}
            <motion.div
              variants={staggerContainer}
              className="space-y-3 mb-8"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-white font-semibold">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </motion.div>


            {/* Evolution */}
            <motion.div
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20 shadow-xl"
            >
              <h4 className="font-heading font-bold text-white text-lg mb-4">
                Our Evolution
              </h4>

              <div className="space-y-3">
                {evolution.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="flex items-center gap-4 flex-wrap"
                  >
                    <span className="px-3 py-1 bg-gold text-navy-dark text-sm font-bold rounded-full">
                      {item.label}
                    </span>

                    <span className="text-white font-medium">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>


            {/* Button */}
            <motion.div variants={fadeUp}>
              <Button
                onClick={scrollToContact}
                className="btn-gold text-white font-bold px-6 py-3 text-base"
              >
                Start Your Trade Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

          </motion.div>



          {/* RIGHT IMAGES */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >

            <div className="space-y-4">
              <motion.div variants={zoomIn} className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                  className="w-full h-40 sm:h-56 object-cover"
                />
              </motion.div>

              <motion.div variants={zoomIn} className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec"
                  className="w-full h-56 sm:h-72 object-cover"
                />
              </motion.div>
            </div>


            <div className="space-y-4 pt-6">
              <motion.div variants={zoomIn} className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3"
                  className="w-full h-56 sm:h-72 object-cover"
                />
              </motion.div>

              <motion.div variants={zoomIn} className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c"
                  className="w-full h-40 sm:h-56 object-cover"
                />
              </motion.div>
            </div>

          </motion.div>

        </div>



        {/* STATS */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20"
            >
              <div className="font-heading text-3xl md:text-4xl font-bold text-gold mb-2">
                {stat.value}
              </div>

              <div className="text-white font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
