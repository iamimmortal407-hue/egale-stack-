import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import EagleLogo from "./EagleLogo";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor page scroll to raise the background blur density of the sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Why Choose Us", id: "why-us" },
    { label: "Showcase", id: "showcase" },
    { label: "Contact Us", id: "contact" },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-dark/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with link to main/home */}
          <button
            onClick={() => handleLinkClick("home")}
            className="focus:outline-none cursor-pointer"
            aria-label="Eagle Stack Home"
          >
            <EagleLogo size={38} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`relative px-1 py-2 font-sans font-medium text-sm transition-colors duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "text-brand-cyan"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-cyan to-brand-blue"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleLinkClick("contact")}
              className="relative overflow-hidden px-5 py-2 rounded-full font-sans font-semibold text-xs tracking-wide text-white bg-white/5 border border-white/10 hover:border-brand-cyan/50 hover:bg-white/10 transition-all duration-300 shadow-lg group cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5 justify-center">
                Get In Touch
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-brand-cyan to-brand-purple blur-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Drawer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg-dark/95 backdrop-blur-2xl lg:hidden flex flex-col justify-center px-8"
          >
            {/* Soft decorative aurora blur in mobile drawer background */}
            <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-brand-purple/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-cyan/10 blur-[80px] pointer-events-none" />

            <nav className="flex flex-col gap-6 relative z-10">
              <div className="mb-8">
                <EagleLogo size={42} />
              </div>
              
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, ease: "easeOut" }}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left font-display text-2xl font-bold tracking-tight cursor-pointer ${
                    activeSection === item.id
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08, ease: "easeOut" }}
                onClick={() => handleLinkClick("contact")}
                className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue font-sans font-bold text-center text-white text-sm shadow-glow-cyan cursor-pointer"
              >
                Get Started
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
