'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#1A2921] text-[#FAF7F2] py-20 border-t border-[#2C5846]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start justify-between pb-16 border-b border-[#2C5846]">
          {/* Logo & Tagline */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-block relative">
              <div className="relative h-10 md:h-14 w-52 md:w-68 flex items-center">
                <Image
                  src="/assets/brand/logo/logo-secondary.svg"
                  alt="Minta Katak Logo"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-[#C5E0CF] text-base md:text-lg max-w-sm leading-relaxed pt-2">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-fredoka text-xl text-[#FAF7F2] font-bold">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#C5E0CF] hover:text-[#FAF7F2] font-medium text-base md:text-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Mascot Accent */}
          <div className="md:col-span-3 flex justify-start md:justify-end items-center">
            <div className="relative w-36 md:w-52 h-auto">
              <Image
                src="/assets/brand/mascot/mascot-footer.svg"
                alt="Maskot Minta Katak footer"
                width={240}
                height={240}
                unoptimized
                className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity scale-125 md:scale-140 origin-center"
              />
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-sm md:text-base text-[#C5E0CF]/80 gap-4">
          <p>© {new Date().getFullYear()} Minta Katak. All rights reserved.</p>
          <p className="font-semibold">Jasa War Tiket Konser & Event Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
