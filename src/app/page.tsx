import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import WhyMintaKatak from '@/components/sections/WhyMintaKatak';
import HowItWorks from '@/components/sections/HowItWorks';
import Benefits from '@/components/sections/Benefits';
import SocialProof from '@/components/sections/SocialProof';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.url}/#website`,
      url: `${SITE_CONFIG.url}/`,
      name: SITE_CONFIG.name,
      alternateName: SITE_CONFIG.alternateName,
      inLanguage: 'id-ID',
      publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      url: `${SITE_CONFIG.url}/`,
      name: SITE_CONFIG.name,
      alternateName: SITE_CONFIG.alternateName,
      description: SITE_CONFIG.description,
      logo: `${SITE_CONFIG.url}/assets/brand/logo/logo-head.svg`,
      sameAs: [SITE_CONFIG.instagramUrl, SITE_CONFIG.twitterUrl],
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A2921]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <Navbar />
      <Hero />
      <WhyMintaKatak />
      <HowItWorks />
      <Benefits />
      <SocialProof />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
