# Minta Katak — Brand Landing Page

> **Jasa war tiket dengan pendekatan brand-first, typography-first, mascot-led, dan pastel professional.**

Landing page ini dibuat sebagai **website branding dan promosi**, bukan dashboard ticketing, bukan daftar event aktif, dan bukan aplikasi manajemen war.

Arah utamanya terinspirasi dari cara brand seperti **Gojek** dan **Notion** membangun halaman marketing: identitas kuat, copy yang singkat tetapi khas, ilustrasi original, banyak whitespace, visual hierarchy yang jelas, dan motion yang terasa natural.

---

## 1. Tujuan Website

Website harus membuat pengunjung memahami tiga hal dalam beberapa detik:

1. **Minta Katak adalah jasa war tiket.**
2. **Brand ini friendly, memorable, dan profesional.**
3. **Pengunjung tahu apa langkah berikutnya: menghubungi / menggunakan jasa Minta Katak.**

Struktur halaman:

```text
Navbar
↓
Hero
↓
Why Minta Katak
↓
Cara Kerja
↓
Benefit
↓
Social Proof
↓
Testimoni
↓
FAQ
↓
Final CTA
↓
Footer
```

Website **tidak boleh** berubah menjadi:

- dashboard,
- katalog event aktif,
- status antrean war,
- booking management UI,
- tabel data,
- pricing SaaS 3-tier,
- halaman yang penuh kartu generik,
- template startup AI.

---

# 2. Design Direction

## Primary style

Gunakan prinsip **Typography-First Design**.

Artinya:

- typography menjadi pembawa hierarchy utama,
- headline besar menjadi visual utama,
- ilustrasi maskot mendukung pesan,
- UI chrome dibuat minimal,
- section tidak bergantung pada card,
- whitespace digunakan secara sengaja,
- setiap section punya satu ide utama.

### Formula visual

```text
Typography First
+ Original Mascot
+ Pastel Editorial Layout
+ Organic Shapes
+ Authentic Social Proof
+ Subtle Framer Motion
= Minta Katak
```

---

# 3. Brand Feeling

Minta Katak harus terasa:

- cute,
- friendly,
- pastel,
- fun,
- trustworthy,
- youthful,
- polished,
- human,
- premium tetapi tidak kaku.

Hindari:

- terlalu childish,
- terlalu kawaii,
- terlalu corporate,
- gradient AI generik,
- glassmorphism berlebihan,
- card bertebaran,
- icon random,
- dekorasi tanpa tujuan,
- copy generik.

Target reaksi pengunjung:

> “Lucu banget brand-nya.”

kemudian:

> “Oh, ini jasa war tiket.”

dan akhirnya:

> “Kelihatannya jelas dan trustworthy. Gue mau chat.”

---

# 4. Asset Inventory

Saat ini terdapat **24 PNG brand assets**.

## Background

```text
mintakatak_bg_ver1.png
mintakatak_bg_ver2.png
mintakatak_bg_ver3.png
mintakatak_bg_ver4.png
```

Jumlah: **4**

Gunakan sebagai section background / composition support.

Jangan gunakan semuanya sekaligus dalam satu viewport.

### Suggested mapping

| Asset | Suggested use |
|---|---|
| `mintakatak_bg_ver1` | Hero |
| `mintakatak_bg_ver2` | Why / Cara Kerja |
| `mintakatak_bg_ver3` | Benefit / Social Proof |
| `mintakatak_bg_ver4` | Final CTA |

Jika komposisi visual masing-masing background berbeda dari mapping di atas, pertahankan fungsi desainnya dan remap sesuai kebutuhan.

---

## Decorative Assets

```text
mintakatak_decoration_cloud.png
mintakatak_decoration_leaf.png
mintakatak_decoration_line.png
mintakatak_decoration_love.png
mintakatak_decoration_spark.png
mintakatak_decoration_sparkling.png
mintakatak_decoration_star.png
mintakatak_decoration_ticket.png
```

Jumlah: **8**

### Function

#### Cloud
Digunakan pada:
- Hero
- whitespace filler
- Final CTA

#### Leaf
Digunakan sebagai:
- small organic accent
- section corner decoration
- separator

#### Line
Digunakan untuk:
- visual direction,
- cara kerja,
- connecting story elements.

#### Love
Gunakan sangat terbatas untuk:
- testimonial,
- successful customer moments.

