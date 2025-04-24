
import React from 'react';
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="font-montserrat font-bold text-2xl text-primary">
              TitanKlin
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-opensans text-text hover:text-primary transition-colors">
              Home
            </a>
            <a href="/about" className="font-opensans text-text hover:text-primary transition-colors">
              About
            </a>
            <a href="/services" className="font-opensans text-text hover:text-primary transition-colors">
              Services
            </a>
            <a href="/contact" className="font-opensans text-text hover:text-primary transition-colors">
              Contact
            </a>
            <Button variant="default" className="bg-accent hover:bg-accent/90">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
