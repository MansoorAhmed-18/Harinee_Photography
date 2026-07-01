import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info } from 'lucide-react';

interface PackageFeature {
  text: string;
  highlighted?: boolean;
}

interface PricingPackage {
  name: string;
  price: string;
  features: PackageFeature[];
  delivery: string;
  selection: string;
  extraSheet?: string;
  badge?: string;
}

interface PackageCategory {
  title: string;
  packages: PricingPackage[];
}

const packageData: Record<string, PackageCategory> = {
  wedding: {
    title: 'Wedding Packages',
    packages: [
      {
        name: 'Basic Package',
        price: '₹50,000',
        features: [
          { text: 'Traditional Photography (1 Photographer)' },
          { text: 'Traditional Videography (1 Videographer)' },
          { text: 'Branded Fuji Album (30 Leaf / 60 Pages) - 2 Books' },
          { text: 'Complementary 10x15 Photo Frame - 2 Nos' },
        ],
        extraSheet: '₹250 per extra sheet',
        delivery: 'All raw files, photos, and edited outputs provided as soft copies on Hard Disk.',
        selection: 'You select 250 photos for Wedding & Reception to add to the album. PDF design shared within 40 days for print confirmation.',
      },
      {
        name: 'Premium Package',
        price: '₹80,000',
        badge: 'Popular',
        features: [
          { text: 'Traditional Photography (1 Photographer)' },
          { text: 'Traditional Videography (1 Photographer)' },
          { text: 'Candid Photography (1 Photographer)', highlighted: true },
          { text: 'Branded Fuji Album (40 Leaf / 80 Pages) - 2 Books' },
          { text: 'Complementary Couple Outdoor Photoshoot Only', highlighted: true },
          { text: 'Complementary 10x15 Photo Frame - 3 Nos' },
        ],
        extraSheet: '₹250 per extra sheet',
        delivery: 'All raw files, photos, and edited outputs provided as soft copies on Hard Disk.',
        selection: 'You select 300 photos for Wedding & Reception to add to the album. PDF design shared within 40 days for print confirmation.',
      },
      {
        name: 'Platinum Package',
        price: '₹1,30,000',
        badge: 'Luxury Elite',
        features: [
          { text: 'Traditional Photography (1 Photographer)' },
          { text: 'Traditional Videography (2 Videographers)' },
          { text: 'Candid Photography (1 Photographer)', highlighted: true },
          { text: 'Candid Videography (1 Videographer)', highlighted: true },
          { text: 'Helicam / Drone Coverage (1 Nos)', highlighted: true },
          { text: 'Live TV / Streaming Coverage (4 Nos)', highlighted: true },
          { text: 'Branded Fuji Album (60 Leaf / 120 Pages) - 2 Books' },
          { text: 'Complementary Couple Outdoor Photoshoot Only', highlighted: true },
          { text: 'Complementary 10x15 Photo Frame - 2 Nos' },
        ],
        extraSheet: '₹250 per extra sheet',
        delivery: 'All raw files, photos, and edited outputs provided as soft copies on Hard Disk.',
        selection: 'You select 500 photos for Wedding & Reception to add to the album. PDF design shared within 40 days for print confirmation.',
      },
    ],
  },
  babyShower: {
    title: 'Baby Shower Packages',
    packages: [
      {
        name: 'Basic Package',
        price: '₹14,999',
        features: [
          { text: 'Traditional Photography' },
          { text: 'Branded Album (20 Sheet / 40 Pages)' },
          { text: 'Complementary 10x15 Photo Frame - 2 Nos' },
        ],
        extraSheet: '₹300 per extra sheet',
        delivery: 'All raw files, photos, and edited outputs provided as soft copies on Hard Disk.',
        selection: 'You select 100 photos to add to the album. PDF album layout generated within 15 days for print approval.',
      },
      {
        name: 'Premium Package',
        price: '₹24,999',
        badge: 'Standard Choice',
        features: [
          { text: 'Traditional Photography' },
          { text: 'Candid Photography', highlighted: true },
          { text: 'Branded Album (30 Sheet / 60 Pages) - 1 Book' },
          { text: 'Branded Fuji Album (30 Leaf / 60 Pages) - 1 Book' },
          { text: 'Complementary 10x15 Photo Frame - 2 Nos' },
        ],
        extraSheet: '₹300 per extra sheet',
        delivery: 'All raw files, photos, and edited outputs provided as soft copies on Hard Disk.',
        selection: 'You select 150 photos to add to the album. PDF album layout generated within 15 days for print approval.',
      },
      {
        name: 'Premium Package - 2',
        price: '₹24,999',
        features: [
          { text: 'Traditional Photography' },
          { text: 'Traditional Videography' },
          { text: 'Branded Fuji Album (40 Leaf)' },
          { text: 'HD Output delivered in Pendrive' },
          { text: 'Complementary 10x15 Photo Frame - 2 Nos' },
        ],
        extraSheet: '₹300 per extra sheet',
        delivery: 'All raw files, photos, and edited outputs provided as soft copies on Google Drive.',
        selection: 'You select 150 photos to add to the album. PDF album layout generated within 15 days for print approval.',
      },
      {
        name: 'Platinum Package',
        price: '₹44,999',
        badge: 'Premium Full-Set',
        features: [
          { text: 'Traditional Photography' },
          { text: 'Traditional Videography' },
          { text: 'Candid Photography', highlighted: true },
          { text: 'Outdoor Photoshoot session', highlighted: true },
          { text: '5 Minutes Cinematic Video (includes 1 Min Instagram Reel)', highlighted: true },
          { text: 'Branded Fuji Album (40 Leaf)' },
          { text: 'Complementary 10x15 Photo Frame - 2 Nos' },
        ],
        extraSheet: '₹300 per extra sheet',
        delivery: 'All raw files, photos, and edited outputs provided as soft copies on Google Drive.',
        selection: 'You select 150 photos to add to the album. PDF album layout generated within 15 days for print approval.',
      },
    ],
  },
  birthday: {
    title: 'Birthday Packages',
    packages: [
      {
        name: 'Basic Package',
        price: '₹14,999',
        features: [
          { text: 'Traditional Photography' },
          { text: 'Branded Album (20 Sheet)' },
          { text: 'Complementary 10x15 Photo Frame - 2 Nos' },
        ],
        extraSheet: '₹300 per extra sheet',
        delivery: 'All raw files, photos, and edited outputs provided as soft copies on Hard Disk.',
        selection: 'You select 100 photos to add to the album. PDF layout generated within 15 days for print approval.',
      },
      {
        name: 'Premium Package',
        price: '₹24,999',
        features: [
          { text: 'Traditional Photography' },
          { text: 'Candid Photography', highlighted: true },
          { text: 'Branded Album (30 Sheet) - 1 Book' },
          { text: 'Branded Fuji Album (30 Leaf) - 1 Book' },
          { text: 'Complementary 10x15 Photo Frame - 2 Nos' },
        ],
        extraSheet: '₹300 per extra sheet',
        delivery: 'All raw files, photos, and edited outputs provided as soft copies on Hard Disk.',
        selection: 'You select 150 photos to add to the album. PDF layout generated within 15 days for print approval.',
      },
      {
        name: 'Premium Package - 2',
        price: '₹34,999',
        badge: 'Cinematic Focus',
        features: [
          { text: 'Candid Photography' },
          { text: 'Candid Videography', highlighted: true },
          { text: '3-5 Minutes Cinematic Video Film', highlighted: true },
          { text: 'Branded Fuji Album (30 Leaf)' },
          { text: 'HD Output delivered in Pendrive' },
          { text: 'Complementary 10x15 Photo Frame - 2 Nos' },
        ],
        extraSheet: '₹300 per extra sheet',
        delivery: 'All raw files, photos, and edited outputs provided as soft copies on Google Drive.',
        selection: 'You select 150 photos to add to the album. PDF layout generated within 15 days for print approval.',
      },
      {
        name: 'Platinum Package',
        price: '₹44,999',
        badge: 'Elite Full-Set',
        features: [
          { text: 'Traditional Photography' },
          { text: 'Traditional Videography' },
          { text: 'Candid Photography', highlighted: true },
          { text: 'Outdoor Photoshoot session', highlighted: true },
          { text: '5 Minutes Cinematic Video (includes 1 Min Instagram Reel)', highlighted: true },
          { text: 'Branded Fuji Album (40 Leaf)' },
          { text: 'Complementary 10x15 Photo Frame - 2 Nos' },
        ],
        extraSheet: '₹300 per extra sheet',
        delivery: 'All raw files, photos, and edited outputs provided as soft copies on Google Drive.',
        selection: 'You select 150 photos to add to the album. PDF layout generated within 15 days for print approval.',
      },
    ],
  },
};

