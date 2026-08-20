// Single source of truth for résumé content. Dates are real Date objects so
// experience duration is computed at render time instead of hand-maintained.

export type ResumeProject = {
  name: string;
  bullets: string[];
};

export type ResumeExperience = {
  role: string;
  company: string;
  startDate: Date;
  endDate: Date | null; // null = present
  projects: ResumeProject[];
};

export type ResumeEducation = {
  degree: string;
  school: string;
  startDate: Date;
  endDate: Date;
};

export const resumeProfile = {
  name: "Murali R Bharadwaj",
  title: "Software Engineer(Frontend) | React.js | Next.js |Typescript",
  email: "muralirb1999@gmail.com",
  phone: "+91 9113635554",
  location: "Bengaluru-5600094",
  github: "https://github.com/MuraliRB",
  githubLabel: "https://github.com/MuraliRB",
  linkedin: "https://www.linkedin.com/in/murali-r-bharadwaj-2611111b5/",
  linkedinLabel: "https://www.linkedin.com/in/murali-r-bharadwaj-2611111b5/",
};

export const resumeSummary =
  "Proven Frontend Developer, adept in React.js and Next.js, with expertise in Node.js, Tailwind CSS, and Docker. Skilled in collaborative problem-solving, creating user-centric interfaces, and optimizing user experience—enhancing efficiency by 30% through meticulous QA testing. Demonstrates strong proficiency in HTML5, responsive design, and Git.";

export const resumeSkills = [
  "React.js",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Typescript",
  "Redux Toolkit",
  "Tailwind CSS",
  "Material UI",
  "Shadcn UI",
  "GIT AND GITHUB",
  "Docker",
  "Nginx",
  "Jenkins",
  "Prisma and Drizzle ORM",
];

export const resumeExperience: ResumeExperience[] = [
  {
    role: "Software Engineer(Frontend)",
    company: "Globals ITES",
    startDate: new Date(2022, 11, 1), // Dec 2022
    endDate: null, // Present
    projects: [
      {
        name: "Web Application for Labor Department Govt of Karnataka",
        bullets: [
          "Developed reusable components to enhance modularity and maintainability. Optimized UI performance by 60%, reducing load times and improving user experience Implemented state management using Redux and Redux Toolkit for efficient data handling",
          "Implemented state management using Redux and Redux Toolkit for efficient data handling",
          "Applied Bilingual using I18n internalization.",
          "Integrated APIs such as Aadhaar e-KYC, enabling seamless authentication",
        ],
      },
      {
        name: "Cyber Situational Overview Dashboard, AERO INDIA 2025",
        bullets: [
          "Developed the dashboard with TypeScript, ensuring strong type safety and maintainability by 40%",
          "Enforced real-time threat analysis dashboards using Shadcn Charts, enabling dynamic data visualization and improving monitoring efficiency by 40%.",
          "Integrated Google Maps API to visualize real-time cyber threats and alerts.",
          "Incorporated data tables using Tan stack Table, enabling efficient data organization and filtering",
        ],
      },
      {
        name: "Web Application for Online Water Application,(OWC) BWSSB",
        bullets: [
          "Increased UI performance by 60%, optimizing rendering and minimizing re-renders",
          "Built server actions in Next.js to streamline API interactions, reducing client-side API calls by 35% and improving application performance and maintainability while simplifying data-fetching logic.",
          "Handled form validation and error management using Zod and React Hook Form for robust data handling.",
          "Deployed the application using Nginx and Jenkins, ensuring automated CI/CD workflows.",
        ],
      },
    ],
  },
];

export const resumeEducation: ResumeEducation[] = [
  {
    degree: "Master of Computer Application",
    school: "Bangalore University",
    startDate: new Date(2021, 0, 1), // Jan 2021
    endDate: new Date(2022, 10, 1), // Nov 2022
  },
];
