import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { CaseStudies } from '../components/home/CaseStudies';
import { Testimonials } from '../components/home/Testimonials';
import { FAQ } from '../components/home/FAQ';
import { Pricing } from '../components/home/Pricing';
import { FinalCTA } from '../components/home/FinalCTA';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Pricing />
      <FinalCTA />
    </div>
  );
}