export default function Packages() {
  const [activeTab, setActiveTab] = useState<'wedding' | 'babyShower' | 'birthday'>('wedding');

  const handleInquirePackage = (categoryName: string, packageName: string, price: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      setTimeout(() => {
        const textarea = document.getElementById('message') as HTMLTextAreaElement;
        const select = document.getElementById('service') as HTMLSelectElement;
        
        if (select) {
          // Set service value based on tab
          if (categoryName.includes('Wedding')) select.value = 'Wedding Photography';
          else if (categoryName.includes('Baby')) select.value = 'Baby Photography';
          else select.value = 'Event Photography';
          
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }

        if (textarea) {
          textarea.value = `Hi Harinee, I am interested in booking the "${packageName}" (${price}) under your "${categoryName}" catalog. Please let me know your availability!`;
          textarea.focus();
        }
      }, 800);
    }
  };

  return (
    <section id="packages" className="py-24 md:py-32 bg-black relative border-t border-white/5">
      {/* Background Accent */}
      <div className="absolute left-10 top-1/3 w-[300px] h-[300px] bg-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-light block mb-3">
            Investment Catalog
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white text-serif uppercase tracking-wide">
            Pricing Packages
          </h2>
          <div className="h-[1px] w-16 bg-gold mx-auto mt-4" />
        </div>

        <div className="flex justify-center gap-2 md:gap-4 mb-16">
          {(['wedding', 'babyShower', 'birthday'] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-2.5 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gold text-black border border-gold'
                  : 'text-white/60 border border-white/10 hover:border-gold hover:text-white'
              }`}
            >
              {packageData[key].title}
            </button>
          ))}
        </div>

        {/* Package Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="wait">
            {packageData[activeTab].packages.map((pkg, index) => (
              <motion.div
                key={`${activeTab}-${pkg.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between glassmorphism p-6 md:p-8 hover:border-gold/30 transition-all duration-500 h-full"
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <span className="absolute -top-3.5 right-6 bg-gold text-black text-[9px] font-bold uppercase tracking-[0.2em] px-3.5 py-1 border border-gold">
                    {pkg.badge}
                  </span>
                )}

                <div>
                  {/* Name & Pricing */}
                  <div className="mb-6">
                    <h3 className="text-xs uppercase tracking-[0.25em] text-white/50 mb-1">{pkg.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl text-serif text-white font-light">{pkg.price}</span>
                    </div>
                    {pkg.extraSheet && (
                      <span className="text-[10px] text-gold/80 block mt-1 tracking-wider uppercase font-light">
                        {pkg.extraSheet}
                      </span>
                    )}
                  </div>

                  <div className="h-[1px] bg-white/10 my-4" />

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8 text-xs font-light tracking-wide text-white/80">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className={feature.highlighted ? 'text-gold font-medium' : 'text-white/80'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Delivery & Selection Info Drawer Mock */}
                  <div className="bg-white/[0.02] border border-white/5 p-4 mb-6 space-y-3 text-[11px] font-light text-white/50 leading-relaxed">
                    <div className="flex gap-2">
                      <Info className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                      <p><strong>Deliverables:</strong> {pkg.delivery}</p>
                    </div>
                    <div className="flex gap-2">
                      <Info className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                      <p><strong>Process:</strong> {pkg.selection}</p>
                    </div>
                  </div>

                  {/* CTA Booking Button */}
                  <button
                    onClick={() => handleInquirePackage(packageData[activeTab].title, pkg.name, pkg.price)}
                    className="w-full py-3 border border-white/10 hover:border-gold hover:bg-gold hover:text-black text-[10px] md:text-xs uppercase tracking-[0.25em] transition-all duration-300 font-medium text-center"
                  >
                    Select Package
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* General Events Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center border-t border-white/10 pt-8"
        >
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-2">Also Specializing In</h4>
          <p className="text-xs md:text-sm text-white/60 font-light tracking-widest uppercase">
            Birthday Parties &bull; Corporate Functions &bull; Grahapravesam &bull; Send Off & Welcome Parties
          </p>
        </motion.div>
      </div>
    </section>
  );
}