#### Spark + Sparkling
Digunakan untuk:
- hero highlight,
- secured moment,
- CTA.

#### Star
Digunakan sebagai accent tambahan.

#### Ticket
Digunakan sebagai motif utama jasa:
- Hero,
- Social Proof,
- CTA.

> Decorative assets tidak boleh ditempel di semua tempat. Gunakan maksimal beberapa elemen per viewport agar visual tetap premium.

---

# 5. Logo Assets

```text
mintakatak_logo_head.png
mintakatak_logo_ver1.png
mintakatak_logo_ver2.png
```

Jumlah: **3**

### Suggested usage

`mintakatak_logo_ver1`
- primary navbar logo,
- light background.

`mintakatak_logo_ver2`
- alternative contrast version,
- footer / colored background.

`mintakatak_logo_head`
- favicon,
- compact mobile header,
- social badge,
- tiny decorative brand mark.

---

# 6. Mascot Assets

Tersedia **9 pose**:

```text
mintakatak_pose_ver1.png
mintakatak_pose_ver2.png
mintakatak_pose_ver3.png
mintakatak_pose_ver4.png
mintakatak_pose_ver5.png
mintakatak_pose_ver6.png
mintakatak_pose_ver7.png
mintakatak_pose_ver8.png
mintakatak_pose_ver9.png
```

## Suggested website mapping

Karena arti pose bergantung pada artwork aktual, mapping di bawah adalah **default implementation plan** dan dapat ditukar bila pose visualnya lebih cocok untuk section lain.

| Pose | Section | Role |
|---|---|---|
| `pose_ver1` | Hero | Primary mascot / ticket-related visual |
| `pose_ver2` | Why Minta Katak | Friendly storytelling visual |
| `pose_ver3` | Cara Kerja | Process / working visual |
| `pose_ver4` | Benefit | Transitional illustration |
| `pose_ver5` | Social Proof | Celebration / secured moment |
| `pose_ver6` | Testimoni | Supporting testimonial mascot |
| `pose_ver7` | FAQ | Peek / waiting / curious pose |
| `pose_ver8` | Final CTA | Main closing mascot |
| `pose_ver9` | Footer / micro moment | Secondary brand moment |

Do not force all 9 poses onto desktop at once.

A mascot should appear because it supports the story, not because an empty area needs filling.

---

# 7. PNG → SVG Migration

## Important

**PNG tidak menjadi vector berkualitas tinggi hanya dengan mengganti ekstensi ke `.svg`.**

Ada dua jenis konversi:

### A. Raster wrapped in SVG

```text
PNG → embedded image inside SVG
```

Keuntungan:
- scalable container,
- mudah digunakan sebagai SVG file.

Kekurangan:
- gambar tetap raster,
- tidak mendapatkan infinite-resolution vector.

**Jangan gunakan metode ini sebagai final production asset jika tujuan kita benar-benar vector.**

### B. True vector tracing

```text
PNG artwork
→ alpha cleanup
→ color simplification
→ path tracing
→ path cleanup
→ optimized SVG
```

Ini yang diinginkan untuk Minta Katak.

Karena asetnya adalah ilustrasi flat dengan warna pastel dan outline, aset tersebut ideal untuk ditrace menjadi SVG selama sumber PNG cukup bersih.

---

## Target SVG quality

Untuk setiap asset:

- preserve transparent background,
- preserve original proportions,
- preserve brand colors,
- no white raster background,
- smooth curves,
- minimum unnecessary nodes,
- no obvious jagged tracing,
- no image/base64 embedding,
- optimized viewBox,
- remove hidden layers,
- minify only at build stage.

SVG tidak membutuhkan “resolusi tinggi” dalam arti pixel resolution.

Jika benar-benar vector, asset akan tetap tajam pada:

```text
320px
768px
1440px
4K
Retina
large display
```

---

# 8. Target SVG filenames

Setelah vectorization:

```text
/assets/brand/background/
  mintakatak-bg-01.svg
  mintakatak-bg-02.svg
  mintakatak-bg-03.svg
  mintakatak-bg-04.svg

/assets/brand/decorations/
  cloud.svg
  leaf.svg
  line.svg
  love.svg
  spark.svg
  sparkling.svg
  star.svg
  ticket.svg

/assets/brand/logo/
  logo-head.svg
  logo-primary.svg
  logo-secondary.svg

/assets/brand/mascot/
  mascot-hero.svg
  mascot-why.svg
  mascot-how.svg
  mascot-benefit.svg
  mascot-secured.svg
  mascot-testimonial.svg
  mascot-faq.svg
  mascot-cta.svg
  mascot-footer.svg
```

