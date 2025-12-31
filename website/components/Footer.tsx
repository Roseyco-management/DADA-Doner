'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/branding-logo-01.jpg"
                alt="DADA Doner Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold">
                DADA Doner
              </span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Casual, family-run Turkish street food serving authentic halal
              doner, falafel, and Mediterranean cuisine in Columbia, Missouri.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/dadadonercom/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Reviews', 'Location'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+15732286517"
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  (573) 228-6517
                </a>
              </li>
              <li>
                <a
                  href="mailto:dadafoodtruck@gmail.com"
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  dadafoodtruck@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/dir//1201+E+Broadway,+Columbia,+MO+65201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-accent transition-colors"
                >
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    1201 E Broadway<br />
                    Columbia, MO 65201
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hours Banner */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Open Hours:</span>
              <span>Tuesday - Saturday: 11 AM - 8 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">100% Halal</span>
              <span>•</span>
              <span>Family Owned</span>
              <span>•</span>
              <span>Fresh Daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} DADA Doner. All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              Made with love in Columbia, Missouri
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
