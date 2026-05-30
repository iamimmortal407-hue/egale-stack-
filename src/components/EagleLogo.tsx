import React from "react";
import { motion } from "motion/react";

interface EagleLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function EagleLogo({
  className = "",
  size = 48,
  showText = true,
}: EagleLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div
        className="relative group flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {/* Ambient Glow behind the logo */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink rounded-full blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none" />

        {/* Real Logo Image Asset uploaded by the user */}
        <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/25 p-[1px] bg-bg-dark flex items-center justify-center shadow-inner hover:scale-105 transition-transform duration-300">
          <img
            src="https://i.ibb.co/Gfq6DzFy/Whats-App-Image-2026-05-30-at-11-49-57-AM.jpg"
            alt="Eagle Stack Logo"
            className="w-full h-full object-cover rounded-[10px]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display text-xl font-bold tracking-tight text-white leading-none">
            EAGLE<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue"> STACK</span>
          </span>
          <span className="font-mono text-[9px] tracking-widest text-[#8b5cf6] uppercase mt-0.5 font-medium">
            Develop • Learn • Innovate
          </span>
        </div>
      )}
    </div>
  );
}
