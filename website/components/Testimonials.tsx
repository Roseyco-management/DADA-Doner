'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "This place is crazy good!!!! Flavorful but not overpowering.",
    author: "Amelia L.",
    rating: 5,
  },
  {
    quote:
      "Food and service were really good... flavors were amazing. 5/5",
    author: "Tehilla G.",
    rating: 5,
  },
  {
    quote:
      "One of the best restaurants in town. Addicted to their beef and lamb plate.",
    author: "Ryan M.",
    rating: 5,
  },
  {
    quote:
      "Cleanest restaurant I've been to in a long time. Excellent baklava.",
    author: "North Dakota Sentinel",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 text-white">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-xl">4.8</span>
            <span className="text-white/60">• 144 Google Reviews</span>
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/30" />
              <div className="flex text-accent mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-white mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <span className="text-white/80 font-medium">
                  {testimonial.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/maps/place/DADA+Doner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-accent hover:text-white transition-colors"
          >
            <Star className="w-5 h-5" />
            Leave Us a Review
          </a>
        </motion.div>
      </div>
    </section>
  );
}
