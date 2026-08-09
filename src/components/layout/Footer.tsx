'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { Instagram, MessageCircle } from 'lucide-react';

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

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-4">
              {/* Instagram */}
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Minta Katak"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C5846] text-[#FAF7F2] font-fredoka font-semibold text-sm hover:bg-[#376E57] transition-all hover:scale-105"
              >
                <Instagram size={18} />
                <span>@mintakatak</span>
              </a>

              {/* Twitter / X */}
              <a
                href={SITE_CONFIG.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter X Minta Katak"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C5846] text-[#FAF7F2] font-fredoka font-semibold text-sm hover:bg-[#376E57] transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>@mintakatak</span>
              </a>

              {/* WhatsApp */}
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Minta Katak"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#376E57] text-[#FAF7F2] font-fredoka font-semibold text-sm hover:bg-[#2C5846] transition-all hover:scale-105"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
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
                style={{ width: 'auto', height: 'auto' }}
                className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity scale-125 md:scale-140 origin-center"
              />
            </div>
          </div>
        </div>

        {/* Copyright & Official Domain */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-sm md:text-base text-[#C5E0CF]/80 gap-4">
          <p>© {new Date().getFullYear()} Minta Katak. All rights reserved.</p>
          <a
            href={SITE_CONFIG.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#FAF7F2] hover:text-[#C5E0CF] transition-colors"
          >
            mintakatak.my.id
          </a>
        </div>
      </div>
    </footer>
  );
}
