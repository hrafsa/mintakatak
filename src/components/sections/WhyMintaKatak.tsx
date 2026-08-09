'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { WHY_DATA } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function WhyMintaKatak() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="why" className="relative py-24 md:py-36 bg-[#FAF7F2] overflow-hidden">
      {/* Background Support Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <Image
          src="/assets/brand/background/mintakatak-bg-02.svg"
          alt=""
          fill
          unoptimized
          className="object-cover object-center"
        />
      </div>

      {/* Decorative Star Icon Top Right */}
      <div className="absolute top-12 right-8 md:right-24 w-12 md:w-20 pointer-events-none opacity-80 z-0">
        <Image
          src="/assets/brand/decorations/star.svg"
          alt=""
          width={120}
          height={120}
          unoptimized
          className="w-full h-auto animate-pulse"
        />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-6 md:px-12 z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Story Mascot Illustration */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 flex justify-center items-center relative order-2 lg:order-1"
          >
            <div className="relative z-10 w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[360px]">
              <Image
                src="/assets/brand/mascot/mascot-why.svg"
                alt="Maskot Minta Katak bekerja dengan laptop"
                width={650}
                height={650}
                unoptimized
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
            {/* Organic Decorative Leaf Corner Accent */}
            <div className="absolute -top-6 -left-4 w-16 md:w-24 pointer-events-none z-0">
              <Image
                src="/assets/brand/decorations/leaf.svg"
                alt=""
                width={120}
                height={120}
                unoptimized
                className="w-full h-auto opacity-90"
              />
            </div>
          </motion.div>

          {/* Right Column: Editorial Typography */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <motion.div variants={fadeUp} className="space-y-3">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A2921] font-fredoka leading-[1.06] tracking-tight whitespace-pre-line">
                {WHY_DATA.headline}
              </h2>
              <p className="text-2xl sm:text-3xl font-fredoka font-bold text-[#376E57]">
                {WHY_DATA.subhead}
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-[#4B6354] leading-relaxed max-w-[52ch]"
            >
              {WHY_DATA.description}
            </motion.p>

            {/* Benefit Statements List */}
            <motion.div variants={fadeUp} className="space-y-5 pt-2">
              {WHY_DATA.points.map((point, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#376E57] text-[#FAF7F2] font-fredoka font-bold flex items-center justify-center text-sm shadow-sm">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A2921] font-fredoka">
                      {point.title}
                    </h3>
                    <p className="text-base text-[#4B6354] leading-normal">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
