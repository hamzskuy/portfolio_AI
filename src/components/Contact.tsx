"use client";

import { profile, socials } from "@/data/portfolio";
import Reveal from "./visuals/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="container-narrow">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Contact
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.06] tracking-tight md:text-5xl">
                Mari terhubung.
              </h2>
              <p className="mt-4 max-w-md text-base text-[var(--fg-muted)]">
                Terbuka untuk kolaborasi, diskusi project, atau sekadar ngobrol
                seputar desain dan kreativitas digital.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="card flex items-center justify-between gap-4 transition-transform hover:-translate-y-0.5"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                      Email
                    </p>
                    <p className="mt-1 font-medium">{profile.email}</p>
                  </div>
                  <span className="text-[var(--accent)]">→</span>
                </a>

                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card flex items-center justify-between gap-4 transition-transform hover:-translate-y-0.5"
                  >
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                        {s.label}
                      </p>
                      <p className="mt-1 font-medium">@{s.handle}</p>
                    </div>
                    <span className="text-[var(--accent)]">→</span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 text-xs text-[var(--fg-muted)]">
                Link media sosial masih placeholder — ganti URL di{" "}
                <code className="rounded bg-[var(--bg-soft)] px-1.5 py-0.5">
                  src/data/portfolio.ts
                </code>{" "}
                saat profil sebenarnya tersedia.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <form
              className="card space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(
                  String(data.get("subject") || "Halo dari portfolio"),
                );
                const body = encodeURIComponent(
                  String(data.get("message") || ""),
                );
                window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
              }}
            >
              <div>
                <label className="text-[10px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                  Nama
                </label>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                  Subjek
                </label>
                <input
                  name="subject"
                  className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                  Pesan
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="mt-2 w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Kirim Pesan
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
