'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HOW_DATA } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="relative py-28 md:py-40 bg-[#EBF4EE]/70 overflow-hidden">
      {/* Cloud Accent Top Right */}
      <div className="absolute top-10 right-6 w-36 md:w-64 pointer-events-none opacity-60">
        <Image
          src="/assets/brand/decorations/cloud.svg"
          alt=""
          width={250}
          height={140}
          unoptimized
          style={{ width: 'auto', height: 'auto' }}
          className="w-full h-auto"
        />
      </div>

      {/* Floating Star Accent Left */}
      <div className="absolute top-1/3 left-4 w-16 md:w-24 pointer-events-none opacity-80 z-0">
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

      <div className="relative max-w-[1360px] mx-auto px-6 md:px-12 z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8"
        >
          <div className="space-y-4">
            <span className="inline-block text-[#376E57] font-fredoka font-bold text-sm md:text-base tracking-wider uppercase">
              PROSES SIMPEL & TRANSPARAN
            </span>
            <h2 className="section-title text-[#1A2921]">
              Cara kerja Katak <br className="hidden md:inline" />
              jaswarin tiketmu.
            </h2>
          </div>
          <div className="shrink-0 flex items-center justify-center relative">
            {/* Spark Decor Next to Mascot */}
            <div className="absolute -top-6 -left-6 w-12 md:w-16 pointer-events-none z-20">
              <Image
                src="/assets/brand/decorations/spark.svg"
                alt=""
                width={80}
                height={80}
                unoptimized
                style={{ width: 'auto', height: 'auto' }}
                className="w-full h-auto opacity-90"
              />
            </div>
            <Image
              src="/assets/brand/mascot/mascot-how.svg"
              alt="Maskot Minta Katak bekerja cepat"
              width={240}
              height={240}
              unoptimized
              style={{ width: 'auto', height: 'auto' }}
              className="w-36 sm:w-48 md:w-60 h-auto object-contain drop-shadow-xl"
            />
          </div>
        </motion.div>

        {/* 4 Process Steps Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[8%] right-[8%] h-[4px] pointer-events-none z-0">
            <Image
              src="/assets/brand/decorations/line.svg"
              alt=""
              fill
              unoptimized
              className="object-contain opacity-70 scale-110"
            />
          </div>

          {HOW_DATA.map((item, idx) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              className="relative z-10 bg-[#FAF7F2] p-8 md:p-10 rounded-[2rem] border-2 border-[#E3EDE6] shadow-md flex flex-col justify-between hover:border-[#376E57] transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="space-y-6">
                <span className="text-5xl md:text-6xl font-bold font-fredoka text-[#376E57]/30 group-hover:text-[#376E57] transition-colors duration-300">
                  {item.step}
                </span>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[#1A2921] font-fredoka leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#4B6354] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E3EDE6] mt-8 flex items-center justify-between">
                <span className="text-xs font-bold text-[#376E57] uppercase tracking-wider">
                  Langkah 0{idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#376E57] group-hover:scale-150 transition-transform"></span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
