import Nav from '@/components/Nav/Nav';
import Hero from '@/components/Hero/Hero';
import Pain from '@/components/Pain/Pain';
import Solution from '@/components/Solution/Solution';
import CasesSection from '@/components/Cases/CasesSection';
import Services from '@/components/Services/Services';
import Process from '@/components/Process/Process';
import Team from '@/components/Team/Team';
import Advantages from '@/components/Advantages/Advantages';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Pain />
      <Solution />
      <CasesSection />
      <Services />
      <Process />
      <Team />
      <Advantages />
      <CTA />
      <Footer />
    </>
  );
}
