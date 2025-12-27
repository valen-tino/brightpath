import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Founder, TechStart",
    image: "https://images.unsplash.com/photo-1758598304332-94b40ce7c7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwaGVhZHNob3QlMjBzbWlsaW5nJTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8fHx8MTc2NjY0ODQ4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "BrightPath gave us the credibility we needed to secure our first round of funding. They understood our limited budget but delivered a world-class result."
  },
  {
    name: "Marcus Chen",
    role: "Owner, Chen Logistics",
    image: "https://images.unsplash.com/photo-1675869940341-d495d49010b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGhlYWRzaG90JTIwc21pbGluZyUyMG9mZmljZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY2NjQ4NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "We were losing customers to competitors simply because our website looked outdated. The new design has completely transformed how clients perceive us."
  },
  {
    name: "Aisha Patel",
    role: "Freelance Consultant",
    image: "https://images.unsplash.com/photo-1631127819587-57e39bd6955b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGZyZWVsYW5jZXIlMjB3b21hbiUyMGhlYWRzaG90JTIwY29sb3JmdWwlMjBzdHVkaW98ZW58MXx8fHwxNzY2NjQ4NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "As a solopreneur, I needed a professional site without the hassle. The team at BrightPath was efficient, affordable, and incredibly easy to work with."
  },
  {
    name: "James Wilson",
    role: "Director, EcoScape",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzbWlsaW5nfGVufDF8fHx8MTc2NjY0ODU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "We've worked with several agencies before, but none have matched the transparency and results we got from BrightPath. Highly recommended."
  },
  {
    name: "Priya Sharma",
    role: "CEO, InnovateHealth",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGdsYXNzZXN8ZW58MXx8fHwxNzY2NjQ4NTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "The team's attention to detail is unmatched. They didn't just build a website; they helped us refine our entire digital brand strategy."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-heading font-bold text-4xl text-deep-sage text-center mb-16">Trusted by Founders</h2>
        
        <div className="mx-auto max-w-6xl px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-6">
                  <div className="bg-warm-cream p-8 rounded-xl relative hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="flex gap-1 mb-6 text-warm-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="font-body text-dark-gray leading-relaxed mb-8 italic flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-heading font-bold text-deep-sage">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground font-ui uppercase tracking-wide">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
