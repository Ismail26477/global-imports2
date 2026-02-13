import { Shield, Award, Globe, Truck } from "lucide-react";
import { useEffect, useRef } from "react";

// Mobile-only CSS animations for connecting lines and glowing dot
const animationStyles = `
  @media (max-width: 767px) {
    @keyframes drawLine {
      from {
        stroke-dashoffset: 1000;
      }
      to {
        stroke-dashoffset: 0;
      }
    }

    @keyframes glowDot {
      0%, 10% {
        opacity: 0;
      }
      15% {
        opacity: 1;
      }
      85% {
        opacity: 1;
      }
      90%, 100% {
        opacity: 0;
      }
    }

    @keyframes moveDot {
      0%, 10% {
        offset-distance: 0%;
      }
      90%, 100% {
        offset-distance: 100%;
      }
    }

    .line-1 {
      animation: drawLine 1s ease-in-out 0.3s forwards;
    }

    .line-2 {
      animation: drawLine 1s ease-in-out 1.2s forwards;
    }

    .line-3 {
      animation: drawLine 1s ease-in-out 2.1s forwards;
    }

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
    // Inject animation styles
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
      <div className="container mx-auto px-4">
        {/* Mobile Flow Layout with Connecting Lines */}
        <div className="md:hidden relative">
          {/* SVG Connecting Lines - positioned absolutely behind cards */}
          <svg
            ref={svgRef}
            className="absolute left-1/4 top-0 w-1/2 h-full pointer-events-none"
            style={{ overflow: 'visible' }}
          >
            {/* Line from Card 1 to Card 2 */}
            <path
              className="line-1"
              d="M 0 120 Q 30 160 0 200"
              stroke="#8B5E3C"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="1000"
            />
            {/* Glowing Dot for Line 1 */}
            <circle
              className="dot-1 glow-effect"
              r="5"
              fill="#8B5E3C"
              opacity="0"
            />

            {/* Line from Card 2 to Card 3 */}
            <path
              className="line-2"
              d="M 0 320 Q 30 360 0 400"
              stroke="#8B5E3C"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="1000"
            />
            {/* Glowing Dot for Line 2 */}
            <circle
              className="dot-2 glow-effect"
              r="5"
              fill="#8B5E3C"
              opacity="0"
            />

            {/* Line from Card 3 to Card 4 */}
            <path
              className="line-3"
              d="M 0 520 Q 30 560 0 600"
              stroke="#8B5E3C"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="1000"
            />
            {/* Glowing Dot for Line 3 */}
            <circle
              className="dot-3 glow-effect"
              r="5"
              fill="#8B5E3C"
              opacity="0"
            />
          </svg>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-4 relative z-10">
            {/* Box 1 - Top Left */}
            <div className="col-span-1 row-span-1">
              <BadgeCard badge={badges[0]} />
            </div>

            {/* Box 2 - Top Right (offset down) */}
            <div className="col-span-1 row-span-1 pt-8">
              <BadgeCard badge={badges[1]} />
            </div>

            {/* Box 3 - Bottom Left */}
            <div className="col-span-1 row-span-1">
              <BadgeCard badge={badges[2]} />
            </div>

            {/* Box 4 - Bottom Right */}
            <div className="col-span-1 row-span-1 pt-8">
              <BadgeCard badge={badges[3]} />
            </div>
          </div>
        </div>

        {/* Desktop Grid Layout (unchanged) */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <BadgeCard key={index} badge={badge} />
          ))}
        </div>
      </div>
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
      {/* Icon Container - Larger & Colored on mobile */}
      <div 
        className={`
          flex items-center justify-center mb-4 md:mb-3
          w-16 h-16 md:w-11 md:h-11 rounded-full
          transition-transform duration-300 hover:scale-110
          ${badge.iconBg}
        `}
      >
        <badge.icon 
          className={`w-7 h-7 md:w-5 md:h-5 ${badge.iconColor}`}
        />
      </div>

      {/* Title - Colored on mobile */}
      <h3 
        className={`
          font-heading font-bold mb-2 md:mb-1 
          text-base md:text-[15px] leading-snug md:leading-tight
          ${badge.titleColor}
        `}
      >
        {badge.title}
      </h3>

      {/* Description - Colored on mobile */}
      <p 
        className={`
          text-sm md:text-[12px] leading-relaxed md:leading-tight 
          line-clamp-3 md:line-clamp-2 font-medium md:font-normal
          ${badge.descColor}
        `}
      >
        {badge.description}
      </p>
    </div>
  );
}
