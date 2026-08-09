# 🐸🎫 Minta Katak — Brand Landing Page

> **Jasa war tiket konser dan event favorit dengan pendekatan brand-first, typography-first, mascot-led, dan pastel professional.**

Landing page ini dibuat sebagai **website branding dan promosi resmi Minta Katak**. Terinspirasi dari cara brand seperti **Gojek** dan **Notion** membangun halaman marketing: identitas kuat, copy yang singkat & khas, ilustrasi original, whitespace lapang, visual hierarchy yang jelas, serta motion yang natural.

---

## 🎨 Design System & Aesthetics

- **Typography-First Layout**: Judul besar menggunakan **Fredoka** dipadukan dengan font body **Plus Jakarta Sans**.
- **Original Vector SVG Assets**: 100% menggunakan aset vektor SVG berkualitas tinggi (Logo, Maskot Katak 9 pose, Aksen Dekorasi Organik, & Latar Belakang).
- **Harmonious Pastel Palette**: Menggabungkan warna krem pastel hangat (`#FAF7F2`), hijau tua forest (`#1A2921`), hijau pastel khas Katak (`#376E57`), dan sage mint (`#EBF4EE`).
- **Natural Micro-Animations**: Animasi halus mengambang (*floating mascot*), reveal scroll, dan transisi tanpa mengganggu aksesibilitas (*reduced motion ready*).

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Struktur Project

```text
mintakatak-web/
├─ public/
│  └─ assets/
│     └─ brand/
│        ├─ background/    # SVG background pendukung section (ver1 - ver5, 404-full)
│        ├─ decorations/   # Aksen SVG (cloud, leaf, line, love, spark, sparkling, star, ticket)
│        ├─ logo/          # Logomark SVG (logo-primary, logo-secondary, logo-head)
│        └─ mascot/        # Vector SVG maskot 9 pose (hero, why, how, benefit, secured, etc.)
│
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx       # Root layout & penataan Google Fonts (Fredoka + Plus Jakarta Sans)
│  │  ├─ page.tsx         # Main landing page
│  │  ├─ not-found.tsx    # Halaman kustom 404
│  │  └─ globals.css      # Custom Utility Classes & Design Tokens
│  │
│  ├─ components/
│  │  ├─ layout/          # Navbar & Footer
│  │  └─ sections/        # Hero, WhyMintaKatak, HowItWorks, Benefits, SocialProof, Testimonials, FAQ, FinalCTA
│  │
│  └─ lib/
│     ├─ constants.ts     # Konfigurasi copy, data testimoni, danlink kontak WhatsApp
│     └─ motion.ts        # Varian animasi Framer Motion reusable
│
└─ AGENTS.md              # Brand & Design Guidelines Resmi Minta Katak
```

---

## 🛠️ Cara Mengjalankan Lokal

1. **Clone Repository**:
   ```bash
   git clone https://github.com/USERNAME/mintakatak-web.git
   cd mintakatak-web
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Jalankan Server Development**:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser.

4. **Pemeriksaan Sintaks TypeScript**:
   ```bash
   npx tsc --noEmit
   ```

---

## 🌐 Deploy ke Vercel

Project ini sudah siap untuk dideploy langsung di **Vercel**:

1. Push repository ke GitHub:
   ```bash
   git remote add origin https://github.com/USERNAME/mintakatak-web.git
   git push -u origin main
   ```
2. Buka [Vercel Dashboard](https://vercel.com/new), hubungkan repository GitHub `mintakatak-web`, dan klik **Deploy**.

---

## 📄 Lisensi

© {new Date().getFullYear()} **Minta Katak**. All rights reserved.
