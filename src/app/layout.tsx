import type { Metadata } from 'next/types';
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
  title: 'Minta Katak — Jasa War Tiket Konser & Event',
  description: 'Minta Katak bantu ngejar tiket konser dan event favoritmu dengan proses yang simpel dan transparan.',
  icons: {
    icon: '/assets/brand/logo/logo-head.svg',
  },
  openGraph: {
    title: 'Minta Katak — Jasa War Tiket Konser & Event',
    description: 'Bantu ngejar tiket konser dan event favoritmu dengan proses yang simpel dan transparan.',
    url: 'https://mintakatak.com',
    siteName: 'Minta Katak',
    locale: 'id_ID',
    type: 'website',
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
