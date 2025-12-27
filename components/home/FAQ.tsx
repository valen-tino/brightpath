import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const faqs = [
  {
    question: "How much does a typical project cost?",
    answer: "We believe in transparency. Our basic website packages start at $2,000, and full branding packages at $1,500. We can also create custom solutions tailored to your specific budget."
  },
  {
    question: "How long does the process take?",
    answer: "Most website projects are completed within 4-6 weeks. Branding projects typically take 2-3 weeks. We value efficiency without compromising on quality."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes! We offer optional maintenance packages to keep your site secure and updated. We're here to be your long-term digital partner, not just a one-time service provider."
  },
  {
    question: "What do I need to have ready before we start?",
    answer: "It's helpful to have a general idea of your goals and any existing brand assets (logo, photos). Don't worry if you don't have everything—we can help you create content from scratch."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-warm-cream">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="font-heading font-bold text-4xl text-deep-sage text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-dark-gray/80 mb-12">Everything you need to know about working with us.</p>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-border rounded-lg px-6">
              <AccordionTrigger className="font-heading font-medium text-lg text-deep-sage hover:no-underline hover:text-warm-gold py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-dark-gray pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
