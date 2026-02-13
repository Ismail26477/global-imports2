'use client';

import { motion } from "framer-motion";

const steps = [
  {
    image: "/services/global-sourcing.png",
    title: "Global Sourcing",
    description: "Find the right manufacturers and suppliers worldwide",
    step: 1,
  },
  {
    image: "/services/end-to-end-procurement.png",
    title: "End-to-End Procurement",
    description: "Complete sourcing support from negotiation to delivery",
    step: 2,
  },
  {
    image: "/services/quality-inspection.jpeg",
    title: "Quality Inspection",
    description: "Pre-production, during, and pre-shipment quality checks",
    step: 3,
  },
  {
    image: "/services/international-shipping.png",
    title: "International Shipping",
    description: "Sea freight, air freight, and express courier services",
    step: 4,
  },
  {
    image: "/services/custom-clearance.png",
    title: "Custom Clearance",
    description: "Expert customs handling and regulatory compliance",
    step: 5,
  },
  {
    image: "/services/last-mile-delivery.png",
    title: "Last Mile Delivery",
    description: "Direct delivery to your doorstep across India",
    step: 6,
  },
];


// Animation Variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-[#F5F1E8]">
      <div className="container mx-auto px-4">

        {/* Heading Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="text-[#D6A85A] font-medium uppercase tracking-wider text-sm">
            Our Process
          </span>

          <h2 className="font-heading text-3xl md:text-5xl text-[#6B4A2F] mt-3 mb-4">
            How We Work
          </h2>

          <p className="text-[#6B4A2F]/70 max-w-2xl mx-auto">
            Complete end-to-end service flow for your import and sourcing needs
          </p>
        </motion.div>


        {/* Cards Grid Animation */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="relative h-[320px] rounded-2xl overflow-hidden group shadow-lg"
            >

              {/* Image */}
              <motion.img
                src={step.image}
                alt={step.title}
                variants={zoomIn}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

              {/* Step Number */}
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#6B4A2F] text-[#FFF9F0] flex items-center justify-center font-bold shadow-md z-10">
                {step.step}
              </div>

              {/* Text */}
              <div className="absolute bottom-0 p-6 z-10">
                <h3 className="font-heading text-xl md:text-2xl text-[#F8F5EE] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#E6D8C7] text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && index !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-10 h-[2px] bg-[#D6A85A]/40 z-20" />
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
