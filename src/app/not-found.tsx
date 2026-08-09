'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { Home, MessageCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A2921] flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Existing Site Brand Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <Image
          src="/assets/brand/background/mintakatak-bg-01.svg"
          alt=""
          fill
          unoptimized
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Floating Cloud Accent Top Right */}
      <div className="absolute top-10 right-8 w-44 md:w-64 pointer-events-none opacity-60 z-0">
        <Image
          src="/assets/brand/decorations/cloud.svg"
          alt=""
          width={300}
          height={160}
          unoptimized
          style={{ width: 'auto', height: 'auto' }}
          className="w-full h-auto"
        />
      </div>

      {/* Floating Star Accent Left */}
      <div className="absolute top-1/3 left-8 w-16 md:w-24 pointer-events-none opacity-75 z-0">
        <Image
          src="/assets/brand/decorations/star.svg"
          alt=""
          width={120}
          height={120}
          unoptimized
          style={{ width: 'auto', height: 'auto' }}
          className="w-full h-auto animate-pulse"
        />
      </div>

      {/* Navigation Header */}
      <header className="relative z-10 py-6 px-6 md:px-12 max-w-[1360px] mx-auto w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-44 md:w-56 flex items-center">
            <Image
              src="/assets/brand/logo/logo-primary.svg"
              alt="Minta Katak Logo"
              fill
              unoptimized
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
      </header>

      {/* Main 404 Content */}
      <main className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12 py-12 flex-1 flex flex-col items-center justify-center text-center">
        {/* Mascot & Giant 404 Typography Combo */}
        <div className="flex flex-col items-center justify-center mb-6 relative">
          <span className="text-7xl sm:text-8xl md:text-[10rem] font-bold font-fredoka text-[#376E57] leading-none tracking-tight select-none">
            404
          </span>

          <div className="w-32 sm:w-40 md:w-48 -mt-8 sm:-mt-12 relative z-10">
            <Image
              src="/assets/brand/mascot/mascot-faq.svg"
              alt="Maskot Katak Bingung"
              width={300}
              height={300}
              unoptimized
              style={{ width: 'auto', height: 'auto' }}
              className="w-full h-auto object-contain drop-shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Content Copy */}
        <div className="space-y-4 max-w-[560px]">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#376E57]/10 text-[#376E57] font-fredoka font-bold text-xs md:text-sm tracking-wider uppercase">
            HALAMAN TIDAK DITEMUKAN
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold font-fredoka text-[#1A2921] leading-tight">
            Waduh, Halaman Nggak Ketemu!
          </h1>

          <p className="text-base sm:text-lg text-[#4B6354] leading-relaxed">
            Sepertinya halaman yang kamu cari nggak ada atau udah pindah. Tenang, Katak siap bantu kamu balik ke jalan yang benar.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">
          {/* Button 1: Kembali ke Home */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#376E57] text-[#FAF7F2] font-fredoka font-bold text-lg hover:bg-[#2C5846] transition-all duration-200 shadow-md hover:shadow-lg active:translate-y-0"
          >
            <Home size={20} />
            <span>Kembali ke Home</span>
          </Link>

          {/* Button 2: Hubungi Katak */}
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#EBF4EE] text-[#376E57] font-fredoka font-bold text-lg hover:bg-[#E3EDE6] transition-all duration-200 shadow-sm"
          >
            <MessageCircle size={20} />
            <span>Hubungi Katak</span>
          </a>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 py-6 text-center text-xs text-[#4B6354]/80 font-semibold">
        © {new Date().getFullYear()} Minta Katak. All rights reserved.
      </footer>
    </div>
  );
}
