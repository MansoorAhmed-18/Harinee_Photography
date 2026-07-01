import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Mouse coordinates using MotionValues
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for outer bubble (with lag/easing)
  const springConfig = { damping: 28, stiffness: 180, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports a fine pointer (mouse)
    const checkFinePointer = () => {
      const match = window.matchMedia('(pointer: fine)');
      setIsDesktop(match.matches);
    };

    checkFinePointer();
    window.addEventListener('resize', checkFinePointer);

    return () => {
      window.removeEventListener('resize', checkFinePointer);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Event delegation to detect hover on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if target is interactive (links, buttons, portfolio blocks, input fields)
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-pointer') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select');

      if (isInteractive) {
        setHovered(true);

        // Check if hovering over portfolio grid items (masonry-brick) to display custom labels
        const portfolioCard = target.closest('.masonry-brick');
        if (portfolioCard) {
          setHoverText('VIEW');
        } else {
          setHoverText('');
        }
      } else {
        setHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isDesktop, cursorX, cursorY, visible]);

  if (!isDesktop || !visible) return null;

  return (
    <>
      {/* Outer Ring (Bubble Follower) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-50 flex items-center justify-center text-[9px] font-semibold tracking-[0.2em] uppercase text-black"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: hovered ? 64 : 32,
          height: hovered ? 64 : 32,
          backgroundColor: hovered ? 'rgba(214, 175, 55, 0.95)' : 'rgba(214, 175, 55, 0.02)',
          borderColor: hovered ? '#D4AF37' : 'rgba(214, 175, 55, 0.35)',
          boxShadow: hovered ? '0 0 20px rgba(214, 175, 55, 0.3)' : '0 0 0px transparent',
        }}
        animate={{
          scale: hovered ? 1 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 150 }}
      >
        <AnimatePresence>
          {hoverText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="text-black font-bold font-sans pointer-events-none"
            >
              {hoverText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
