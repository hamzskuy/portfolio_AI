import { profile } from "@/data/portfolio";
import Reveal from "./visuals/Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow absolute -left-24 top-10 h-72 w-72 rounded-full bg-[var(--accent)]" />
        <div className="glow absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-[var(--accent-2)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(70% 60% at 50% 30%, black 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(70% 60% at 50% 30%, black 0%, transparent 75%)",
          }}
        />
      </div>

      <div className="container-narrow grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Portfolio Personal
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              {profile.name}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 font-display text-2xl font-medium text-[var(--fg-muted)] md:text-3xl">
              {profile.role}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--fg-muted)]">
              {profile.bio}
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="btn-primary">
                Explore My Work
              </a>
              <a href="#contact" className="btn-ghost">
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>

        {/* Visual placeholder (bukan foto asli) */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-md">
          <div className="project-stage relative aspect-square">
            <div className="project-card-3d absolute inset-0 m-auto h-64 w-64 rounded-[2rem] border border-[var(--border)] bg-[var(--bg-card)]/70 shadow-2xl backdrop-blur-xl" />
            <div className="project-card-3d absolute left-6 top-8 h-40 w-40 rotate-[-8deg] rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-2)]/20 backdrop-blur-md" />
            <div className="project-card-3d absolute bottom-8 right-6 h-32 w-32 rotate-[12deg] rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]/60 backdrop-blur-md" />
            <div className="absolute inset-0 m-auto flex h-64 w-64 flex-col items-center justify-center rounded-[2rem]">
              <span className="font-display text-6xl font-bold text-[var(--accent)]">
                {profile.initials}
              </span>
              <span className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
                Placeholder foto
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
