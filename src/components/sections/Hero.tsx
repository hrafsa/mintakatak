'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { HERO_DATA, SITE_CONFIG } from '@/lib/constants';
import { fadeUp, staggerContainer, mascotFloat, decorationPulse } from '@/lib/motion';
import { CheckCircle2 } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen lg:h-screen lg:max-h-[940px] flex items-center justify-center pt-24 pb-10 md:pt-28 md:pb-12 overflow-hidden bg-gradient-to-b from-[#EBF4EE]/60 via-[#FAF7F2] to-[#FAF7F2]">
      {/* Organic Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-45">
        <Image
          src="/assets/brand/background/mintakatak-bg-01.svg"
          alt=""
          fill
          unoptimized
          className="object-cover object-center scale-105"
          priority
        />
      </div>

      {/* Cloud Decoration Top Left (Desktop only to prevent mobile overlap) */}
      <motion.div
        aria-hidden="true"
        variants={shouldReduceMotion ? undefined : decorationPulse}
        animate={shouldReduceMotion ? undefined : 'animate'}
        className="hidden md:block absolute top-20 left-8 w-64 pointer-events-none opacity-90 z-0"
      >
        <Image
          src="/assets/brand/decorations/cloud.svg"
          alt=""
          width={350}
          height={200}
          unoptimized
          style={{ width: 'auto', height: 'auto' }}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Sparkle Decoration Top Right */}
      <motion.div
        aria-hidden="true"
        variants={shouldReduceMotion ? undefined : decorationPulse}
        animate={shouldReduceMotion ? undefined : 'animate'}
        className="absolute top-16 right-4 sm:right-8 md:right-16 w-16 sm:w-24 md:w-36 pointer-events-none opacity-90 z-0"
      >
        <Image
          src="/assets/brand/decorations/sparkling.svg"
          alt=""
          width={180}
          height={180}
          unoptimized
          style={{ width: 'auto', height: 'auto' }}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Additional Star Accent Top Center */}
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-1/2 -translate-x-12 w-10 sm:w-14 md:w-20 pointer-events-none opacity-80 z-0"
      >
        <Image
          src="/assets/brand/decorations/star.svg"
          alt=""
          width={120}
          height={120}
          unoptimized
          style={{ width: 'auto', height: 'auto' }}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Additional Love Heart Accent Left Middle (Desktop only) */}
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { y: [-6, 6, -6], rotate: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:block absolute top-1/2 left-10 w-20 pointer-events-none opacity-85 z-0"
      >
        <Image
          src="/assets/brand/decorations/love.svg"
          alt=""
          width={120}
          height={120}
          unoptimized
          style={{ width: 'auto', height: 'auto' }}
          className="w-full h-auto"
        />
      </motion.div>

      <div className="relative max-w-[1360px] mx-auto px-6 md:px-12 z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center"
        >
          {/* Text & Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 md:space-y-6 relative">
            {/* Sparkle Icon Accent Near Headline */}
            <div className="absolute -top-8 left-48 w-10 md:w-14 pointer-events-none hidden sm:block">
              <Image
                src="/assets/brand/decorations/spark.svg"
                alt=""
                width={80}
                height={80}
                unoptimized
                style={{ width: 'auto', height: 'auto' }}
                className="w-full h-auto opacity-90 animate-pulse"
              />
            </div>

            {/* Small Eyebrow */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#376E57]/10 text-[#376E57] font-fredoka font-bold text-xs md:text-sm tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#376E57] animate-pulse"></span>
                {HERO_DATA.eyebrow}
              </span>
            </motion.div>

            {/* Main Headline H1 with Perfectly Positioned Underline */}
            <motion.h1
              variants={fadeUp}
              className="hero-title text-[#1A2921] max-w-[20ch] text-4xl sm:text-5xl lg:text-[4.25rem] leading-[1.04] tracking-tight font-bold font-fredoka"
            >
              War tiket nggak harus bikin kamu{' '}
              <span className="text-[#376E57] relative inline-block whitespace-nowrap">
                ikutan panik.
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2.5 sm:h-3 text-[#C5E0CF]"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q50,12 100,5"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p variants={fadeUp} className="text-base md:text-lg text-[#4B6354] max-w-[48ch] leading-relaxed">
              {HERO_DATA.body}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 pt-1.5 w-full sm:w-auto"
            >
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#376E57] text-[#FAF7F2] font-fredoka font-bold text-lg md:text-xl hover:bg-[#2C5846] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {HERO_DATA.primaryCta}
              </a>
              <a
                href="#cara-kerja"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#EBF4EE] text-[#376E57] font-fredoka font-bold text-lg md:text-xl hover:bg-[#E3EDE6] transition-all duration-200"
              >
                {HERO_DATA.secondaryCta}
              </a>
            </motion.div>

            {/* Supporting Proof Badges with Animated Counter */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E3EDE6] w-full relative"
            >
              <div className="flex items-center gap-2 text-sm md:text-base font-bold text-[#1A2921]">
                <CheckCircle2 size={18} className="text-[#376E57]" />
                <span>
                  <AnimatedCounter to={400} suffix="+" duration={2.2} /> tickets secured
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base font-bold text-[#1A2921]">
                <CheckCircle2 size={18} className="text-[#376E57]" />
                <span>Payment after secured</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Mascot Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-2">
            {/* Ticket Decorative Icon Behind Mascot */}
            <motion.div
              aria-hidden="true"
              variants={shouldReduceMotion ? undefined : decorationPulse}
              animate={shouldReduceMotion ? undefined : 'animate'}
              className="absolute -top-6 -right-2 w-20 sm:w-24 md:w-32 z-0 opacity-95 pointer-events-none"
            >
              <Image
                src="/assets/brand/decorations/ticket.svg"
                alt=""
                width={220}
                height={220}
                unoptimized
                style={{ width: 'auto', height: 'auto' }}
                className="w-full h-auto drop-shadow-lg"
              />
            </motion.div>

            {/* Main Mascot Vector Illustration */}
            <motion.div
              variants={shouldReduceMotion ? undefined : mascotFloat}
              animate={shouldReduceMotion ? undefined : 'animate'}
              className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px]"
            >
              <Image
                src="/assets/brand/mascot/mascot-hero.svg"
                alt="Maskot Minta Katak memegang tiket konser"
                width={700}
                height={700}
                unoptimized
                style={{ width: 'auto', height: 'auto' }}
                className="w-full h-auto object-contain drop-shadow-2xl origin-center"
                priority
              />
            </motion.div>

            {/* Leaf Accent Bottom Left */}
            <div className="absolute -bottom-6 left-0 w-16 md:w-24 pointer-events-none z-0">
              <Image
                src="/assets/brand/decorations/leaf.svg"
                alt=""
                width={160}
                height={160}
                unoptimized
                style={{ width: 'auto', height: 'auto' }}
                className="w-full h-auto opacity-85"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
