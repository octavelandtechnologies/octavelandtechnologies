import { ServiceItem, PricingPackage, PortfolioProject, Testimonial } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "High-performance, responsive websites designed to engage your customers and drive conversions. We build modern marketing platforms, robust e-commerce solutions, and custom SaaS web applications.",
    iconName: "Globe",
    features: [
      "Custom UI/UX & Responsive Layouts",
      "Search Engine Optimization (SEO) Built-in",
      "Vite & React Fast-Loading Architecture",
      "Dynamic Content Management Integration",
      "Interactive Dashboards & Custom APIs",
      "High-Fidelity Animations & micro-interactions"
    ],
    colorClass: "brand-blue"
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description: "Sleek, high-performance native mobile applications built for both iOS and Android. From initial wireframes to App Store and Google Play submissions, we develop smooth, custom mobile experiences.",
    iconName: "Smartphone",
    features: [
      "Cross-Platform Flutter & React Native Apps",
      "Sleek Offline-First Device Sync",
      "Biometrics & Modern Push Notifications",
      "Tailored Gesture & Native Touch Target UX",
      "Optimal Camera, GPS, & Sensor Inputs Integration",
      "Responsive Fluid Animations"
    ],
    colorClass: "brand-violet"
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "basic",
    name: "Basic",
    price: "₦40,000 - ₦99,000",
    period: "one-time",
    description: "For small businesses looking to establish a highly professional online presence.",
    features: [
      "Responsive 5-Page Marketing Website",
      "Clean visual identity alignment",
      "Contact form with email auto-delivery",
      "Basic SEO strategy & layout tags",
      "15 days of dedicated post-launch support",
      "Self-managed CMS to update text & images"
    ],
    colorClass: "brand-teal",
    buttonText: "Start Basic Project"
  },
  {
    id: "standard",
    name: "Standard",
    price: "₦100,000 - ₦250,000",
    period: "one-time",
    description: "For growing businesses demanding premium UI design, fast loaders, & custom CMS.",
    features: [
      "Complex Multi-page Responsive Website",
      "Headless CMS integration (Blog, Products)",
      "Standard database storage & user flow logic",
      "Enhanced SEO & Google Analytics reporting",
      "30 days of standard post-launch support",
      "Social media feeds and WhatsApp chat integration"
    ],
    isPopular: true,
    colorClass: "brand-blue",
    buttonText: "Launch Growing Plan"
  },
  {
    id: "premium",
    name: "Premium",
    price: "₦300,000+",
    period: "upwards",
    description: "For startups and advanced custom solutions requiring full-stack apps or native mobile designs.",
    features: [
      "Custom Native iOS & Android Mobile App",
      "Or Enterprise Web Application / Dashboards",
      "High-security database sync with real-time updates",
      "Tailored API endpoints & third-party connectors",
      "90 days of VIP tech SLA and product updates",
      "High-impact motion design and visual interactive cards"
    ],
    colorClass: "brand-violet",
    buttonText: "Get Enterprise Quote"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "city-real-estate",
    title: "City Real Estate",
    category: "Website",
    description: "A premium, fully responsive real estate visual portal designed for luxury listings, featuring rich filtering systems, interactive map integrations, and high-performance layout transitions.",
    techStack: ["React", "Sass", "Google Maps API", "Bootstrap"],
    stats: "Lighthouse Speed Score 98",
    screenshotUrl: "/portfolio/real_estate.png",
    link: "https://themewagon.github.io/city-real-estate/"
  },
  {
    id: "gym-life",
    title: "Gym Life",
    category: "Mobile App",
    description: "A robust fitness class booking and customized workout tracking application featuring interactive exercise meters, routine templates, and elegant user dashboard hubs.",
    techStack: ["React Native", "Tailwind CSS", "Recharts", "Node.js"],
    stats: "4.9★ App Store rating",
    screenshotUrl: "/portfolio/gym_life.png",
    link: "https://themewagon.github.io/gymlife/"
  },
  {
    id: "foody",
    title: "Foody Organics",
    category: "Mobile App",
    description: "A fast, organic-grade ordering app interface featuring native cart caching, category carousels, instant checkout pipelines, and interactive delivery state indicators.",
    techStack: ["Flutter", "Tailwind CSS", "Node.js", "MongoDB"],
    stats: "+220% Delivery Optimization",
    screenshotUrl: "/portfolio/organic_food.png",
    link: "https://themewagon.github.io/foody2/"
  },
  {
    id: "ecommerce-dashboard",
    title: "Ecommerce Dashboard",
    category: "Website",
    description: "An advanced, enterprise-grade admin console featuring real-time transaction pipelines, automated sales dashboards with dynamic D3 plots, and dark/light mode customization parameters.",
    techStack: ["React", "D3.js", "Tailwind CSS", "Vite"],
    stats: "Supports 15,000+ merchants",
    screenshotUrl: "/portfolio/ecommerce_dashboard.png",
    link: "https://prium.github.io/phoenix/v1.24.0/index.html?theme-control=true&color-scheme=dark"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Chinedu Okoro",
    role: "CEO & Co-founder",
    company: "Lagos Fintech Solutions",
    content: "OctaveLand Technologies transformed our slow legacy portal into an ultra-fast headless React powerhouse. Our transaction volume handled during peak hours increased by 65% in the first month. Their understanding of the Nigerian digital landscape is unmatched."
  },
  {
    id: "testi-2",
    name: "Amina Yusuf",
    role: "Product Director",
    company: "Zaria Organics",
    content: "The mobile app they delivered is incredibly sleek and handles our patchy network conditions perfectly with its offline sync. Our customers in the North love the smooth ordering flow. They took care of everything from the initial design sprint to the Play Store launch."
  },
  {
    id: "testi-3",
    name: "Tunde Balogun",
    role: "Managing Director",
    company: "Eko Real Estate Group",
    content: "Working with OctaveLand was the best decision for our luxury listing portal. The visual transitions and interactive maps have made our property showcases a major hit with international investors. High-quality engineering delivered right here in Nigeria."
  }
];
