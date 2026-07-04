import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds loading
    const intervalTime = 15;
    const steps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step += 1;
      const nextProgress = Math.min(Math.round((step / steps) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress === 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 600); // Allow fade out animation to finish
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="mb-6"
            >
              <img
                src="/logo.svg"
                alt="Harinee Photography Logo"
                className="h-32 md:h-44 w-auto mx-auto"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xs tracking-[0.25em] text-white/60 uppercase text-sans mb-8"
            >
              The Visual Storytellers
            </motion.p>

            {/* Progress counter */}
            <div className="overflow-hidden h-6 flex items-center justify-center">
              <motion.span
                initial={{ y: 24 }}
                animate={{ y: 0 }}
                className="text-serif font-light text-xl md:text-2xl text-gold"
              >
                {progress}%
              </motion.span>
            </div>

            {/* Sleek loader bar */}
            <div className="w-40 h-[2px] bg-white/10 mx-auto mt-4 overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: `${progress - 100}%` }}
                transition={{ ease: 'easeOut' }}
                className="absolute top-0 bottom-0 left-0 right-0 bg-gold"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
