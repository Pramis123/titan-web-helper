
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Layout/Navbar';
import { Footer } from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { SocialLinks } from '@/components/SocialLinks';
import MetaTags from '@/components/MetaTags';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags 
        title="TitanKlin Cleaning | Premium Cleaning in Los Angeles"
        description="Transform your space into a sanctuary of peace. Book our expert cleaning services today."
        canonicalUrl="/"
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 lg:pt-20 relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80"
            alt="Clean, serene living space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-4 animate-fade-in">
            TitanKlin Cleaning
          </h1>
          <p className="font-opensans text-xl md:text-2xl mb-6 animate-fade-in">
            Clean Spaces, Clear Minds.
          </p>
          <p className="font-opensans text-lg mb-8 max-w-2xl mx-auto animate-fade-in">
            Transform your home into a sanctuary of peace and productivity.
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-md animate-fade-in font-montserrat font-semibold"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Add new sections */}
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <SocialLinks />
      
      <Footer />
    </div>
  );
};

export default Index;
