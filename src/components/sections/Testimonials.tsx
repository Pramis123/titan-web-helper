
import React from 'react';
import { motion } from "framer-motion";
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "TitanKlin transformed my home! I feel so much more relaxed now.",
    author: "Jane D.",
    location: "Los Angeles",
    rating: 5
  },
  {
    quote: "The attention to detail is incredible. My Airbnb has never looked better.",
    author: "Michael R.",
    location: "Venice Beach",
    rating: 5
  },
  {
    quote: "Professional, thorough, and truly care about their work. Highly recommend!",
    author: "Sarah K.",
    location: "Santa Monica",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="mb-4 text-lg text-gray-600">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer>
                    <p className="font-montserrat font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </footer>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
