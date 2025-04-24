
import React from 'react';
import { motion } from "framer-motion";
import { Star, Clock, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Star,
    title: "20% Stress Reduction",
    description: "Studies show a clean environment significantly reduces stress levels"
  },
  {
    icon: Clock,
    title: "Save 7 Hours Weekly",
    description: "Reclaim your time by letting us handle the cleaning"
  },
  {
    icon: Heart,
    title: "Better Sleep Quality",
    description: "A clean space promotes better rest and relaxation"
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-6">
                Why Choose TitanKlin?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At TitanKlin, we're not just about cleaning; we're about enhancing your quality of life. Our services reduce stress, improve sleep, and boost emotional well-being by creating clean, organized environments.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
                alt="Clean, organized living space"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
