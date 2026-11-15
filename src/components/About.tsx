import { profile } from "@/data/portfolio";
import Reveal from "./visuals/Reveal";

export default function About() {
  const points = [
    "UI/UX Design — merancang antarmuka yang jelas dan nyaman dipakai.",
    "Desain konten feed Instagram — visual yang konsisten dan menarik.",
    "Pembuatan video edukasi — menyampaikan informasi secara visual.",
  ];

  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container-narrow">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Tentang Saya
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.06] tracking-tight md:text-5xl">
            Desain digital, konten, dan kreativitas.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal delay={80}>
            <p className="text-base leading-relaxed text-[var(--fg-muted)]">
              {profile.bio}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--fg-muted)]">
              Saya senang mengeksplorasi bagaimana tampilan dan pengalaman pengguna
              dapat membuat informasi lebih mudah dipahami. Setiap karya di bawah
              adalah bagian dari proses belajar dan berkarya yang terus berlanjut.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <ul className="space-y-3">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-4"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span className="text-sm leading-relaxed text-[var(--fg-muted)]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
