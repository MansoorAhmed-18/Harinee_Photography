import { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/Instagram';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';
import './App.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="bg-black text-white min-h-screen relative font-sans selection:bg-gold selection:text-black">
          {/* Custom Cursor Follower (Pointer Bubble) */}
          <CustomCursor />

          {/* Transparent Glass Sticky Navbar */}
          <Navbar />

          {/* Fullscreen Ken Burns Hero Slider */}
          <Hero />

          {/* Main Content Sections */}
          <main>
            {/* About Biography & Counting Stats */}
            <About />

            {/* Masonry Filterable Portfolio Grid */}
            <Portfolio />

            {/* Premium Interactive Services Info */}
            <Services />

            {/* Pricing Packages Info */}
            <Packages />

            {/* Testimonials Slideshow */}
            <Testimonials />

            {/* Instagram Grid Mock */}
            <InstagramFeed />

            {/* Collapsible FAQ Accordion */}
            <FAQ />

            {/* Contact Details & Inquiry Form */}
            <Contact />
          </main>

          {/* Complete Information Footer */}
          <Footer />

          {/* Floating WhatsApp Contact Widget */}
          <WhatsAppButton />
        </div>
      )}
    </>
  );
}
