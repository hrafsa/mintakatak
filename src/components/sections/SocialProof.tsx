'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SOCIAL_PROOF_DATA } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function SocialProof() {
  return (
    <section className="relative py-24 md:py-32 bg-[#376E57] text-[#FAF7F2] overflow-hidden">
      {/* Background Graphic Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-15 z-0">
        <Image
          src="/assets/brand/background/mintakatak-bg-03.svg"
          alt=""
          fill
          unoptimized
          className="object-cover object-center"
        />
      </div>

      {/* Decorative Cloud Top Left */}
      <div className="absolute top-6 left-6 w-32 md:w-56 pointer-events-none opacity-40 z-0">
        <Image
          src="/assets/brand/decorations/cloud.svg"
          alt=""
          width={300}
          height={180}
          unoptimized
          className="w-full h-auto"
        />
      </div>

      {/* Decorative Star Accent Top Right */}
      <div className="absolute top-12 right-12 w-12 md:w-20 pointer-events-none opacity-60 z-0">
        <Image
          src="/assets/brand/decorations/star.svg"
          alt=""
          width={100}
          height={100}
          unoptimized
          className="w-full h-auto"
        />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-6 md:px-12 z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Huge Dominant Stat Number */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF7F2]/15 text-[#C5E0CF] font-fredoka font-bold text-xs md:text-sm tracking-wider uppercase">
                REKOR WAR MINTA KATAK
              </span>
            </motion.div>

            {/* Dominant Stat Counter */}
            <motion.div variants={fadeUp} className="space-y-2">
              <h2 className="text-7xl sm:text-8xl lg:text-[9rem] font-bold font-fredoka leading-none tracking-tight text-[#FAF7F2]">
                {SOCIAL_PROOF_DATA.statNumber}
              </h2>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold font-fredoka text-[#C5E0CF]">
                {SOCIAL_PROOF_DATA.statLabel}
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-2xl text-[#E3EDE6] max-w-[42ch] font-medium leading-relaxed"
            >
              {SOCIAL_PROOF_DATA.subtext}
            </motion.p>
          </div>

          {/* Right Column: Celebration Mascot (Perfect Balanced Bounds) */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 flex justify-center lg:justify-end items-center relative"
          >
            <div className="relative z-10 w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[380px]">
              <Image
                src="/assets/brand/mascot/mascot-secured.svg"
                alt="Maskot Minta Katak merayakan keberhasilan war tiket"
                width={700}
                height={700}
                unoptimized
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            {/* Sparkling Accent Behind Celebration Mascot */}
            <div className="absolute -top-6 -right-6 w-20 md:w-32 pointer-events-none z-0">
              <Image
                src="/assets/brand/decorations/sparkling.svg"
                alt=""
                width={160}
                height={160}
                unoptimized
                className="w-full h-auto opacity-80"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
