import type { Metadata } from 'next';
import { Fredoka, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mintakatak.my.id'),
  title: 'Minta Katak — Jasa War Tiket Konser & Event Indonesia',
  description: 'Minta Katak bantu ngejar tiket konser dan event favoritmu dengan proses yang simpel dan transparan. Payment after secured!',
  keywords: ['jasa war tiket', 'war tiket konser', 'minta katak', 'jastip tiket', 'tiket konser indonesia', 'war tiket kpop', 'mintakatak.my.id'],
  authors: [{ name: 'Minta Katak' }],
  icons: {
    icon: '/assets/brand/logo/logo-head.svg',
    shortcut: '/assets/brand/logo/logo-head.svg',
    apple: '/assets/brand/logo/logo-head.svg',
  },
  openGraph: {
    title: 'Minta Katak — Jasa War Tiket Konser & Event Indonesia',
    description: 'Bantu ngejar tiket konser dan event favoritmu dengan proses yang simpel dan transparan. Payment after secured!',
    url: 'https://mintakatak.my.id',
    siteName: 'Minta Katak',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minta Katak — Jasa War Tiket Konser & Event',
    description: 'Bantu ngejar tiket konser dan event favoritmu dengan proses yang simpel dan transparan. Payment after secured!',
    site: '@mintakatak',
    creator: '@mintakatak',
  },
  alternates: {
    canonical: 'https://mintakatak.my.id',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${fredoka.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#FAF7F2] text-[#1A2921] selection:bg-[#376E57] selection:text-[#FAF7F2]">
        {children}
      </body>
    </html>
  );
}
