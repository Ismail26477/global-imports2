'use client';

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80",
    slogan: "Your Gateway to Global Trade",
    description:
      "We connect your business to verified global suppliers and manage the complete import-export process from sourcing to delivery.",
  },
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80",
    slogan: "From Local Needs to Global Supply",
    description:
      "Tell us what you need. Our team finds the right manufacturers worldwide and handles inspection, shipping, and compliance.",
  },
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
    slogan: "Where Global Sourcing Meets Trust",
    description:
      "With on-ground verification and strict quality checks, we ensure you import only from reliable and trusted factories.",
  },
  {
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80",
    slogan: "Trade Without Boundaries",
    description:
      "We simplify international trade by managing logistics, documentation, customs clearance, and safe delivery to your doorstep.",
  },
  {
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1920&q=80",
    slogan: "Smart Sourcing. Seamless Logistics.",
    description:
      "End-to-end sourcing, freight management, and compliance support so you can focus on growing your business.",
  },
];

const stats = [
  { value: "500+", label: "Products Sourced" },
  { value: "50+", label: "Countries Served" },
  { value: "98%", label: "Success Rate" },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[80vh] sm:h-[75vh] md:h-screen overflow-hidden">

      {/* SLIDER */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full h-full flex-shrink-0 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="absolute inset-0 z-10 flex items-end pb-28 sm:items-center sm:pb-0">
        <div className="container mx-auto px-4">
          <div className="w-full sm:max-w-2xl">

            {/* 🔥 MOBILE LOGO */}
            <div className="block sm:hidden mb-3">
              <img
                src="/logo19.png"
                alt="Global Imports Logo"
                className="h-100 w-auto"
              />
            </div>

            {/* Badge */}
            <span className="inline-block px-2 py-1 bg-[#D6A85A]/20 text-[#D6A85A] rounded-full text-[11px] sm:text-sm font-medium mb-3">
              Trusted by 500+ Businesses
            </span>

            {/* Heading */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-4 leading-tight text-[#F8F5EE]">
              {slides[current].slogan}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#E6D8C7] mb-6">
              {slides[current].description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-[#6B4A2F] hover:bg-[#5a3d26] text-[#FFF9F0] px-6 py-4 text-sm"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                onClick={() => scrollToSection("#products")}
                className="bg-white hover:bg-white/90 text-[#6B4A2F] px-6 py-4 text-sm"
              >
                View Products
              </Button>
            </div>

          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-md bg-white/80 rounded-t-xl py-3 px-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="font-heading text-xl sm:text-3xl font-bold text-[#6B4A2F]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-sm text-[#6B4A2F]/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
