'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { FINAL_CTA_DATA, SITE_CONFIG } from '@/lib/constants';
import { fadeUp, mascotFloat, decorationPulse } from '@/lib/motion';

export default function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-24 md:py-36 bg-[#FAF7F2] overflow-hidden">
      {/* Organic Background Support Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-35 z-0">
        <Image
          src="/assets/brand/background/mintakatak-bg-04.svg"
          alt=""
          fill
          unoptimized
          className="object-cover object-center"
        />
      </div>

      {/* Floating Cloud Accent Top Left (Desktop only to prevent mobile text overlap) */}
      <motion.div
        aria-hidden="true"
        variants={shouldReduceMotion ? undefined : decorationPulse}
        animate={shouldReduceMotion ? undefined : 'animate'}
        className="hidden md:block absolute top-10 left-12 md:left-20 w-44 md:w-64 pointer-events-none opacity-80 z-0"
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

      {/* Star Accent Top Center */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-10 md:w-16 pointer-events-none opacity-75 z-0">
        <Image
          src="/assets/brand/decorations/star.svg"
          alt=""
          width={100}
          height={100}
          unoptimized
          style={{ width: 'auto', height: 'auto' }}
          className="w-full h-auto animate-pulse"
        />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-6 md:px-12 z-10">
        {/* Seamless Open Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left relative z-10">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl text-[#1A2921] font-bold font-fredoka leading-[1.06] tracking-tight max-w-[18ch] whitespace-pre-line"
            >
              {FINAL_CTA_DATA.headline}
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pt-2 space-y-4"
            >
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4.5 rounded-full bg-[#376E57] text-[#FAF7F2] font-fredoka font-bold text-xl hover:bg-[#2C5846] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {FINAL_CTA_DATA.buttonText}
              </a>

              {/* Funny Brand Microcopy */}
              <p className="text-xs md:text-sm font-semibold text-[#4B6354] italic">
                * {FINAL_CTA_DATA.microcopy}
              </p>
            </motion.div>
          </div>

          {/* Right Mascot Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              variants={shouldReduceMotion ? undefined : mascotFloat}
              animate={shouldReduceMotion ? undefined : 'animate'}
              className="relative z-10 w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[360px]"
            >
              <Image
                src="/assets/brand/mascot/mascot-cta.svg"
                alt="Maskot Minta Katak mengajak war tiket"
                width={650}
                height={650}
                unoptimized
                style={{ width: 'auto', height: 'auto' }}
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* Decorative Ticket Icon Accent */}
            <div className="absolute -top-4 -right-2 w-16 sm:w-20 md:w-28 pointer-events-none z-0">
              <Image
                src="/assets/brand/decorations/ticket.svg"
                alt=""
                width={150}
                height={150}
                unoptimized
                style={{ width: 'auto', height: 'auto' }}
                className="w-full h-auto opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
