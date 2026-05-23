import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_PROJECTS } from "../data";
import { ArrowUpRight, Monitor, Laptop, Smartphone, Sparkles, Star } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Website" | "Mobile App">("All");

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Visual gradients */}
      <div className="absolute top-[40%] right-0 w-96 h-96 bg-brand-amber/5 blur-3xl -z-10 rounded-full" />
      <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-brand-violet/5 blur-3xl -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl text-left space-y-4">
            <span className="text-xs font-bold tracking-widest text-brand-violet uppercase bg-brand-violet/5 px-3 py-1.5 rounded-full inline-block">
              Our Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Crafted products that validate businesses
            </h2>
            <p className="text-base text-slate-600">
              A curated look into modern platforms and high-speed applications we have shipped for local businesses and hyper-growing startups.
            </p>
          </div>

          {/* Filtering Control Bar */}
          <div className="flex items-center gap-1.5 bg-white border border-slate-200/80 p-1.5 rounded-2xl self-start shadow-sm shrink-0">
            {(["All", "Website", "Mobile App"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === filter
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {filter === "All" ? "All Apps" : filter === "Website" ? "Websites" : "Mobile Apps"}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isWeb = project.category === "Website";
              
              // Custom colors based on project name for beautiful unique identity
              const isCity = project.id === "city-real-estate";
              const isGym = project.id === "gym-life";
              const isFoody = project.id === "foody";
              const isDashboard = project.id === "ecommerce-dashboard";
              
              const accentBg = isCity 
                ? "bg-gradient-to-tr from-brand-blue to-teal-400" 
                : isGym 
                ? "bg-gradient-to-tr from-brand-violet to-rose-400" 
                : isFoody 
                ? "bg-gradient-to-tr from-brand-teal to-brand-amber" 
                : "bg-gradient-to-tr from-slate-800 to-slate-950";

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-2xl border border-slate-200/70 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300/80 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Dynamic Screenshot/Visual Representation area */}
                  <div className={`h-64 sm:h-72 w-full ${accentBg} relative p-6 flex flex-col justify-between overflow-hidden shrink-0`}>
                    {/* Background floating abstract elements inside screen mock */}
                    <div className="absolute inset-0 bg-black/5 opacity-50 backdrop-blur-[1px]" />
                    
                    {/* Header stats & badge */}
                    <div className="flex justify-between items-center z-10 w-full">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider text-slate-900 bg-white/95 uppercase shadow-sm">
                        {project.category}
                      </span>
                      {project.stats && (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-800 bg-brand-amber text-slate-900 px-2.5 py-1 rounded-full font-mono shadow-sm">
                          <Star className="w-3 h-3 fill-slate-900 shrink-0" />
                          {project.stats}
                        </span>
                      )}
                    </div>

                    {/* Highly polished visual layout representations */}
                    <div className="relative w-full h-[190px] flex items-end justify-center z-10">
                      {isWeb ? (
                        /* Website Browser Frame */
                        <div className="w-11/12 bg-white rounded-t-lg shadow-2xl border border-slate-200/50 overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          {/* Browser Toolbar */}
                          <div className="flex items-center gap-1 px-2 py-1.5 border-b border-slate-100 bg-slate-50">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-150" />
                          </div>
                          <img src={project.screenshotUrl} alt={project.title} className="w-full h-auto object-cover" />
                        </div>
                      ) : (
                        /* Phone Frame */
                        <div className="w-44 bg-slate-900 rounded-t-3xl shadow-2xl border-x-[4px] border-t-[4px] border-slate-800 overflow-hidden transform translate-y-3 group-hover:translate-y-1 transition-transform duration-300">
                          <div className="w-14 h-4 rounded-full bg-black mx-auto mt-1.5 mb-1.5" />
                          <img src={project.screenshotUrl} alt={project.title} className="w-full h-auto object-cover" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Descriptions, content & Tech stack */}
                  <div className="p-6.5 flex flex-col justify-between flex-grow">
                    <div className="space-y-3">
                      <div className="flex gap-1.5 items-center text-slate-400 text-xs font-mono uppercase">
                        {isWeb ? <Laptop className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
                        <span>{project.category} DELIVERABLE</span>
                      </div>
                      <h3 className="font-bold text-xl text-slate-900 group-hover:text-brand-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-1.5 flex-1 select-none">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded-md text-[11px] font-semibold text-slate-500 bg-slate-100 border border-slate-200/50">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4.5 shrink-0">
                        {project.link && (
                          <a
                            id={`portfolio-live-${project.id}`}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            referrerPolicy="no-referrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-violet transition-colors cursor-pointer group/live uppercase tracking-wider"
                          >
                            View Live
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                          </a>
                        )}
                        <button
                          id={`portfolio-details-${project.id}`}
                          onClick={handleScrollToContact}
                          className="inline-flex items-center gap-0.5 text-xs font-bold text-slate-900 hover:text-brand-blue transition-colors cursor-pointer group/link uppercase tracking-wider shrink-0"
                        >
                          Build similar
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
