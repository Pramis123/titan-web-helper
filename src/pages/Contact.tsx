import React from 'react';
import { Navbar } from '@/components/Layout/Navbar';
import { Footer } from '@/components/Layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    
    toast({
      title: "Booking Request Sent",
      description: "We'll contact you shortly to confirm your appointment.",
    });
  };
  
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
                    <p className="text-gray-700">(123) 456-7890</p>
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
                      <a href="https://wa.me/1234567890" className="hover:text-primary">Send us a message</a>
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
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="font-montserrat font-bold text-2xl mb-6">Book Your Cleaning</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(123) 456-7890" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <select 
                      id="service" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Cleaning</option>
                      <option value="airbnb">Airbnb Cleaning</option>
                      <option value="moving">Moving In/Out Cleaning</option>
                      <option value="construction">Post-Construction Cleaning</option>
                      <option value="office">Office & Organization</option>
                      <option value="deep">Deep Cleaning</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your space and any specific cleaning needs" 
                      className="min-h-[120px]" 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Schedule Cleaning
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Or contact us directly via <a href="https://wa.me/1234567890" className="text-primary hover:underline">WhatsApp</a>
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
