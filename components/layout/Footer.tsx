import { Button } from '../ui/button';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-deep-sage text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-heading font-bold text-2xl text-white tracking-tight mb-4 inline-block">
              BrightPath<span className="text-warm-gold">.</span>
            </Link>
            <p className="text-white/80 max-w-md mb-6 font-body leading-relaxed">
              Professional digital solutions for early-stage founders and small businesses. 
              We make you look established without the enterprise price tag.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-warm-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-warm-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-warm-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-warm-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-warm-gold">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-white/80 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-warm-gold">Contact</h4>
            <ul className="space-y-4 text-white/80">
              <li>hello@brightpath.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Jakarta, Indonesia</li>
            </ul>
            <div className="mt-6">
              <Button asChild variant="outline" className="border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-deep-sage w-full">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2025 BrightPath Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
