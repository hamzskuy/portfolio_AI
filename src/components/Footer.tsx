import { profile, navLinks } from "@/data/portfolio";
import Reveal from "./visuals/Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="container-narrow">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold">
              {profile.name}
            </p>
            <p className="mt-2 max-w-sm text-sm text-[var(--fg-muted)]">
              {profile.role}
            </p>
          </div>
          <nav aria-label="Navigasi footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <Reveal>
          <div className="mt-10 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--fg-muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {profile.name}. Dibuat sendiri.</p>
            <p>Terakhir diperbarui: {profile.updated}</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
