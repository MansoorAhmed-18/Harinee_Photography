import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  aspectRatio: string; // for masonry grid
  source: 'Instagram' | 'Google' | 'Studio';
  likes?: string;
  location?: string;
}

const demoPortfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Maathesh & Swetha\'s Union',
    category: 'Wedding',
    image: '/images/insta_wedding_1.jpg',
    aspectRatio: 'h-[450px]',
    source: 'Instagram',
    likes: '412',
    location: 'Chennai, ECR'
  },
  {
    id: 2,
    title: 'Golden Hour Beach Romance',
    category: 'Pre Wedding',
    image: '/images/insta_prewedding_1.jpg',
    aspectRatio: 'h-[320px]',
    source: 'Instagram',
    likes: '528',
    location: 'ECR Beach'
  },
  {
    id: 3,
    title: 'The Sacred Exchange',
    category: 'Engagement',
    image: '/images/insta_engagement_1.jpg',
    aspectRatio: 'h-[400px]',
    source: 'Instagram',
    likes: '298',
    location: 'Chennai Hall'
  },
  {
    id: 4,
    title: 'ECR Blue House Portrait',
    category: 'Couple Portraits',
    image: '/images/insta_couple_1.jpg',
    aspectRatio: 'h-[480px]',
    source: 'Instagram',
    likes: '342',
    location: 'Blue House, ECR'
  },
  {
    id: 5,
    title: 'The Silk Bride',
    category: 'Wedding',
    image: '/images/insta_wedding_2.jpg',
    aspectRatio: 'h-[420px]',
    source: 'Studio',
    location: 'Palavakkam Studio'
  },
  {
    id: 6,
    title: 'Tranquil Water Splash Portrait',
    category: 'Couple Portraits',
    image: '/images/insta_couple_2.jpg',
    aspectRatio: 'h-[360px]',
    source: 'Instagram',
    likes: '284',
    location: 'Mahabalipuram'
  },
  {
    id: 7,
    title: 'Fine-Art Maternity Glow',
    category: 'Maternity',
    image: '/images/insta_maternity_1.jpg',
    aspectRatio: 'h-[400px]',
    source: 'Google',
    location: 'Palavakkam Studio'
  },
  {
    id: 8,
    title: 'Dreaming in Wool Newborn',
    category: 'Baby Shoot',
    image: '/images/insta_baby_1.jpg',
    aspectRatio: 'h-[350px]',
    source: 'Google',
    location: 'Home Shoot, Chennai'
  },
  {
    id: 9,
    title: 'Luxury Reception Illuminations',
    category: 'Events',
    image: '/images/insta_event_1.jpg',
    aspectRatio: 'h-[460px]',
    source: 'Google',
    location: 'MRC Nagar, Chennai'
  },
  {
    id: 10,
    title: 'Royal Mandapam Vows',
    category: 'Wedding',
    image: '/images/insta_wedding_3.jpg',
    aspectRatio: 'h-[380px]',
    source: 'Instagram',
    location: 'Chennai'
  },
  {
    id: 11,
    title: 'Beachside Candid Exchange',
    category: 'Pre Wedding',
    image: '/images/insta_prewedding_2.jpg',
    aspectRatio: 'h-[340px]',
    source: 'Instagram',
    location: 'ECR Beach'
  },
  {
    id: 12,
    title: 'Traditional Muhurtham',
    category: 'Wedding',
    image: '/images/insta_wedding_4.jpg',
    aspectRatio: 'h-[440px]',
    source: 'Instagram',
    location: 'Chennai'
  }
];

const categories = [
  'All',
  'Wedding',
  'Pre Wedding',
  'Engagement',
  'Couple Portraits',
  'Baby Shoot',
  'Maternity',
  'Events'
];

export default function PortfolioDemo() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All'
    ? demoPortfolioItems
    : demoPortfolioItems.filter((item) => item.category === activeCategory);

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
    <section id="portfolio-demo" className="py-24 md:py-32 bg-black relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-light block mb-3">
            Real Work Demo
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white text-serif uppercase tracking-wide">
            Instagram & Google Portfolio
          </h2>
          <p className="text-xs text-white/40 mt-3 font-light tracking-wide max-w-lg mx-auto">
            This demo maps actual captured photos from your Instagram feed and Google Business details, sorted by category.
          </p>
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
              className={`masonry-brick relative group overflow-hidden bg-graybg cursor-pointer ${item.aspectRatio} border border-white/5 hover:border-gold/30 transition-all duration-500`}
              onClick={() => setLightboxIndex(index)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover zoom-img select-none"
              />

              {/* Tag indicator for source */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-2 py-1 text-[8px] tracking-wider uppercase text-gold/80 border border-gold/20">
                {item.source}
              </div>

              {/* Black Gradient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6" />

              {/* Title & Category Info (Reveals on Hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-light block mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg text-white font-light text-serif tracking-wide flex justify-between items-center mb-1">
                  {item.title}
                  <Maximize2 className="w-4 h-4 text-gold/80" />
                </h3>
                <div className="flex items-center justify-between text-[9px] text-white/50 tracking-wider">
                  <span>{item.location}</span>
                  {item.likes && <span>♥ {item.likes} likes</span>}
                </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-gold transition-colors z-50 p-2"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-6 text-white/50 hover:text-gold transition-colors z-50 p-2 max-sm:left-2"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-10 h-10 max-sm:w-8 max-sm:h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-6 text-white/50 hover:text-gold transition-colors z-50 p-2 max-sm:right-2"
              aria-label="Next Image"
            >
              <ChevronRight className="w-10 h-10 max-sm:w-8 max-sm:h-8" />
            </button>

            {/* Lightbox Content */}
            <div className="relative max-w-5xl max-h-[80vh] flex flex-col items-center">
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
                  Image {lightboxIndex + 1} of {filteredItems.length} &bull; Source: {filteredItems[lightboxIndex].source}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
