"use client";

"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/portfolio";
import Reveal from "./visuals/Reveal";
import { ArrowRight } from "@/utils/icons";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // progress 0 when section enters, 1 when it leaves
        const total = rect.height + vh;
        const scrolled = vh - rect.top;
        const p = Math.min(1, Math.max(0, scrolled / total));
        setProgress(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 md:py-28">
      <div className="container-narrow">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Projects
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.06] tracking-tight md:text-5xl">
            Karya pilihan.
          </h2>
          <p className="mt-4 max-w-xl text-base text-[var(--fg-muted)]">
            Setiap project dikerjakan dengan pendekatan yang sederhana dan
            fokus pada hasil.
          </p>
        </Reveal>

        <div className="project-stage relative mt-12" style={{ minHeight: 420 }}>
          {projects.map((project, index) => {
            const offset = (index - (projects.length - 1) / 2) * 0.18;
            const p = Math.min(1, Math.max(0, progress - offset));
            const rotate = (index % 2 === 0 ? -1 : 1) * (1 - p) * 14;
            const tz = p * 60 - 40 * Math.abs(index - 1);
            const ty = (1 - p) * 40 * (index === 0 ? 1 : -1);
            const scale = 0.9 + p * 0.1;
            return (
              <article
                key={project.id}
                className="project-card-3d relative mx-auto mb-8 max-w-3xl rounded-[2rem] border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-xl md:p-8"
                style={{
                  transform: `perspective(1200px) rotateY(${rotate}deg) translateZ(${tz}px) translateY(${ty}px) scale(${scale})`,
                  opacity: 0.55 + p * 0.45,
                }}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  {/* Mockup */}
                  <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent)]/15 to-[var(--accent-2)]/15 md:h-40 md:w-56">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-3xl font-bold text-[var(--accent)]">
                        {project.title.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 rounded-full border border-[var(--border)] bg-[var(--bg-card)]/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[var(--fg-muted)] backdrop-blur">
                      {project.category}
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-2xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] uppercase tracking-wider text-[var(--fg-muted)]">
                        {project.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] uppercase tracking-wider text-[var(--fg-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-xs italic text-[var(--fg-muted)]">
                      {project.note}
                    </p>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition-transform hover:translate-x-0.5"
                      >
                        View Project
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--fg-muted)]">
                        Detail project tersedia nanti
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
