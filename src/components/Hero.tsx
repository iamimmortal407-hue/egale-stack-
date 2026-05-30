import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, ShieldCheck, Terminal, Award } from "lucide-react";
import EagleLogo from "./EagleLogo";

interface HeroProps {
  onCtaClick: (sectionId: string) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  // Setup 15 random particles that float in the hero viewport
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    width: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * -20,
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-bg-dark">
      {/* 1. Aurora Backdrops */}
      <div className="absolute inset-0">
        {/* Glowing Aurora Blob 1 - Cyan */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-brand-cyan/15 blur-[80px] md:blur-[120px] pointer-events-none"
        />

        {/* Glowing Aurora Blob 2 - Purple */}
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-brand-purple/15 blur-[80px] md:blur-[120px] pointer-events-none"
        />

        {/* Glowing Aurora Blob 3 - Pink Accent */}
        <motion.div
          animate={{
            x: [0, 20, -40, 0],
            y: [0, 30, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/3 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-brand-pink/10 blur-[60px] md:blur-[100px] pointer-events-none"
        />
        
        {/* Subtle grid mesh overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      {/* 2. Floating Particle Engine */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: p.width,
              height: p.width,
              left: `${p.initialX}%`,
              top: `${p.initialY}%`,
              boxShadow: "0 0 8px #FFFFFF",
            }}
            animate={{
              y: ["0vh", "-100vh"],
              x: ["0vw", `${Math.sin(p.id) * 5}vw`],
              opacity: [0.1, 0.5, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* 3. Hero content layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Bento Card (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-center space-y-6 relative border border-white/10 hover:border-brand-cyan/30 transition-all duration-500 group overflow-hidden"
          >
            {/* Soft inner aurora backlight */}
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-brand-cyan/10 blur-[80px] group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              {/* Interactive Top Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-brand-cyan/30 text-xs text-white/90 backdrop-blur-md mb-6 group cursor-pointer transition-all duration-300">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-gray-300">
                  Innovation First
                </span>
                <div className="h-px w-12 bg-gradient-to-r from-brand-cyan to-transparent hidden sm:block" />
              </div>

              {/* Title & Floating brand icon inside the bento */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                <div className="p-1 rounded-2xl bg-gradient-to-tr from-brand-cyan via-brand-blue to-brand-purple p-[1.5px]">
                  <div className="bg-bg-dark rounded-[14px] p-3 flex items-center justify-center animate-float">
                    <EagleLogo size={54} showText={false} />
                  </div>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Build Your Future<br/>with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">
                    Eagle Stack
                  </span>
                </h1>
              </div>

              {/* Subheadline: "Professional App Development..." */}
              <p className="font-sans text-base sm:text-lg text-gray-400 mb-8 max-w-xl leading-relaxed font-light">
                Professional App Development, Website Development, and Technology Training Solutions. We help companies and students scale with bulletproof systems.
              </p>

              {/* Button Controls */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onCtaClick("services")}
                  className="group relative w-full sm:w-auto px-7 py-3 rounded-xl font-sans font-bold text-sm tracking-wide text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan hover:shadow-glow-purple transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-center"
                >
                  <span className="relative z-10 flex items-center gap-2 justify-center">
                    Explore Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button
                  onClick={() => onCtaClick("contact")}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl font-sans font-bold text-sm tracking-wide text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-purple/50 transition-all duration-300 transform hover:-translate-y-0.5 backdrop-blur-md cursor-pointer text-center"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Bento Grid Container (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* 2x2 Services Quick-Facts Grid */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Card 1: App Dev */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-glass-card rounded-2xl p-5 border border-white/5 hover:border-brand-cyan/40 transition-all duration-300 group cursor-pointer"
                onClick={() => onCtaClick("services")}
              >
                <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-3 group-hover:scale-110 transition-transform">
                  📱
                </div>
                <h3 className="font-display font-semibold text-white text-sm group-hover:text-brand-cyan transition-colors">
                  App Dev
                </h3>
                <p className="font-sans text-[11px] text-gray-400 mt-1 leading-relaxed">
                  Android and hybrid mobile apps engineered for scale.
                </p>
              </motion.div>

              {/* Card 2: Web Dev */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-glass-card rounded-2xl p-5 border border-white/5 hover:border-brand-blue/40 transition-all duration-300 group cursor-pointer"
                onClick={() => onCtaClick("services")}
              >
                <div className="w-9 h-9 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue mb-3 group-hover:scale-110 transition-transform">
                  🌐
                </div>
                <h3 className="font-display font-semibold text-white text-sm group-hover:text-brand-blue transition-colors">
                  Web Dev
                </h3>
                <p className="font-sans text-[11px] text-gray-400 mt-1 leading-relaxed">
                  Enterprise business sites built on modern frameworks.
                </p>
              </motion.div>

              {/* Card 3: UI/UX Design */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-glass-card rounded-2xl p-5 border border-white/5 hover:border-brand-purple/40 transition-all duration-300 group cursor-pointer"
                onClick={() => onCtaClick("services")}
              >
                <div className="w-9 h-9 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple mb-3 group-hover:scale-110 transition-transform">
                  🎨
                </div>
                <h3 className="font-display font-semibold text-white text-sm group-hover:text-brand-purple transition-colors">
                  UI/UX Design
                </h3>
                <p className="font-sans text-[11px] text-gray-400 mt-1 leading-relaxed">
                  Intuitive interface journeys optimized for engagement.
                </p>
              </motion.div>

              {/* Card 4: Tech Training */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-glass-card rounded-2xl p-5 border border-white/5 hover:border-brand-pink/40 transition-all duration-300 group cursor-pointer"
                onClick={() => onCtaClick("services")}
              >
                <div className="w-9 h-9 rounded-xl bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center text-brand-pink mb-3 group-hover:scale-110 transition-transform">
                  🛡️
                </div>
                <h3 className="font-display font-semibold text-white text-sm group-hover:text-brand-pink transition-colors">
                  Tech Training
                </h3>
                <p className="font-sans text-[11px] text-gray-400 mt-1 leading-relaxed">
                  Linux, Cyber Security, and full-stack course bootcamps.
                </p>
              </motion.div>

            </div>

            {/* Showcase Teaser Bento Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-glass-card rounded-2xl p-5 border border-white/5 hover:border-brand-purple/30 transition-all duration-300 flex flex-col justify-between group overflow-hidden relative cursor-pointer"
              onClick={() => onCtaClick("showcase")}
            >
              {/* Soft pink highlight in corner */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-pink/10 blur-[30px]" />
              
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-display font-bold text-sm text-white group-hover:text-brand-purple transition-colors">
                  Project Showcase Labs
                </h3>
                <span className="font-mono text-[9px] text-brand-cyan tracking-widest font-bold uppercase group-hover:translate-x-0.5 transition-transform">
                  View All →
                </span>
              </div>

              {/* 3 mini mock panels representing project streams */}
              <div className="flex space-x-3 mt-1">
                <div className="h-16 flex-1 rounded-lg bg-bg-dark border border-white/5 relative overflow-hidden group-hover:border-brand-cyan/20 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/25 to-transparent" />
                  <span className="absolute bottom-1 right-2 font-mono text-[8.5px] text-gray-500">App</span>
                </div>
                <div className="h-16 flex-1 rounded-lg bg-bg-dark border border-white/5 relative overflow-hidden group-hover:border-brand-blue/20 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/25 to-transparent" />
                  <span className="absolute bottom-1 right-2 font-mono text-[8.5px] text-gray-500">Web</span>
                </div>
                <div className="h-16 flex-1 rounded-lg bg-bg-dark border border-white/5 relative overflow-hidden group-hover:border-brand-purple/20 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/25 to-transparent" />
                  <span className="absolute bottom-1 right-2 font-mono text-[8.5px] text-gray-500">Dash</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Floating trust factors row structured as high-tech Bento footer badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full border-t border-white/5 pt-8"
        >
          <div className="bg-glass-card rounded-xl p-4 flex items-center gap-3.5 border border-white/5 hover:border-brand-cyan/20 transition-all">
            <Award className="w-5 h-5 text-brand-cyan shrink-0" />
            <div>
              <span className="block font-display text-lg font-bold text-white">99%</span>
              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block">Success Rate</span>
            </div>
          </div>
          <div className="bg-glass-card rounded-xl p-4 flex items-center gap-3.5 border border-white/5 hover:border-brand-blue/20 transition-all">
            <Terminal className="w-5 h-5 text-brand-blue shrink-0" />
            <div>
              <span className="block font-display text-lg font-bold text-white">50k+</span>
              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block">Hours Coding</span>
            </div>
          </div>
          <div className="bg-glass-card rounded-xl p-4 flex items-center gap-3.5 border border-white/5 hover:border-brand-purple/20 transition-all">
            <ShieldCheck className="w-5 h-5 text-brand-purple shrink-0" />
            <div>
              <span className="block font-display text-lg font-bold text-white">100%</span>
              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block">Secure Delivery</span>
            </div>
          </div>
          <div className="bg-glass-card rounded-xl p-4 flex items-center gap-3.5 border border-white/5 hover:border-brand-pink/20 transition-all">
            <Sparkles className="w-5 h-5 text-brand-pink shrink-0" />
            <div>
              <span className="block font-display text-lg font-bold text-white">2.5k+</span>
              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block">Students Trained</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Aurora light bar on bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-dark to-transparent z-10 pointer-events-none" />
    </section>
  );
}
