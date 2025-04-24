
import React from 'react';
import { Instagram, Phone, Mail, Calendar, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="font-montserrat font-bold text-xl mb-4">TitanKlin Cleaning</h3>
            <p className="font-opensans mb-4">Clean Spaces, Clear Minds.</p>
            <p className="font-opensans mb-6">Serving all of Los Angeles County</p>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/TitanKlinCleaning/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-accent transition-colors" />
              </a>
              <a href="https://www.instagram.com/titanklincleaning/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-accent transition-colors" />
              </a>
              <a href="https://www.linkedin.com/company/titanklincleaning/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 hover:text-accent transition-colors" />
              </a>
              <a href="https://www.youtube.com/@TitanKlinCleaning" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-6 w-6 hover:text-accent transition-colors" />
              </a>
              <a href="https://www.tiktok.com/@titanklincleaning" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 hover:text-accent transition-colors">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold mb-4">Services</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/services/residential" className="hover:text-accent transition-colors">Residential Cleaning</Link>
              <Link to="/services/airbnb" className="hover:text-accent transition-colors">Airbnb Cleaning</Link>
              <Link to="/services/moving" className="hover:text-accent transition-colors">Moving In/Out</Link>
              <Link to="/services/construction" className="hover:text-accent transition-colors">Post-Construction</Link>
              <Link to="/services/office" className="hover:text-accent transition-colors">Office Organization</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold mb-4">Company</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              <Link to="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link>
              <Link to="/faq" className="hover:text-accent transition-colors">FAQs</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-4">
              <a href="tel:+13234588728" className="flex items-center space-x-2 hover:text-accent transition-colors">
                <Phone className="h-5 w-5" />
                <span>(323) 458-8728</span>
              </a>
              <a href="mailto:info@titanklin.com" className="flex items-center space-x-2 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
                <span>info@titanklin.com</span>
              </a>
              <a href="https://wa.me/13234588728" className="flex items-center space-x-2 hover:text-accent transition-colors">
                <Phone className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 mt-2 w-full md:w-auto flex items-center justify-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Book Now</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} TitanKlin Cleaning. All rights reserved.</p>
          <p className="text-xs mt-2 text-white/70">Designed with care for a cleaner Los Angeles</p>
        </div>
      </div>
    </footer>
  );
};
