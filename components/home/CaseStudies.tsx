import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';

export function CaseStudies() {
  const navigate = useNavigate();
  // Display only the first 3 case studies on the home page
  const displayedStudies = caseStudies.slice(0, 3);

  return (
    <section id="case-studies" className="py-24 bg-warm-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading font-bold text-4xl text-deep-sage">Recent Success Stories</h2>
            <p className="font-body text-lg text-dark-gray/80">
              See how we've helped other businesses build credibility and grow.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="border-deep-sage text-deep-sage hover:bg-deep-sage hover:text-white transition-colors"
            onClick={() => navigate('/case-studies')}
          >
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedStudies.map((study, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={() => navigate(`/case-studies/${study.slug}`)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-deep-sage/0 group-hover:bg-deep-sage/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-md shadow-sm">
                  <span className="font-ui font-bold text-deep-sage text-sm">{study.result}</span>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm font-medium text-warm-gold uppercase tracking-wider">{study.category}</span>
                <h3 className="font-heading font-bold text-2xl text-deep-sage group-hover:text-warm-gold transition-colors">{study.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
