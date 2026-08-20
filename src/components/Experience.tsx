import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-28">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <div className="space-y-8">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <div className="glass rounded-2xl p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20">
                    <Briefcase size={18} className="text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{job.role}</h3>
                    <p className="text-sm text-white/60">{job.company}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-white/40">{job.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {job.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-white/70">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
