import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export function FinalCTA() {
  return (
    <section className="py-24 bg-deep-sage text-white text-center">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-8">
        <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight text-[rgb(255,255,255)]">
          Ready to elevate your business?
        </h2>
        <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Join the founders who have transformed their online presence with BrightPath. Professional quality, accessible pricing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button asChild className="h-14 px-8 text-lg bg-warm-gold hover:bg-warm-gold/90 text-deep-sage font-bold rounded-md">
            <Link to="/contact">Schedule Free Consultation</Link>
          </Button>
          <Button asChild variant="outline" className="h-14 px-8 text-lg border-white text-white hover:bg-white hover:text-deep-sage rounded-md bg-transparent">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
