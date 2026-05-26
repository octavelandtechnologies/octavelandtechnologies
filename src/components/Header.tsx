import { useState, useEffect, MouseEvent } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);

      if (location.pathname === "/") {
        const sections = ["hero", "services", "portfolio", "pricing", "about", "contact"];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
            }
          }
        }
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Pricing", href: "/#pricing" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);

    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.substring(2);
      
      if (location.pathname === "/") {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      } else {
        navigate("/", { state: { targetId } });
      }
    }
  };

  // Effect to handle scrolling when navigating back to home from another page
  useEffect(() => {
    if (location.pathname === "/" && location.state?.targetId) {
      const targetId = location.state.targetId;
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }, 100);
      // Clear state so it doesn't scroll again on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled || location.pathname !== "/"
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm py-4"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            id="header-logo-link"
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setIsOpen(false);
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md shadow-brand-blue/10 group-hover:scale-105 transition-transform overflow-hidden">
              <img src="/logo.png" alt="OctaveLand Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight text-slate-900 group-hover:text-brand-blue transition-colors">
                OctaveLand
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase -mt-1 font-medium">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = 
                (link.href.startsWith("/#") && activeSection === link.href.substring(2)) ||
                (location.pathname === link.href);
              
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleLinkClick(e as any, link.href)}
                  className={`text-sm font-medium transition-colors relative py-1.5 ${
                    isActive
                      ? "text-brand-blue font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              id="header-cta-btn"
              to="/#contact"
              onClick={(e) => handleLinkClick(e as any, "/#contact")}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-brand-blue shadow-sm hover:shadow-brand-blue/20 transition-all duration-200 active:scale-[0.98]"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div id="mobile-nav-menu" className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl py-6 px-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = 
                (link.href.startsWith("/#") && activeSection === link.href.substring(2)) ||
                (location.pathname === link.href);

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleLinkClick(e as any, link.href)}
                  className={`text-base font-medium py-2 px-3 rounded-xl transition-colors ${
                    isActive
                      ? "text-brand-blue bg-brand-blue/5 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <hr className="border-slate-100 my-1" />
            <Link
              id="mobile-cta-btn"
              to="/#contact"
              onClick={(e) => handleLinkClick(e as any, "/#contact")}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-base font-semibold text-white bg-brand-blue hover:bg-brand-violet transition-colors shadow-md shadow-brand-blue/15"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
