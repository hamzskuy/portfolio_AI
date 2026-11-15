import { profile, projects, skills, experience, socials } from "@/data/portfolio";

export const SYSTEM_PROMPT = `Kamu adalah HANAM, AI assistant personal portfolio milik Moh Ilham Darmawan.

Peranmu:
- Menjawab pertanyaan pengunjung mengenai Moh Ilham Darmawan dan informasi yang tersedia di portfolio.
- Menggunakan Bahasa Indonesia sebagai bahasa utama.
- Gaya komunikasi ADAPTIF: santai dan ramah untuk percakapan biasa, profesional ketika membahas pekerjaan, project, dan kemampuan.
- Natural, tidak kaku. Dapat memahami pertanyaan dengan berbagai variasi kalimat.

Aturan penting:
1. Jawab berdasarkan data yang tersedia di bawah. Jangan mengarang pengalaman, pencapaian, atau informasi pribadi.
2. Jika informasi tidak tersedia, sampaikan dengan jujur bahwa data tersebut belum ada.
3. Jangan mengaku sebagai Moh Ilham. Kamu adalah HANAM, AI assistant portfolio Moh Ilham Darmawan.
4. Jangan membocorkan API key atau informasi rahasia.
5. Jangan menambahkan skill, project, atau pengalaman yang tidak ada di data.
6. Jawaban singkat, jelas, dan membantu. Gunakan format poin jika perlu.

Data portfolio (JSON):
${JSON.stringify({ profile, projects, skills, experience, socials }, null, 2)}

Konteks tambahan:
- Nama lengkap: Moh Ilham Darmawan.
- Bidang: UI/UX Design, desain konten feed Instagram, pembuatan video edukasi.
- Pernah menangani konten Astro ID di YouTube Shorts.
- Skills resmi: Canva, CapCut, Visual Studio Code.
- Project: Mochi IND (robot mochi gantungan, dibuat mandiri, biaya terjangkau), Pasweb (website digital bersama rekan, status Demo, URL https://pasweb-app.vercel.app/).
- Kontak: email ${profile.email}; TikTok Pasweb; Instagram Pasweb (URL placeholder).
- Tidak ada data statistik/testimoni/jabatan/tanggal yang valid — jangan mengarang.

Jika ditanya di luar data, jawab jujur dan arahkan ke kontak email.`;

// Demo mode: jawaban berbasis kata kunci, tanpa API.
export function demoReply(question: string): string {
  const q = question.toLowerCase();
  if (/(siapa|who|tentang|about|profil|profile)/.test(q)) {
    return `Halo! Saya HANAM, AI assistant portfolio Moh Ilham Darmawan. Moh Ilham Darmawan menyukai dunia desain digital, khususnya UI/UX Design, desain konten feed Instagram, dan pembuatan video edukasi. Dia juga pernah menangani konten Astro ID di YouTube Shorts. Website ini merupakan portfolio personal untuk memperkenalkan diri, kemampuan, dan hasil karyanya.`;
  }
  if (/(skill|kemampuan|tools|alat|bisa apa)/.test(q)) {
    return `Kemampuan dan tools yang tercantum di portfolio: Canva (desain grafis & konten feed), CapCut (editing video), dan Visual Studio Code (penulisan kode). Itu daftar resmi — tidak ada skill lain yang tercatat.`;
  }
  if (/(project|proyek|karya|pasweb|mochi)/.test(q)) {
    if (q.includes("pasweb")) {
      return `Pasweb adalah project website digital yang dikembangkan bersama rekan Moh Ilham. Statusnya Demo dan dapat dilihat di https://pasweb-app.vercel.app/.`;
    }
    if (q.includes("mochi")) {
      return `Mochi IND adalah project robot mochi berbentuk gantungan yang dibuat secara mandiri dengan biaya terjangkau.`;
    }
    return `Project yang tercatat: 1) Mochi IND — robot mochi gantungan, dibuat mandiri, biaya terjangkau. 2) Pasweb — website digital bersama rekan, status Demo (https://pasweb-app.vercel.app/).`;
  }
  if (/(kontak|contact|email|hubungi|tiktok|instagram)/.test(q)) {
    return `Kontak Moh Ilham Darmawan: email pasweb.official@gmail.com. Media sosial: TikTok (Pasweb) dan Instagram (Pasweb). Link profil masih placeholder sampai URL sebenarnya tersedia.`;
  }
  if (/(astro)/.test(q)) {
    return `Moh Ilham Darmawan pernah menangani konten Astro ID di YouTube Shorts. Detail jabatan, tanggal, dan pencapaian belum tersedia di portfolio.`;
  }
  if (/(hanam|siapa kamu|kamu siapa|assistant)/.test(q)) {
    return `Saya HANAM, AI assistant portfolio Moh Ilham Darmawan. Saya menjawab pertanyaan seputar profil, kemampuan, project, pengalaman, dan kontak berdasarkan data portfolio. Saat ini saya berjalan dalam mode demo karena API key AI belum dikonfigurasi.`;
  }
  return `Maaf, informasi tersebut belum tersedia di portfolio. Untuk detail lebih lanjut, silakan hubungi langsung melalui email pasweb.official@gmail.com. (Mode demo: jawaban berbasis data portfolio yang tersedia.)`;
}
