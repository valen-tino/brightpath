import { useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { ArrowLeft, CheckCircle2, Quote } from 'lucide-react';
import { Button } from '../components/ui/button';
import { FinalCTA } from '../components/home/FinalCTA';

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const study = caseStudies.find(s => s.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-warm-cream">
        <h1 className="text-4xl font-heading font-bold text-deep-sage mb-4">Case Study Not Found</h1>
        <Button onClick={() => navigate('/case-studies')} variant="outline">
          Back to Case Studies
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-deep-sage relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img src={study.image} alt="" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-warm-cream/80 hover:text-white mb-8 transition-colors font-ui text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Projects
          </Link>
          
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 rounded-full bg-warm-gold/20 text-warm-gold border border-warm-gold/30 text-sm font-bold uppercase tracking-wider mb-6">
              {study.category}
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
              {study.title}
            </h1>
            <p className="font-body text-xl md:text-2xl text-warm-cream/90 leading-relaxed max-w-2xl">
              {study.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Sidebar / Key Info */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="bg-warm-cream/50 border border-border rounded-2xl p-8 sticky top-32">
                <h3 className="font-heading font-bold text-xl text-deep-sage mb-6 pb-4 border-b border-border">
                  Project Details
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <span className="block text-sm font-medium text-dark-gray/60 mb-1">Client</span>
                    <span className="text-lg font-bold text-deep-sage">{study.client}</span>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-dark-gray/60 mb-1">Services</span>
                    <span className="text-lg font-bold text-deep-sage">{study.category}</span>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-dark-gray/60 mb-1">Key Result</span>
                    <span className="text-lg font-bold text-warm-gold">{study.result}</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-bold text-deep-sage mb-2">Need similar results?</h4>
                  <Button className="w-full bg-deep-sage hover:bg-deep-sage/90 text-white">
                    Start a Project
                  </Button>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-16">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                <img src={study.image} alt={study.title} className="w-full h-auto" />
              </div>

              <div className="prose prose-lg max-w-none text-dark-gray">
                <div className="space-y-6">
                  <h2 className="font-heading font-bold text-3xl text-deep-sage">The Challenge</h2>
                  <p className="font-body text-lg leading-relaxed">{study.challenge}</p>
                </div>

                <div className="space-y-6 mt-12">
                  <h2 className="font-heading font-bold text-3xl text-deep-sage">The Solution</h2>
                  <p className="font-body text-lg leading-relaxed">{study.solution}</p>
                </div>

                <div className="space-y-6 mt-12">
                  <h2 className="font-heading font-bold text-3xl text-deep-sage">The Outcome</h2>
                  <p className="font-body text-lg leading-relaxed">{study.outcome}</p>
                  
                  <div className="bg-deep-sage/5 rounded-xl p-6 mt-6 border border-deep-sage/10">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-deep-sage flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-deep-sage text-lg mb-1">Project Highlight</h4>
                        <p className="text-dark-gray">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              {study.testimonial && (
                <div className="bg-deep-sage text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Quote size={120} />
                   </div>
                   <div className="relative z-10">
                      <blockquote className="font-heading text-2xl md:text-3xl leading-relaxed italic mb-8">
                        "{study.testimonial.text}"
                      </blockquote>
                      <div>
                        <div className="font-bold text-xl">{study.testimonial.author}</div>
                        <div className="text-warm-cream/80">{study.testimonial.role}</div>
                      </div>
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}