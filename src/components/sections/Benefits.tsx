'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BENEFIT_DATA } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { ShieldCheck, Lock, CreditCard, MessageSquare, Zap } from 'lucide-react';

const icons = [ShieldCheck, Lock, CreditCard, MessageSquare, Zap];

export default function Benefits() {
  return (
    <section id="benefit" className="relative py-24 md:py-36 bg-[#EBF4EE]/50 overflow-hidden">
      {/* Background Composition Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <Image
          src="/assets/brand/background/mintakatak-bg-03.svg"
          alt=""
          fill
          unoptimized
          className="object-cover object-center"
        />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Benefit Items */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#376E57]/10 text-[#376E57] font-fredoka font-bold text-xs md:text-sm uppercase tracking-wider">
                Keunggulan Layanan
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A2921] font-fredoka leading-[1.06] tracking-tight whitespace-pre-line">
                {BENEFIT_DATA.headline}
              </h2>
            </motion.div>

            {/* Benefit Row Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {BENEFIT_DATA.items.map((item: { title: string; desc: string }, idx: number) => {
                const IconComponent = icons[idx % icons.length];
                return (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="p-6 rounded-2xl bg-[#FAF7F2]/90 border border-[#E3EDE6] shadow-sm hover:shadow-md transition-all duration-200 flex items-start gap-5 group"
                  >
                    <div className="p-3 rounded-xl bg-[#376E57] text-[#FAF7F2] group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
                      <IconComponent size={24} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-[#1A2921] font-fredoka">
                        {item.title}
                      </h3>
                      <p className="text-base text-[#4B6354] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Mascot & Decorative Backdrop (Perfect Balanced Bounds) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[340px]"
            >
              <Image
                src="/assets/brand/mascot/mascot-benefit.svg"
                alt="Maskot Minta Katak merayakan keunggulan"
                width={650}
                height={650}
                unoptimized
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* Sparkle Decoration Accent */}
            <div className="absolute -top-8 -right-4 w-14 md:w-20 pointer-events-none z-0">
              <Image
                src="/assets/brand/decorations/sparkling.svg"
                alt=""
                width={120}
                height={120}
                unoptimized
                className="w-full h-auto opacity-90 animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
