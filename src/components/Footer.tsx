import { ArrowUp, Phone, Mail } from 'lucide-react';

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Footer Content Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* Brand Column */}
        <div className="space-y-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="flex items-center group w-fit"
          >
            <img
              src="/logo.svg"
              alt="Harinee Photography Logo"
              className="h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>
          <p className="text-xs text-white/50 font-light leading-relaxed max-w-xs">
            Capturing luxury, cinematic, emotional, and timeless visual stories. Preserving your most cherished memories for generations.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Quick Links</h4>
          <ul className="space-y-2 text-xs text-white/60 font-light">
            {['about', 'portfolio', 'services', 'reviews', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className="hover:text-gold transition-colors capitalize"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Highlight Column */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Signature Shoots</h4>
          <ul className="space-y-2 text-xs text-white/60 font-light">
            <li>Wedding Storytelling</li>
            <li>Pre-Wedding Romance</li>
            <li>Fine-Art Couple Portraits</li>
            <li>Newborn & Maternity</li>
            <li>Cinematic Videography</li>
          </ul>
        </div>

        {/* Contact/Social Column */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Say Hello</h4>
          <p className="text-xs text-white/60 font-light">
            Palavakkam, East Coast Road,<br />
            Chennai, Tamil Nadu
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href="https://www.instagram.com/harinee_photography"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-gold hover:text-gold text-white/60 flex items-center justify-center transition-all duration-300 bg-zinc-950"
              aria-label="Instagram Profile"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://wa.me/919962816447"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-gold hover:text-gold text-white/60 flex items-center justify-center transition-all duration-300 bg-zinc-950"
              aria-label="WhatsApp Link"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:harineestudio@gmail.com"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-gold hover:text-gold text-white/60 flex items-center justify-center transition-all duration-300 bg-zinc-950"
              aria-label="Email Address"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom Block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40 font-light tracking-wider">
          &copy; {new Date().getFullYear()} Harinee Photography. All rights reserved. &bull; Made with Love for Premium Storytellers. &bull; Designed by{' '}
          <a
            href="https://portfolio-main-zeta-blue.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gold hover:underline font-semibold transition-colors duration-300"
          >
            Mansoor
          </a>
        </p>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 group text-[10px] uppercase tracking-[0.25em] text-white/50 hover:text-gold transition-colors duration-300"
          aria-label="Back to Top"
        >
          Back To Top
          <div className="w-6 h-6 border border-white/10 group-hover:border-gold rounded-full flex items-center justify-center group-hover:-translate-y-1 transition-all">
            <ArrowUp className="w-3 h-3" />
          </div>
        </button>
      </div>
    </footer>
  );
}
