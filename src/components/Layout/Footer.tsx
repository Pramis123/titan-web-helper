
import React from 'react';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">TitanKlin Cleaning</h3>
            <p className="font-opensans">Serving all of Los Angeles, CA</p>
            <div className="flex items-center mt-4 space-x-4">
              <a href="https://instagram.com/titanklincleaning" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 hover:text-accent transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 hover:text-accent transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="/about" className="hover:text-accent transition-colors">About Us</a>
              <a href="/services" className="hover:text-accent transition-colors">Services</a>
              <a href="/contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-2">
              <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-accent transition-colors">
                <Phone className="h-5 w-5" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:info@titanklin.com" className="flex items-center space-x-2 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
                <span>info@titanklin.com</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} TitanKlin Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
