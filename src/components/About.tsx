import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Compass, Zap, Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function About() {
  const [currentTesti, setCurrentTesti] = useState(0);

  const prevTestimonial = () => {
    setCurrentTesti((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTesti((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const philosophies = [
    {
      title: "Radical Simplicity",
      description: "We hate bloat. We translate complex engineering challenges into smooth, straightforward digital tools that anyone can operate.",
      icon: Compass,
      color: "text-brand-blue bg-brand-blue/10"
    },
    {
      title: "Elite Launch Velocity",
      description: "Speed is a feature. We utilize lightweight Vite, modern React frameworks, and clean standard packages to launch faster.",
      icon: Zap,
      color: "text-brand-amber bg-brand-amber/10"
    },
    {
      title: "Cooperative Mindset",
      description: "We don't operate as detached contractors. We immerse ourselves in your brand specs, serving as true technology partners.",
      icon: Heart,
      color: "text-brand-teal bg-brand-teal/10"
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background visual shapes */}
      <div className="absolute top-0 left-12 w-64 h-64 bg-brand-teal/5 blur-2xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Mission Statement */}
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-teal uppercase bg-brand-teal/10 px-3 py-1.5 rounded-full inline-block">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A design-forward software engineering group
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Founded on the premise of high performance and structural utility, **OctaveLand Technologies** is an elite agency designing modern web hubs and responsive mobile systems for businesses and ambitious startups.
              </p>
              <p>
                Whether you need to capture your audience with a high-conversion marketing site, or engage mobile users via responsive app ecosystems, we manage the entire technological landscape.
              </p>
            </div>

            {/* Mission Panel Block */}
            <div className="bg-gradient-to-tr from-brand-blue to-brand-violet rounded-2xl p-6.5 text-white shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-12 -translate-y-12" />
              <span className="text-[10px] font-mono tracking-widest text-brand-amber font-bold uppercase block mb-1">
                Our Core Mission
              </span>
              <p className="font-medium text-base sm:text-lg leading-snug">
                “We build user-friendly digital solutions that help businesses establish a strong online presence and improve customer engagement.”
              </p>
            </div>
          </div>

          {/* Right Column: Philosophies & Testimonials */}
          <div className="lg:col-span-7 space-y-12 w-full">
            {/* Principles list */}
            <div className="space-y-6">
              <h3 className="text-xs font-mono tracking-widest text-slate-400 font-bold uppercase text-left">
                Our Guiding Philosophies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {philosophies.map((phil) => {
                  const Icon = phil.icon;
                  return (
                    <div key={phil.title} className="bg-white rounded-xl p-5 border border-slate-200/50 shadow-sm flex gap-4 items-start text-left">
                      <div className={`w-10 h-10 rounded-lg ${phil.color} flex items-center justify-center shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                          {phil.title}
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {phil.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Small Testimonials slider component */}
            <div className="bg-white rounded-2xl border border-slate-200/70 p-6.5 shadow-sm space-y-5 text-left w-full relative overflow-hidden">
              {/* Subtle Nigerian-inspired accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-white to-emerald-600 opacity-80" />
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest text-slate-400 font-bold uppercase">
                  Local Client Success Stories
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brand-amber text-brand-amber shrink-0" />
                  ))}
                </div>
              </div>

              {/* Render Selected Testimony */}
              <div className="relative min-h-[140px] flex flex-col justify-between">
                <p className="text-slate-600 text-sm sm:text-base italic leading-relaxed mb-4">
                  “{TESTIMONIALS[currentTesti].content}”
                </p>
                <div className="flex items-center justify-between gap-4 mt-auto">
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">
                      {TESTIMONIALS[currentTesti].name}
                    </h5>
                    <span className="text-xs text-slate-500">
                      {TESTIMONIALS[currentTesti].role}, {TESTIMONIALS[currentTesti].company}
                    </span>
                  </div>
                  
                  {/* Slider Control Arrows */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      id="testi-prev-btn"
                      onClick={prevTestimonial}
                      className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      id="testi-next-btn"
                      onClick={nextTestimonial}
                      className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
