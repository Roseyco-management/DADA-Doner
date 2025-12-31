import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DADA Doner | Authentic Turkish Street Food in Columbia, MO",
  description:
    "Family-run Turkish restaurant and food truck serving authentic halal doner, falafel, and Mediterranean cuisine. Located at 1201 E Broadway, Columbia, MO.",
  keywords: [
    "Turkish food",
    "doner",
    "kebab",
    "halal",
    "Columbia MO",
    "falafel",
    "Mediterranean",
  ],
  openGraph: {
    title: "DADA Doner | Authentic Turkish Street Food",
    description:
      "Casual, family-run Turkish street food. Halal doner, falafel, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
