import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import OrderOnline from '@/components/OrderOnline';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <OrderOnline />
      <Location />
      <Footer />
    </main>
  );
}
