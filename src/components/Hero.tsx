import { motion } from "motion/react";
import { ArrowRight, Sparkles, CheckCircle, Laptop, Smartphone, Code } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-brand-blue/10 to-transparent blur-3xl -z-10 rounded-full" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-gradient-to-tr from-brand-violet/5 to-transparent blur-2xl -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col space-y-8 text-left z-10">
            {/* Tag / Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-start items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-blue bg-brand-blue/10 border border-brand-blue/15 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Empowering Businesses Globally
            </motion.div>

            {/* Bold Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
              >
                We build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-violet selection:bg-brand-blue/20">
                  fast, modern
                </span>{" "}
                websites and mobile apps
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed"
              >
                OctaveLand Technologies merges elegant design with robust engineering. We craft bespoke, high-performance digital products that scale businesses and captivate users.
              </motion.p>
            </div>

            {/* CTA Option Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                id="hero-cta-project"
                onClick={() => scrollToSection("contact")}
                className="inline-flex justify-center items-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-brand-blue hover:bg-brand-blue/90 shadow-md shadow-brand-blue/15 hover:shadow-lg hover:shadow-brand-blue/20 active:translate-y-[1px] transition-all duration-200 cursor-pointer"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                id="hero-cta-portfolio"
                onClick={() => scrollToSection("portfolio")}
                className="inline-flex justify-center items-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm active:translate-y-[1px] transition-all duration-200 cursor-pointer"
              >
                View Portfolio
              </button>
            </motion.div>

            {/* Tiny Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-500 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-brand-teal" />
                <span>Standard SEO & speed codes</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-brand-teal" />
                <span>Responsive layouts included</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-brand-teal" />
                <span>Launch support setup</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Column (Interactive Workspace Demo) */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:pl-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[500px] aspect-[1.12] rounded-2xl bg-slate-100/50 p-4 border border-slate-200/60 shadow-inner"
            >
              {/* Mock Laptop/Browser Interface */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute top-6 left-6 right-20 bg-white rounded-xl shadow-xl border border-slate-200/80 overflow-hidden z-20"
              >
                {/* Browser top bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-100">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block" />
                  </div>
                  <div className="w-40 h-4 rounded bg-slate-200/60 text-[9px] font-mono text-slate-400 flex items-center justify-center">
                    octaveland.com/apex-app
                  </div>
                  <Laptop className="w-3.5 h-3.5 text-slate-400" />
                </div>
                {/* Browser contents */}
                <div className="p-4 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-3 w-20 bg-slate-200 rounded mb-1" />
                      <div className="h-5 w-32 bg-slate-900 rounded" />
                    </div>
                    <div className="h-7 w-12 rounded bg-brand-blue/10 text-[10px] text-brand-blue font-bold flex items-center justify-center">
                      Active
                    </div>
                  </div>
                  {/* Mock Chart SVG */}
                  <div className="h-16 w-full bg-slate-50 rounded-lg flex items-end p-2 border border-slate-100">
                    <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4062fb" stopOpacity="0.2"/>
                          <stop offset="100%" stopColor="#4062fb" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,25 Q15,10 30,18 T60,5 T90,12 T100,2 L100,30 L0,30 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0,25 Q15,10 30,18 T60,5 T90,12 T100,2"
                        fill="none"
                        stroke="#4062fb"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 flex-1 bg-slate-100 rounded flex items-center justify-center text-[9px] font-semibold text-slate-500">
                      Overview
                    </div>
                    <div className="h-6 flex-1 bg-brand-violet text-white rounded flex items-center justify-center text-[9px] font-semibold">
                      Live Sales
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mock Mobile Phone Interface (Overlapping) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 right-6 w-44 bg-slate-950 rounded-2xl shadow-2xl border-4 border-slate-900 overflow-hidden z-30 aspect-[0.52]"
              >
                {/* Mobile screen details */}
                <div className="flex justify-center pt-2 pb-1.5 bg-slate-950 relative">
                  <span className="w-12 h-3.5 rounded-full bg-black block" />
                </div>
                <div className="p-3 space-y-2.5 text-white">
                  <div className="flex justify-between items-center text-[9px] text-slate-400">
                    <span>PulseFit™ App</span>
                    <Smartphone className="w-2.5 h-2.5" />
                  </div>
                  <div className="h-0.5 w-6 bg-brand-amber rounded" />
                  <div className="text-xs font-bold leading-tight">
                    Daily Strength Burn
                  </div>
                  {/* Dynamic pulse graph */}
                  <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 space-y-1">
                    <div className="flex justify-between text-[7px] text-slate-400">
                      <span>Live Heart Rate</span>
                      <span className="text-emerald-400 font-mono">128 bpm</span>
                    </div>
                    <div className="h-6 flex gap-[2px] items-end justify-center">
                      {[15, 8, 24, 12, 18, 30, 26, 14, 20, 28, 16, 22].map((val, i) => (
                        <motion.span
                          key={i}
                          animate={{ height: [val, val * 0.4, val] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                          className="w-1.5 rounded-t bg-gradient-to-t from-brand-violet to-brand-teal"
                          style={{ height: `${val}px` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="h-6 w-full rounded-lg bg-brand-blue flex items-center justify-center text-[9px] font-semibold">
                    Complete Workout
                  </div>
                </div>
              </motion.div>

              {/* Code Chip Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-10 left-6 bg-white border border-slate-200 text-slate-800 text-[10px] font-mono p-2.5 rounded-xl flex items-center gap-2 shadow-lg z-40"
              >
                <div className="w-5 h-5 rounded-md bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <Code className="w-3 h-3" />
                </div>
                <span>React Native & tsx templates optimized</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
