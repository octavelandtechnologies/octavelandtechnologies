import { MouseEvent } from "react";
import { Terminal, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: (targetElement as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-slate-800">
          
          {/* Logo & Info */}
          <div className="text-left space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                <img src="/logo.png" alt="OctaveLand Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                OctaveLand Technologies
              </span>
            </div>
            <p className="text-sm max-w-sm">
              We engineer beautiful web and responsive mobile application interfaces. Handcoded from design mockups to robust production architectures.
            </p>
          </div>

          {/* Quick links list */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div>
            <span>© {currentYear} OctaveLand Technologies. All rights reserved. </span>
            <span className="inline-block mx-1">|</span>
            <span className="font-mono text-[10px] text-slate-500">Fast & Responsive UX</span>
          </div>

          {/* Back to top btn */}
          <button
            id="footer-back-to-top"
            onClick={handleScrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-brand-blue text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
