import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
}

function AnimatedStat({ value, suffix, label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const incrementTime = Math.max(Math.floor(duration / end), 15);

      const timer = setInterval(() => {
        start += Math.ceil(end / 100);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 border-r border-gold/10 last:border-r-0 max-sm:border-r-0 max-sm:border-b max-sm:last:border-b-0">
      <h3 className="text-3xl md:text-5xl font-light text-gold text-serif mb-2">
        {count}
        {suffix}
      </h3>
      <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/50 font-light">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background Accent */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-white/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative justify-self-center lg:justify-self-start"
          >
            {/* Elegant double border frames */}
            <div className="absolute inset-4 border border-gold/40 z-10 translate-x-4 translate-y-4 transition-transform duration-500 hover:translate-x-2 hover:translate-y-2" />
            <div className="relative w-[300px] sm:w-[400px] h-[400px] sm:h-[520px] overflow-hidden bg-graybg">
              <img
                src="/images/about harinee.png"
                alt="Best wedding photographer in chennai"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 zoom-img"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold/30 pointer-events-none" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-light block mb-3">
                Behind The Lens
              </span>
              <span>
              <h2 className="text-3xl md:text-5xl font-light text-white text-serif uppercase tracking-wide leading-tight">
                About Harinee Photography's Backbone
              </h2></span>
              <div className="h-[1px] w-20 bg-gold mt-4" />
            </div>

            <p className="text-white/80 font-light leading-relaxed tracking-wide text-sm md:text-base">
              Hello, I'm Guna Sekaran, founder of Harinee Photography.

Photography has always been more than a profession for me—it's a passion for preserving moments that can never be recreated. Every smile, every emotion, and every celebration has a story, and I feel privileged to capture those memories for families to cherish forever.</p>

<p className="text-white/80 font-light leading-relaxed tracking-wide text-sm md:text-base">I named this studio after my daughter, Harinee, because she has always been my inspiration. "Harinee Photography" is not just a business name; it represents my family's values of love, trust, and creating lasting memories. For over eight years, I have had the absolute privilege of documenting the most beautiful, tender, and raw moments of life, milestones, and celebrations. We don&apos;t just take photos; we are visual storytellers who capture your love and joy in its truest, most artistic form.
            </p>

            {/* Creative Philosophy Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold bg-gold/5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-1">
                    Emotional Storytelling
                  </h4>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    Capturing spontaneous tears, laughter, and subtle gestures that define your day.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold bg-gold/5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-1">
                    Luxury & Elegance
                  </h4>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    Meticulously framing details with premium cinematic color grading and editorial styles.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h4 className="text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-3">
                Our Creative Philosophy
              </h4>
              <p className="text-xs text-white/60 font-light italic leading-relaxed">
                &ldquo;We believe that photography is an investment in your heritage. Generations from now, your grandchildren should look at your photos and feel the exact warmth, joy, and luxury of your most cherished life milestones.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>

        {/* Statistics Sub-section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-24 md:mt-32 border-t border-b border-gold/20 bg-cardbg/50 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-8">
            <AnimatedStat value={1000} suffix="+" label="Happy Clients" />
            <AnimatedStat value={1500} suffix="+" label="Projects Completed" />
            <AnimatedStat value={8} suffix="+" label="Years Experience" />
            <AnimatedStat value={100} suffix="%" label="Customer Satisfaction" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
