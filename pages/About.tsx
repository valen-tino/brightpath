import { FinalCTA } from '../components/home/FinalCTA';
import { CheckCircle2, Heart, Users, Zap } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    description: "We believe in understanding the human needs behind every business problem. We design for people, not just for screens."
  },
  {
    icon: Zap,
    title: "Excellence Driven",
    description: "Good enough isn't in our vocabulary. We strive for pixel-perfection and robust engineering in everything we deliver."
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "We view ourselves as an extension of your team. Transparent communication and shared goals are the foundation of our partnerships."
  },
  {
    icon: CheckCircle2,
    title: "Results Oriented",
    description: "We focus on outcomes, not just outputs. Every design decision is backed by strategy and aimed at achieving your business goals."
  }
];

const team = [
  {
    name: "Elena Rodriguez",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3NzJTIwbGFZHxlbnwwfHx8fDE2ODQ0OTg4MzJ8MA&ixlib=rb-4.1.0&q=80&w=400",
    bio: "With over 15 years of experience in digital design, Elena founded BrightPath to bridge the gap between aesthetics and functionality."
  },
  {
    name: "David Chen",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hZ2VyJTIwbWFsZXxlbnwwfHx8fDE2ODQ0OTg4MzJ8MA&ixlib=rb-4.1.0&q=80&w=400",
    bio: "David brings a wealth of knowledge from the startup world, helping clients navigate complex market landscapes."
  },
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRldmVsb3BlcnxlbnwwfHx8fDE2ODQ0OTg4MzJ8MA&ixlib=rb-4.1.0&q=80&w=400",
    bio: "A full-stack wizard who ensures every pixel is perfect and every interaction is smooth as butter."
  }
];

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-24 md:pb-24 bg-deep-sage text-white px-[0px] py-[96px]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 text-[rgb(255,255,255)]">
            About BrightPath
          </h1>
          <p className="font-body text-xl md:text-2xl text-warm-cream/90 max-w-2xl mx-auto leading-relaxed">
            We are a digital agency dedicated to helping early-stage founders bring their vision to life.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG1vZGVybnxlbnwwfHx8fDE2ODQ0OTg4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="BrightPath Team Meeting" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-deep-sage/10 mix-blend-multiply" />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <span className="text-sm font-medium text-warm-gold uppercase tracking-wider">Our Story</span>
              <h2 className="font-heading font-bold text-4xl text-deep-sage">
                Building the Future, One Brand at a Time
              </h2>
              <p className="font-body text-lg text-dark-gray/80 leading-relaxed">
                Founded in 2020, BrightPath Solutions emerged from a simple observation: early-stage founders often struggle to find agencies that understand the unique pace and pressures of a startup.
              </p>
              <p className="font-body text-lg text-dark-gray/80 leading-relaxed">
                We set out to change that. By combining strategic thinking with high-quality execution, we provide the agility of a freelancer with the reliability of a large agency.
              </p>
              <p className="font-body text-lg text-dark-gray/80 leading-relaxed">
                Today, we've helped over 50 startups launch their products, secure funding, and grow their customer base. We're proud to be the "bright path" for the next generation of innovators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading font-bold text-4xl text-deep-sage">Our Core Values</h2>
            <p className="font-body text-lg text-dark-gray/80">
              The principles that guide our work and our relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-deep-sage/10 rounded-lg flex items-center justify-center mb-6 text-deep-sage">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 text-deep-sage">{value.title}</h3>
                <p className="font-body text-dark-gray/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading font-bold text-4xl text-deep-sage">Meet the Team</h2>
            <p className="font-body text-lg text-dark-gray/80">
              The creative minds behind your next big success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-deep-sage/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="text-center">
                  <h3 className="font-heading font-bold text-2xl text-deep-sage">{member.name}</h3>
                  <p className="font-ui text-warm-gold font-medium mb-3">{member.role}</p>
                  <p className="font-body text-dark-gray/80 text-sm leading-relaxed max-w-xs mx-auto">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}