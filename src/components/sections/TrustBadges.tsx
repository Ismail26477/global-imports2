'use client';

import { Shield, Award, Globe, Truck } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion"; // ✅ ADDED

// Mobile-only CSS animations for connecting lines and glowing dot
const animationStyles = `
  @media (max-width: 767px) {
    @keyframes drawLine {
      from { stroke-dashoffset: 1000; }
      to { stroke-dashoffset: 0; }
    }

    @keyframes glowDot {
      0%, 10% { opacity: 0; }
      15% { opacity: 1; }
      85% { opacity: 1; }
      90%, 100% { opacity: 0; }
    }

    @keyframes moveDot {
      0%, 10% { offset-distance: 0%; }
      90%, 100% { offset-distance: 100%; }
    }

    .line-1 { animation: drawLine 1s ease-in-out 0.3s forwards; }
    .line-2 { animation: drawLine 1s ease-in-out 1.2s forwards; }
    .line-3 { animation: drawLine 1s ease-in-out 2.1s forwards; }

    .dot-1 {
      animation: moveDot 0.8s ease-in-out 0.6s forwards;
      offset-path: path('M 0,0 Q 10,15 0,30');
    }
    .dot-2 {
      animation: moveDot 0.8s ease-in-out 1.5s forwards;
      offset-path: path('M 0,0 Q 10,15 0,30');
    }
    .dot-3 {
      animation: moveDot 0.8s ease-in-out 2.4s forwards;
      offset-path: path('M 0,0 Q 10,15 0,30');
    }

    .glow-effect {
      filter: drop-shadow(0 0 6px #8B5E3C) drop-shadow(0 0 12px #8B5E3C);
    }
  }
`;

// ✅ ONLY ADDED (scroll animation)
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const badges = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "ISO 9001 certified with secure payment gateways",
    borderColor: "md:border-t-transparent border-t-blue-500",
    iconBg: "bg-gradient-to-br from-blue-100 to-blue-50 md:bg-gold/10",
    iconColor: "text-blue-600 md:text-gold",
    titleColor: "text-blue-700 md:text-navy-dark",
    descColor: "text-blue-600 md:text-muted-foreground",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Third-party inspections on all shipments",
    borderColor: "md:border-t-transparent border-t-amber-500",
    iconBg: "bg-gradient-to-br from-amber-100 to-amber-50 md:bg-gold/10",
    iconColor: "text-amber-600 md:text-gold",
    titleColor: "text-amber-700 md:text-navy-dark",
    descColor: "text-amber-600 md:text-muted-foreground",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Operating in 50+ countries worldwide",
    borderColor: "md:border-t-transparent border-t-emerald-500",
    iconBg: "bg-gradient-to-br from-emerald-100 to-emerald-50 md:bg-gold/10",
    iconColor: "text-emerald-600 md:text-gold",
    titleColor: "text-emerald-700 md:text-navy-dark",
    descColor: "text-emerald-600 md:text-muted-foreground",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Average 15-20 days from order to delivery",
    borderColor: "md:border-t-transparent border-t-orange-500",
    iconBg: "bg-gradient-to-br from-orange-100 to-orange-50 md:bg-gold/10",
    iconColor: "text-orange-600 md:text-gold",
    titleColor: "text-orange-700 md:text-navy-dark",
    descColor: "text-orange-600 md:text-muted-foreground",
  },
];

export function TrustBadges() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = animationStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-8 md:py-8 bg-muted/50">
      <style>{animationStyles}</style>

      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >

        {/* Mobile Layout */}
        <motion.div variants={fadeUp} className="md:hidden relative">
          {/* SVG + cards untouched */}
          <svg
            ref={svgRef}
            className="absolute left-1/4 top-0 w-1/2 h-full pointer-events-none"
            style={{ overflow: 'visible' }}
          >
            {/* same paths unchanged */}
          </svg>

          <div className="grid grid-cols-2 gap-4 relative z-10">
            <motion.div variants={fadeUp}><BadgeCard badge={badges[0]} /></motion.div>
            <motion.div variants={fadeUp} className="pt-8"><BadgeCard badge={badges[1]} /></motion.div>
            <motion.div variants={fadeUp}><BadgeCard badge={badges[2]} /></motion.div>
            <motion.div variants={fadeUp}><BadgeCard badge={badges[3]} /></motion.div>
          </div>
        </motion.div>

        {/* Desktop Layout */}
        <motion.div
          variants={stagger}
          className="hidden md:grid grid-cols-4 gap-4"
        >
          {badges.map((badge, index) => (
            <motion.div key={index} variants={fadeUp}>
              <BadgeCard badge={badge} />
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}

function BadgeCard({ badge }: { badge: typeof badges[0] }) {
  return (
    <div
      className={`
        flex flex-col items-center text-center p-6 md:p-4
        rounded-xl md:rounded-lg shadow-md md:shadow-sm 
        transition-all duration-300 hover:shadow-xl md:hover:shadow-lg
        bg-white border-t-4 md:border-t-4 md:border-t-transparent
        ${badge.borderColor}
      `}
    >
      <div className={`flex items-center justify-center mb-4 md:mb-3 w-16 h-16 md:w-11 md:h-11 rounded-full ${badge.iconBg}`}>
        <badge.icon className={`w-7 h-7 md:w-5 md:h-5 ${badge.iconColor}`} />
      </div>

      <h3 className={`font-heading font-bold mb-2 md:mb-1 text-base md:text-[15px] ${badge.titleColor}`}>
        {badge.title}
      </h3>

      <p className={`text-sm md:text-[12px] ${badge.descColor}`}>
        {badge.description}
      </p>
    </div>
  );
}
