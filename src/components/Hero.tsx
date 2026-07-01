import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/images/wedding_hero_1.png',
    animationClass: 'animate-kenburns-1',
  },
  {
    image: '/images/wedding_hero_2.png',
    animationClass: 'animate-kenburns-2',
  },
  {
    image: '/images/wedding_hero_3.png',
    animationClass: 'animate-kenburns-3',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slideshow background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[current].image}
              alt={`Wedding Hero Slide ${current + 1}`}
              className={`w-full h-full object-cover object-center ${slides[current].animationClass}`}
            />
            {/* Vignette & Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/50" />
            <div className="absolute inset-0 bg-radial-vignette opacity-60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-gold font-light mb-4 block">
            The Visual Storytellers
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-8xl tracking-[0.2em] font-light text-white text-serif uppercase mb-6 drop-shadow-sm select-none">
            Harinee
            <span className="block text-xl sm:text-3xl md:text-4xl tracking-[0.35em] text-gold/90 mt-4">
              Photography
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white/70 font-light tracking-[0.2em] max-w-xl mx-auto italic text-serif mb-10 select-none">
            &ldquo;Capture Every Emotion. Preserve Every Memory.&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleScrollTo('portfolio')}
              className="w-full sm:w-auto px-8 py-3 bg-white text-black hover:bg-gold hover:text-black text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-lg"
            >
              View Portfolio
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto px-8 py-3 border border-white text-white hover:border-gold hover:bg-gold/10 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => handleScrollTo('about')}
          className="flex flex-col items-center text-white/50 hover:text-gold transition-colors duration-300"
          aria-label="Scroll Down"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] mb-2 font-light">Scroll</span>
          <div className="w-[1.5px] h-10 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{
                y: [0, 40, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-0 left-0 w-full h-4 bg-gold"
            />
          </div>
        </button>
      </div>
    </section>
  );
}
