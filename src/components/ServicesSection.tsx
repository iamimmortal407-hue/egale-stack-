import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Smartphone,
  Globe,
  Palette,
  GraduationCap,
  ChevronRight,
  Check,
  X,
  Play,
  ArrowRight,
} from "lucide-react";
import { Service } from "../types";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const servicesData: Service[] = [
    {
      id: "srv-mobile",
      title: "Mobile App Development",
      description:
        "Engineered for native fluid performance. We build elegant and high-transaction applications that capture attention.",
      subFeatures: [
        "Android App Development",
        "Custom Mobile Applications",
        "App Maintenance & Scaling Plans",
        "Hybrid Cross-Platform (React Native / Flutter)",
      ],
      technologies: ["Kotlin", "Swift", "React Native", "Flutter", "Firebase API"],
      iconName: "smartphone",
      colorClass: "from-brand-cyan to-brand-blue",
    },
    {
      id: "srv-web",
      title: "Website Development",
      description:
        "High-performance website engines configured for extreme speed, SEO placement, and immersive interactive graphics.",
      subFeatures: [
        "Business Enterprise Websites",
        "Corporate Portfolios",
        "E-Commerce Digital Fronts",
        "High-Throughput Web Applications",
      ],
      technologies: ["React.js", "Vite", "Tailwind CSS", "Next.js", "Node.js/Express"],
      iconName: "globe",
      colorClass: "from-brand-blue to-brand-purple",
    },
    {
      id: "srv-uiux",
      title: "UI/UX Design",
      description:
        "Human-centered user experience design that aligns core digital branding aesthetic with intuitive interactions.",
      subFeatures: [
        "Modern Digital Interface Wireframes",
        "Interactive User Experience Optimization",
        "Mobile-First Responsive Blueprints",
        "Figma Systems & Interactive Architecture",
      ],
      technologies: ["Figma", "Adobe XD", "Framer Motion", "Tailwind GUI Systems"],
      iconName: "palette",
      colorClass: "from-brand-purple to-brand-pink",
    },
    {
      id: "srv-training",
      title: "Technology Training",
      description:
        "Rigorous, practical tech bootcamps tailored to empower businesses, developer recruits, and student computer enthusiasts.",
      subFeatures: [
        "Linux Basics & Kernel Diagnostics",
        "Cyber Security Protocols & SecOps",
        "Website Engineering From Zero",
        "Advanced Mobile App Architecture",
      ],
      technologies: ["Bash / Shell", "Linux OS", "TypeScript", "React Native Engine"],
      iconName: "training",
      colorClass: "from-brand-pink to-brand-cyan",
    },
  ];

  const getIcon = (name: string, css: string) => {
    switch (name) {
      case "smartphone":
        return <Smartphone className={`w-8 h-8 ${css}`} />;
      case "globe":
        return <Globe className={`w-8 h-8 ${css}`} />;
      case "palette":
        return <Palette className={`w-8 h-8 ${css}`} />;
      case "training":
        return <GraduationCap className={`w-8 h-8 ${css}`} />;
      default:
        return <Globe className={`w-8 h-8 ${css}`} />;
    }
  };

  return (
    <section id="services" className="relative py-32 bg-bg-secondary overflow-hidden">
      {/* Mesh gradients for top border styling */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />

      {/* Aurora spotlight in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-wider text-brand-cyan uppercase mb-4">
            <Play className="w-3 h-3 text-brand-cyan fill-brand-cyan" /> Core Capacities
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Our Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">
              Technology Services
            </span>
          </h2>
          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-xl font-light">
            We architect and launch custom-engineered applications paired with elite specialized technology training models. Let's inspect our sectors:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((svc, index) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative group rounded-3xl bg-glass border border-white/5 p-8 transition-all duration-300 overflow-hidden cursor-pointer backdrop-blur-3xl hover:border-white/10"
              onClick={() => setSelectedService(svc)}
            >
              {/* Aurora gradient backlight on hover */}
              <div className={`absolute -inset-24 bg-gradient-to-tr ${svc.colorClass} rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
                {/* Glowing Icon holder */}
                <div className={`p-4 rounded-2.5xl bg-gradient-to-tr ${svc.colorClass} bg-opacity-10 text-white shadow-lg`}>
                  {getIcon(svc.iconName, "text-white")}
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300" />
                  </div>

                  <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed font-light">
                    {svc.description}
                  </p>

                  {/* Tiny key tech tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {svc.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] bg-white/[0.03] border border-white/5 py-1 px-2.5 rounded-lg text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {svc.technologies.length > 3 && (
                      <span className="font-mono text-[9px] text-gray-500 self-center">
                        +{svc.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Drawer Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop with strong blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-bg-dark/80 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="relative w-full max-w-lg bg-bg-secondary rounded-3xl border border-white/10 p-8 shadow-2xl overflow-hidden backdrop-blur-xl max-h-[90vh] overflow-y-auto"
            >
              {/* Dynamic decorative backdrop radial spot */}
              <div className={`absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-tr ${selectedService.colorClass} opacity-10 blur-2xl pointer-events-none`} />

              {/* Close Button Trigger */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all focus:outline-none cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6 relative z-10 pt-4">
                {/* Header detail Icon and Title */}
                <div className="flex items-center gap-4">
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${selectedService.colorClass} shadow-glow-cyan text-white`}>
                    {getIcon(selectedService.iconName, "text-white")}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-brand-cyan tracking-widest uppercase">
                      Solutions Blueprint
                    </span>
                    <h3 className="font-display text-2xl font-extrabold text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                  {selectedService.description}
                </p>

                {/* Sub Features Listed */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs text-gray-400 tracking-wider uppercase border-b border-white/5 pb-2">
                    Scope of Service Deliveries
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedService.subFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm">
                        <div className="mt-1 p-0.5 rounded-full bg-brand-cyan/15 text-brand-cyan">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-sans text-gray-300 font-light">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Stacks Included */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs text-gray-400 tracking-wider uppercase border-b border-white/5 pb-2">
                    Underlying Engineering Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedService.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs bg-white/[0.04] border border-white/10 hover:border-brand-cyan/40 px-3 py-1.5 rounded-xl text-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Engagement CTA */}
                <div className="pt-4 flex gap-4">
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex-1 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue font-sans font-bold text-sm text-center text-white flex items-center justify-center gap-1.5 shadow-glow-cyan hover:shadow-glow-purple class-transition cursor-pointer"
                  >
                    Initiate Engagement
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 font-sans font-bold text-sm text-gray-300 hover:text-white cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
