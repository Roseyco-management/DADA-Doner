export interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

export interface MenuCategory {
  category: string;
  description?: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: "Chicken Doner",
    description: "Our signature rotisserie chicken, seasoned with traditional Turkish spices",
    items: [
      { name: "Chicken Doner Wrap", price: 11.95, description: "Tender chicken, fresh veggies, and your choice of sauce in a warm pita" },
      { name: "Chicken Doner Sandwich", price: 11.95, description: "Served on fresh-baked bread with lettuce, tomato, and sauce" },
      { name: "Chicken Doner Plate", price: 14.95, description: "Generous portion with rice, salad, and pita" },
      { name: "Chicken Iskender Kebab", price: 14.95, description: "Over pita with tomato sauce, yogurt, and butter" },
    ],
  },
  {
    category: "Gyro (Halal)",
    description: "Premium halal beef and lamb, slow-roasted to perfection",
    items: [
      { name: "Gyro Wrap", price: 12.95, description: "Beef and lamb wrapped in fresh pita with veggies and sauce" },
      { name: "Gyro Sandwich", price: 12.95, description: "Served on artisan bread with all the fixings" },
      { name: "Gyro Plate", price: 14.95, description: "Full plate with rice, fresh salad, and warm pita" },
    ],
  },
  {
    category: "Vegetarian",
    description: "Fresh, flavorful options for our plant-loving friends",
    items: [
      { name: "Cigkofte Wrap", price: 9.95, description: "Traditional Turkish bulgur kofta with fresh herbs" },
      { name: "Falafel Sandwich", price: 9.95, description: "Crispy falafel with tahini sauce and fresh veggies" },
      { name: "Falafel Plate", price: 14.95, description: "Six falafel pieces with hummus, rice, and salad" },
      { name: "Lentil Soup", price: 7.95, description: "Hearty traditional Turkish red lentil soup" },
    ],
  },
  {
    category: "Sides",
    description: "Perfect additions to complete your meal",
    items: [
      { name: "Fries", price: 5.95, description: "Crispy golden fries" },
      { name: "Rice", price: 3.00, description: "Fluffy seasoned rice" },
      { name: "Pita Bread", price: 1.00, description: "Fresh warm pita" },
      { name: "Naan Bread", price: 1.49, description: "Soft, freshly baked naan" },
    ],
  },
  {
    category: "Sauces",
    description: "House-made sauces to elevate your meal",
    items: [
      { name: "White Sauce", price: 0.99, description: "Creamy garlic yogurt sauce" },
      { name: "Spicy Sauce", price: 0.99, description: "For those who like it hot" },
      { name: "Curry Sauce", price: 0.99, description: "Mild curry-spiced sauce" },
      { name: "Traditional Tomato", price: 0.99, description: "Classic Turkish tomato sauce" },
    ],
  },
  {
    category: "Dessert & Drinks",
    description: "Sweet treats and refreshing beverages",
    items: [
      { name: "Baklava", price: 3.95, description: "Honey-soaked layers of phyllo and pistachios" },
      { name: "Ayran", price: 3.99, description: "Traditional Turkish yogurt drink" },
      { name: "Coca-Cola", price: 2.50 },
      { name: "Diet Coke", price: 2.50 },
      { name: "Bottled Water", price: 1.00 },
    ],
  },
];
