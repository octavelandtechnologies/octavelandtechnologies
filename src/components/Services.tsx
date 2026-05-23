import { ComponentType } from "react";
import { motion } from "motion/react";
import { SERVICES } from "../data";
import { Globe, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";

// Helper map to translate iconName string to Lucide component
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Globe: Globe,
  Smartphone: Smartphone,
};

export default function Services() {
  const handleScrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      window.scrollTo({
        top: contact.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Background shape */}
      <div className="absolute top-[30%] left-0 w-80 h-80 bg-brand-teal/5 blur-3xl -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/5 px-3 py-1.5 rounded-full inline-block">
            What We Do Best
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Digital Construction
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We operate as your technical launch partners. Whether scaling product lines or building clean online portals, our focus is delivering high-performance results.
          </p>
        </div>

        {/* Services Grid (Website and Mobile App Focus) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Globe;
            
            // Determine border & highlight colors based on service color spec
            const isBlue = service.colorClass === "brand-blue";
            const colorClassText = isBlue ? "text-brand-blue" : "text-brand-violet";
            const colorClassBg = isBlue ? "bg-brand-blue/10" : "bg-brand-violet/10";
            const colorClassHoverBorder = isBlue ? "hover:border-brand-blue/50" : "hover:border-brand-violet/50";
            const colorClassBadgeBg = isBlue ? "bg-brand-blue/5" : "bg-brand-violet/5";
            const colorClassButton = isBlue ? "bg-brand-blue hover:bg-brand-blue/90" : "bg-brand-violet hover:bg-brand-violet/90";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`flex flex-col h-full bg-slate-50/60 p-8 rounded-2xl border border-slate-200/60 shadow-sm transition-all duration-300 ${colorClassHoverBorder}`}
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl ${colorClassBg} flex items-center justify-center ${colorClassText} shrink-0 shadow-sm`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <span className={`inline-block text-[10px] font-mono tracking-wider font-semibold uppercase mt-0.5 px-2 py-0.5 rounded ${colorClassBadgeBg} ${colorClassText}`}>
                      {isBlue ? "Web Tech Stack" : "Native & Hybrid Mobile"}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-3.5 mb-8">
                  <h4 className="text-xs font-mono tracking-widest text-slate-400 font-bold uppercase">
                    Deliverables & Standards
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${colorClassText}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Trigger */}
                <button
                  id={`services-action-${service.id}`}
                  onClick={handleScrollToContact}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all duration-200 active:scale-[0.98] mt-auto cursor-pointer ${colorClassButton}`}
                >
                  Consult on {service.title}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
