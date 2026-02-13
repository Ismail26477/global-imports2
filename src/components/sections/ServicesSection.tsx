'use client';

import {
  Search,
  FileCheck,
  ClipboardCheck,
  PackageCheck,
  ShieldCheck,
  Shield,
  Globe,
  Users,
  CheckCircle,
  FileText,
  ShoppingCart,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Global Sourcing",
    description:
      "Access verified manufacturers across China, Vietnam, and 50+ countries. We find the best suppliers for your specific product needs.",
  },
  {
    icon: FileCheck,
    title: "Export Management",
    description:
      "Complete export documentation and regulatory compliance. We handle all paperwork for seamless international trade.",
  },
  {
    icon: ClipboardCheck,
    title: "Import Compliance",
    description:
      "Navigate complex import regulations with ease. Our experts ensure full compliance with Indian trade laws.",
  },
  {
    icon: PackageCheck,
    title: "Logistics & Freight",
    description:
      "Sea freight, air freight, and express shipping options. Optimized routes for cost-effective delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Customs Documentation",
    description:
      "Expert customs handling and clearance services. Minimize delays with proper documentation.",
  },
  {
    icon: Search,
    title: "Quality Inspection",
    description:
      "Pre-production, during production, and pre-shipment inspections. Ensure product quality before it leaves the factory.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "One-Stop Solution",
    description: "From sourcing to delivery, we handle everything under one roof",
  },
  {
    icon: Users,
    title: "Trusted Supplier Network",
    description: "Verified manufacturers across Asia with proven track records",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Strong quality control systems with third-party inspections",
  },
  {
    icon: "rupee",
    title: "Transparent Pricing",
    description: "No hidden costs - clear pricing from sourcing to doorstep",
  },
  {
    icon: FileText,
    title: "Customs Expertise",
    description: "Deep knowledge of Indian & international trade regulations",
  },
  {
    icon: ShoppingCart,
    title: "Amazon Specialization",
    description: "Dedicated support for e-commerce and FBA sellers",
  },
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
    transition: { staggerChildren: 0.15 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >

        {/* Services Heading */}
        <motion.div variants={fadeUp} className="text-center mb-12 md:mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            Our Services
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-navy-dark mt-2 mb-4">
            Comprehensive Trade Solutions
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end import-export services tailored for your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="group bg-white rounded-2xl p-4 md:p-8 shadow-sm card-hover border border-border"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-4 md:mb-6 group-hover:from-gold group-hover:to-gold-dark transition-all duration-300">
                <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>

              <h3 className="font-heading font-bold text-base md:text-xl text-navy-dark mb-2 md:mb-3">
                {service.title}
              </h3>

              <p className="text-xs md:text-base text-muted-foreground leading-snug">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Heading */}
        <motion.div variants={fadeUp} className="text-center mb-12 md:mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            Why Choose Us
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-navy-dark mt-2 mb-4">
            Your Success, Our Priority
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reduce risk, save time, and improve profitability with our expertise
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex gap-3 p-4 md:p-6 bg-muted/30 rounded-xl card-hover"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">

                {benefit.icon === "rupee" ? (
                  <span className="text-gold text-lg md:text-xl font-bold">
                    ₹
                  </span>
                ) : (
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                )}

              </div>

              <div>
                <h3 className="font-heading font-bold text-sm md:text-base text-navy-dark mb-1 md:mb-2">
                  {benefit.title}
                </h3>

                <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
