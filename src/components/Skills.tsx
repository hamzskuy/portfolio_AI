import { skills } from "@/data/portfolio";
import Reveal from "./visuals/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="container-narrow">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Skills & Tools
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.06] tracking-tight md:text-5xl">
            Alat yang saya gunakan.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 80}>
              <div className="card h-full transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] font-display text-lg font-bold">
                    {skill.name.slice(0, 1)}
                  </span>
                  <h3 className="font-display text-lg font-semibold">
                    {skill.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {skill.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
