
import React from 'react';
import { Navbar } from '@/components/Layout/Navbar';
import { Footer } from '@/components/Layout/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import { SocialLinks } from '@/components/SocialLinks';
import MetaTags from '@/components/MetaTags';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags 
        title="Book Cleaning in LA | TitanKlin Cleaning"
        description="Schedule your cleaning service easily via form, WhatsApp, or Instagram DM."
        canonicalUrl="/contact"
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 bg-primary/5">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-700 mb-8"
            >
              Schedule your cleaning service or reach out with any questions
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-montserrat font-bold text-3xl mb-6">Get In Touch</h2>
                <p className="text-gray-700 mb-8">
                  We're here to answer your questions and help you schedule the perfect cleaning service for your needs.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-700">(323) 458-8728</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-700">info@titanklin.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg">WhatsApp</h3>
                    <p className="text-gray-700">
                      <a href="https://wa.me/13234588728" className="hover:text-primary">Send us a message</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg">Service Area</h3>
                    <p className="text-gray-700">Los Angeles County, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8">
                <h3 className="font-montserrat font-semibold text-xl mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/TitanKlinCleaning/" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <Facebook className="h-6 w-6 text-primary" />
                  </a>
                  <a href="https://www.instagram.com/titanklincleaning/" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <Instagram className="h-6 w-6 text-primary" />
                  </a>
                  <a href="https://www.linkedin.com/company/titanklincleaning/" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </a>
                  <a href="https://www.youtube.com/@TitanKlinCleaning" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <Youtube className="h-6 w-6 text-primary" />
                  </a>
                  <a href="https://www.tiktok.com/@titanklincleaning" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                    </svg>
                  </a>
                  <a href="https://wa.me/13234588728" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <BookingForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Instagram Feed Section */}
      <SocialLinks />
      
      <Footer />
    </div>
  );
};

export default Contact;
