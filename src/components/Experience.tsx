import { experience } from "@/data/portfolio";
import Reveal from "./visuals/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="container-narrow">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Experience
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.06] tracking-tight md:text-5xl">
            Pengalaman.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-4">
          {experience.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="card">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                    {item.org}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
