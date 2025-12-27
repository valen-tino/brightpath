import { Button } from '../ui/button';
import { Monitor, PenTool, Image as ImageIcon, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Monitor,
    title: "Web Design",
    description: "Professional, responsive websites that convert visitors into customers. Built with modern technology for speed and reliability.",
  },
  {
    icon: PenTool,
    title: "Branding",
    description: "Complete brand identity packages including logos, color palettes, and guidelines to make your business look established.",
  },
  {
    icon: ImageIcon,
    title: "Creative Content",
    description: "High-quality copywriting, graphics, and multimedia content that communicates your value proposition clearly.",
  },
  {
    icon: MessageSquare,
    title: "Digital Consultation",
    description: "Strategic guidance to help you navigate the digital landscape and make informed decisions for your business growth.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading font-bold text-4xl text-deep-sage">Our Services</h2>
          <p className="font-body text-lg text-dark-gray/80">
            Comprehensive digital solutions tailored for growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl border border-border hover:border-warm-gold/50 hover:shadow-lg hover:shadow-warm-gold/10 transition-all duration-300 bg-warm-cream/30"
            >
              <div className="w-12 h-12 bg-deep-sage/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-deep-sage group-hover:text-white transition-colors text-deep-sage">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4 text-deep-sage">{service.title}</h3>
              <p className="font-body text-dark-gray/80 leading-relaxed mb-6">
                {service.description}
              </p>
              <Button variant="link" className="p-0 h-auto text-warm-gold hover:text-deep-sage font-ui font-medium group-hover:translate-x-1 transition-transform" asChild>
                <Link to="/services">
                  Learn More →
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
