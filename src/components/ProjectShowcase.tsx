import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Smartphone,
  Laptop,
  Layout,
  GraduationCap,
  ArrowRight,
  Play,
  TrendingUp,
  Cpu,
  BookmarkCheck,
  CheckCircle2,
} from "lucide-react";
import { ProjectShowcaseItem } from "../types";

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { label: "All Projects", id: "all" },
    { label: "Mobile Apps", id: "mobile" },
    { label: "Business Sites", id: "web" },
    { label: "Dashboards", id: "dashboard" },
    { label: "Learning Platforms", id: "education" },
  ];

  const projects: ProjectShowcaseItem[] = [
    {
      id: "sh-pay",
      title: "EaglePay Pro",
      category: "mobile",
      description:
        "High-performance secure biometric payment engine designed with real-time currency conversions and a sleek dark theme.",
      techStack: ["React Native", "Kotlin Compose", "Stripe API", "AES-256 Encryption"],
      mockupType: "phone",
      primaryColor: "from-brand-cyan to-brand-blue",
      metric: "$2.4M",
      metricLabel: "Daily volume transactions",
    },
    {
      id: "sh-core",
      title: "NovaCore Business OS",
      category: "web",
      description:
        "Premium multi-regional cloud resource coordination platform constructed for fast navigation and high-density information grids.",
      techStack: ["Next.js", "Tailwind CSS", "Vite Engine", "MongoDB Client"],
      mockupType: "browser",
      primaryColor: "from-brand-blue to-brand-purple",
      metric: "99.99%",
      metricLabel: "Operational uptime SLA",
    },
    {
      id: "sh-nexus",
      title: "Nexus Analytics Board",
      category: "dashboard",
      description:
        "Interactive machine analytics board demonstrating real-time logs, neural feedback loops, and customer diagnostic grids.",
      techStack: ["React", "D3.js Visualization", "WebSockets", "Node.js ESM"],
      mockupType: "dashboard",
      primaryColor: "from-brand-purple to-brand-pink",
      metric: "0.2ms",
      metricLabel: "Analytical response latency",
    },
    {
      id: "sh-scholar",
      title: "ScholarSphere Portal",
      category: "education",
      description:
        "Custom course engine featuring live interactive Linux sandboxes, progress metrics, and live virtual code reviewers.",
      techStack: ["React.js", "Xterm.js Core", "Docker Containers", "GraphQL API"],
      mockupType: "browser",
      primaryColor: "from-brand-pink to-brand-cyan",
      metric: "12k+",
      metricLabel: "Active certifications granted",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="showcase" className="relative py-32 bg-bg-secondary overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-pink/20 to-transparent" />
      
      {/* Ambient glow blobs */}
      <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[450px] h-[450px] rounded-full bg-brand-pink/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-wider text-brand-pink uppercase mb-4">
            <Cpu className="w-3.5 h-3.5 text-brand-pink" /> Engineering Feats
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Project{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">
              Showcase Labs
            </span>
          </h2>
          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-xl font-light">
            An showcase of premium high-performance systems coded, secured, and published by the Eagle Stack development department.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex justify-center flex-wrap gap-2 mb-16 bg-white/[0.02] border border-white/5 p-1.5 rounded-2xl max-w-2xl mx-auto backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-sans font-semibold text-xs sm:text-sm tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-glow-cyan"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.03]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Layout Row (Staggered Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, index) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 25 }}
                className="flex flex-col bg-glass border border-white/5 rounded-3xl p-6 sm:p-8 hover:border-white/10 transition-all duration-300 backdrop-blur-md relative overflow-hidden group"
              >
                {/* Visual backlighting blur spots */}
                <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-tr ${p.primaryColor} opacity-5 blur-2xl pointer-events-none`} />

                {/* Left side text detail content */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-widest text-[#00E5FF] uppercase font-bold px-2.5 py-1 rounded-md bg-brand-cyan/10">
                      {p.category}
                    </span>
                    <span className="font-mono text-[10px] text-gray-500">• Complete Delivery</span>
                  </div>

                  <h3 className="font-display text-2xl font-black text-white group-hover:text-brand-cyan transition-colors">
                    {p.title}
                  </h3>

                  <p className="font-sans text-sm text-gray-400 leading-relaxed font-light">
                    {p.description}
                  </p>

                  {/* Stacks tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[10px] text-gray-300 py-1 px-2.5 rounded-lg bg-white/[0.02] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights statistics block */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center gap-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-tr ${p.primaryColor} text-white`}>
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-display text-lg font-bold text-white leading-none">
                        {p.metric}
                      </span>
                      <span className="font-sans text-[10px] text-gray-400 uppercase tracking-wider block mt-1">
                        {p.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side device mockup drawing customized by CSS & gradient bezel */}
                <div className="relative pt-4 flex-1 flex items-center justify-center min-h-[220px]">
                  
                  {/* PHONE MOCKUP */}
                  {p.mockupType === "phone" && (
                    <div className="relative w-44 h-80 rounded-[30px] border-4 border-white/10 shadow-2xl overflow-hidden bg-bg-dark flex flex-col p-1.5">
                      {/* Notch camera */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full bg-white/10 z-10" />
                      
                      {/* Inner screen content simulator */}
                      <div className="flex-1 rounded-[24px] overflow-hidden bg-bg-secondary p-3 flex flex-col justify-between relative">
                        {/* Soft ambient pattern inside phone */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-blue/10 opacity-30" />
                        
                        {/* Phone Header simulated */}
                        <div className="relative flex items-center justify-between border-b border-white/5 pb-2">
                          <span className="font-mono text-[8px] text-white">09:41</span>
                          <span className="font-mono text-[8px] text-brand-cyan font-bold">EaglePay</span>
                        </div>

                        {/* Middle balance card visual representation */}
                        <div className="relative bg-white/5 border border-white/10 rounded-xl p-2.5 text-center my-auto">
                          <span className="block font-sans text-[7px] text-gray-400 capitalize">Master Balance</span>
                          <span className="block font-display text-lg font-bold text-white mt-1">$45,120.90</span>
                          <span className="inline-block font-mono text-[6px] text-brand-cyan bg-brand-cyan/15 rounded px-1.5 py-0.5 mt-2">+12.4%</span>
                        </div>

                        {/* Simulated actions list in phone */}
                        <div className="relative space-y-1.5">
                          <div className="h-6 rounded-lg bg-white/[0.03] border border-white/5 flex items-center px-2 justify-between">
                            <span className="font-sans text-[7px] text-gray-300">Transaction node #45</span>
                            <span className="font-sans text-[7px] text-brand-cyan font-bold">+$120.00</span>
                          </div>
                          <div className="h-6 rounded-lg bg-white/[0.03] border border-white/5 flex items-center px-2 justify-between">
                            <span className="font-sans text-[7px] text-gray-300">Biometric Sync Key</span>
                            <span className="font-mono text-[7px] text-brand-blue font-bold">ACTIVE</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* BROWSER DEVICE MOCKUP */}
                  {p.mockupType === "browser" && (
                    <div className="relative w-full max-w-sm rounded-xl border-2 border-white/10 shadow-2xl overflow-hidden bg-bg-dark flex flex-col">
                      {/* Browser header bar tab */}
                      <div className="h-7 bg-bg-dark border-b border-white/5 flex items-center px-3 justify-between">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-red-400" />
                          <div className="w-2 h-2 rounded-full bg-yellow-400" />
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                        <div className="w-40 h-4 rounded bg-white/5 border border-white/5 flex items-center justify-center px-2">
                          <span className="font-mono text-[7px] text-gray-500 overflow-hidden leading-none">https://scholar.eaglestack.io</span>
                        </div>
                        <span className="w-2" />
                      </div>

                      {/* Screen content simulated */}
                      <div className="h-44 bg-bg-secondary p-3 flex flex-col justify-between relative overflow-hidden">
                        {/* Grid decorative mesh inside browser */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-purple/10 opacity-35" />

                        {/* Top layout area */}
                        <div className="relative flex items-center justify-between border-b border-white/5 pb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-brand-pink/20 text-brand-pink flex items-center justify-center font-bold text-[8px]">S</div>
                            <span className="font-display font-medium text-[8px] text-white">Course Sandbox v4</span>
                          </div>
                          <span className="font-mono text-[7px] text-brand-pink font-semibold">Terminal: Ubuntu</span>
                        </div>

                        {/* Shell console terminal viewport simulation */}
                        <div className="relative bg-bg-dark border border-white/10 rounded-lg p-2 flex-1 my-2 flex flex-col justify-between">
                          <div className="space-y-1 font-mono text-[7px]">
                            <div className="text-gray-500">guest@eaglestack:~# npm run deploy</div>
                            <div className="text-brand-cyan">✓ Bundling core react elements successfully...</div>
                            <div className="text-brand-purple">✓ Server compilation successful. Listening port 3000...</div>
                          </div>
                          <div className="flex justify-between items-center bg-white/[0.02] p-1 rounded border border-white/5">
                            <span className="font-sans text-[6px] text-gray-400">Database socket status:</span>
                            <span className="font-mono text-[6px] text-green-400 animate-pulse font-bold">CONNECTED</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* DASHBOARD MOCKUP */}
                  {p.mockupType === "dashboard" && (
                    <div className="relative w-full max-w-sm rounded-xl border-2 border-white/10 shadow-2xl overflow-hidden bg-bg-dark flex flex-col">
                      {/* Browser header controls */}
                      <div className="h-7 bg-bg-dark border-b border-white/5 flex items-center px-3 justify-between">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-red-400" />
                          <div className="w-2 h-2 rounded-full bg-yellow-400" />
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                        <span className="font-mono text-[7px] text-gray-400 uppercase">Nexus Terminal Suite</span>
                        <span className="w-2" />
                      </div>

                      {/* Diagnostic Dashboard charts simulated */}
                      <div className="h-44 bg-bg-secondary p-3 grid grid-cols-3 gap-2.5 relative">
                        {/* Dynamic background aurora panel */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 opacity-30" />

                        {/* Left column sidebar simulated */}
                        <div className="relative bg-white/5 rounded-lg p-1.5 flex flex-col justify-between border border-white/5">
                          <div className="space-y-1">
                            <div className="h-2.5 rounded bg-brand-purple/25" />
                            <div className="h-2 rounded bg-white/[0.04]" />
                            <div className="h-2 rounded bg-white/[0.04]" />
                          </div>
                          <div className="h-3 rounded bg-white/[0.05] border border-white/5 flex items-center justify-center">
                            <span className="font-mono text-[5px] text-brand-pink">v3.91-active</span>
                          </div>
                        </div>

                        {/* Center & right main data layouts */}
                        <div className="relative col-span-2 space-y-2 flex flex-col justify-between">
                          {/* Top stat layout */}
                          <div className="bg-white/5 border border-white/5 rounded-lg p-2 grid grid-cols-2 gap-2">
                            <div>
                              <span className="font-sans text-[6px] text-gray-400 block block">Total hits</span>
                              <span className="font-display text-sm font-bold text-white block">94.2k</span>
                            </div>
                            <div className="flex items-end justify-end">
                              {/* Small vector bar chart */}
                              <div className="flex gap-1 items-end h-8">
                                <div className="w-1.5 h-3 bg-brand-purple/50 rounded-sm" />
                                <div className="w-1.5 h-5 bg-brand-cyan/60 rounded-sm" />
                                <div className="w-1.5 h-6 bg-brand-pink/80 rounded-sm animate-pulse" />
                                <div className="w-1.5 h-4 bg-brand-blue/50 rounded-sm" />
                              </div>
                            </div>
                          </div>

                          {/* Database status check row */}
                          <div className="bg-white/5 border border-white/5 rounded-lg p-1.5 flex justify-between items-center">
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="w-2.5 h-2.5 text-brand-cyan" />
                              <span className="font-sans text-[6px] text-gray-300">Cluster Integrity Index</span>
                            </div>
                            <span className="font-mono text-[6px] text-brand-cyan">100% verified</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
