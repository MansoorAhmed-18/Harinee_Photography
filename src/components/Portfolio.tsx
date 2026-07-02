import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  aspectRatio: string; // for masonry layout variation
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Golden Hour Vows',
    category: 'Wedding',
    image: '/images/wedding_hero_1.png',
    aspectRatio: 'h-[450px]',
  },
  {
    id: 2,
    title: 'The Sacred Exchange',
    category: 'Engagement',
    image: '/images/wedding_hero_2.png',
    aspectRatio: 'h-[320px]',
  },
  {
    id: 3,
    title: 'Royal Palace Promenade',
    category: 'Couple Portraits',
    image: '/images/wedding_hero_3.png',
    aspectRatio: 'h-[480px]',
  },
  {
    id: 4,
    title: 'The Elegant Silk Bride',
    category: 'Wedding',
    image: '/images/portfolio_wedding.png',
    aspectRatio: 'h-[420px]',
  },
  {
    id: 5,
    title: 'Eternal Beach Silhouette',
    category: 'Pre Wedding',
    image: '/images/portfolio_prewedding.png',
    aspectRatio: 'h-[300px]',
  },
  {
    id: 6,
    title: 'Dreaming in Wool',
    category: 'Baby Shoot',
    image: '/images/portfolio_baby.png',
    aspectRatio: 'h-[360px]',
  },
  {
    id: 7,
    title: 'Glow of Motherhood',
    category: 'Maternity',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77ebe?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'h-[400px]',
  },
  {
    id: 8,
    title: 'Editorial Silhouette',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'h-[460px]',
  },
  {
    id: 9,
    title: 'Luxury Reception Lights',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'h-[320px]',
  },
  {
    id: 10,
    title: 'Sunset in Venice',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'h-[440px]',
  },
  {
    id: 11,
    title: 'Laughter at the Altar',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'h-[380px]',
  },
  {
    id: 12,
    title: 'A Walk to Remember',
    category: 'Pre Wedding',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'h-[340px]',
  },
];

const categories = [
  'All',
  'Wedding',
  'Pre Wedding',
  'Couple Portraits',
  'Baby Shoot',
  'Maternity',
  'Fashion',
  'Events',
  'Travel',
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handlePrev = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredItems.length;
    });
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-light block mb-3">
            Our Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white text-serif uppercase tracking-wide">
            Portfolio
          </h2>
          <div className="h-[1px] w-16 bg-gold mx-auto mt-4" />
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-black border border-gold'
                  : 'text-white/60 border border-white/10 hover:border-gold hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              key={item.id}
              className={`masonry-brick relative group overflow-hidden bg-graybg cursor-pointer ${item.aspectRatio}`}
              onClick={() => setLightboxIndex(index)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover zoom-img select-none"
              />

              {/* Black Gradient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6" />

              {/* Title & Category Info (Reveals on Hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-light block mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg text-white font-light text-serif tracking-wide flex justify-between items-center">
                  {item.title}
                  <Maximize2 className="w-4 h-4 text-gold/80" />
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(null);
              }}
              className="absolute top-6 right-6 text-white/70 hover:text-gold transition-colors z-50 p-2 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 text-white/50 hover:text-gold transition-colors z-50 p-2 max-sm:left-2 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-10 h-10 max-sm:w-8 max-sm:h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 text-white/50 hover:text-gold transition-colors z-50 p-2 max-sm:right-2 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-10 h-10 max-sm:w-8 max-sm:h-8" />
            </button>

            {/* Lightbox Content */}
            <div 
              className="relative max-w-5xl max-h-[80vh] flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain shadow-2xl border border-white/5"
              />

              {/* Image Info at bottom */}
              <div className="mt-4 text-center">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-light block mb-1">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h4 className="text-xl text-white font-light text-serif tracking-wide">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="text-[10px] text-white/40 mt-1 font-light uppercase tracking-wider">
                  Image {lightboxIndex + 1} of {filteredItems.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
