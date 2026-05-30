import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  Copy,
  Check,
  Shield,
  Loader2,
  Sparkles,
} from "lucide-react";
import { ContactFormData } from "../types";

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStep, setSubmitStep] = useState(0); // 0: Idle, 1: Validating, 2: Encrypting, 3: Completed
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@eaglestack.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    // Simulate futuristic cryptographic transmission sequence
    setIsSubmitting(true);
    setSubmitStep(1); // Standard check validation

    setTimeout(() => {
      setSubmitStep(2); // Secure transmission dispatch
      setTimeout(() => {
        setSubmitStep(3); // Transmission complete
        setIsSubmitting(false);
      }, 1500);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({ fullName: "", email: "", phone: "", message: "" });
    setSubmitStep(0);
  };

  return (
    <section id="contact" className="relative py-32 bg-bg-dark overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-brand-purple/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-wider text-brand-cyan uppercase mb-4">
            <Shield className="w-3.5 h-3.5 text-brand-cyan" /> Secure Dispatch
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">
              Our Tech Office
            </span>
          </h2>
          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-xl font-light">
            Have a project blueprint or training question? Transmit a message directly to our main systems terminal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Pitch card */}
            <div className="bg-glass-card rounded-2xl p-6 border border-white/5 space-y-4">
              <span className="font-mono text-[9px] text-[#8b5cf6] font-bold tracking-widest uppercase">Office Coordinates</span>
              <h3 className="font-display text-2xl font-bold text-white">Let's Establish a Connection</h3>
              <p className="font-sans text-sm text-gray-400 leading-relaxed font-light">
                Our technology team is prepared to analyze your system wireframes and provide a comprehensive delivery roadmap, completely free.
              </p>
            </div>

            {/* Address coordinate card row blocks */}
            <div className="space-y-4">
              
              {/* Email Block */}
              <div className="bg-glass rounded-2xl p-4 border border-white/5 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-brand-cyan/10 text-brand-cyan group-hover:bg-brand-cyan/20 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-gray-500 block uppercase tracking-wider">Email System Address</span>
                    <span className="font-display font-medium text-sm sm:text-base text-white">contact@eaglestack.com</span>
                  </div>
                </div>
                
                {/* Copy Clipboard button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:text-white transition-all text-gray-400 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Block */}
              <div className="bg-glass rounded-2xl p-4 border border-white/5 flex items-center gap-4 group">
                <div className="p-3.5 rounded-xl bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue/20 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-gray-500 block uppercase tracking-wider">Direct Hotline Office</span>
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="font-display font-medium text-sm sm:text-base text-white hover:text-brand-blue transition-colors"
                  >
                    +91 XXXXX XXXXX
                  </a>
                </div>
              </div>

              {/* SLA Response Schedule */}
              <div className="bg-glass rounded-2xl p-4 border border-white/5 flex items-center gap-4 group">
                <div className="p-3.5 rounded-xl bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple/20 transition-all duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-gray-500 block uppercase tracking-wider">Active Operations</span>
                  <span className="font-display font-medium text-sm sm:text-base text-white block">Monday – Saturday</span>
                  <span className="font-sans text-xs text-gray-400">Response Guaranteed in under 12 hours</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Dynamic Glassmorphism Form container */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Outer frame gradient line hover accent */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple rounded-3xl blur opacity-20 pointer-events-none" />

              <div className="relative rounded-3xl bg-glass border border-white/5 p-8 backdrop-blur-2xl overflow-hidden min-h-[480px] flex flex-col justify-center">
                
                {/* Switch inside form container based on submission state steps */}
                <AnimatePresence mode="wait">
                  {submitStep !== 3 ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Submitting Loading Overlay inside form */}
                      {isSubmitting && (
                        <div className="absolute inset-0 bg-bg-dark/90 backdrop-blur-md z-20 flex flex-col items-center justify-center space-y-4">
                          <Loader2 className="w-10 h-10 text-brand-cyan animate-spin" />
                          <div className="text-center">
                            <span className="font-mono text-xs text-brand-cyan tracking-widest block uppercase font-bold animate-pulse">
                              {submitStep === 1 ? "Checking syntax payload..." : "Encrypting network socket..."}
                            </span>
                            <span className="font-sans text-[11px] text-gray-500">Transmitting raw bytes to central node</span>
                          </div>
                        </div>
                      )}

                      {/* Inputs grid - Full Name and Email Address */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="space-y-2">
                          <label htmlFor="fullName" className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full bg-white/[0.02] border border-white/5 hover:border-white/10 focus:border-brand-cyan/40 focus:bg-white/[0.04] outline-none rounded-xl px-4 py-3.5 font-sans text-sm text-gray-100 transition-all placeholder:text-gray-600"
                          />
                        </div>

                        {/* Email Address Field */}
                        <div className="space-y-2">
                          <label htmlFor="email" className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="w-full bg-white/[0.02] border border-white/5 hover:border-white/10 focus:border-brand-cyan/40 focus:bg-white/[0.04] outline-none rounded-xl px-4 py-3.5 font-sans text-sm text-gray-100 transition-all placeholder:text-gray-600"
                          />
                        </div>
                      </div>

                      {/* Phone Number Field */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-white/[0.02] border border-white/5 hover:border-white/10 focus:border-brand-cyan/40 focus:bg-white/[0.04] outline-none rounded-xl px-4 py-3.5 font-sans text-sm text-gray-100 transition-all placeholder:text-gray-600"
                        />
                      </div>

                      {/* Message Field */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">
                          Message Context *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Describe your design parameters or system training goals..."
                          className="w-full bg-white/[0.02] border border-white/5 hover:border-white/10 focus:border-brand-cyan/40 focus:bg-white/[0.04] outline-none rounded-xl px-4 py-3.5 font-sans text-sm text-gray-100 transition-all placeholder:text-gray-600 resize-none"
                        />
                      </div>

                      {/* Action Submission controls */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="font-sans text-xs text-gray-500 font-light block">
                          * Denotes a mandatory entry. Securely guarded.
                        </span>
                        
                        <button
                          type="submit"
                          className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple text-white font-sans font-bold text-sm flex items-center justify-center gap-2 shadow-glow-cyan hover:shadow-glow-purple transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                        >
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </button>
                      </div>

                    </motion.form>
                  ) : (
                    <motion.div
                      key="contact-success"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      className="text-center py-6 space-y-6 flex flex-col items-center justify-center"
                    >
                      <div className="p-4 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-blue shadow-glow-cyan text-white animate-bounce">
                        <CheckCircle className="w-10 h-10 stroke-[2px]" />
                      </div>
                      
                      <div className="space-y-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/25 text-[10px] font-mono text-green-400 font-bold uppercase">
                          <Sparkles className="w-3 h-3" /> Connection Established
                        </span>
                        <h3 className="font-display text-3xl font-black text-white">
                          Message Dispatched
                        </h3>
                        <p className="font-sans text-sm text-gray-400 leading-relaxed font-light max-w-md mx-auto">
                          Our technology office has received your digital ticket payload securely. Our technical directors will analyze your details and get back to you inside 12 hours.
                        </p>
                      </div>

                      {/* Form reset controller */}
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="px-6 py-3 rounded-xl border border-white/5 bg-white/5 text-gray-300 font-sans font-bold text-sm tracking-wide hover:bg-white/10 hover:text-white hover:border-brand-cyan/20 transition-all cursor-pointer"
                      >
                        Transmit New Ticket
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
