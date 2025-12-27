import { Monitor, PenTool, Image as ImageIcon, MessageSquare, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: "Web Design & Development",
    description: "Your website is your digital storefront. We build professional, responsive websites that convert visitors into customers. Built with modern technology for speed, security, and reliability.",
    image: {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
      alt: "Designer working on a website wireframe at a desk",
    },
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
    image: {
      src: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80",
      alt: "Color swatches, logo sketches, and brand board on a desk",
    },
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
    image: {
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80",
      alt: "Camera, notebook, and creative tools laid out for content creation",
    },
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
    image: {
      src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
      alt: "Team collaborating in a meeting room with laptops",
    },
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
                <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-warm-cream border border-border group">
                  <img
                    src={service.image.src}
                    alt={service.image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-black/0 to-white/0" />
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
                      <CheckCircle2 className="w-5 h-5 text-warm-gold shrink-0" />
                      <span className="font-body text-dark-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
