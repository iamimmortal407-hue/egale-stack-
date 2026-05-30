import React from "react";
import { Github, Linkedin, Instagram, Youtube, ArrowUp } from "lucide-react";
import EagleLogo from "./EagleLogo";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  const footerLinksByGroup = [
    {
      title: "Solutions Ecosystem",
      links: [
        { label: "App Engineering", id: "services" },
        { label: "Web Architecture", id: "services" },
        { label: "UI/UX Blueprints", id: "services" },
        { label: "Technical Bootcamps", id: "services" },
      ],
    },
    {
      title: "Corporate Identity",
      links: [
        { label: "About Our Blueprint", id: "about" },
        { label: "Guarantee Pillars", id: "why-us" },
        { label: "Production Labs", id: "showcase" },
        { label: "System Coordinates", id: "contact" },
      ],
    },
  ];

  return (
    <footer className="relative bg-bg-dark pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Decorative light strip in footer border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Top block layout: Logo & coordinates on left, indices columns on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          
          {/* Logo & Slogan Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <EagleLogo size={42} showText={true} />
            </div>
            
            <p className="font-sans text-sm text-gray-400 font-light leading-relaxed max-w-sm">
              An enterprise development and educational sandbox. We build high-throughput applications and train future software leaders.
            </p>

            <blockquote className="font-display font-medium text-[#c084fc] italic text-sm tracking-wide">
              "Develop. Learn. Innovate."
            </blockquote>

            {/* Social Grid block */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/eaglestack"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/40 hover:text-brand-cyan hover:bg-white/[0.05] transition-all flex items-center justify-center text-gray-400 cursor-pointer"
                aria-label="Eagle Stack Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/eaglestack"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-blue/40 hover:text-brand-blue hover:bg-white/[0.05] transition-all flex items-center justify-center text-gray-400 cursor-pointer"
                aria-label="Eagle Stack LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/eaglestack"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-pink/40 hover:text-brand-pink hover:bg-white/[0.05] transition-all flex items-center justify-center text-gray-400 cursor-pointer"
                aria-label="Eagle Stack Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/eaglestack"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-purple/40 hover:text-brand-purple hover:bg-white/[0.05] transition-all flex items-center justify-center text-gray-400 cursor-pointer"
                aria-label="Eagle Stack Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links collections */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-8 lg:justify-items-end">
            {footerLinksByGroup.map((group, idx) => (
              <div key={idx} className="space-y-6">
                <span className="font-mono text-[10px] tracking-widest text-[#00E5FF] uppercase font-bold block">
                  {group.title}
                </span>
                <ul className="space-y-3.5">
                  {group.links.map((lnk, i) => (
                    <li key={i}>
                      <button
                        onClick={() => handleLinkClick(lnk.id)}
                        className="font-sans text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 text-left cursor-pointer"
                      >
                        {lnk.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom copyright area layout */}
        <div className="border-t border-white/5 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start space-y-1">
            <span className="font-sans text-xs text-gray-500">
              © 2026 Eagle Stack. All Rights Reserved.
            </span>
            <span className="font-mono text-[9px] text-[#00e5ff] uppercase tracking-widest">
              Cryptographic Secure Core • Active
            </span>
          </div>

          {/* Back to top scroll button */}
          <button
            type="button"
            onClick={handleScrollToTop}
            className="group p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-brand-cyan/40 hover:bg-white/5 hover:text-white transition-all duration-300 text-gray-400 cursor-pointer flex items-center gap-1.5 justify-center"
            aria-label="Scroll back to top"
          >
            <span className="font-mono text-[10px] tracking-wider uppercase group-hover:text-brand-cyan transition-colors">Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}
