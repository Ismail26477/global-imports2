'use client';

import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300",
          isScrolled ? "h-[75px]" : "h-[75px]"
        )}
      >
        <div className="container mx-auto h-full px-4">

          {/* ================= DESKTOP HEADER ================= */}
          <div className="hidden lg:flex items-center justify-between h-full">

            {/* Logo */}
            <Link to="/">
              <img
                src="/logo18.png"
                alt="Global Imports Logo"
                className={cn(
                  "object-contain transition-all duration-300",
                  isScrolled ? "h-16" : "h-24"
                )}
              />
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-12 font-semibold text-navy-dark">
              <Link to="/" className="hover:text-gold transition">Home</Link>
              <Link to="/about" className="hover:text-gold transition">About</Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:text-gold transition">
                  <Link to="/services">Services</Link>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isServicesOpen && "rotate-180"
                    )}
                  />
                </div>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 pt-3">
                    <div className="glass-dark rounded-xl py-3 min-w-[240px] shadow-2xl">
                      {[
                        ["Global Sourcing","/services/global-sourcing"],
                        ["Export Management","/services/export-management"],
                        ["Import Compliance","/services/import-compliance"],
                        ["Logistics & Freight","/services/logistics-freight"],
                        ["Customs Documentation","/services/customs-documentation"],
                        ["Quality Inspection","/services/quality-inspection"],
                      ].map(([label, href]) => (
                        <Link
                          key={href}
                          to={href}
                          className="block px-5 py-3 text-[#f8f4e1] hover:text-[#fcb25d]"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/products" className="hover:text-gold transition">Products</Link>
              <Link to="/contact" className="hover:text-gold transition">Contact</Link>
            </nav>

            {/* Call Button */}
            <a
              href="tel:+919270109911"
              className={cn(
                "flex items-center gap-3 rounded-full font-bold shadow-lg transition-all duration-300",
                isScrolled ? "px-5 py-2 text-sm" : "px-7 py-3"
              )}
              style={{
                backgroundColor: "#E9D8C3",
                color: "#3B2A1A"
              }}
            >
              <Phone className="w-5 h-5" />
              <span>+91 9270109911</span>
            </a>
          </div>

          {/* ================= MOBILE HEADER ================= */}
          <div className="lg:hidden flex items-center justify-between h-full relative">

            {/* LEFT — MENU */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="w-7 h-7 text-navy-dark" />
              ) : (
                <Menu className="w-7 h-7 text-navy-dark" />
              )}
            </button>

            {/* CENTER — LOGO */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <img
                src="/logo18.png"
                alt="Global Imports Logo"
                className="h-18 object-contain"
              />
            </Link>

            {/* RIGHT — CALL */}
            <a href="tel:+919270109911">
              <Phone className="w-7 h-7 text-gold" />
            </a>
          </div>

        </div>
      </header>

      {isMobileMenuOpen && (
  <div className="fixed inset-0 bg-white z-40 pt-[100px] px-6 lg:hidden overflow-y-auto">
    <nav className="flex flex-col gap-8 text-navy-dark pb-16">

      {/* Main Links */}
      <div className="flex flex-col gap-6 text-[20px] font-semibold">
        {[
          ["Home", "/"],
          ["About", "/about"],
          ["Products", "/products"],
          ["Contact", "/contact"],
        ].map(([label, href]) => (
          <Link
            key={href}
            to={href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="border-b border-[#e8dccb] pb-4"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Services Section */}
      <div>
        <p className="text-[15px] tracking-wider text-[#9b7b5a] mb-4 uppercase">
          Services
        </p>

        <div className="flex flex-col gap-4 text-[17px] font-medium">
          {[
            ["Global Sourcing","/services/global-sourcing"],
            ["Export Management","/services/export-management"],
            ["Import Compliance","/services/import-compliance"],
            ["Logistics & Freight","/services/logistics-freight"],
            ["Quality Inspection","/services/quality-inspection"],
          ].map(([label, href]) => (
            <Link
              key={href}
              to={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="pl-2 border-l-2 border-[#E9D8C3]"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

    </nav>
  </div>
)}

    </>
  );
}
