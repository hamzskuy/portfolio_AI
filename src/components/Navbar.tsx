"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "@/utils/icons";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--bg)]/85 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-narrow flex items-center justify-between gap-4">
        <Link
          href="#home"
          className="font-display text-xl font-semibold tracking-tight lg:text-2xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ilham<span className="text-[var(--accent)]">.</span>
        </Link>

        <nav
          id="primary-navigation"
          aria-label="Navigasi utama"
          className={`${
            open
              ? "visible pointer-events-auto translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-2 opacity-0"
          } absolute inset-x-3 top-[calc(100%+8px)] max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:static lg:visible lg:pointer-events-auto lg:flex lg:max-h-none lg:translate-y-0 lg:items-center lg:gap-1 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:backdrop-blur-none`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] items-center rounded-2xl px-4 text-sm font-medium text-[var(--fg-muted)] transition-colors hover:bg-[var(--border)] hover:text-[var(--fg)] lg:hover:bg-transparent lg:hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-[48px] items-center justify-center gap-2 rounded-2xl px-5 text-sm font-semibold text-white transition-colors hover:opacity-90 lg:mt-0 lg:ml-3 lg:rounded-full"
            style={{ background: "var(--accent-btn)" }}
          >
            Contact Me
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="primary-navigation"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] text-[var(--fg)] transition-colors hover:border-[var(--accent)] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