Do not expose version numbers in component names once the final mapping has been decided.

---

# 9. Asset Optimization

Setiap SVG production harus:

- menggunakan `viewBox`,
- tidak memiliki width/height hardcoded jika tidak diperlukan,
- tidak mengandung metadata editor yang tidak dibutuhkan,
- tidak mengandung embedded PNG,
- menghindari path ribuan node,
- preserve strokes,
- preserve rounded line joins,
- maintain original color palette.

Recommended tools:

- Illustrator Image Trace + manual cleanup,
- Inkscape Trace Bitmap + manual cleanup,
- Vectorizer / vtracer followed by manual inspection,
- SVGO for final optimization.

**Manual cleanup wajib untuk logo dan mascot utama.**

Auto trace saja tidak cukup.

---

# 10. Recommended Project Stack

```text
Next.js
TypeScript
Tailwind CSS
Framer Motion
```

Optional:

```text
Lenis
```

Jika smooth scrolling digunakan, implementasinya harus ringan dan tidak mengganggu accessibility.

Tidak perlu:
- heavy WebGL,
- Three.js,
- GSAP untuk kebutuhan sederhana,
- page transition berlebihan.

Framer Motion sudah cukup.

---

# 11. Suggested Folder Structure

```text
src/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ globals.css
│
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.tsx
│  │  └─ Footer.tsx
│  │
│  ├─ sections/
│  │  ├─ Hero.tsx
│  │  ├─ WhyMintaKatak.tsx
│  │  ├─ HowItWorks.tsx
│  │  ├─ Benefits.tsx
│  │  ├─ SocialProof.tsx
│  │  ├─ Testimonials.tsx
│  │  ├─ FAQ.tsx
│  │  └─ FinalCTA.tsx
│  │
│  ├─ motion/
│  │  ├─ FadeIn.tsx
│  │  ├─ Reveal.tsx
│  │  ├─ Stagger.tsx
│  │  ├─ FloatingMascot.tsx
│  │  └─ MagneticButton.tsx
│  │
│  └─ ui/
│     ├─ Button.tsx
│     ├─ SectionHeading.tsx
│     └─ Accordion.tsx
│
├─ public/
│  └─ assets/
│     └─ brand/
│        ├─ background/
│        ├─ decorations/
│        ├─ logo/
│        ├─ mascot/
│        └─ testimonial/
│
└─ lib/
   ├─ motion.ts
   └─ constants.ts
```

---

# 12. Typography System

Typography adalah hero dari layout.

## Recommended combination

### Display / Heading

Recommended:

**Fredoka**

Alternatives:
- Baloo 2
- Nunito

Jangan memakai banyak display font sekaligus.

### Body

Recommended:

**Plus Jakarta Sans**

Alternative:
- Inter

---

## Typography hierarchy

### Hero H1

Desktop:

```css
font-size: clamp(4rem, 7vw, 7.5rem);
line-height: 0.92;
letter-spacing: -0.045em;
font-weight: 700;
```

Mobile:

```css
font-size: clamp(3rem, 13vw, 4.5rem);
line-height: 0.95;
```

### Section H2

```css
font-size: clamp(2.5rem, 5vw, 5rem);
line-height: 0.96;
letter-spacing: -0.035em;
```

### Body large

```css
font-size: clamp(1.125rem, 1.5vw, 1.375rem);
line-height: 1.55;
```

### Body

```css
font-size: 1rem;
line-height: 1.65;
```

Keep paragraph width around:

```css
max-width: 55ch;
```

---

# 13. Layout Principles

## Maximum content width

```text
1280px – 1360px
```

Desktop side padding:

```text
48px – 72px
```

Tablet:

```text
32px
```

Mobile:

```text
20px – 24px
```

---

## Section spacing

Desktop:

```text
120px – 180px
```

Mobile:

```text
80px – 112px
```

Do not use exactly the same vertical spacing everywhere.

Design rhythm should feel intentional.

---

# 14. Homepage Specification

---

## Navbar

Simple and almost invisible.

Content:

```text
Logo

Why Minta Katak
Cara Kerja
Benefit
Testimoni
FAQ

[Minta Katak War]
```

