'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const orderPlatforms = [
  {
    name: 'DoorDash',
    logo: '/images/doordash.svg',
    color: '#FF3008',
    url: 'https://www.doordash.com/store/dada-doner-columbia-29734430/',
  },
  {
    name: 'Uber Eats',
    logo: '/images/ubereats.svg',
    color: '#06C167',
    url: 'https://www.ubereats.com/store/dada-doner-columbia/7_8JWJfCUGe9EcZ1c_EgJQ',
  },
  {
    name: 'Grubhub',
    logo: '/images/grubhub.svg',
    color: '#F63440',
    url: 'https://www.grubhub.com/restaurant/dada-doner-1201-e-broadway-columbia/9495104',
  },
];

export default function OrderOnline() {
  return (
    <section id="order" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pattern-dots" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              Delivery & Pickup
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
              Order Online
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Can&apos;t make it to our restaurant? No problem! Order your favorite
              Turkish dishes for delivery or pickup through our partner platforms.
            </p>

            {/* Order Buttons */}
            <div className="space-y-4">
              {orderPlatforms.map((platform, index) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-xl p-4 group transition-all border-2 border-transparent hover:border-accent"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: platform.color }}
                    >
                      {platform.name.charAt(0)}
                    </div>
                    <span className="font-semibold text-primary text-lg">
                      Order on {platform.name}
                    </span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Call to Order */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 bg-primary rounded-xl"
            >
              <p className="text-white/80 mb-2">Prefer to order by phone?</p>
              <a
                href="tel:+15732286517"
                className="text-white font-bold text-2xl hover:text-accent transition-colors"
              >
                (573) 228-6517
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/food-table-wraps-fries-01.jpg"
                alt="Delicious DADA Doner meal ready for delivery"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🚗</span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Fast Delivery</p>
                  <p className="text-primary font-bold text-lg">30-45 min</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
