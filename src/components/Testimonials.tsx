import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  story: string;
  quote: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Kavya & Sidharth',
    story: 'Royal Beach Ceremony',
    location: 'Mahabalipuram, Chennai',
    rating: 5,
    quote: "Harinee and her team didn't just take photos; they captured our souls. Every smile, every tear of joy, and the magical golden hour shots at the beach venue are now printed on our walls. Absolute dream makers!",
  },
  {
    name: 'Meera & Ashwin',
    story: 'Intimate Heritage Palace Wedding',
    location: 'Leela Palace, Chennai',
    rating: 5,
    quote: 'We were looking for a cinematic and deeply emotional story, and Harinee Photography delivered exactly that. Their drone coverage and candid shots made our wedding feel like a luxury feature film. Recommended!',
  },
  {
    name: 'Priyanka & Nila',
    story: 'Pre-Wedding Sunset Portraiture',
    location: 'InterContinental Resort, Chennai',
    rating: 5,
    quote: 'A flawless experience from start to finish. They made us feel so incredibly comfortable during our couple portrait session. The colors, lighting, and minimal composition are pure art.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Background ambient gold orb */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-light block mb-3">
            Love Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white text-serif uppercase tracking-wide">
            Testimonials
          </h2>
          <div className="h-[1px] w-16 bg-gold mx-auto mt-4" />
        </div>

        {/* Carousel Content */}
        <div className="relative min-h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="glassmorphism p-8 md:p-12 border border-gold/10 w-full relative"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 left-6 text-gold/10 pointer-events-none">
                <Quote className="w-16 h-16 transform -scale-x-100" />
              </div>

              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6 text-gold">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 font-light text-serif text-base md:text-xl leading-relaxed tracking-wide italic mb-8 max-w-2xl mx-auto">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>

              {/* Client Name & Story */}
              <div>
                <h4 className="text-white font-semibold tracking-wider text-sm md:text-base uppercase">
                  {testimonials[current].name}
                </h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold mt-1 font-light">
                  {testimonials[current].story} &bull; {testimonials[current].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 border border-white/10 hover:border-gold text-white hover:text-gold flex items-center justify-center rounded-full transition-all duration-300 bg-black/40 backdrop-blur-sm"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs text-white/40 tracking-[0.2em] font-light">
            0{current + 1} / 0{testimonials.length}
          </span>
          <button
            onClick={handleNext}
            className="w-10 h-10 border border-white/10 hover:border-gold text-white hover:text-gold flex items-center justify-center rounded-full transition-all duration-300 bg-black/40 backdrop-blur-sm"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
