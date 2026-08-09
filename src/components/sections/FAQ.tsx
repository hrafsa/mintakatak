'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 md:py-40 bg-[#EBF4EE]/50 overflow-hidden">
      <div className="relative max-w-[1000px] mx-auto px-6 md:px-12 z-10">
        {/* Header with Peeking Mascot */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-end justify-between mb-16 gap-8"
        >
          <div className="space-y-4">
            <span className="inline-block text-[#376E57] font-fredoka font-bold text-sm md:text-base tracking-wider uppercase">
              PERTANYAAN UMUM
            </span>
            <h2 className="section-title text-[#1A2921]">
              Hal yang sering <br className="hidden sm:inline" />
              ditanyakan ke Katak.
            </h2>
          </div>
          <div className="shrink-0 relative">
            <Image
              src="/assets/brand/mascot/mascot-faq.svg"
              alt="Maskot Minta Katak mengintip penasaran"
              width={220}
              height={220}
              className="w-36 sm:w-48 md:w-56 h-auto object-contain drop-shadow-md scale-125"
            
              unoptimized/>
          </div>
        </motion.div>

        {/* Clean Accordion List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-[#FAF7F2] rounded-[1.75rem] border border-[#E3EDE6] overflow-hidden transition-all shadow-sm hover:border-[#376E57]"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between gap-6 font-fredoka text-xl md:text-2xl text-[#1A2921] font-semibold hover:text-[#376E57] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={26}
                    className={`text-[#376E57] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-[#4B6354] text-base md:text-lg leading-relaxed border-t border-[#E3EDE6]/50 pt-5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
