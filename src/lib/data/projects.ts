import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";

export interface Project {
  id: string;
  company: string;
  year: string;
  title: string;
  description: string;
  achievements: string[];
  previewImage: string;
  liveUrl: string;
  technologies: string[];
  category: "web" | "mobile" | "design" | "marketing" | "ai" | "nothing";
  accentColor: string;
}

export const projects: Project[] = [
  // {
  //   id: "2",
  //   company: "TECH INNOVATIONS",
  //   year: "2023",
  //   title: "AI-Powered Analytics Dashboard",
  //   description: "Real-time analytics platform with AI-driven insights and interactive visualizations.",
  //   achievements: [
  //     "Reduced data processing time by 60%",
  //     "Implemented real-time visualization features",
  //     "Integrated with 5 major data sources",
  //   ],
  //   previewImage: lightSaasLandingPage.src,
  //   liveUrl: "/projects/2",
  //   technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
  //   category: "web",
  //   accentColor: "#FF6B6B",
  // },
  // {
  //   id: "3",
  //   company: "GLOBAL FINANCE",
  //   year: "2022",
  //   title: "Fintech Mobile Application",
  //   description: "Cross-platform mobile app for personal finance management with budgeting tools.",
  //   achievements: [
  //     "Achieved 100,000+ downloads in first month",
  //     "4.8/5 average rating on app stores",
  //     "Reduced transaction processing time by 45%",
  //   ],
  //   previewImage: lightSaasLandingPage.src,
  //   liveUrl: "/projects/3",
  //   technologies: ["React Native", "Firebase", "Redux", "Stripe API"],
  //   category: "mobile",
  //   accentColor: "#6772E5",
  // },
  // {
  //   id: "4",
  //   company: "HEALTH TECH",
  //   year: "2023",
  //   title: "Telemedicine Platform",
  //   description: "HIPAA-compliant video consultation platform for healthcare providers.",
  //   achievements: [
  //     "Facilitated 50,000+ virtual appointments",
  //     "Reduced patient wait times by 75%",
  //     "99.9% uptime with secure data handling",
  //   ],
  //   previewImage: lightSaasLandingPage.src,
  //   liveUrl: "/projects/4",
  //   technologies: ["Angular", "WebRTC", "Node.js", "PostgreSQL"],
  //   category: "web",
  //   accentColor: "#45B7D1",
  // },
  // {
  //   id: "5",
  //   company: "RETAIL GIANT",
  //   year: "2022",
  //   title: "E-commerce Redesign",
  //   description: "Complete UX/UI overhaul of a major retail platform with focus on mobile experience.",
  //   achievements: [
  //     "Increased mobile conversions by 65%",
  //     "Reduced cart abandonment by 40%",
  //     "Improved page load speed by 3x",
  //   ],
  //   previewImage: lightSaasLandingPage.src,
  //   liveUrl: "/projects/5",
  //   technologies: ["Shopify", "Liquid", "JavaScript", "SCSS"],
  //   category: "design",
  //   accentColor: "#F7B801",
  // },
  // {
  //   id: "6",
  //   company: "MEDIA GROUP",
  //   year: "2023",
  //   title: "Content Management System",
  //   description: "Custom CMS for a media company handling thousands of articles and multimedia content.",
  //   achievements: [
  //     "Streamlined content workflow by 70%",
  //     "Reduced publishing time from days to minutes",
  //     "Integrated with 12 distribution channels",
  //   ],
  //   previewImage: lightSaasLandingPage.src,
  //   liveUrl: "/projects/6",
  //   technologies: ["PHP", "Laravel", "MySQL", "Redis", "AWS"],
  //   category: "web",
  //   accentColor: "#7209B7",
  // },
  // {
  //   id: "7",
  //   company: "TRAVEL TECH",
  //   year: "2022",
  //   title: "Trip Planning Application",
  //   description: "AI-powered travel planner with personalized itineraries and booking integration.",
  //   achievements: [
  //     "Generated 25,000+ custom itineraries",
  //     "Partnered with 150+ local experience providers",
  //     "Achieved 92% user satisfaction rate",
  //   ],
  //   previewImage: lightSaasLandingPage.src,
  //   liveUrl: "/projects/7",
  //   technologies: ["Python", "Django", "React", "Google Maps API"],
  //   category: "web",
  //   accentColor: "#3A86FF",
  // },
  // {
  //   id: "8",
  //   company: "EDUTECH",
  //   year: "2023",
  //   title: "Learning Management System",
  //   description: "Comprehensive LMS with interactive content, assessments, and progress tracking.",
  //   achievements: [
  //     "Onboarded 50+ educational institutions",
  //     "Improved student engagement by 45%",
  //     "Reduced administrative workload by 60%",
  //   ],
  //   previewImage: lightSaasLandingPage.src,
  //   liveUrl: "/projects/8",
  //   technologies: ["Next.js", "GraphQL", "MongoDB", "AWS"],
  //   category: "web",
  //   accentColor: "#38B000",
  // },
  // {
  //   id: "9",
  //   company: "GAMING STUDIO",
  //   year: "2022",
  //   title: "Mobile Game UI Design",
  //   description: "Complete UI/UX design for a popular mobile game with millions of players.",
  //   achievements: [
  //     "Increased player retention by 35%",
  //     "Improved in-game purchases by 50%",
  //     "Won 'Best Mobile Game UI' award",
  //   ],
  //   previewImage: lightSaasLandingPage.src,
  //   liveUrl: "/projects/9",
  //   technologies: ["Figma", "Adobe XD", "Unity", "Blender"],
  //   category: "design",
  //   accentColor: "#FB5607",
  // },
];
