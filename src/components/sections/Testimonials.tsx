'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, staggerContainer, mascotFloat } from '@/lib/motion';
import { MessageCircleHeart, ExternalLink, Heart, CheckCircle2 } from 'lucide-react';

const TESTIMONIAL_POSTS = [
  {
    id: '2085908510706143722',
    name: '피자ᡣ𐭩',
    handle: '@loveyookangmin',
    date: '8 Agt 2026',
    url: 'https://x.com/loveyookangmin/status/2085908510706143722',
    tag: 'Secured VIP',
    text: 'temen-temen banyak yg nanya "kok bisa secured vip?" "ih keren banget" "tau gitu aku pake jaswar aja" ini jastip/jaswar UMKM trusted!\n\naku jaswar di @mintakatak awalnya sempet nanya2 secured apa engga, tapi gak ada respon udah setengah jam karena mereka fokus war—',
  },
  {
    id: '2068282914304118860',
    name: 'kyle',
    handle: '@kyye939',
    date: '20 Jun 2026',
    url: 'https://x.com/kyye939/status/2068282914304118860',
    tag: 'Tiket Bangtan Secured',
    text: 'SHOUT OUT TO @mintakatak 💚💚💚🐸 udah bantu secured tiket bangtan!!!\n\nGila sih jam 12.00 email udah masuk, terus dikonfirmasi chat kaget bngettt meanwhile aku pantengin di laptop aku msih antrian 200k😭😭\n\nTHANK YOU SO MUCH ❤️❤️❤️ Gacor bangettt ini jastipp bakal jadi favoritt❤️',
  },
  {
    id: '2084284570518827505',
    name: 'Nara 🐻',
    handle: '@pudulhc',
    date: '3 Agt 2026',
    url: 'https://x.com/pudulhc/status/2084284570518827505',
    tag: '6 Tiket Secured',
    text: 'berawal dari ngereply sg temenku kok dia bs dpt tiket dengan kechaosan war tadi, ternyata dia pake jaswar @mintakatak. Gongnya bisa berhasil dpt 6 tiket jadi temenku bisa nonton huhuhu terharu 😭. Terima kasih banyak kaka sudah membantu aku dan temenku menonton tulus 💙💚',
  },
  {
    id: '2084178386658939199',
    name: 'D⭐️',
    handle: '@DikeyzzA',
    date: '3 Agt 2026',
    url: 'https://x.com/DikeyzzA/status/2084178386658939199',
    tag: '< 5 Minit Direct',
    text: 'GERCEEPPP BGTT IYYYY😭🫰🏻🥹 dibawah 5minit langsung secureddddd🥹💚 MAKAASIIH BANYAAKKK AKAKK @mintakatak',
  },
  {
    id: '2081278514503033267',
    name: 'ny',
    handle: '@byunaeli',
    date: '26 Jul 2026',
    url: 'https://x.com/byunaeli/status/2081278514503033267',
    tag: 'Secured VVIP',
    text: 'secured vvip thankyou so so much kak @mintakatak 😭😭❤️❤️❤️ 11.02 dapet notif email utk payment aaaa KEREN 👍🏻👍🏻',
  },
  {
    id: '2081242724599291973',
    name: '°.☆(cha) ▪︎ rest',
    handle: '@ultracsy_',
    date: '26 Jul 2026',
    url: 'https://x.com/ultracsy_/status/2081242724599291973',
    tag: 'VVIP 1 Minute',
    text: 'ini stresss, gila banget, keren pwolll!😭💗✨ i got vvip for one minutes???!!! klian kl mw cari yg trusted ke @mintakatak sj gusy🥺🫰🏼🫰🏼🫰🏼🫰🏼🫰🏼',
  },
];

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="testimoni" className="relative py-24 md:py-36 bg-[#FAF7F2] overflow-hidden">
      {/* Organic Brand Background SVG (mintakatak_bg_ver5) */}
      <div className="absolute inset-0 pointer-events-none opacity-45 z-0">
        <Image
          src="/assets/brand/background/mintakatak-bg-05.svg"
          alt=""
          fill
          unoptimized
          className="object-cover object-center"
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="hidden sm:block absolute top-16 left-6 md:left-14 w-16 md:w-24 pointer-events-none opacity-80 z-0">
        <Image
          src="/assets/brand/decorations/love.svg"
          alt=""
          width={120}
          height={120}
          unoptimized
          style={{ width: 'auto', height: 'auto' }}
          className="w-full h-auto"
        />
      </div>

      <div className="absolute top-20 right-4 sm:right-8 md:right-16 w-12 sm:w-14 md:w-20 pointer-events-none opacity-80 z-0">
        <Image
          src="/assets/brand/decorations/sparkling.svg"
          alt=""
          width={120}
          height={120}
          unoptimized
          style={{ width: 'auto', height: 'auto' }}
          className="w-full h-auto animate-pulse"
        />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-6 md:px-12 z-10">
        {/* Section Header with Mascot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-4 text-left"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#376E57]/10 text-[#376E57] font-fredoka font-bold text-xs md:text-sm tracking-wider uppercase">
              <MessageCircleHeart size={16} />
              REAL TESTIMONIALS FROM X
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A2921] font-fredoka leading-[1.06] tracking-tight">
              Apa Kata Teman-Teman Yang <br className="hidden sm:inline" />
              <span className="text-[#376E57]">Udah Berhasil Secured?</span>
            </h2>

            <p className="text-lg md:text-xl text-[#4B6354] max-w-[54ch] leading-relaxed">
              Bukti asli & testimoni langsung dari akun X pelanggan yang tiket konsernya berhasil diamanin sama Katak.
            </p>
          </motion.div>

          {/* Testimonial Mascot Illustration */}
          <motion.div
            variants={shouldReduceMotion ? undefined : mascotFloat}
            animate={shouldReduceMotion ? undefined : 'animate'}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px]">
              <Image
                src="/assets/brand/mascot/mascot-testimonial.svg"
                alt="Maskot Minta Katak testimonial"
                width={500}
                height={500}
                unoptimized
                style={{ width: 'auto', height: 'auto' }}
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Clean & Elegant Custom Testimonial Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          {TESTIMONIAL_POSTS.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="rounded-[2rem] bg-[#FAF7F2]/95 border-2 border-[#376E57]/15 p-6 md:p-7 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-md flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Header: User Profile Info & Secured Tag */}
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#E3EDE6]">
                  <div className="flex items-center gap-3">
                    {/* Avatar Initials Badge */}
                    <div className="w-11 h-11 rounded-full bg-[#376E57] text-[#FAF7F2] font-fredoka font-bold flex items-center justify-center text-lg shadow-sm flex-shrink-0">
                      {item.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-[#1A2921] font-fredoka text-base md:text-lg leading-tight">
                          {item.name}
                        </h3>
                        <CheckCircle2 size={16} className="text-[#376E57] fill-[#C5E0CF]" />
                      </div>
                      <p className="text-xs text-[#4B6354] font-semibold">{item.handle}</p>
                    </div>
                  </div>

                  {/* Secured Badge */}
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#376E57]/10 text-[#376E57] font-fredoka font-bold text-xs flex-shrink-0">
                    <Heart size={12} className="fill-[#376E57]" />
                    {item.tag}
                  </span>
                </div>

                {/* Tweet Body Content */}
                <div className="py-5 text-base md:text-lg text-[#1A2921] leading-relaxed font-sans whitespace-pre-line">
                  {item.text.split(/(@mintakatak)/g).map((part, idx) =>
                    part === '@mintakatak' ? (
                      <span key={idx} className="text-[#376E57] font-bold underline underline-offset-2 decoration-2">
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#E3EDE6] flex items-center justify-between text-xs text-[#4B6354] font-semibold">
                <span>{item.date}</span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#376E57] hover:text-[#2C5846] font-fredoka font-bold text-xs md:text-sm hover:underline transition-colors"
                >
                  <span>Post di X</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
