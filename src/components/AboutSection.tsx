import React from "react";
import { motion } from "motion/react";
import { Compass, Lightbulb, Target, Users2 } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { label: "Modern Projects Delivered", count: "120+", color: "text-brand-cyan" },
    { label: "Active Student Community", count: "1,500+", color: "text-brand-blue" },
    { label: "Professional Instructors", count: "15+", color: "text-brand-purple" },
    { label: "Client Partners", count: "45+", color: "text-brand-pink" },
  ];

  return (
    <section id="about" className="relative py-32 bg-bg-dark overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual graphic representing Eagle Stack's digital landscape */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Complex Glowing Holographic Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple rounded-3xl blur-md opacity-30 animate-pulse-glow" />
              
              <div className="relative rounded-3xl bg-glass-card p-8 border border-white/5 backdrop-blur-xl">
                <div className="flex flex-col gap-8">
                  {/* Decorative terminal interface representation */}
                  <div className="flex items-center gap-1.5 border-b border-white/5 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    <span className="font-mono text-[10px] text-gray-500 ml-2 tracking-wider">eaglestack_mainframe_v3.ts</span>
                  </div>

                  {/* Creative Mission display with code aesthetics */}
                  <div className="space-y-4">
                    <div className="font-mono text-xs text-brand-cyan">const companyMission = &#123;</div>
                    <div className="pl-4 border-l-2 border-brand-blue/30 space-y-4">
                      <div>
                        <span className="font-mono text-xs text-brand-purple">purpose: </span>
                        <span className="font-sans text-sm text-gray-300">"Build dynamic software",</span>
                      </div>
                      <div>
                        <span className="font-mono text-xs text-brand-purple">empowerment: </span>
                        <span className="font-sans text-sm text-gray-300">"Provide high-quality technical education",</span>
                      </div>
                      <div>
                        <span className="font-mono text-xs text-brand-purple">target: </span>
                        <span className="font-sans text-sm text-gray-300">"Next-generation developers & companies"</span>
                      </div>
                    </div>
                    <div className="font-mono text-xs text-brand-cyan">&#125;;</div>
                  </div>

                  {/* Core Stats Box */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-all duration-300">
                        <span className={`block font-display text-2xl font-bold ${stat.color}`}>{stat.count}</span>
                        <span className="font-sans text-[11px] text-gray-400 font-medium leading-tight mt-1 block">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Little vector badge floating off the card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-bg-secondary/90 border border-white/10 backdrop-blur-xl shadow-2xl"
              >
                <div className="p-1.5 rounded-lg bg-pink-500/10 text-brand-pink">
                  <Target className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xs text-white">Focus First</span>
                  <span className="font-sans text-[9px] text-gray-400">Exceptional UX Quality</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: About Details and Mission Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            
            {/* Pill Section Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-8 bg-brand-cyan" />
              <span className="font-mono text-xs font-semibold tracking-widest text-brand-cyan uppercase">
                Enterprise Blueprint
              </span>
            </div>

            {/* Title: About Eagle Stack */}
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">
                Eagle Stack
              </span>
            </h2>

            {/* Description Text */}
            <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
              Eagle Stack is a modern technology company specializing in App Development, Website Development, UI/UX Design, and Technical Training. We help businesses and students grow through innovative digital solutions and practical technology education.
            </p>

            {/* Mission Box Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mission Statement */}
              <div className="bg-glass-card rounded-2xl p-6 border border-white/5 hover:border-brand-blue/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue/20 transition-all duration-300">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">Our Mission</h3>
                <p className="font-sans text-sm text-gray-400 leading-relaxed font-light">
                  To develop powerful digital products and provide high-quality technology education for the next generation.
                </p>
              </div>

              {/* Core Corporate Strategy */}
              <div className="bg-glass-card rounded-2xl p-6 border border-white/5 hover:border-brand-purple/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-4 group-hover:bg-brand-purple/20 transition-all duration-300">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">Our Vision</h3>
                <p className="font-sans text-sm text-gray-400 leading-relaxed font-light">
                  Bridging the gap between conceptual technology concepts and actual real-world production setups.
                </p>
              </div>
            </div>

            {/* Quick checkmarks */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                <Users2 className="w-4 h-4 text-brand-cyan" /> ISO 9001:2015 Compliant Training
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                <Target className="w-4 h-4 text-brand-navy" /> Agile Scrum Project Development
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
