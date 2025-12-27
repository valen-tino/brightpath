import { Button } from '../ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Perfect for early-stage startups needing a professional presence.",
    features: [
      "Custom 5-page website",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "2 rounds of revisions",
      "1 month of support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    price: "$5,000",
    description: "For scaling businesses that need more functionality and strategy.",
    features: [
      "Everything in Starter",
      "CMS integration (Blog/Case Studies)",
      "Advanced SEO strategy",
      "Newsletter integration",
      "Analytics setup",
      "Unlimited revisions",
      "3 months of support"
    ],
    cta: "Most Popular",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for complex requirements and large teams.",
    features: [
      "Everything in Growth",
      "Custom web application development",
      "E-commerce functionality",
      "Third-party API integrations",
      "Performance optimization",
      "Priority support",
      "Dedicated project manager"
    ],
    cta: "Contact Us",
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-24 bg-warm-cream" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-warm-gold uppercase tracking-widest">Transparent Pricing</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-deep-sage">
            Invest in Your Digital Future
          </h2>
          <p className="font-body text-lg text-dark-gray/80">
            Clear, upfront pricing with no hidden fees. Choose the package that fits your stage of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-8 border ${
                plan.popular 
                  ? 'border-deep-sage shadow-xl scale-105 z-10' 
                  : 'border-border shadow-sm hover:shadow-md transition-shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-deep-sage text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                    Best Value
                  </span>
                </div>
              )}

              <div className="space-y-4 mb-8">
                <h3 className="font-heading font-bold text-2xl text-deep-sage">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading font-bold text-4xl text-dark-gray">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/project</span>}
                </div>
                <p className="text-dark-gray/80 text-sm leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-deep-sage/10 p-1 rounded-full">
                      <Check className="w-3 h-3 text-deep-sage" />
                    </div>
                    <span className="text-sm text-dark-gray">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                asChild
                className={`w-full font-bold py-6 ${
                  plan.popular 
                    ? 'bg-deep-sage hover:bg-deep-sage/90 text-white' 
                    : 'bg-white border-2 border-deep-sage text-deep-sage hover:bg-deep-sage hover:text-white'
                }`}
              >
                <Link to="/contact">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Pricing Transparency Section */}
        <div className="bg-white rounded-xl p-8 border border-border max-w-4xl mx-auto">
          <h3 className="font-heading font-bold text-2xl text-deep-sage mb-6 text-center">Understanding Our Custom Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-dark-gray">Scope & Complexity</h4>
              <p className="text-dark-gray/80 text-sm leading-relaxed">
                Prices vary based on the number of unique page templates, design complexity, and specific functionality requirements (e.g., animations, user dashboards).
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-dark-gray">Integrations</h4>
              <p className="text-dark-gray/80 text-sm leading-relaxed">
                Connecting to third-party services (CRMs, payment gateways, inventory systems) adds development time and testing requirements.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-dark-gray">Timeline</h4>
              <p className="text-dark-gray/80 text-sm leading-relaxed">
                Standard timelines are 4-8 weeks. Expedited delivery options are available for an additional fee to cover overtime resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
