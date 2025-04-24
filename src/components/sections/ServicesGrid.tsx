import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Home, Briefcase, Building, Wrench, Calendar, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Personalized Cleaning Plans",
    description: "Customized cleaning schedules tailored to your needs",
    icon: Calendar
  },
  {
    title: "Airbnb & Residential",
    description: "Regular or one-time cleaning for homes and Airbnb properties",
    icon: Home
  },
  {
    title: "Moving In/Out Support",
    description: "Thorough cleaning for seamless transitions during moves",
    icon: Building
  },
  {
    title: "Post-Construction",
    description: "Detailed cleaning to remove dust and debris after renovations",
    icon: Wrench
  },
  {
    title: "Office & Organization",
    description: "Professional cleaning and organization for workplaces",
    icon: Briefcase
  },
  {
    title: "Deep Cleaning",
    description: "Comprehensive cleaning of every corner",
    icon: Sparkles
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional cleaning services tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
