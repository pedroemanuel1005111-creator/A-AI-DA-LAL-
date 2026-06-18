import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="bg-acai-950 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
