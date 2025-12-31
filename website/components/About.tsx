'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Leaf, Award } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Family Owned',
    description: 'Run with love by our family, serving Columbia since day one.',
  },
  {
    icon: Leaf,
    title: '100% Halal',
    description: 'All our meats are certified halal and prepared fresh daily.',
  },
  {
    icon: Award,
    title: 'Authentic Recipes',
    description: 'Traditional Turkish recipes passed down through generations.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <Image
                src="/images/team-family-counter-01.jpg"
                alt="DADA Doner family at the restaurant counter"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-8 -right-8 w-64 h-64 z-20">
              <Image
                src="/images/food-beef-wrap-rotisserie-01.jpg"
                alt="Fresh doner being prepared"
                width={256}
                height={256}
                className="rounded-xl shadow-xl object-cover w-full h-full border-4 border-white"
              />
            </div>
            <div className="hidden md:block absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full opacity-20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              Our Story
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
              A Family Tradition
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              What started as a small food truck has grown into Columbia&apos;s favorite
              destination for authentic Turkish street food. At DADA Doner, we&apos;re more
              than just a restaurant—we&apos;re a family sharing our heritage with you.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Every wrap, every plate, and every dish is prepared with the same love
              and care we&apos;d put into a meal for our own family. From our signature
              chicken doner spinning on the rotisserie to our homemade sauces, we
              believe in quality ingredients and authentic flavors.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Food Truck Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/truck-exterior-01.jpg"
              alt="DADA Doner food truck"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/truck-kitchen-chef-01.jpg"
              alt="Chef preparing doner in the food truck"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/exterior-storefront-patio-01.jpg"
              alt="DADA Doner restaurant storefront"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
