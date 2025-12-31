'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { menuData } from '@/data/menu';

const categoryImages: Record<string, string> = {
  'Chicken Doner': '/images/food-chicken-wrap-01.jpg',
  'Gyro (Halal)': '/images/food-beef-wrap-01.jpg',
  'Vegetarian': '/images/food-falafel-wrap-01.jpg',
  'Sides': '/images/food-chicken-wrap-fries-01.jpg',
  'Sauces': '/images/food-prep-sauce-drizzle-01.jpg',
  'Dessert & Drinks': '/images/food-spread-feast-01.jpg',
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  const activeMenuCategory = menuData.find((cat) => cat.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
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
            Our Menu
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
            Authentic Turkish Flavors
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fresh ingredients, traditional recipes, and made-to-order perfection.
            All meats are 100% halal.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {menuData.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.category
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.category}
            </button>
          ))}
        </motion.div>

        {/* Menu Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Menu Image */}
          <motion.div
            key={activeCategory + '-image'}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden sticky top-24"
          >
            <Image
              src={categoryImages[activeCategory] || '/images/food-spread-feast-01.jpg'}
              alt={activeCategory}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-2">
                {activeCategory}
              </h3>
              {activeMenuCategory?.description && (
                <p className="text-white/80">{activeMenuCategory.description}</p>
              )}
            </div>
          </motion.div>

          {/* Menu Items */}
          <motion.div
            key={activeCategory + '-items'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {activeMenuCategory?.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-cream rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-primary text-lg">{item.name}</h4>
                  <span className="text-accent font-bold text-lg">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                {item.description && (
                  <p className="text-gray-600">{item.description}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Food Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-primary text-center mb-8">
            Fresh From Our Kitchen
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/images/food-chicken-plate-salad-01.jpg',
              '/images/food-beef-plate-01.jpg',
              '/images/food-falafel-plate-01.jpg',
              '/images/food-spread-feast-02.jpg',
            ].map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative h-48 md:h-64 rounded-xl overflow-hidden group"
              >
                <Image
                  src={image}
                  alt="Delicious food"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
