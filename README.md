# Portfolio — Moh Ilham Darmawan

Website portfolio personal dengan AI chatbot HANAM. Dibangun dengan Next.js 14 (App Router), TypeScript, dan Tailwind CSS.

## Menjalankan

```powershell
cd "C:\Users\ASUS\OneDrive\kodingan ilham\portfolio_AI"
npm install
npm run dev
```

Buka http://localhost:3000.

```powershell
npm run build
npm run start
```

## Struktur

```
src/
  app/
    page.tsx            semua section (Home, About, Projects, Skills, Experience, Contact)
    layout.tsx          metadata SEO + font + tema awal
    globals.css         token tema (light/dark), reveal, reduced-motion
    api/chat/route.ts   endpoint AI HANAM (server-side)
    sitemap.ts robots.ts
  components/
    Navbar.tsx Hero.tsx About.tsx Projects.tsx Skills.tsx
    Experience.tsx Contact.tsx Footer.tsx ThemeToggle.tsx Chatbot.tsx
    SkipLink.tsx
    visuals/            Reveal, ScrollProgress
  data/portfolio.ts     data tunggal (profil, project, skill, pengalaman, sosial)
  lib/knowledge.ts      pengetahuan & prompt HANAM + mode demo
  utils/icons.tsx
```

## Konfigurasi

Salin `.env.example` menjadi `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://domain-anda.com
AI_API_KEY=            # kosong = mode demo
AI_API_BASE=https://api.openai.com/v1
AI_MODEL=gpt-4o-mini
```

- Jika `AI_API_KEY` kosong, chatbot HANAM berjalan dalam **mode demo** dengan jawaban berbasis data portfolio (ditandai badge "Demo").
- Untuk mengaktifkan AI sungguhan, isi `AI_API_KEY` (OpenAI atau provider kompatibel OpenAI). Ganti `AI_API_BASE`/`AI_MODEL` untuk provider lain.

## Konten

Edit `src/data/portfolio.ts` untuk mengubah profil, project, skill, pengalaman, dan link sosial. Tambahkan project baru di array `projects`. URL sosial masih placeholder — ganti saat profil sebenarnya tersedia.

## Catatan

- Foto profil menggunakan placeholder (inisial) — ganti dengan foto asli jika tersedia.
- Tidak ada data statistik/testimoni/jabatan/tanggal yang diarang.
- Dark/light mode tersedia via tombol tema (kanan atas navbar).
- Responsif 320px–1440px, mendukung `prefers-reduced-motion`.