### Motion

Navbar may:

- become slightly more solid after scroll,
- reduce vertical padding slightly,
- use subtle backdrop blur.

Do not turn it into a floating SaaS pill unless the final composition specifically benefits from it.

---

# 15. Hero

The Hero must be visually memorable.

## Copy composition

Small eyebrow:

```text
JASA WAR TIKET INDONESIA
```

Large typography:

```text
War tiket nggak harus
bikin kamu ikutan panik.
```

Supporting copy:

```text
Minta Katak bantu ngejar tiket konser dan event favoritmu
dengan proses yang simpel dan transparan.
```

Primary CTA:

```text
Minta Katak War
```

Secondary:

```text
Lihat Cara Kerja
```

Supporting proof:

```text
400+ tickets secured
Payment after secured
```

Only use claims that remain factually valid.

---

## Hero visual

Hero is not:

```text
text + rectangular card + gradient
```

Instead:

```text
large typography
+
large mascot
+
organic background composition
+
2–4 small decorative assets
```

Maskot should feel integrated into the composition.

### Motion

Use Framer Motion.

Mascot:

```text
slow floating
y: [-5, 5, -5]
duration: 5–7s
ease: easeInOut
repeat: Infinity
```

Ticket/spark decoration:

```text
rotate: [-2, 2, -2]
scale: [1, 1.03, 1]
duration: 4–6s
```

Headline reveal:

- word or line based reveal,
- no typewriter effect,
- no every-letter animation.

Recommended:

```text
opacity 0 → 1
y 24 → 0
stagger 0.07–0.12
```

---

# 16. Why Minta Katak

This section should feel editorial.

Avoid:

```text
4 equal feature cards
```

Prefer:

```text
large statement
+ copy
+ mascot
+ 3 short benefit statements
```

Suggested headline:

```text
War tiket itu cepat.
Kadang juga kejam.
```

Followed by:

```text
Makanya ada Katak.
```

Use large typography contrast.

### Motion

Scroll reveal only.

Mascot may slide subtly from edge:

```text
x: 40 → 0
opacity: 0 → 1
```

No looping animation required here.

---

# 17. Cara Kerja

Use 3–4 steps.

Avoid default SaaS cards.

Preferred layout:

```text
01
Hubungi Katak

02
Tentukan detail war

03
Katak ikut war

04
Ticket secured
```

Numbers can be extremely large and become part of the composition.

Use `mintakatak_decoration_line` to connect the process if appropriate.

### Motion

Each step reveals as it enters viewport.

```text
opacity: 0 → 1
y: 24 → 0
```

with controlled stagger.

Connecting line may animate using SVG `pathLength`:

```text
pathLength: 0 → 1
```

This should happen only once.

---

# 18. Benefit Section

Use a distinct pastel background.

Headline:

```text
Bukan cuma bantu
klik lebih cepat.
```

Use 3–5 benefits.

Possible themes:

```text
Payment after secured
Self data
Self payment
No DP untuk layanan tertentu
Komunikasi jelas
```

Do not show each benefit as a generic icon card.

Alternative layout:

```text
large text list
+
one large mascot
+
small decorative symbols
```

### Motion

Benefit rows:

```text
x: -20 → 0
opacity: 0 → 1
```

Mascot can have a small one-time entering motion.

---

# 19. Social Proof

This is a brand moment.

Core statement:

```text
400+
tickets secured.
```

The number should be visually dominant.

Do not place it inside a small card.

Suggested hierarchy:

```text
400+
tickets secured

dan masih terus bantu lebih banyak orang
ketemu artis favoritnya.
```

Mascot celebration visual nearby.

### Motion

Optional count-up:

```text
0 → 400+
```

Run once when visible.

Avoid:
- slot-machine effect,
- endless number animation.

Decorative stars/sparks can pulse subtly.

---

# 20. Testimonials

Use **real screenshots**.

Recommended:

```text
4–6 screenshots
```

Store at:

```text
/assets/brand/testimonial/
```

Example:

```text
testimonial-01.webp
testimonial-02.webp
testimonial-03.webp
...
```

Screenshots should be:

- censored,
- cropped consistently,
- readable,
- compressed,
- authentic.

Do not reproduce fake chat UI if real screenshots exist.

### Layout

Desktop:
- editorial horizontal row / controlled collage.

Mobile:
- draggable carousel.

### Motion

