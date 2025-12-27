import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
const exampleImage = 'https://images.unsplash.com/photo-1707301280406-55612d3bb9db?auto=format&fit=crop&w=1600&q=80';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-warm-cream">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={exampleImage} 
          alt="Modern minimalist office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3D5A47]/75 z-10" />
      </div>

      <div className="container mx-auto px-4 z-20 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
          >
            Professional Solutions. <br/>
            <span className="text-warm-gold italic">Accessible Prices.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            We help early-stage founders and small businesses build a credible, 
            established online presence without the enterprise price tag.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button asChild className="h-14 px-8 text-lg bg-warm-gold hover:bg-warm-gold/90 text-deep-sage font-bold rounded-md shadow-lg shadow-black/10 transition-transform hover:-translate-y-1">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="h-14 px-8 text-lg border-2 border-white text-white hover:bg-white hover:text-deep-sage bg-transparent rounded-md transition-transform hover:-translate-y-1">
              <Link to="/case-studies">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
