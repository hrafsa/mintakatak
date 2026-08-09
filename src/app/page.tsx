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

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A2921]">
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
