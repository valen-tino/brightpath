import { Button } from '../ui/button';
import { Monitor, PenTool, Image as ImageIcon, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: "Web Design & Development",
    description: "Your website is your digital storefront. We build professional, responsive websites that convert visitors into customers. Built with modern technology for speed, security, and reliability.",
    features: [
      "Custom UI/UX Design",
      "Mobile-First Responsive Layouts",
      "SEO Optimization Fundamentals",
      "Fast Loading Speeds",
      "CMS Integration"
    ]
  },
  {
    icon: PenTool,
    title: "Branding & Identity",
    description: "Stand out from the competition with a cohesive brand identity. We create complete packages that give your business a professional and established look from day one.",
    features: [
      "Logo Design",
      "Color Palette Selection",
      "Typography Systems",
      "Brand Guidelines",
      "Social Media Assets"
    ]
  },
  {
    icon: ImageIcon,
    title: "Creative Content",
    description: "Content is king. We produce high-quality copywriting, graphics, and multimedia content that communicates your value proposition clearly and engages your audience.",
    features: [
      "Copywriting & Editing",
      "Blog Post Creation",
      "Custom Illustration",
      "Social Media Graphics",
      "Email Newsletter Design"
    ]
  },
  {
    icon: MessageSquare,
    title: "Digital Consultation",
    description: "Not sure where to start? We provide strategic guidance to help you navigate the digital landscape and make informed decisions for your business growth.",
    features: [
      "Digital Strategy Roadmap",
      "Competitor Analysis",
      "Tech Stack Recommendations",
      "Marketing Strategy",
      "Performance Audits"
    ]
  },
];

export function DetailedServices() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
              {/* Visual Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-warm-cream border border-border flex items-center justify-center group">
                   {/* Placeholder for service image - using icon for now but styled nicely */}
                   <div className="absolute inset-0 bg-deep-sage/5 group-hover:bg-deep-sage/10 transition-colors duration-500" />
                   <service.icon className="w-32 h-32 text-deep-sage/20 group-hover:text-deep-sage/40 transition-colors duration-500 transform group-hover:scale-110 duration-500" />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="w-16 h-16 bg-deep-sage/10 rounded-xl flex items-center justify-center text-deep-sage mb-2">
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-deep-sage">
                  {service.title}
                </h2>
                
                <p className="font-body text-lg text-dark-gray/80 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-warm-gold flex-shrink-0" />
                      <span className="font-body text-dark-gray">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* <div className="pt-6">
                  <Button className="bg-deep-sage hover:bg-deep-sage/90 text-white font-ui font-medium rounded-md px-8 py-6 h-auto text-lg gap-2">
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
