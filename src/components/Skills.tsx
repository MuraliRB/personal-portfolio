import { skillGroups } from "@/lib/data";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiDrizzle,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJenkins,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type SkillIcon = { Icon: IconType; color: string };

// Official brand hex per simple-icons — icons render in their native color, not a uniform accent.
const SKILL_ICONS: Record<string, SkillIcon[]> = {
  "React.js": [{ Icon: SiReact, color: "#61DAFB" }],
  "Next.js": [{ Icon: SiNextdotjs, color: "" }],
  TypeScript: [{ Icon: SiTypescript, color: "#3178C6" }],
  "Redux Toolkit": [{ Icon: SiRedux, color: "#764ABC" }],
  "Tailwind CSS": [{ Icon: SiTailwindcss, color: "#06B6D4" }],
  "Material UI": [{ Icon: SiMui, color: "#007FFF" }],
  "Shadcn UI": [{ Icon: SiShadcnui, color: "" }],
  HTML5: [{ Icon: SiHtml5, color: "#E34F26" }],
  "Node.js": [{ Icon: SiNodedotjs, color: "#339933" }],
  MongoDB: [{ Icon: SiMongodb, color: "#47A248" }],
  "Prisma ORM": [{ Icon: SiPrisma, color: "#5A67D8" }],
  "Drizzle ORM": [{ Icon: SiDrizzle, color: "#C5F74F" }],
  Docker: [{ Icon: SiDocker, color: "#2496ED" }],
  Nginx: [{ Icon: SiNginx, color: "#009639" }],
  Jenkins: [{ Icon: SiJenkins, color: "#D24939" }],
  "Git & GitHub": [
    { Icon: SiGit, color: "#F05032" },
    { Icon: SiGithub, color: "" },
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-28"
    >
      <SectionHeading
        eyebrow="Skills"
        title="Tools I reach for"
        description="A React-first stack, backed by the backend and DevOps chops to ship features end to end."
      />

      <div className="grid gap-6 sm:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.1}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="text-sm font-medium text-white/80">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 transition-colors hover:border-white/25 hover:text-white"
                  >
                    {SKILL_ICONS[skill]?.map(({ Icon, color }, idx) => (
                      <Icon key={idx} size={14} style={{ color }} />
                    ))}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
