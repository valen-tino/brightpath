import { DetailedServices } from '../components/services/DetailedServices';
import { Process } from '../components/services/Process';
import { FinalCTA } from '../components/home/FinalCTA';

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-24   md:pb-24 bg-deep-sage text-white px-[0px] py-[96px]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 text-[rgb(255,255,255)]">
            Our Services
          </h1>
          <p className="font-body text-xl md:text-2xl text-warm-cream/90 max-w-2xl mx-auto leading-relaxed">
            Tailored digital solutions designed to help your business thrive in the modern world.
          </p>
        </div>
      </section>

      <DetailedServices />
      <Process />
      <FinalCTA />
    </div>
  );
}