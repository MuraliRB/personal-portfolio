import { getTotalExperienceLabel, getProjectCount } from "./resume-utils";

export const profile = {
	name: 'Murali R Bharadwaj',
	title: 'Full Stack Developer',
	subtitle: 'React.js · Next.js · Node.js · TypeScript',
	tagline: `Full stack developer with ${getTotalExperienceLabel()} years building performant, type-safe web applications — from pixel-accurate React interfaces to Next.js server actions and Node.js APIs.`,
	location: 'Bengaluru, India',
	email: 'muralirb1999@gmail.com',
	phone: '+91 9113635554',
	github: 'https://github.com/MuraliRB',
	linkedin: 'https://www.linkedin.com/in/murali-r-bharadwaj-2611111b5/',
	resumeUrl: '/resume.pdf',
};

export const stats = [
  { label: "Years of experience", value: getTotalExperienceLabel() },
  { label: "UI performance gained", value: "60%" },
  { label: "Fewer client API calls", value: "35%" },
  { label: "Production apps shipped", value: String(getProjectCount()) },
];

export const about = [
  "I'm a full stack developer specialized in the React ecosystem — React.js, Next.js, and TypeScript on the front end, backed by Node.js, MongoDB, and Prisma/Drizzle on the back end.",
  "Currently building government and defense-grade web applications at Globals ITES, where I focus on type-safe architecture, real-time data visualization, and shaving milliseconds off render paths.",
  "I care about interfaces that feel instant and codebases that stay maintainable as they grow — reusable components, strict typing, and CI/CD pipelines that don't get in the way.",
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Material UI", "Shadcn UI", "HTML5"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "MongoDB", "Prisma ORM", "Drizzle ORM"],
  },
  {
    label: "DevOps & Tools",
    skills: ["Docker", "Nginx", "Jenkins", "Git & GitHub"],
  },
];

export const experience = [
  {
    role: "Software Engineer (Frontend)",
    company: "Globals ITES",
    period: "Dec 2022 — Present",
    points: [
      "Built and shipped 3 production web applications for government and defense clients using React.js, Next.js, and TypeScript.",
      "Developed reusable component libraries that improved modularity and cut feature delivery time across projects.",
      "Optimized rendering paths and re-render behavior, improving UI performance by up to 60% across applications.",
      "Introduced strict TypeScript typing on a new dashboard, improving maintainability by 40%.",
    ],
  },
];

export const projects = [
  {
    name: "Cyber Situational Overview Dashboard",
    context: "AERO INDIA 2025",
    icon: "cyber" as const,
    // Not publicly deployed (defense-grade); add URL here once available.
    liveUrl: null as string | null,
    description:
      "Real-time cyber threat monitoring dashboard built with TypeScript for strong type safety, visualizing live threats and alerts on an interactive map.",
    highlights: [
      "Built with TypeScript end-to-end, improving maintainability by 40%",
      "Real-time threat analysis charts (Shadcn Charts) improved monitoring efficiency by 40%",
      "Integrated Google Maps API for live geospatial threat visualization",
      "Efficient, filterable data tables powered by TanStack Table",
    ],
    tech: ["TypeScript", "React.js", "Shadcn UI", "TanStack Table", "Google Maps API"],
  },
  {
    name: "Labor Department Web Application",
    context: "Govt of Karnataka",
    icon: "govt" as const,
    liveUrl: null as string | null,
    description:
      "Bilingual citizen-facing portal for the Karnataka Labor Department, with secure identity verification via Aadhaar e-KYC.",
    highlights: [
      "Built reusable, modular components to speed up feature development",
      "Improved UI performance by 60%, cutting load times significantly",
      "Centralized state management with Redux & Redux Toolkit",
      "Shipped bilingual UI using i18n internationalization",
      "Integrated Aadhaar e-KYC for seamless, secure authentication",
    ],
    tech: ["React.js", "Redux Toolkit", "i18n", "REST APIs"],
  },
  {
    name: "Online Water Connection (OWC)",
    context: "BWSSB",
    icon: "water" as const,
    liveUrl: null as string | null,
    description:
      "Citizen self-service portal for applying and managing water connections online, with server-driven data fetching and automated deployment.",
    highlights: [
      "Increased UI performance by 60% by minimizing unnecessary re-renders",
      "Built Next.js server actions, cutting client-side API calls by 35%",
      "Robust form validation and error handling with Zod + React Hook Form",
      "Automated CI/CD deployment pipeline using Jenkins and Nginx",
    ],
    tech: ["Next.js", "Server Actions", "Zod", "React Hook Form", "Jenkins", "Nginx"],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    school: "Bangalore University",
    period: "Jan 2021 — Nov 2022",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
