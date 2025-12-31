# DADA Doner Website - Build Summary

## Overview

A modern, responsive website for DADA Doner, a family-run Turkish restaurant and food truck located in Columbia, Missouri. Built with Next.js 16, Tailwind CSS 4, Framer Motion, and Lenis smooth scrolling.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.0.10 | React framework (App Router) |
| Tailwind CSS | 4.x | Utility-first CSS |
| Framer Motion | 12.x | Animations |
| Lenis | 1.x | Smooth scrolling |
| Lucide React | Latest | Icons |
| TypeScript | 5.x | Type safety |

---

## Color Scheme

Custom color palette based on brand colors:

- **Primary (Dark Teal)**: `#0E3846` - Headers, text, footer
- **Accent (Orange)**: `#F89447` - CTAs, highlights, interactive elements
- **White/Cream**: `#FFFFFF`, `#FFF9F2` - Backgrounds

---

## Project Structure

```
website/
├── app/
│   ├── layout.tsx       # Root layout with fonts & SmoothScroll
│   ├── page.tsx         # Homepage with all sections
│   └── globals.css      # Global styles & Tailwind theme
├── components/
│   ├── SmoothScroll.tsx # Lenis smooth scroll wrapper
│   ├── Navbar.tsx       # Fixed navigation with mobile menu
│   ├── Hero.tsx         # Full-screen hero with food image
│   ├── About.tsx        # Family story section
│   ├── Menu.tsx         # Interactive tabbed menu
│   ├── Testimonials.tsx # Customer reviews
│   ├── Location.tsx     # Hours, address, contact info
│   ├── OrderOnline.tsx  # Delivery platform links
│   └── Footer.tsx       # Contact, social, hours
├── data/
│   └── menu.ts          # Menu items with prices
└── public/
    └── images/          # 45 photos from PHOTO-MANIFEST.md
```

---

## Sections Built

### 1. Hero Section
- Full-screen hero with `food-wraps-trio-hero-01.jpg`
- Animated headline with Playfair Display font
- CTAs: "View Our Menu" and "Order Online"
- Rating badge (4.8 stars, 144 reviews)
- Scroll indicator animation

### 2. About Section
- Family story with `team-family-counter-01.jpg`
- Feature cards: Family Owned, 100% Halal, Authentic Recipes
- Food truck origin story with photo grid
- Animated on scroll

### 3. Menu Section
- Interactive category tabs
- Full menu with prices from business info
- Category images that change with selection
- Food gallery at bottom
- Categories: Chicken Doner, Gyro (Halal), Vegetarian, Sides, Sauces, Dessert & Drinks

### 4. Testimonials Section
- 4 featured reviews from Google
- Star ratings with Lucide icons
- Dark primary background with accent colors
- Google review CTA

### 5. Order Online Section
- DoorDash, Uber Eats, Grubhub links
- Phone order option
- Delivery time estimate card
- Food image with floating card

### 6. Location & Hours Section
- Storefront image with overlay
- Address with Google Maps directions link
- Phone and email contact
- Weekly hours with today highlighted
- All contact info from business data

### 7. Footer
- Logo and brand description
- Quick navigation links
- Contact information
- Social links (Instagram)
- Hours banner
- Copyright

---

## Features

- **Responsive Design**: Mobile-first with breakpoints for tablet and desktop
- **Smooth Scrolling**: Lenis integration for buttery smooth page navigation
- **Animations**: Framer Motion scroll-triggered animations throughout
- **Interactive Menu**: Tabbed interface with animated transitions
- **Mobile Navigation**: Slide-out menu with animation
- **SEO Optimized**: Meta tags, OpenGraph, semantic HTML
- **Performance**: Next.js Image optimization, static generation
- **Accessibility**: Proper heading hierarchy, alt text, keyboard navigation

---

## Photos Used

From PHOTO-MANIFEST.md recommendations:

| Section | Images |
|---------|--------|
| Hero | `food-wraps-trio-hero-01.jpg` |
| About | `team-family-counter-01.jpg`, `food-beef-wrap-rotisserie-01.jpg`, `truck-exterior-01.jpg`, `truck-kitchen-chef-01.jpg`, `exterior-storefront-patio-01.jpg` |
| Menu | `food-chicken-wrap-01.jpg`, `food-beef-wrap-01.jpg`, `food-falafel-wrap-01.jpg`, `food-chicken-wrap-fries-01.jpg`, `food-prep-sauce-drizzle-01.jpg`, `food-spread-feast-01.jpg` |
| Menu Gallery | `food-chicken-plate-salad-01.jpg`, `food-beef-plate-01.jpg`, `food-falafel-plate-01.jpg`, `food-spread-feast-02.jpg` |
| Location | `exterior-storefront-patio-01.jpg` |
| Order | `food-table-wraps-fries-01.jpg` |
| Navbar/Footer | `branding-logo-01.jpg` |

---

## Running the Project

```bash
cd website

# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

---

## Notes

1. **All 45 photos** from the photos folder have been copied to `public/images/`
2. **Menu prices** are accurate to the provided business information
3. **Hours** show "Today" highlighting based on current day
4. **External links** for ordering platforms are configured with proper URLs
5. **Fonts**: Inter (body) and Playfair Display (headings) via Google Fonts

---

## Deployment

Ready for deployment on Vercel:

```bash
npm install -g vercel
vercel
```

Or any platform supporting Next.js (Netlify, AWS Amplify, etc.)

---

*Built: December 31, 2024*
