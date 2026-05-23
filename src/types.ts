export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to look up Lucide icons dynamically
  features: string[];
  colorClass: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  colorClass: string;
  buttonText: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: "Website" | "Mobile App";
  description: string;
  screenshotUrl?: string;
  techStack: string[];
  stats?: string; // High-level outcome, e.g., "+150% conversion" or "4.9★ App Store"
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  content: string;
}
