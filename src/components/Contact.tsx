import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Instagram, Facebook } from "lucide-react";

interface ContactProps {
  selectedPackage: string;
}

export default function Contact({ selectedPackage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Sync pre-selected package from parent pricing trigger
  useEffect(() => {
    if (selectedPackage) {
      setFormData((prev) => ({
        ...prev,
        subject: `${selectedPackage} Plan Quote`,
        message: `Hi OctaveLand Team,\n\nI want to consult with you about launching a project on the "${selectedPackage}" package. Here are my startup goals...`
      }));
    }
  }, [selectedPackage]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Simple verification
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all requested fields.");
      return;
    }

    setStatus("submitting");

    // Simulate standard fast API delivery
    setTimeout(() => {
      setStatus("success");
      // Reset after submission
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 1500);
  };

  // Pre-filled WhatsApp link with custom encoded message
  const whatsappNumber = "2347080195126"; 
  const encodedText = encodeURIComponent(
    "Hi OctaveLand Technologies! I am looking to build a high-performance website / mobile app for my business."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Text and Direct Channels Info */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/5 px-3 py-1.5 rounded-full inline-block">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Let’s construct your next digital platform
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Have an exciting app concept, website redesign, or custom automation challenge? Send us a description using this portal, or reach out directly via WhatsApp for a priority design consultation.
              </p>
            </div>

            {/* Direct Channel Indicators */}
            <div className="space-y-4">
              {/* WhatsApp Button */}
              <a
                id="contact-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-3.5 p-4 rounded-xl border border-emerald-500/20 bg-emerald-50/50 hover:bg-emerald-50 hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-sm shadow-emerald-500/10">
                  <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.264 2.266 3.507 5.279 3.507 8.484-.003 6.66-5.339 11.999-11.95 11.999-2.005-.001-3.973-.504-5.714-1.463L0 24zm6.035-4.22c1.661.987 3.284 1.503 5.967 1.504 5.485 0 9.948-4.437 9.95-9.897.001-2.645-1.026-5.131-2.893-6.999-1.867-1.868-4.354-2.895-7.004-2.895-5.487 0-9.95 4.437-9.952 9.897-.001 2.152.56 4.25 1.624 6.096L2.6 21.447l3.492-1.667zm12.235-9.458c-.3-.15-1.77-.875-2.04-.975-.27-.1-.466-.15-.66.15-.195.3-.755.975-.927 1.175-.173.2-.345.225-.645.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.487-1.777-1.661-2.074.174-.3-.507-.945-.87-1.305-.333-.324-.627-.611-.795-.75-.165-.138-.285-.21-.39-.21-.105 0-.21.045-.315.15-.315.315-.81.795-.81 1.935s.825 2.235.945 2.4c.12.165 1.62 2.5 3.925 3.5 1.83.795 2.52.87 3.42.755.26-.035.81-.33 1.05-.69.24-.36.24-.67.165-.81-.075-.14-.27-.225-.57-.375z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="text-xs font-mono tracking-wider font-bold text-emerald-600 block uppercase">
                    Connect on WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                    Click to start priority consultation
                  </span>
                </div>
              </a>

              {/* Email Address Placeholder */}
              <div
                id="contact-email-card"
                className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-200 bg-slate-50/50"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-mono tracking-wider font-bold text-slate-400 block uppercase">
                    Direct Email Support
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    octavelandtechnologies@gmail.com
                  </span>
                </div>
              </div>

              {/* Instagram, Facebook, TikTok channels */}
              <div className="grid grid-cols-3 gap-3">
                <a
                  id="contact-instagram-link"
                  href="https://www.instagram.com/octaveland_technologies/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-rose-500/10 bg-rose-50/25 hover:bg-rose-50 hover:border-rose-500/30 transition-all duration-300 group"
                  title="Visit OctaveLand on Instagram"
                >
                  <Instagram className="w-5 h-5 text-rose-500 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono tracking-wider font-bold text-rose-600 uppercase">Instagram</span>
                </a>
                
                <a
                  id="contact-facebook-link"
                  href="https://www.facebook.com/profile.php?id=61590075822091"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-brand-blue/10 bg-brand-blue/5 hover:bg-brand-blue/10 hover:border-brand-blue/30 transition-all duration-300 group"
                  title="Visit OctaveLand on Facebook"
                >
                  <Facebook className="w-5 h-5 text-brand-blue mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono tracking-wider font-bold text-brand-blue uppercase">Facebook</span>
                </a>

                <a
                  id="contact-tiktok-link"
                  href="https://www.tiktok.com/@octaveland_technologies"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-slate-900/10 bg-slate-900/5 hover:bg-slate-900/10 hover:border-slate-900/30 transition-all duration-300 group"
                  title="Visit OctaveLand on TikTok"
                >
                  <svg className="w-5 h-5 text-slate-900 mb-1 group-hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.41-.43-.58-.67-.09 1.91-.12 3.83-.1 5.74 0 2.22-.53 4.47-1.92 6.18-1.55 1.97-4.14 2.97-6.59 2.72-2.31-.17-4.54-1.52-5.59-3.61-1.25-2.42-.9-5.56.91-7.59 1.48-1.72 3.86-2.5 6.09-2.07v4.06c-1.12-.34-2.39-.02-3.17.82-.74.78-.9 2.02-.37 2.99.55.93 1.69 1.47 2.76 1.37.9-.04 1.72-.68 1.94-1.54.12-.41.13-.85.12-1.28V.02z"/>
                  </svg>
                  <span className="text-[10px] font-mono tracking-wider font-bold text-slate-800 uppercase">TikTok</span>
                </a>
              </div>
            </div>

            {/* Micro-Location Proof */}
            <div className="pt-6 border-t border-slate-100 text-slate-400 text-xs font-mono">
              <span>● London & globally remote delivery partners</span>
            </div>
          </div>

          {/* Right Submit Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6.5 sm:p-8 shadow-sm">
              
              {status === "success" ? (
                /* Success screen component */
                <div id="contact-success-state" className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-10 h-10 stroke-[1.5]" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-xl font-bold text-slate-900">
                      Project Request Received!
                    </h3>
                    <p className="text-sm text-slate-600">
                      Thank you for contacting OctaveLand Technologies. Our principal architect will review your design requirements and email you within the next 4 to 8 hours.
                    </p>
                  </div>
                  <button
                    id="contact-reset-btn"
                    onClick={() => setStatus("idle")}
                    className="inline-flex px-5 py-2.5 rounded-lg text-xs font-bold text-brand-blue bg-brand-blue/10 hover:bg-brand-blue/15 transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                /* Interactive Form fields */
                <form id="contact-project-form" onSubmit={handleSubmit} className="space-y-5 text-left">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    Submit design brief
                  </h3>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-name" className="text-xs font-semibold text-slate-600 font-mono uppercase tracking-wider">
                      Your Full Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      disabled={status === "submitting"}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/5 transition-colors disabled:opacity-60"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-email" className="text-xs font-semibold text-slate-600 font-mono uppercase tracking-wider">
                      Business Email Address
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      disabled={status === "submitting"}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/5 transition-colors disabled:opacity-60"
                      required
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-subject" className="text-xs font-semibold text-slate-600 font-mono uppercase tracking-wider">
                      Project Subject
                    </label>
                    <select
                      id="form-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/5 transition-colors disabled:opacity-60"
                    >
                      <option value="General Inquiry">General Consultation</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Basic Plan Quote">Basic Quote Spec</option>
                      <option value="Standard Plan Quote">Standard Quote Spec</option>
                      <option value="Premium Plan Quote">Premium Quote Spec</option>
                    </select>
                  </div>

                  {/* Message textarea */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-message" className="text-xs font-semibold text-slate-600 font-mono uppercase tracking-wider">
                      Project Goals & Message
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share a short scope of your website or application goals..."
                      rows={4}
                      disabled={status === "submitting"}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/5 transition-colors disabled:opacity-60 resize-none"
                      required
                    />
                  </div>

                  {/* Error state alert panel */}
                  {status === "error" && (
                    <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-xs text-rose-600 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit button layout */}
                  <button
                    id="form-submit-btn"
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-900 hover:bg-brand-blue disabled:bg-slate-300 text-white text-sm font-semibold transition-all duration-200 cursor-pointer disabled:cursor-not-allowed shadow-md shadow-slate-900/10 hover:shadow-lg hover:shadow-brand-blue/15"
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin block" />
                        Analyzing and transmitting briefs...
                      </>
                    ) : (
                      <>
                        Submit Brief Securely
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
