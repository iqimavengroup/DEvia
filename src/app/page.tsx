import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Facilities from '@/components/Facilities';
import FloorPlans from '@/components/FloorPlans';
import Location from '@/components/Location';
import RegisterForm from '@/components/RegisterForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FloorPlans />
        <Facilities />
        <About />
        <Gallery />
        <Location />
        <RegisterForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
