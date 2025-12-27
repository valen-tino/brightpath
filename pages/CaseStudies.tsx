import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { ArrowRight } from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-24 md:pb-24 bg-deep-sage text-white px-[0px] py-[96px]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 text-[rgb(255,255,255)]">
            Case Studies
          </h1>
          <p className="font-body text-xl md:text-2xl text-warm-cream/90 max-w-2xl mx-auto leading-relaxed">
            Real results for real businesses. See how we've helped our clients grow.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <Link 
                key={study.id} 
                to={`/case-studies/${study.slug}`}
                className="group flex flex-col gap-6"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-video border border-border">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-deep-sage/0 group-hover:bg-deep-sage/10 transition-colors duration-300" />
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-5 py-3 rounded-lg shadow-md transform group-hover:-translate-y-1 transition-transform duration-300">
                    <span className="font-ui font-bold text-deep-sage">{study.result}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-warm-gold uppercase tracking-wider">
                      {study.category}
                    </span>
                    <span className="text-deep-sage opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 flex items-center gap-2 text-sm font-medium">
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  
                  <h2 className="font-heading font-bold text-3xl text-deep-sage group-hover:text-warm-gold transition-colors">
                    {study.title}
                  </h2>
                  
                  <p className="font-body text-dark-gray/80 text-lg line-clamp-2">
                    {study.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}