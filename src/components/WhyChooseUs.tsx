import React from "react";
import { motion } from "motion/react";
import {
  ShieldAlert,
  Zap,
  CheckCircle,
  Lightbulb,
  Headphones,
  Users,
  ShieldCheck,
  Check,
} from "lucide-react";
import { ChoicePillar } from "../types";

export default function WhyChooseUs() {
  const pillars: ChoicePillar[] = [
    {
      id: "ch-prof",
      title: "Professional Development",
      description:
        "Highly-maintainable enterprise architectures following strict Agile methodologies and clean documentation practices.",
      iconName: "development",
      glowColor: "from-brand-cyan/20 to-brand-blue/20",
    },
    {
      id: "ch-mod",
      title: "Modern Technologies",
      description:
        "We develop using elite modular layers including React 19, Kotlin Compose, TypeScript, Node ESM, and lightning-fast Tailwind styles.",
      iconName: "tech",
      glowColor: "from-brand-blue/20 to-brand-purple/20",
    },
    {
      id: "ch-fast",
      title: "Fast Delivery",
      description:
        "Optimized continuous integration pipelines that dispatch robust build versions swiftly without compromising stability.",
      iconName: "delivery",
      glowColor: "from-brand-purple/20 to-brand-pink/20",
    },
    {
      id: "ch-sec",
      title: "Secure Solutions",
      description:
        "Bulletproof system setups configured to withstand critical vulnerabilities, with strict OAuth controls and private API proxies.",
      iconName: "security",
      glowColor: "from-brand-pink/20 to-brand-cyan/20",
    },
    {
      id: "ch-student",
      title: "Student Friendly Learning",
      description:
        "Curated, step-by-step technical bootcamps featuring dedicated 1-on-1 laboratory reviews and practical business projects.",
      iconName: "student",
      glowColor: "from-brand-cyan/20 to-brand-purple/20",
    },
    {
      id: "ch-support",
      title: "Expert Support",
      description:
        "Direct consulting, code handovers, and 24/7 client systems monitoring to guarantee maximum operation uptime.",
      iconName: "support",
      glowColor: "from-brand-blue/20 to-brand-pink/20",
    },
  ];

  const getPillarIcon = (name: string) => {
    switch (name) {
      case "development":
        return <CheckCircle className="w-6 h-6 text-brand-cyan" />;
      case "tech":
        return <Zap className="w-6 h-6 text-brand-blue" />;
      case "delivery":
        return <CheckCircle className="w-6 h-6 text-brand-purple" />;
      case "security":
        return <ShieldCheck className="w-6 h-6 text-brand-pink" />;
      case "student":
        return <Users className="w-6 h-6 text-brand-cyan" />;
      case "support":
        return <Headphones className="w-6 h-6 text-brand-blue" />;
      default:
        return <CheckCircle className="w-6 h-6 text-brand-cyan" />;
    }
  };

  return (
    <section id="why-us" className="relative py-32 bg-bg-dark overflow-hidden">
      {/* Decorative Aurora lights in background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-pink/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-cyan/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-wider text-brand-purple uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-purple" /> Corporate Guarantee
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">
              Eagle Stack
            </span>
          </h2>
          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-lg font-light">
            We merge professional digital craftsmanship with customized training frameworks to build next-generation tech.
          </p>
        </div>

        {/* Glowing bento grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pl, idx) => {
            // Determine column span for Bento Grid layout rhythm
            const bentoSpan = idx === 0 || idx === 5 
              ? "lg:col-span-2" 
              : "lg:col-span-1";

            return (
              <motion.div
                key={pl.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className={`relative group rounded-3xl bg-glass border border-white/5 p-8 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/10 ${bentoSpan}`}
              >
                {/* Pulsing ambient colored backglow */}
                <div className={`absolute -inset-10 bg-gradient-to-tr ${pl.glowColor} opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500`} />

                <div className="relative z-15 space-y-5">
                  
                  {/* Header Icon + Check badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-300">
                      {getPillarIcon(pl.iconName)}
                    </div>
                    
                    {/* Neon check badge */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-[10px] font-mono text-brand-cyan font-bold tracking-wide">
                      <Check className="w-3" /> Checked
                    </div>
                  </div>

                  {/* Text Context */}
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-cyan transition-colors duration-300">
                      {pl.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed font-light">
                      {pl.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Area */}
        <div className="mt-16 text-center border-t border-white/5 pt-8">
          <p className="font-mono text-xs text-gray-500 tracking-wider uppercase">
            Eagle Stack Standards • Secure • Fast • Future-Proof
          </p>
        </div>

      </div>
    </section>
  );
}
