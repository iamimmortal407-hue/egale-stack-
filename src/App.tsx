/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProjectShowcase from "./components/ProjectShowcase";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll positions to automatically update the active section highlighted on the Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "why-us", "showcase", "contact"];
      
      // Calculate taking navbar gap offsets into consideration
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial execute to verify default stance
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Frame transition action to smoothly glide standard viewport sections
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark text-white font-sans selection:bg-brand-cyan selection:text-black">
      {/* 1. Glassmorphic Navigation Bar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* 2. Premium Animated Hero Section */}
      <Hero onCtaClick={handleNavigate} />

      {/* 3. About Section Grid and Interactive Mainframe representation */}
      <AboutSection />

      {/* 4. High-End Services Catalog with Interactive Spring Modals */}
      <ServicesSection />

      {/* 5. Glowing Bento-Grid Why Choose Us Guarantees */}
      <WhyChooseUs />

      {/* 6. Showcase Devices Mockups Grid */}
      <ProjectShowcase />

      {/* 7. Glassmorphic Form Contact Secure Terminal */}
      <ContactSection />

      {/* 8. Corporate Footer Navigation block */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
