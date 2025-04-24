
import React from 'react';
import { Navbar } from '@/components/Layout/Navbar';
import { Footer } from '@/components/Layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

const serviceData = {
  residential: {
    title: "Residential Cleaning",
    hero: "Transform your home into a sanctuary of peace",
    description: "Our professional residential cleaning service brings clarity and calm to your living space, allowing you to focus on what matters most in your life.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80",
    features: [
      "Complete dusting and surface cleaning",
      "Floor vacuuming and mopping",
      "Bathroom sanitization",
      "Kitchen deep cleaning",
      "Interior window cleaning",
      "Customized cleaning plans available"
    ],
    frequency: ["One-time deep clean", "Weekly service", "Bi-weekly service", "Monthly service"],
    cta: "Schedule your home transformation today!"
  },
  airbnb: {
    title: "Airbnb & Vacation Rental Cleaning",
    hero: "Boost your reviews with impeccably clean spaces",
    description: "Maintain perfect 5-star cleanliness ratings with our specialized Airbnb and vacation rental cleaning services, designed for quick turnarounds and exceptional attention to detail.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    features: [
      "Fast turnaround between guests",
      "Fresh linens and towel setup",
      "Restocking of amenities",
      "Detailed cleaning checklist",
      "Special attention to guest feedback areas",
      "Flexible scheduling for last-minute bookings"
    ],
    frequency: ["Between guest turnarounds", "Deep cleaning packages", "Maintenance cleaning"],
    cta: "Elevate your guest experience!"
  },
  moving: {
    title: "Moving In/Out Cleaning",
    hero: "Start fresh or leave spotless",
    description: "Whether you're moving into a new home or leaving your current one, our thorough cleaning services ensure you start fresh or leave on the best terms possible.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80",
    features: [
      "Inside cabinet and drawer cleaning",
      "Deep appliance cleaning",
      "Wall and baseboard cleaning",
      "Complete floor treatment",
      "Window track and frame cleaning",
      "Final inspection walkthrough available"
    ],
    frequency: ["One-time service"],
    cta: "Make your move stress-free!"
  },
  construction: {
    title: "Post-Construction Cleaning",
    hero: "From construction zone to move-in ready",
    description: "After the construction dust settles, our specialized team comes in to transform your newly renovated space into a clean, livable environment ready for enjoyment.",
    image: "https://images.unsplash.com/photo-1574032858405-85379d5f5d97?auto=format&fit=crop&q=80",
    features: [
      "Removal of construction dust and debris",
      "Surface and fixture cleaning",
      "Floor treatment specific to new installations",
      "Window and glass cleaning",
      "HVAC and vent cleaning",
      "Final touch-ups before move-in"
    ],
    frequency: ["One-time service", "Multi-phase projects"],
    cta: "Complete your renovation with professional cleaning"
  },
  office: {
    title: "Office Cleaning & Organization",
    hero: "Boost productivity with an organized workspace",
    description: "Create an environment where ideas flow and productivity thrives. Our office cleaning and organization services help businesses maintain spaces that support focus and well-being.",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80",
    features: [
      "Workspace sanitization",
      "Office organization systems",
      "Electronics cleaning",
      "Kitchen and break room cleaning",
      "Restroom maintenance",
      "Floor care for high-traffic areas"
    ],
    frequency: ["Daily service", "Weekly service", "Custom schedules"],
    cta: "Create a workspace that works for you!"
  },
  deep: {
    title: "Deep Cleaning",
    hero: "Restore your space to its pristine best",
    description: "Our comprehensive deep cleaning service addresses those hard-to-reach areas and stubborn issues that regular cleaning can't tackle, leaving your entire space refreshed and renewed.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    features: [
      "Behind and under furniture cleaning",
      "Deep carpet and upholstery treatment",
      "Detailed kitchen appliance cleaning",
      "Bathroom deep sanitization",
      "Light fixture and ceiling fan cleaning",
      "Baseboards and door frame detailing"
    ],
    frequency: ["Seasonal service", "Bi-annual service", "As-needed basis"],
    cta: "Experience the difference of truly clean!"
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{serviceId: string}>();
  const service = serviceId ? serviceData[serviceId as keyof typeof serviceData] : null;
  
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="mb-6">Sorry, the service you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 relative">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-montserrat font-bold text-4xl md:text-5xl mb-6"
            >
              {service.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl mb-8"
            >
              {service.hero}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8"
              >
                <Link to="/contact">Book This Service</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Service Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-montserrat font-bold text-3xl mb-6 text-primary">
                About This Service
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                {service.description}
              </p>
              
              <div className="mt-8">
                <h3 className="font-montserrat font-semibold text-xl mb-4">
                  Service Frequency Options:
                </h3>
                <ul className="space-y-2">
                  {service.frequency.map((option, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="font-montserrat font-semibold text-xl mb-6 text-primary">
                  What's Included
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl text-white mb-6">
            {service.cta}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your service today and experience the TitanKlin difference. 
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8"
            >
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 px-8"
            >
              <a href="https://wa.me/1234567890">Contact via WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
