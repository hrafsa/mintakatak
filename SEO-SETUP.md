# Pengaturan Google untuk Minta Katak

Project menyediakan identitas `Minta Katak` / `Mintakatak`, structured data
`WebSite` dan `Organization`, canonical homepage, `/robots.txt`, dan `/sitemap.xml`.
Perubahan baru tersedia di domain setelah deployment production berhasil.

Domain tanpa `www` diarahkan oleh Vercel ke `https://www.mintakatak.my.id/`.
Canonical, sitemap, dan structured data memakai URL production tersebut.
Meta tag Google sudah ditambahkan untuk verifikasi properti URL prefix di
akun Google pemilik situs. Pertahankan tag agar status verifikasi tetap aktif.

## Google Search Console

1. Login di https://search.google.com/search-console menggunakan akun pemilik situs.
2. Jika belum ada properti, tambahkan tipe **Domain** dengan nilai `mintakatak.my.id`.
3. Salin record TXT verifikasi yang diberikan Google. Di layanan pengelola DNS
   yang aktif untuk domain, tambahkan record TXT pada root (`@` atau kosong,
   mengikuti format layanan), dengan value persis dari Google.
   Tambahkan record baru tanpa mengganti record DNS yang sudah ada.
4. Kembali ke Search Console dan klik **Verify**. Jika record belum terbaca,
   tunggu propagasi DNS lalu coba lagi. Pertahankan TXT setelah berhasil.
5. Setelah deployment, buka **Sitemaps**, kirim
   `https://www.mintakatak.my.id/sitemap.xml`, dan periksa statusnya.
6. Buka **URL Inspection**, masukkan `https://www.mintakatak.my.id/`.
   Periksa status indeks dan canonical Google, gunakan **Test Live URL**, lalu
   **Request Indexing** jika homepage dapat diakses dan diindeks.
7. Pada laporan **Performance**, pantau query `mintakatak` dan `minta katak`:
   impressions, clicks, dan average position. Gunakan data ini untuk mengukur
   perubahan; posisi satu pencarian manual dapat berbeda.

Jika memilih properti **URL prefix**, gunakan `https://www.mintakatak.my.id/`
dan salah satu metode verifikasi yang ditawarkan Google. Jika menggunakan
HTML meta tag, token harus berasal dari akun Search Console pemilik situs.

## Profil brand

Gunakan nama **Minta Katak (Mintakatak)** secara konsisten dan pasang tautan
`https://mintakatak.my.id/` di bio/link Instagram serta X resmi.
Contoh bio: `Minta Katak | Jasa war tiket konser & event Indonesia`.
Website sudah menautkan kedua profil melalui footer dan `sameAs`.

## Pemeriksaan setelah deployment

- Homepage mengembalikan HTTP 200 dan canonical mengarah ke domain utama.
- `/robots.txt` mengizinkan crawling dan menyebut URL sitemap.
- `/sitemap.xml` berisi URL homepage domain utama.
- Source HTML homepage memuat JSON-LD `WebSite` dan `Organization`.
- URL Inspection tidak menemukan `noindex` atau hambatan crawl pada homepage.

Google memutuskan indexing, nama situs yang ditampilkan, dan ranking.
Sitemap atau structured data tidak menjamin posisi pertama maupun AI Overview.
Request Indexing berulang tidak mempercepat crawl.

Referensi:
- https://developers.google.com/search/docs/appearance/site-names
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
