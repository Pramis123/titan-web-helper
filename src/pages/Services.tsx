
import React from 'react';
import { Navbar } from '@/components/Layout/Navbar';
import { Footer } from '@/components/Layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Home, Briefcase, Building, Wrench, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceDetails = [
  {
    id: "residential",
    title: "Residential Cleaning",
    description: "Transform your home into a clean, peaceful sanctuary with our thorough residential cleaning service, tailored to your specific needs and preferences.",
    icon: Home
  },
  {
    id: "airbnb",
    title: "Airbnb & Vacation Rental",
    description: "Impress your guests and maintain top ratings with our specialized vacation rental cleaning, designed for quick turnarounds and exceptional attention to detail.",
    icon: Building
  },
  {
    id: "moving",
    title: "Moving In/Out Support",
    description: "Start fresh or leave on good terms with our comprehensive moving cleaning services, ensuring every corner meets landlord or buyer expectations.",
    icon: Building
  },
  {
    id: "construction",
    title: "Post-Construction",
    description: "Clear away dust and debris after renovations with our specialized post-construction cleaning, making your newly improved space ready to enjoy.",
    icon: Wrench
  },
  {
    id: "office",
    title: "Office & Organization",
    description: "Create a productive workspace with our office cleaning and organization services, helping businesses maintain environments that support focus and well-being.",
    icon: Briefcase
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    description: "Address built-up dirt and grime in hard-to-reach places with our comprehensive deep cleaning service, restoring your space to its best condition.",
    icon: Sparkles
  }
];

const Services = () => {
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
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-700 mb-8"
            >
              Professional cleaning solutions tailored to transform your space and elevate your wellbeing
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-montserrat">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Button 
                      asChild
                      variant="outline" 
                      className="w-full justify-between hover:text-primary hover:border-primary"
                    >
                      <Link to={`/services/${service.id}`}>
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
              Our Cleaning Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial contact to sparkling results, here's how we work
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-semibold mb-2">Book Your Service</h3>
                  <p className="text-gray-600">Contact us through our booking form, WhatsApp, or phone to schedule your cleaning service.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-semibold mb-2">Personalized Consultation</h3>
                  <p className="text-gray-600">We'll discuss your specific needs and create a cleaning plan tailored to your space.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-semibold mb-2">Professional Cleaning</h3>
                  <p className="text-gray-600">Our expert team arrives on schedule and transforms your space with meticulous attention to detail.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-semibold mb-2">Quality Inspection</h3>
                  <p className="text-gray-600">We conduct a thorough inspection to ensure every area meets our high standards of cleanliness.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-semibold mb-2">Follow-Up & Scheduling</h3>
                  <p className="text-gray-600">We check in to ensure your satisfaction and help you set up a regular cleaning schedule if desired.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your first cleaning service today and experience the TitanKlin difference.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8"
          >
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
