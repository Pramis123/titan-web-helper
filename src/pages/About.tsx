
import React from 'react';
import { Navbar } from '@/components/Layout/Navbar';
import { Footer } from '@/components/Layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
              About TitanKlin
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-700 mb-8"
            >
              Transforming spaces and elevating well-being since 2020
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-montserrat font-bold text-3xl mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded by Anastasia and Emir, TitanKlin was born from a simple belief: clean spaces create clear minds.
                </p>
                <p>
                  After seeing how a well-organized, deeply cleaned environment transformed not just homes but the wellbeing of their clients, they committed to bringing this transformation to more people across Los Angeles.
                </p>
                <p>
                  Today, TitanKlin combines professional expertise with a genuine care for creating environments where people can thrive. We're not just cleaning specialists—we're wellbeing advocates.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1617896848219-5ec0fc6e1263?auto=format&fit=crop&q=80" 
                alt="TitanKlin founders" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-8">
              "We exist to reduce stress and elevate well-being by transforming environments into spaces of serenity and clarity."
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-primary">Care</h3>
                <p className="text-gray-600">Every space we clean receives our complete attention and dedication to detail.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-primary">Transform</h3>
                <p className="text-gray-600">We don't just clean—we completely transform spaces into sanctuaries.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-primary">Elevate</h3>
                <p className="text-gray-600">Our ultimate goal is elevating your wellbeing through cleaner environments.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl text-white mb-6">
            Experience the TitanKlin Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to transform your space? Schedule your cleaning appointment today.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-lg">
            Book Your Cleaning
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
