'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "What MOQ do you require?",
    answer:
      "We work with flexible MOQs depending on the product category. For most products, we can start with quantities as low as 100-500 units. For specialized or custom products, MOQs may be higher. Contact us to discuss your specific requirements.",
  },
  {
    question: "Which e-commerce platforms do you support?",
    answer:
      "We support all major e-commerce platforms including Amazon (FBA & FBM), eBay, Walmart Marketplace, Etsy, Shopify, Flipkart, and more.",
  },
  {
    question: "How do you ensure quality?",
    answer:
      "We implement a three-stage quality inspection process: Pre-production sampling, During Production Inspection (DPI), and Pre-Shipment Inspection (PSI).",
  },
  {
    question: "What shipping options are available?",
    answer:
      "We offer Sea Freight, Air Freight, Express Courier, and Railway Freight. We'll recommend the best option based on your timeline and budget.",
  },
  {
    question: "Do you handle customs clearance?",
    answer:
      "Yes, we provide complete customs clearance services including documentation and coordination with customs authorities.",
  },
  {
    question: "Do you offer private labeling and white labeling?",
    answer:
      "Absolutely! We offer complete private label and white label solutions including packaging and branding.",
  },
  {
    question: "What is your sourcing capability?",
    answer:
      "We partner with verified manufacturers across China, Vietnam, Thailand, Indonesia, and other Asian countries.",
  },
  {
    question: "How long does the entire process take?",
    answer:
      "Typical timeline is 6-10 weeks depending on sourcing, production, inspection, and shipping method.",
  },
];


// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export function FAQSection() {
  return (
    <section id="faq" className="section-padding">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >

        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            FAQ
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-navy-dark mt-2 mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our import-export services
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeUp}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-xl shadow-sm border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-heading font-bold text-navy-dark hover:no-underline hover:text-gold py-6">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

      </motion.div>
    </section>
  );
}