Framer Motion drag:

```tsx
drag="x"
```

or controlled carousel.

No aggressive autoplay.

Cards may slightly rotate:

```text
-2deg
+1deg
-1deg
```

Use static rotations, not random every render.

---

# 21. FAQ

FAQ should remain clean.

Avoid giant mascot illustration between every question.

One mascot can peek from the section edge.

Accordion motion:

```text
height: 0 → auto
opacity: 0 → 1
```

Duration:

```text
0.25–0.35s
```

Chevron:

```text
rotate: 0 → 45deg
```

or:

```text
0 → 180deg
```

---

# 22. Final CTA

Make it visually different from the rest of the page.

Recommended:

```text
full-width rounded or organic color section
+
large final headline
+
CTA
+
large mascot
```

Possible headline:

```text
Kamu fokus siapin outfit.
Tiketnya biar Katak ikut kejar.
```

CTA:

```text
Minta Katak War
```

Microcopy:

```text
minta katak jaswarin tiket,
bukan minta katak panggil hujan.
```

### Motion

Mascot:
- subtle wave/bob.

Stars:
- slow pulse.

CTA:
- subtle arrow movement,
- scale only around `1.015–1.025`.

No fireworks.

---

# 23. Footer

Keep footer restrained.

Include:

```text
Logo
X / Twitter
Contact
FAQ
Terms
Privacy
```

No large sitemap unless necessary.

Use mascot footer pose only if the section still has breathing room.

---

# 24. Framer Motion System

All animation should use shared variants.

Example conceptual config:

```ts
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}
```

### Shared rules

Use:

```text
duration 0.5–0.8 sec
small transform distances
intentional stagger
one animation idea per component
```

Avoid:

```text
bounce
spring everywhere
huge x/y movement
random rotations
animation on every word
continuous movement on every asset
```

---

# 25. Reduced Motion

Must support:

```css
@media (prefers-reduced-motion: reduce)
```

Framer Motion:

```tsx
useReducedMotion()
```

When reduced motion is enabled:

- remove infinite mascot floating,
- remove decorative looping,
- reduce transforms,
- keep opacity-only transition where appropriate.

---

# 26. Animation Budget

At any moment, ideally only **1–3 things are visibly moving**.

For example Hero:

```text
Mascot: float
Spark: pulse
Ticket: tiny rotation
```

Everything else stays stable.

This keeps the page feeling designed rather than “animated because Framer Motion exists.”

---

# 27. Anti-AI-Slop Rules

This section is mandatory for implementation.

## NEVER

Do not:

- create gradients just to fill empty space,
- create random floating cards,
- create fake analytics,
- create fake user avatars,
- create fake logos for trust,
- create fake testimonials,
- create generic feature grids,
- use 3 cards × 3 cards repeatedly,
- use glass UI everywhere,
- use huge blur blobs,
- add emojis to every heading,
- create long AI-style copy,
- use “revolutionary”, “seamless”, “cutting-edge” marketing filler,
- invent statistics,
- use generic stock illustrations,
- use random icon libraries as main visual identity.

## INSTEAD

Use:

- original Minta Katak illustrations,
- actual brand colors,
- actual customer proof,
- short Indonesian copy,
- asymmetrical compositions,
- large typography,
- whitespace,
- varying section rhythms,
- a few purposeful visual moments.

---

# 28. How to Achieve Gojek / Notion-Level Brand Feeling

Do not copy their layouts.

Copy their **principles**:

### Gojek-like principle

Brand has a recognizable personality even without reading the logo.

For Minta Katak, this means:

```text
frog silhouette
pastel green
cream belly
dark green outline
ticket motif
friendly language
```

should become immediately recognizable.

### Notion-like principle

Illustrations and typography are part of the product identity.

For Minta Katak:

```text
mascot is not decoration
mascot is storytelling
```

Each appearance should communicate something:

```text
Hero → confidence
Why → empathy
How → process
Benefit → helpfulness
Social Proof → success
Testimonial → human feedback
FAQ → curiosity
CTA → invitation
```

---

# 29. Image Performance

Original source PNG files are approximately 0.8–2.3 MB each.

Do **not** ship all original PNG assets directly in production.

Priority:

```text
SVG for illustration assets
WebP/AVIF for screenshots / raster-only images
```

For testimonial screenshots:

```text
AVIF quality ~55–70
or
WebP quality ~75–85
```

