
import React from 'react';
import { Navbar } from '@/components/Layout/Navbar';
import { Footer } from '@/components/Layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// Extended testimonials data
const testimonials = [
  {
    quote: "TitanKlin transformed my home! I feel so much more relaxed now. Their attention to detail is incredible, and they were able to clean areas I've been neglecting for months.",
    author: "Jane D.",
    location: "Los Angeles",
    rating: 5,
    service: "Residential Cleaning"
  },
  {
    quote: "The attention to detail is incredible. My Airbnb has never looked better, and my guests consistently leave 5-star reviews mentioning how clean the space is.",
    author: "Michael R.",
    location: "Venice Beach",
    rating: 5,
    service: "Airbnb Cleaning"
  },
  {
    quote: "Professional, thorough, and truly care about their work. Highly recommend! They took the time to understand exactly what I needed and delivered beyond my expectations.",
    author: "Sarah K.",
    location: "Santa Monica",
    rating: 5,
    service: "Deep Cleaning"
  },
  {
    quote: "After my renovation, the dust was everywhere. TitanKlin made my home livable again with their post-construction cleaning. Worth every penny!",
    author: "David M.",
    location: "Beverly Hills",
    rating: 5,
    service: "Post-Construction Cleaning"
  },
  {
    quote: "Moving out was stressful enough, but TitanKlin took care of the cleaning so well that I got my full deposit back. Thank you!",
    author: "Sophia L.",
    location: "Malibu",
    rating: 5,
    service: "Moving Out Cleaning"
  },
  {
    quote: "Our office has never been this organized and clean. The team provided great suggestions for keeping things in order long-term. Productivity has definitely improved!",
    author: "Mark T.",
    location: "Downtown LA",
    rating: 5,
    service: "Office Cleaning"
  },
  {
    quote: "I've tried several cleaning services in LA, but TitanKlin is by far the best. Consistent quality, friendly staff, and they really understand how to transform a space.",
    author: "Emma W.",
    location: "Silver Lake",
    rating: 5,
    service: "Regular Cleaning"
  },
  {
    quote: "The deep cleaning service was exactly what my home needed after a year of working from home. Every surface sparkles and it smells amazing!",
    author: "Robert J.",
    location: "Pasadena",
    rating: 5,
    service: "Deep Cleaning"
  },
  {
    quote: "Anastasia and Emir take such pride in their work. They went above and beyond to accommodate my schedule and specific requests.",
    author: "Jennifer P.",
    location: "Burbank",
    rating: 5,
    service: "Residential Cleaning"
  },
];

const Testimonials = () => {
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
              Client Testimonials
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-700 mb-8"
            >
              Read what our satisfied clients have to say about their experiences with TitanKlin
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 % 0.5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 text-yellow-400 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <div className="mb-4 relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200 opacity-50" />
                      <blockquote className="text-gray-700 italic pl-5">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <p className="font-montserrat font-semibold">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-500">{testimonial.location}</p>
                      <p className="text-primary text-sm mt-1">{testimonial.service}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Submit Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl text-primary mb-6">
              Share Your Experience
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Had a great experience with TitanKlin? We'd love to hear about it! Submit your testimonial or leave us a review on Google or Instagram.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-accent hover:bg-accent/90">
                <a href="https://g.page/r/titanklincleaning/review" target="_blank" rel="noopener noreferrer">
                  Leave a Google Review
                </a>
              </Button>
              <Button asChild variant="outline" className="hover:text-primary hover:border-primary">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl text-white mb-6">
            Experience the TitanKlin Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and transform your space today!
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8"
          >
            <Link to="/contact">Book Your Cleaning</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
