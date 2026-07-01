import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.a
        href="https://wa.me/919962816447?text=Hi%20Harinee%2C%20I%20would%20love%20to%20know%20more%20about%20your%20photography%20packages!"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-colors duration-300 relative group"
        aria-label="Contact on WhatsApp"
      >
        {/* Pulsing indicator */}
        <span className="absolute -inset-0.5 rounded-full bg-emerald-600/30 animate-ping group-hover:animate-none" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 fill-white" />

        {/* Hover Tooltip */}
        <div className="absolute right-16 bg-zinc-950 text-white border border-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          Chat With Us
        </div>
      </motion.a>
    </div>
  );
}
