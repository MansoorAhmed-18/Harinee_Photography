import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How far in advance should we book Harinee Photography?',
    answer: 'We recommend booking 6 to 12 months in advance, especially for peak wedding seasons in South India (September through March). This ensures our team is fully reserved for your special dates.',
  },
  {
    question: 'Do you travel outside of Chennai for destination weddings?',
    answer: 'Absolutely! While we are proudly based in Chennai, we regularly travel across India and globally to document beautiful weddings. Travel and accommodation fees are customized depending on the location.',
  },
  {
    question: 'What is your timeline for delivering the final photo gallery?',
    answer: 'We share a curated sneak peek gallery of 30-50 high-resolution edited images within 7 days of the ceremony. The complete high-resolution online gallery and signature albums are delivered within 6 to 8 weeks.',
  },
  {
    question: 'Can we customize our wedding photography package?',
    answer: 'Yes! Every couple and wedding is unique. During our initial consultation, we will discuss your events, hours of coverage, and delivery formats (like custom leather albums or cinematic films) to tailor a luxury package just for you.',
  },
  {
    question: 'Do you offer videography and drone coverage?',
    answer: 'Yes, we are a comprehensive production studio. Our packages include premium cinematic videography, drone cinematography, and professional sound recording to capture your wedding like a motion picture.',
  },
];

interface AccordionItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ faq, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-white/5 py-4">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-4 text-white hover:text-gold transition-colors focus:outline-none"
      >
        <span className="text-sm md:text-base font-light tracking-wide text-sans">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gold/80 ml-4 flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed tracking-wide pb-4">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-24 md:py-32 bg-black relative border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-light block mb-3">
            Common Inquiries
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white text-serif uppercase tracking-wide">
            FAQ
          </h2>
          <div className="h-[1px] w-16 bg-gold mx-auto mt-4" />
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
