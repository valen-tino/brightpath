const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by listening. We dive deep into your business goals, target audience, and current challenges to understand exactly what you need."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Based on our findings, we develop a tailored roadmap. We outline the technologies, design direction, and timeline for your project."
  },
  {
    number: "03",
    title: "Execution",
    description: "Our creative and technical teams go to work. We build your solution with precision, keeping you updated with regular check-ins."
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "After rigorous testing, we launch your project. But we don't stop there—we provide training and ongoing support to ensure long-term success."
  }
];

export function Process() {
  return (
    <section className="py-24 bg-warm-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading font-bold text-4xl text-deep-sage">Our Process</h2>
          <p className="font-body text-lg text-dark-gray/80">
            A simple, transparent approach to delivering results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-border -z-10" />
              )}
              
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-warm-gold flex items-center justify-center font-heading font-bold text-xl text-deep-sage shadow-sm z-10">
                  {step.number}
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-xl text-deep-sage">{step.title}</h3>
                  <p className="font-body text-dark-gray/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
