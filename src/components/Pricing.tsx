import { PRICING_PACKAGES } from "../data";
import { Check, Info, Sparkles } from "lucide-react";

interface PricingProps {
  onSelectPackage: (packageName: string) => void;
}

export default function Pricing({ onSelectPackage }: PricingProps) {
  
  const handleScrollToContact = (packageName: string) => {
    onSelectPackage(packageName);
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-white relative">
      {/* Background shape */}
      <div className="absolute top-[20%] right-0 w-80 h-80 bg-brand-violet/5 blur-3xl -z-10 rounded-full" />
      <div className="absolute bottom-[20%] left-0 w-80 h-80 bg-brand-blue/5 blur-3xl -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/5 px-3 py-1.5 rounded-full inline-block">
            Straightforward Quotes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Predictable Plans, Outstanding Execution
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose the package matches your stage. No hidden maintenance feeds, no complex backend jargon—just pristine code and elegant interfaces.
          </p>
        </div>

        {/* Pricing Matrix / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2">
          {PRICING_PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;
            
            // Customized styling based on popularity
            const borderStyle = isPopular
              ? "border-2 border-brand-blue bg-white shadow-xl relative scale-102 z-10"
              : "border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 shadow-sm";

            const btnStyle = isPopular
              ? "bg-brand-blue text-white hover:bg-brand-blue/90 shadow-md shadow-brand-blue/15"
              : "bg-slate-900 text-white hover:bg-slate-800";

            return (
              <div
                key={pkg.id}
                className={`flex flex-col rounded-2xl p-8 transition-all duration-300 hover:shadow-lg ${borderStyle}`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-blue to-brand-violet text-white text-xs font-bold py-1.5 px-4.5 rounded-full flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 fill-white" />
                    Most Popular Choice
                  </div>
                )}

                {/* Card Title & Cost Header */}
                <div className="mb-6">
                  <span className="text-xs font-mono tracking-widest text-slate-400 font-bold uppercase block mb-1">
                    {pkg.name} PLAN
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[32px] overflow-hidden">
                    {pkg.description}
                  </p>
                  
                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 font-mono">
                      / {pkg.period}
                    </span>
                  </div>
                </div>

                {/* Features Divider */}
                <hr className="border-slate-200/60 my-5" />

                {/* Included Outcomes Bullet List */}
                <div className="flex-grow">
                  <span className="text-xs font-mono tracking-widest text-slate-400 font-bold uppercase block mb-4">
                    What’s Included
                  </span>
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feat, index) => (
                      <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Trigger */}
                <button
                  id={`pricing-action-${pkg.id}`}
                  onClick={() => handleScrollToContact(pkg.name)}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98] cursor-pointer mt-auto ${btnStyle}`}
                >
                  {pkg.buttonText}
                </button>
                
                {/* Visual guarantee tag */}
                <span className="text-[10px] text-center text-slate-400 font-medium block mt-3 flex items-center justify-center gap-1">
                  <Info className="w-3 h-3 text-slate-300" />
                  No long-term contracts. Transparent consulting.
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
