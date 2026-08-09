'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md py-3 shadow-md border-b border-[#E3EDE6]'
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Unclipped Crisp Primary Brand Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-10">
          <div className="relative h-9 sm:h-10 md:h-12 w-44 sm:w-56 md:w-64 flex items-center">
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

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#1A2921] hover:text-[#376E57] font-semibold text-base md:text-lg transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Primary CTA Button */}
        <div className="hidden lg:block">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#376E57] text-[#FAF7F2] font-fredoka font-bold text-base md:text-lg hover:bg-[#2C5846] transition-all duration-200 shadow-sm hover:shadow-md active:translate-y-0"
          >
            Minta Katak War
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 rounded-xl bg-[#EBF4EE] text-[#1A2921] hover:bg-[#E3EDE6] transition-colors"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E3EDE6] px-6 py-8 space-y-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#1A2921] font-bold text-xl py-2 border-b border-[#E3EDE6]/60 hover:text-[#376E57]"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#376E57] text-[#FAF7F2] font-fredoka font-bold text-xl shadow-md"
            >
              Minta Katak War
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
