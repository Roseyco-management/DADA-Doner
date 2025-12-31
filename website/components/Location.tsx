'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const hours = [
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: '11 AM - 8 PM' },
  { day: 'Wednesday', hours: '11 AM - 8 PM' },
  { day: 'Thursday', hours: '11 AM - 8 PM' },
  { day: 'Friday', hours: '11 AM - 8 PM' },
  { day: 'Saturday', hours: '11 AM - 8 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function Location() {
  const today = new Date().getDay();

  return (
    <section id="location" className="py-24 bg-cream">
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
            Visit Us
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
            Location & Hours
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map / Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/exterior-storefront-patio-01.jpg"
              alt="DADA Doner storefront"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <a
                href="https://www.google.com/maps/dir//1201+E+Broadway,+Columbia,+MO+65201"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-primary text-lg mb-1">Address</h3>
                <p className="text-gray-600">
                  1201 E Broadway<br />
                  Columbia, MO 65201
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                <Phone className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-primary text-lg mb-1">Phone</h3>
                <a
                  href="tel:+15732286517"
                  className="text-accent hover:text-accent-dark font-medium text-lg"
                >
                  (573) 228-6517
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-primary text-lg mb-1">Email</h3>
                <a
                  href="mailto:dadafoodtruck@gmail.com"
                  className="text-accent hover:text-accent-dark font-medium"
                >
                  dadafoodtruck@gmail.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-primary text-lg mb-3">Hours</h3>
                <div className="space-y-2">
                  {hours.map((schedule, index) => {
                    const dayIndex = index === 6 ? 0 : index + 1; // Adjust for Sunday = 0
                    const isToday = dayIndex === today;
                    return (
                      <div
                        key={schedule.day}
                        className={`flex justify-between py-2 px-3 rounded-lg ${
                          isToday ? 'bg-accent/10' : ''
                        }`}
                      >
                        <span
                          className={`${
                            isToday ? 'font-semibold text-accent' : 'text-gray-700'
                          }`}
                        >
                          {schedule.day}
                          {isToday && ' (Today)'}
                        </span>
                        <span
                          className={`${
                            schedule.hours === 'Closed'
                              ? 'text-gray-400'
                              : isToday
                              ? 'font-semibold text-accent'
                              : 'text-gray-600'
                          }`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
