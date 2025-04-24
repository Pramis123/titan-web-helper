
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { PhoneCall, Instagram, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="font-montserrat font-bold text-2xl md:text-3xl" style={{ color: isScrolled ? '#008080' : '#ffffff' }}>
              TitanKlin
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={isScrolled ? '#333333' : '#ffffff'}>
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-opensans hover:text-primary transition-colors ${isScrolled ? 'text-text' : 'text-white'}`}>
              Home
            </Link>
            <Link to="/about" className={`font-opensans hover:text-primary transition-colors ${isScrolled ? 'text-text' : 'text-white'}`}>
              About
            </Link>
            <Link to="/services" className={`font-opensans hover:text-primary transition-colors ${isScrolled ? 'text-text' : 'text-white'}`}>
              Services
            </Link>
            <Link to="/testimonials" className={`font-opensans hover:text-primary transition-colors ${isScrolled ? 'text-text' : 'text-white'}`}>
              Testimonials
            </Link>
            <Link to="/contact" className={`font-opensans hover:text-primary transition-colors ${isScrolled ? 'text-text' : 'text-white'}`}>
              Contact
            </Link>
            <div className="flex space-x-3">
              <Button variant="default" className="bg-accent hover:bg-accent/90 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-4 space-y-2 bg-white shadow-lg rounded-b-lg">
            <Link to="/" className="block px-4 py-2 text-primary font-montserrat font-medium hover:bg-gray-50">
              Home
            </Link>
            <Link to="/about" className="block px-4 py-2 text-text font-montserrat hover:bg-gray-50">
              About
            </Link>
            <Link to="/services" className="block px-4 py-2 text-text font-montserrat hover:bg-gray-50">
              Services
            </Link>
            <Link to="/testimonials" className="block px-4 py-2 text-text font-montserrat hover:bg-gray-50">
              Testimonials
            </Link>
            <Link to="/contact" className="block px-4 py-2 text-text font-montserrat hover:bg-gray-50">
              Contact
            </Link>
            <div className="px-4 py-2">
              <Button className="w-full bg-accent hover:bg-accent/90 flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
