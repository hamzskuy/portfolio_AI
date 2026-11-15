// Data portfolio personal — mudah diedit. Sumber kebenaran tunggal untuk UI dan chatbot HANAM.

export const profile = {
  name: "Moh Ilham Darmawan",
  initials: "MID",
  role: "UI/UX Designer & Creative Digital",
  bio: "Saya menyukai dunia desain digital, khususnya UI/UX Design, desain konten feed Instagram, dan pembuatan video edukasi. Saya juga pernah menangani konten Astro ID di YouTube Shorts. Website ini merupakan portfolio personal untuk memperkenalkan diri, kemampuan, dan hasil karya saya.",
  email: "pasweb.official@gmail.com",
  location: "Indonesia",
  updated: "November 2026",
  avatarAlt: "Foto profil Moh Ilham Darmawan",
};

// Placeholder URL — ganti dengan URL profil sebenarnya saat tersedia.
export const socials = [
  { label: "TikTok", handle: "Pasweb", url: "https://www.tiktok.com/@pasweb" },
  { label: "Instagram", handle: "Pasweb", url: "https://www.instagram.com/pasweb" },
];

export const projects = [
  {
    id: "mochi-ind",
    title: "Mochi IND",
    category: "DIY / Hardware",
    description:
      "Project robot mochi berbentuk gantungan yang dibuat secara mandiri dengan biaya terjangkau.",
    status: "Selesai",
    tags: ["DIY", "Robotics", "Low-cost"],
    url: "",
    note: "Detail tambahan (proses, biaya, foto) dapat ditambahkan di sini.",
  },
  {
    id: "pasweb",
    title: "Pasweb",
    category: "Web Development",
    description:
      "Project website digital yang dikembangkan bersama rekan saya.",
    status: "Demo",
    tags: ["Web", "Collaboration"],
    url: "https://pasweb-app.vercel.app/",
    note: "Status: Demo. Tautan menuju versi demo yang sudah live.",
  },
];

export const skills = [
  { name: "Canva", note: "Desain grafis & konten feed" },
  { name: "CapCut", note: "Editing video" },
  { name: "Visual Studio Code", note: "Penulisan kode" },
];

export const experience = [
  {
    title: "Konten Astro ID",
    org: "YouTube Shorts",
    description:
      "Pernah menangani konten Astro ID di YouTube Shorts. Detail jabatan, tanggal, dan pencapaian belum tersedia.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// Pengetahuan terstruktur untuk chatbot HANAM. Jangan menambahkan klaim yang tidak ada di atas.
export const knowledgeBase = {
  profile,
  projects,
  skills,
  experience,
  socials,
};