Use responsive image sizes.

---

# 30. Mobile First

Do not simply shrink desktop.

Mobile should be intentionally composed.

## Hero mobile

Order:

```text
Eyebrow
Headline
Body
CTA
Proof
Mascot
```

or mascot can partially overlap the lower hero edge if readability remains strong.

## Typography

Never reduce headline until it loses personality.

Instead:
- adjust line breaks,
- decrease width,
- remove unnecessary decor.

---

# 31. Accessibility

Required:

- semantic HTML,
- keyboard navigation,
- `aria-expanded` on FAQ,
- alt text on meaningful images,
- empty `alt=""` for purely decorative images,
- minimum 44px interactive target,
- visible keyboard focus,
- sufficient contrast,
- reduced motion support.

Mascot alt examples:

Meaningful:

```text
Maskot Minta Katak memegang tiket konser
```

Decorative:

```html
alt=""
```

---

# 32. SEO

Suggested:

```text
Title:
Minta Katak — Jasa War Tiket Konser & Event

Description:
Minta Katak bantu war tiket konser dan event favoritmu dengan proses yang simpel dan transparan.
```

Use one H1.

Each major section should have an H2.

Do not stuff keywords.

---

# 33. Social Sharing

Prepare an OG image:

```text
1200 × 630
```

Composition:

```text
Logo
+
Mascot
+
short headline
+
brand background
```

Avoid screenshotting the website itself.

---

# 34. Content Still Required

Before final production launch, prepare:

- [ ] final Hero headline,
- [ ] final Hero supporting copy,
- [ ] final CTA labels,
- [ ] final Why copy,
- [ ] final Cara Kerja steps,
- [ ] final Benefit copy,
- [ ] verified social proof values,
- [ ] 4–6 real testimonials,
- [ ] 6–8 FAQ questions + answers,
- [ ] cancellation terms,
- [ ] payment terms,
- [ ] service disclaimer,
- [ ] contact URL,
- [ ] Terms & Conditions,
- [ ] Privacy page or privacy statement,
- [ ] OG image.

---

# 35. Current Asset Checklist

## Visual brand

- [x] 4 background PNG
- [x] 8 decorative PNG
- [x] 3 logo PNG
- [x] 9 mascot PNG
- [ ] true vector SVG conversion
- [ ] SVG manual cleanup
- [ ] final asset naming
- [ ] OG social image
- [ ] favicon export

## Content

- [ ] 4–6 real testimonial screenshots
- [ ] final copy
- [ ] verified social-proof data
- [ ] FAQ
- [ ] legal/disclaimer

## Design

- [x] mascot direction
- [x] pastel direction
- [x] typography-first direction
- [ ] final color tokens
- [ ] final font selection
- [ ] final responsive mockup
- [ ] final motion review

---

# 36. Recommended Build Order

Do not build everything simultaneously.

### Phase 1 — Brand preparation

```text
PNG → SVG
Finalize logos
Finalize mascot mapping
Finalize color tokens
Finalize fonts
```

### Phase 2 — Static composition

Build without animation:

```text
Navbar
Hero
Why
Cara Kerja
Benefit
Social Proof
Testimonial
FAQ
CTA
Footer
```

Check desktop + mobile.

### Phase 3 — Motion

Add Framer Motion only after static design feels complete.

Order:

```text
scroll reveal
hero mascot
hero decorations
cara kerja timeline
social proof
testimonial drag
FAQ
CTA
```

### Phase 4 — Polish

```text
spacing
responsive
hover states
reduced motion
image optimization
Lighthouse
accessibility
SEO
```

---

# 37. Definition of Done

The landing page is complete only when:

- it looks like a real brand website,
- the first screen clearly communicates jasa war tiket,
- mascot identity is consistent,
- there are no generic AI visuals,
- the page works without motion,
- motion enhances rather than defines the experience,
- mobile looks intentionally designed,
- all claims are factual,
- testimonial proof is real,
- loading remains fast,
- CTA is obvious,
- brand personality remains memorable after leaving the page.

---

# 38. Final Creative Rule

When deciding whether to add something, ask:

> **“Apakah elemen ini memperkuat Minta Katak, atau hanya membuat halaman lebih ramai?”**

If the answer is only “lebih ramai”, remove it.

The objective is not to make the website look impressive because it has many effects.

The objective is to make people remember:

# **Minta Katak. 🐸🎫**
